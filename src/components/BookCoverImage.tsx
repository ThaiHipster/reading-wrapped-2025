"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BookCoverImageProps {
  title: string;
  author: string;
  fallbackIcon: string;
  className?: string;
}

export default function BookCoverImage({
  title,
  author,
  fallbackIcon,
  className = "",
}: BookCoverImageProps) {
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Skip fetching for fanfic/online content
    if (author === "Online" || author === "Various") {
      setIsLoading(false);
      return;
    }

    const fetchCover = async () => {
      try {
        const response = await fetch(
          `/api/book-cover?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}`
        );
        const data = await response.json();
        setCoverUrl(data.coverUrl);
      } catch (error) {
        console.error("Error fetching cover:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCover();
  }, [title, author]);

  // Show loading skeleton
  if (isLoading) {
    return (
      <div
        className={`bg-white/20 animate-pulse rounded ${className}`}
        style={{ width: 48, height: 72 }}
      />
    );
  }

  // Show cover image if available
  if (coverUrl && !hasError) {
    return (
      <Image
        src={coverUrl}
        alt={`Cover of ${title}`}
        width={48}
        height={72}
        className={`rounded shadow-md object-cover ${className}`}
        onError={() => setHasError(true)}
      />
    );
  }

  // Fallback to genre icon
  return <span className="text-3xl">{fallbackIcon}</span>;
}
