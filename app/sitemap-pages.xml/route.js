import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Pages to include in the pages sitemap
const staticPages = ['/', '/blogs', '/contactme'];

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = staticPages
    .map(
      (p) => `  <url>\n    <loc>${SITE_URL.replace(/\/$/, '')}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  return new NextResponse(xml, { status: 200, headers: { 'Content-Type': 'application/xml' } });
}
