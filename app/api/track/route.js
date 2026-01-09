// Use the global fetch available in Node/Next.js (no node-fetch import required)
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID; // measurement id (G-...)
const API_SECRET = process.env.GA_MEASUREMENT_PROTOCOL_API_SECRET; // server-side secret
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function POST(req) {
  if (!MEASUREMENT_ID || !API_SECRET) {
    return new Response(JSON.stringify({ error: 'GA measurement id or API secret not configured' }), { status: 400 });
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const { path, client_id } = body || {};
  const clientId = client_id || `server-${Math.random().toString(36).slice(2, 12)}`;
  const pagePath = path || '/';

  const payload = {
    client_id: clientId,
    events: [
      {
        name: 'page_view',
        params: {
          page_location: `${SITE_URL.replace(/\/$/, '')}${pagePath}`,
          page_path: pagePath,
          page_title: '',
        },
      },
    ],
  };

  try {
    const res = await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const t = await res.text();
      return new Response(JSON.stringify({ error: 'GA MP failed', details: t }), { status: 500 });
    }

    return new Response(null, { status: 204 });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Request failed', details: String(e) }), { status: 500 });
  }
}
