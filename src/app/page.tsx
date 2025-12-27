"use client";

import { books2025, calculateStats, getGenreIcon } from "@/data/books";
import { useState } from "react";
import BookCoverImage from "@/components/BookCoverImage";

export default function Home() {
  const stats = calculateStats(books2025);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 0: Intro
    {
      bg: "from-purple-600 via-pink-500 to-orange-400",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl opacity-80 mb-4">Your</p>
          <h1 className="text-6xl md:text-8xl font-black mb-4">2025</h1>
          <h2 className="text-4xl md:text-6xl font-bold">Reading Wrapped</h2>
          <p className="mt-8 text-lg opacity-70">Tap to continue →</p>
        </div>
      ),
    },
    // Slide 1: Total Books - THE BIG NUMBER
    {
      bg: "from-emerald-500 via-teal-500 to-cyan-500",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl opacity-80 mb-2">This year, you read</p>
          <h1 className="text-8xl md:text-[10rem] font-black">{stats.totalBooks}</h1>
          <h2 className="text-3xl md:text-4xl font-bold">books</h2>
          <p className="mt-4 text-lg opacity-70">That&apos;s more than most people read in a decade</p>
        </div>
      ),
    },
    // Slide 2: Favorites Count
    {
      bg: "from-yellow-500 via-amber-500 to-orange-500",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl opacity-80 mb-2">You marked</p>
          <h1 className="text-8xl md:text-9xl font-black">{stats.favoritesCount}</h1>
          <h2 className="text-3xl md:text-4xl font-bold">favorites</h2>
          <div className="text-5xl mt-4">❤️</div>
          <p className="mt-4 text-lg opacity-70">
            The books that truly hit different
          </p>
        </div>
      ),
    },
    // Slide 3: Top Genre with Icons
    {
      bg: "from-rose-500 via-pink-500 to-fuchsia-500",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl opacity-80 mb-2">Your top genre was</p>
          <h1 className="text-4xl md:text-6xl font-black mb-2">
            <span className="mr-3">{getGenreIcon(stats.topGenre)}</span>
            {stats.topGenre}
          </h1>
          <p className="text-2xl opacity-90">{stats.genreCounts[stats.topGenre]} books</p>
          <div className="mt-6 space-y-2 text-left">
            {stats.topGenres.slice(0, 5).map(([genre, count], i) => (
              <div key={genre} className="flex items-center gap-3">
                <span className="text-lg opacity-70">#{i + 1}</span>
                <span className="text-xl">{getGenreIcon(genre)}</span>
                <span className="font-medium">{genre}</span>
                <span className="opacity-70">({count})</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 4: Top Author
    {
      bg: "from-blue-600 via-indigo-500 to-purple-600",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl opacity-80 mb-2">Your most-read author</p>
          <h1 className="text-3xl md:text-5xl font-black mb-4">{stats.topAuthor}</h1>
          <p className="text-2xl opacity-90">{stats.authorCounts[stats.topAuthor]} books</p>
          <div className="mt-6 space-y-2 text-left">
            {stats.topAuthors.slice(0, 5).map(([author, count], i) => (
              <div key={author} className="flex items-center gap-3">
                <span className="text-lg opacity-70">#{i + 1}</span>
                <span className="font-medium">{author}</span>
                <span className="opacity-70">({count})</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 5: DNF and Rereads
    {
      bg: "from-slate-700 via-slate-600 to-slate-800",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl opacity-80 mb-6">Your reading habits</p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h1 className="text-6xl font-black">{stats.dnfCount}</h1>
              <p className="text-lg opacity-70">DNFs</p>
              <p className="text-sm opacity-50">Life&apos;s too short for bad books</p>
            </div>
            <div>
              <h1 className="text-6xl font-black">{stats.rereadCount}</h1>
              <p className="text-lg opacity-70">Rereads</p>
              <p className="text-sm opacity-50">The ones worth revisiting</p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-6xl font-black">{stats.fanficCount}</h1>
            <p className="text-lg opacity-70">Fanfics ✨</p>
            <p className="text-sm opacity-50">Including a 650k word monster</p>
          </div>
        </div>
      ),
    },
    // Slide 6: Favorites - Fiction
    {
      bg: "from-red-600 via-rose-500 to-pink-500",
      content: (
        <div className="flex flex-col items-center justify-center text-center overflow-y-auto max-h-[85vh]">
          <p className="text-xl opacity-80 mb-4">Your favorite fiction</p>
          <div className="space-y-3 text-left max-w-md">
            {stats.favorites.filter(b => b.genre !== "Non-Fiction").slice(0, 10).map((book, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 backdrop-blur-sm flex gap-3 items-center">
                <BookCoverImage
                  title={book.title}
                  author={book.author}
                  fallbackIcon={getGenreIcon(book.genre)}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-bold truncate">{book.title}</p>
                  <p className="text-sm opacity-70">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 7: Favorites - Non-Fiction
    {
      bg: "from-cyan-600 via-teal-500 to-emerald-500",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl opacity-80 mb-4">Your favorite non-fiction</p>
          <div className="space-y-3 text-left max-w-md">
            {stats.favorites.filter(b => b.genre === "Non-Fiction").map((book, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 backdrop-blur-sm flex gap-3 items-center">
                <BookCoverImage
                  title={book.title}
                  author={book.author}
                  fallbackIcon="📚"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-bold truncate">{book.title}</p>
                  <p className="text-sm opacity-70">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 8: Series Conquered (Dynamic)
    {
      bg: "from-amber-600 via-orange-500 to-red-500",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl opacity-80 mb-4">📚 Series conquered</p>
          <div className="space-y-3 text-left max-w-md">
            {stats.topSeries.slice(0, 6).map((series, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <p className="font-bold">{series.name}</p>
                <p className="text-sm opacity-70">{series.count} books • {series.author}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 9: Reading Achievements
    {
      bg: "from-fuchsia-600 via-pink-500 to-rose-500",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xl opacity-80 mb-6">🏆 Achievement Unlocked</p>
          <div className="space-y-4 text-left max-w-md">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <p className="font-bold">⚡ Speed Demon</p>
              <p className="text-sm opacity-70">All For The Game: 3 books in 20 hours</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <p className="font-bold">📖 Marathon Reader</p>
              <p className="text-sm opacity-70">Kill Your Darlings: 300k words in &lt;24 hours</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <p className="font-bold">😭 Emotional Damage</p>
              <p className="text-sm opacity-70">Atmosphere, My Sister&apos;s Keeper, My Friends</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <p className="font-bold">📜 Classic Conqueror</p>
              <p className="text-sm opacity-70">Count of Monte Cristo, Rebecca, P&P</p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 10: Final Stats Summary
    {
      bg: "from-slate-800 via-slate-700 to-slate-900",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-8">2025 by the numbers</h1>
          <div className="grid grid-cols-2 gap-6 text-left max-w-md">
            <div>
              <p className="text-4xl font-black">{stats.totalBooks}</p>
              <p className="text-sm opacity-70">Books finished</p>
            </div>
            <div>
              <p className="text-4xl font-black">{stats.favoritesCount}</p>
              <p className="text-sm opacity-70">❤️ Favorites</p>
            </div>
            <div>
              <p className="text-4xl font-black">{Object.keys(stats.genreCounts).length}</p>
              <p className="text-sm opacity-70">Genres explored</p>
            </div>
            <div>
              <p className="text-4xl font-black">{stats.topSeries.length}</p>
              <p className="text-sm opacity-70">Series conquered</p>
            </div>
            <div>
              <p className="text-4xl font-black">{stats.dnfCount}</p>
              <p className="text-sm opacity-70">DNFs (no shame)</p>
            </div>
            <div>
              <p className="text-4xl font-black">{stats.fanficCount}</p>
              <p className="text-sm opacity-70">✨ Fanfics</p>
            </div>
          </div>
          <p className="mt-8 text-lg opacity-70">Here&apos;s to another year of reading 📚</p>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${slides[currentSlide].bg} text-white transition-all duration-500 ease-in-out cursor-pointer`}
      onClick={nextSlide}
    >
      {/* Progress dots */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentSlide ? "bg-white w-4" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center p-8">
        {slides[currentSlide].content}
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {currentSlide > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full backdrop-blur-sm transition"
          >
            ← Back
          </button>
        )}
        {currentSlide < slides.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full backdrop-blur-sm transition"
          >
            Next →
          </button>
        )}
      </div>

      {/* Signature */}
      <p className="fixed bottom-4 right-4 text-xs opacity-50">
        Robert&apos;s Reading Wrapped 2025
      </p>
    </div>
  );
}
