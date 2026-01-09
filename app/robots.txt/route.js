const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  return new Response(content, { status: 200, headers: { 'Content-Type': 'text/plain' } });
}
