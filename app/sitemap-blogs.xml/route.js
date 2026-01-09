import { NextResponse } from 'next/server';
import portfolio from '@/public/data/portfolio';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/\-+/g, '-')
    .replace(/^\-+|\-+$/g, '');
}

function parseDateString(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return null;
  // Expect formats like "29/FEB/2025 - ..." or "29/FEB/2025"
  const m = dateStr.match(/(\d{1,2})\/([A-Za-z]{3})\/(\d{4})/);
  if (!m) return null;
  const day = parseInt(m[1], 10);
  const monAbbr = m[2].toUpperCase();
  const year = parseInt(m[3], 10);
  const months = {
    JAN: 0,
    FEB: 1,
    MAR: 2,
    APR: 3,
    MAY: 4,
    JUN: 5,
    JUL: 6,
    AUG: 7,
    SEP: 8,
    OCT: 9,
    NOV: 10,
    DEC: 11,
  };
  const mIdx = months[monAbbr];
  if (mIdx === undefined) return null;
  const d = new Date(Date.UTC(year, mIdx, day));
  return d.toISOString().split('T')[0];
}

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const blogs = portfolio && Array.isArray(portfolio.blogs) ? portfolio.blogs : [];

  const urlEntries = blogs
    .map((b) => {
      const slug = b.topic ? slugify(b.topic) : b.id;
      const lastmod = parseDateString(b.date) || today;
      return `  <url>\n    <loc>${SITE_URL.replace(/\/$/, '')}/blogs/${b.id}-${slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  return new NextResponse(xml, { status: 200, headers: { 'Content-Type': 'application/xml' } });
}
