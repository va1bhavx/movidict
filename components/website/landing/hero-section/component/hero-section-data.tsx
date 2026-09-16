"use client"

import * as React from "react"
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

export interface Movie {
  id: number
  title: string
  tagline: string
  year: string
  duration: string
  rating: string
  reviews: string
  genres: string[]
  description: string
  image: string
  backdrop?: string
}

export const FEATURED_MOVIES: Movie[] = [
  {
    id: 1,
    title: "The Batman",
    tagline: "Unmask the truth.",
    year: "2022",
    duration: "2h 56m",
    rating: "7.9",
    reviews: "320K",
    genres: ["Action", "Crime", "Mystery"],
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    image: "/batman-cover-home-image.webp",
    backdrop: "/cover-home-image.avif",
  },
  {
    id: 2,
    title: "Interstellar",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    year: "2014",
    duration: "2h 49m",
    rating: "8.7",
    reviews: "1.9M",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
    image: "/interstellar-poster.webp",
    backdrop: "/interstellar-backdrop.webp",
  },
  {
    id: 3,
    title: "Dune: Part Two",
    tagline: "Long live the fighters.",
    year: "2024",
    duration: "2h 46m",
    rating: "8.5",
    reviews: "450K",
    genres: ["Sci-Fi", "Adventure", "Action"],
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family, facing a choice between love and the fate of the universe.",
    image: "/dune-poster.webp",
    backdrop: "/dune-backdrop.webp",
  },
  {
    id: 4,
    title: "Oppenheimer",
    tagline: "The world forever changes.",
    year: "2023",
    duration: "3h 00m",
    rating: "8.9",
    reviews: "720K",
    genres: ["Biography", "Drama", "History"],
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, confronting the moral implications of his creation.",
    image: "/oppenheimer-poster.webp",
    backdrop: "/oppenheimer-backdrop.webp",
  },
]

interface HeroSectionDataProps {
  movie?: Movie
}

export default function HeroSectionData({
  movie = FEATURED_MOVIES[0],
}: HeroSectionDataProps) {
  const [isLiked, setIsLiked] = React.useState(false)

  return (
    <div className="flex flex-col justify-center gap-4 sm:gap-6">
      {/* Meta tags & rating bar */}
      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-300">
        {/* Genre Tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          {movie.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase text-white/90 backdrop-blur-md border border-white/15"
            >
              {genre}
            </span>
          ))}
        </div>

        <Dot className="hidden sm:inline text-white/50" />

        {/* Release Year */}
        <span className="font-medium text-white/80">{movie.year}</span>

        <Dot className="text-white/50" />

        {/* Runtime */}
        <span className="flex items-center gap-1 text-white/80">
          <Clock1Icon className="size-3.5" />
          {movie.duration}
        </span>

        <Dot className="hidden sm:inline text-white/50" />

        {/* Rating Badge */}
        <div className="flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-300 border border-amber-500/30">
          <Star className="size-3 fill-amber-400 text-amber-400" />
          <span>{movie.rating}</span>
          <span className="text-[10px] text-amber-300/70">
            ({movie.reviews})
          </span>
        </div>
      </div>

      {/* Main Title, Tagline & Synopsis */}
      <div className="flex max-w-2xl flex-col gap-2.5">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
          {movie.title}
        </h1>

        {movie.tagline && (
          <p className="text-xs sm:text-sm font-medium text-amber-300/90 italic">
            "{movie.tagline}"
          </p>
        )}

        <p className="text-xs sm:text-sm leading-relaxed text-neutral-200 text-pretty line-clamp-3 sm:line-clamp-4 max-w-xl">
          {movie.description}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button
            size="default"
            className="flex items-center gap-2 rounded-full px-5 font-semibold shadow-lg active:scale-95 transition-transform"
          >
            <Play className="size-4 fill-current" /> Watch Trailer
          </Button>

          <Button
            variant="secondary"
            className="flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md px-4 active:scale-95 transition-transform"
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
                ? "bg-rose-500/20 text-rose-400 border-rose-500/40"
                : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            <Heart
              className={cn("size-4 transition-transform", isLiked && "fill-current scale-110")}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
