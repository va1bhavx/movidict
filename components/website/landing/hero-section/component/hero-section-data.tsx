"use client"

import { Button } from "@/components/ui/button"
import {
  Clock1Icon,
  Dot,
  Heart,
  Play,
  Star,
  TextSearchIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Movie } from "@/types/movies.types"
import { FEATURED_MOVIES } from "@/lib/data/mock-movie-data"

interface HeroSectionDataProps {
  movie?: Movie
}

export default function HeroSectionData({
  movie = FEATURED_MOVIES[0],
}: HeroSectionDataProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="flex flex-col justify-center gap-4 sm:gap-6">
      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300 sm:text-sm">
        <div className="flex flex-wrap items-center gap-1.5">
          {movie.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-white/90 uppercase backdrop-blur-md"
            >
              {genre}
            </span>
          ))}
        </div>

        <Dot className="hidden text-white/50 sm:inline" />

        {/* Release Year */}
        <span className="font-medium text-white/80">{movie.year}</span>

        <Dot className="text-white/50" />

        {/* Runtime */}
        <span className="flex items-center gap-1 text-white/80">
          <Clock1Icon className="size-3.5" />
          {movie.duration}
        </span>

        <Dot className="hidden text-white/50 sm:inline" />

        {/* Rating Badge */}
        <div className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-300">
          <Star className="size-3 fill-amber-400 text-amber-400" />
          <span>{movie.rating}</span>
          <span className="text-[10px] text-amber-300/70">
            ({movie.reviews})
          </span>
        </div>
      </div>

      {/* Main Title, Tagline & Synopsis */}
      <div className="flex max-w-2xl flex-col gap-2.5">
        <h1 className="text-2xl font-black tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
          {movie.title}
        </h1>

        {movie.tagline && (
          <p className="text-xs font-medium text-amber-300/90 italic sm:text-sm">
            "{movie.tagline}"
          </p>
        )}

        <p className="line-clamp-3 max-w-xl text-xs leading-relaxed text-pretty text-neutral-200 sm:line-clamp-4 sm:text-sm">
          {movie.description}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button
            size="default"
            className="flex items-center gap-2 rounded-full px-5 font-semibold shadow-lg transition-transform active:scale-95"
          >
            <Play className="size-4 fill-current" /> Watch Trailer
          </Button>

          <Button
            variant="secondary"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 text-white backdrop-blur-md transition-transform hover:bg-white/25 active:scale-95"
          >
            <TextSearchIcon className="size-4" /> Review
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsLiked(!isLiked)}
            aria-label={isLiked ? "Remove from watchlist" : "Add to watchlist"}
            className={cn(
              "rounded-full border border-white/20 backdrop-blur-md transition-all active:scale-90",
              isLiked
                ? "border-rose-500/40 bg-rose-500/20 text-rose-400"
                : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            <Heart
              className={cn(
                "size-4 transition-transform",
                isLiked && "scale-110 fill-current"
              )}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
