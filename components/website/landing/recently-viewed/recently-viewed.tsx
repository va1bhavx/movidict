"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TMDB_IMAGE_URL } from "@/constants/general"
import { RecentlyViewedMovies } from "@/features/movies/movies.types"
import { getLocalStorageItem, removeLocalStorageItem } from "@/lib/localstorage"
import compare from "@/utils/handle-compare"
import dayjs from "dayjs"
import { Star, Trash, TrianglesCenterlineDashedVertical } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function RecentlyViewedCard({
  movie,
  isComparing,
  onCompare,
}: {
  movie: RecentlyViewedMovies
  isComparing: boolean
  onCompare: () => void
}) {
  const [imageError, setImageError] = useState<boolean>(false)
  const imageSrc = movie.poster_path ?? movie.backdrop_path
  const releaseDate =
    movie.released_date ||
    (movie as unknown as { release_date?: string }).release_date
  const type = movie.type ?? "movie"

  return (
    <Link
      href={`/${type}/${movie.id}`}
      className="w-38 shrink-0 sm:w-44 md:w-56 xl:w-64"
    >
      <button
        type="button"
        aria-label={movie.title}
        className="group relative w-full cursor-pointer snap-start overflow-hidden rounded-lg text-left opacity-60 ring-2 ring-transparent transition-[border-color,opacity,transform] duration-200 hover:border-white/30 hover:opacity-100"
      >
        <div className="relative aspect-2/3 w-full overflow-hidden rounded-lg bg-neutral-900">
          {!imageError && imageSrc ? (
            <Image
              src={`${TMDB_IMAGE_URL}${imageSrc}`}
              alt={movie.title}
              fill
              onError={() => setImageError(true)}
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 640px) 152px, (max-width: 768px) 176px, (max-width: 1280px) 224px, 256px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-800 to-gray-900 p-3">
              <span className="line-clamp-3 text-center text-sm font-medium text-gray-400">
                {movie.title}
              </span>
            </div>
          )}

          <div className="absolute top-2 right-2">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Badge
                    variant="secondary"
                    className={
                      isComparing
                        ? "text-emerald-400 ring-emerald-400"
                        : "ring-chart-1"
                    }
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      onCompare()
                    }}
                  >
                    <TrianglesCenterlineDashedVertical />
                  </Badge>
                }
              />
              <TooltipContent>Compare</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="mt-2 px-1">
          <Tooltip>
            <TooltipTrigger
              render={
                <p className="w-full truncate text-xs font-medium text-muted-foreground sm:text-sm">
                  {movie.title}
                </p>
              }
            />
            <TooltipContent>{movie.title}</TooltipContent>
          </Tooltip>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span>
              {releaseDate ? dayjs(releaseDate).format("DD/MM/YYYY") : ""}
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="size-3 fill-amber-400 text-amber-400" />
              <span>
                {typeof movie.vote_average === "number"
                  ? movie.vote_average.toFixed(1)
                  : (movie.vote_average ?? "N/A")}
              </span>
            </span>
          </div>
        </div>
      </button>
    </Link>
  )
}

export default function RecentlyViewed({
  movies,
}: {
  movies: RecentlyViewedMovies[]
}) {
  const { compareIds, handleCompare } = compare()
  const [items, setItems] = useState<RecentlyViewedMovies[]>(movies ?? [])
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
    const stored = getLocalStorageItem("user_recently_viewed")
    if (stored && Array.isArray(stored)) {
      setItems(stored)
    } else if (movies && Array.isArray(movies)) {
      setItems(movies)
    }
  }, [movies])

  const handleClear = () => {
    removeLocalStorageItem("user_recently_viewed")
    setItems([])
  }

  // If not mounted yet and no movies prop, or if items list is empty, don't show the section
  if (mounted && items.length === 0) {
    return null
  }

  if (!mounted && (!movies || movies.length === 0)) {
    return null
  }

  const displayList = mounted ? items : (movies ?? [])

  return (
    <section className="w-full">
      <div className="flex items-center justify-between gap-3">
        <h2 className="shrink-0 text-xl font-medium tracking-tight">
          Recently Viewed
        </h2>

        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="secondary"
                  size="icon"
                  className="size-9 shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                  onClick={handleClear}
                >
                  <Trash className="size-4" />
                </Button>
              }
            />
            <TooltipContent>Clear recently viewed</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="mx-1 flex touch-pan-x snap-x scrollbar-none items-center gap-3 overflow-x-auto px-1 py-2">
        {displayList.map((movie) => (
          <RecentlyViewedCard
            key={`${movie.type ?? "movie"}-${movie.id}`}
            movie={movie}
            isComparing={compareIds.includes(movie.id)}
            onCompare={() => handleCompare(movie.id)}
          />
        ))}
      </div>
    </section>
  )
}
