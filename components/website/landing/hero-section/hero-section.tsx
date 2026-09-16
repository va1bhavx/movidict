"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { FEATURED_MOVIES } from "@/lib/data/mock-movie-data"
import { Movie } from "@/types/movies.types"
import { useState } from "react"
import HeroSectionData from "./component/hero-section-data"

export default function HeroSection() {
  const [activeMovie, setActiveMovie] = useState<Movie>(FEATURED_MOVIES[0])

  return (
    <div
      className="relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-cover bg-center p-5 shadow-2xl transition-all duration-700 sm:min-h-[560px] sm:p-8 md:min-h-[630px] md:p-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.85) 100%), url('${activeMovie.backdrop || "/cover-home-image.avif"}')`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-radial-[at_top_left] from-transparent via-black/40 to-black/85"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <HeroSectionData movie={activeMovie} />
      </div>

      <div className="relative z-10 mt-8 flex max-w-full flex-col gap-2.5 self-start">
        <p className="text-xs font-semibold tracking-wider text-white/90 uppercase">
          Trending Spotlight
        </p>

        <div className="-mx-1 flex touch-pan-x snap-x scrollbar-none items-center gap-3 overflow-x-auto px-1 py-2">
          {FEATURED_MOVIES.slice(0, 9).map((movie) => {
            const isSelected = movie.id === activeMovie.id

            return (
              <button
                key={movie.id}
                type="button"
                onClick={() => setActiveMovie(movie)}
                aria-label={`Select ${movie.title}`}
                className={cn(
                  "relative shrink-0 cursor-pointer snap-start overflow-hidden rounded-xl text-left transition-[border-color,opacity] duration-200",
                  isSelected
                    ? "opacity-100 shadow-md ring-2 shadow-black/80 ring-chart-2"
                    : "opacity-60 ring-2 ring-transparent hover:border-white/30 hover:opacity-100"
                )}
              >
                <div className="relative h-26 w-18 overflow-hidden rounded-[10px] bg-neutral-900 sm:h-28 sm:w-20 md:h-32 md:w-22">
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
