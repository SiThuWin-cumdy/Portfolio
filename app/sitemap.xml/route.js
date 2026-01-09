import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const INCLUDE_BLOGS = process.env.NEXT_PUBLIC_INCLUDE_BLOG_SITEMAP === 'true';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const sitemaps = [
    {
      loc: `${SITE_URL.replace(/\/$/, '')}/sitemap-pages.xml`,
      lastmod: today,
    },
  ];

  if (INCLUDE_BLOGS) {
    sitemaps.push({
      loc: `${SITE_URL.replace(/\/$/, '')}/sitemap-blogs.xml`,
      lastmod: today,
    });
  }

  const sitemapEntries = sitemaps
    .map((s) => `  <sitemap>\n    <loc>${s.loc}</loc>\n    <lastmod>${s.lastmod}</lastmod>\n  </sitemap>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</sitemapindex>`;

  return new NextResponse(xml, { status: 200, headers: { 'Content-Type': 'application/xml' } });
}
