import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory cache for cover URLs
const coverCache = new Map<string, { url: string | null; timestamp: number }>();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

function cleanTitle(title: string): string {
  // Remove series notation like "#1", "#12", etc.
  return title.replace(/\s*#\d+\s*$/, '').trim();
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get('title');
  const author = searchParams.get('author');

  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 });
  }

  // Skip fanfic/online content
  if (author === 'Online' || author === 'Various' || !author) {
    return NextResponse.json({ coverUrl: null });
  }

  const cacheKey = `${title}-${author}`;

  // Check cache
  const cached = coverCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return NextResponse.json({ coverUrl: cached.url });
  }

  try {
    const cleanedTitle = cleanTitle(title);
    const searchUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(cleanedTitle)}&author=${encodeURIComponent(author)}&limit=1`;

    const response = await fetch(searchUrl);
    const data = await response.json();

    let coverUrl: string | null = null;

    if (data.docs && data.docs.length > 0) {
      const book = data.docs[0];

      // Try cover_i first (cover ID)
      if (book.cover_i) {
        coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
      }
      // Try OLID as fallback
      else if (book.key) {
        const olid = book.key.split('/').pop();
        coverUrl = `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;
      }
    }

    // Cache the result
    coverCache.set(cacheKey, { url: coverUrl, timestamp: Date.now() });

    return NextResponse.json({ coverUrl });
  } catch (error) {
    console.error('Error fetching book cover:', error);
    return NextResponse.json({ coverUrl: null });
  }
}
