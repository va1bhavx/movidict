"use client"

import * as React from "react"
import Image from "next/image"
import HeroSectionData, {
  FEATURED_MOVIES,
  type Movie,
} from "./component/hero-section-data"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [activeMovie, setActiveMovie] = React.useState<Movie>(
    FEATURED_MOVIES[0]
  )

  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 sm:p-8 md:p-10 min-h-[520px] sm:min-h-[560px] md:min-h-[600px] shadow-2xl border border-white/10 bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.85) 100%), url('${activeMovie.backdrop || "/cover-home-image.avif"}')`,
      }}
    >
      {/* Cinematic dark vignette for text readability */}
      <div
        className="pointer-events-none absolute inset-0 bg-radial-[at_top_left] from-transparent via-black/40 to-black/85"
        aria-hidden="true"
      />

      {/* Main Movie Content */}
      <div className="relative z-10">
        <HeroSectionData movie={activeMovie} />
      </div>

      {/* Bottom Left: Trending Spotlight text & images (no extra card, no scale on hover, all 4 borders clearly visible) */}
      <div className="relative z-10 mt-8 self-start flex flex-col gap-2.5 max-w-full">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
          Trending Spotlight
        </p>

        {/* Scrollable / Responsive Poster Strip */}
        <div className="flex items-center gap-3 overflow-x-auto py-2 px-1 -mx-1 scrollbar-none snap-x touch-pan-x">
          {FEATURED_MOVIES.map((movie) => {
            const isSelected = movie.id === activeMovie.id

            return (
              <button
                key={movie.id}
                type="button"
                onClick={() => setActiveMovie(movie)}
                aria-label={`Select ${movie.title}`}
                className={cn(
                  "relative shrink-0 snap-start text-left cursor-pointer rounded-xl overflow-hidden transition-[border-color,opacity] duration-200",
                  isSelected
                    ? "border-2 border-white shadow-md shadow-black/80 opacity-100"
                    : "border-2 border-transparent opacity-60 hover:opacity-100 hover:border-white/30"
                )}
              >
                <div className="relative h-26 w-18 sm:h-28 sm:w-20 md:h-32 md:w-22 overflow-hidden rounded-[10px] bg-neutral-900">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 640px) 72px, (max-width: 768px) 80px, 88px"
                    className="object-cover"
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
