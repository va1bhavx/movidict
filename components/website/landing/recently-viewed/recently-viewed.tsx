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
import compare from "@/utils/handle-compare"
import dayjs from "dayjs"

import { Star, Trash, TrianglesCenterlineDashedVertical } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export default function RecentlyViewed({
  movies,
}: {
  movies: RecentlyViewedMovies[]
}) {
  const { compareIds, handleCompare } = compare()
  const [imageError, setImageError] = useState<boolean>(false)

  return (
    <section className="w-full">
      <div className="flex items-center gap-3">
        <h2 className="shrink-0 text-xl font-medium tracking-tight">
          Recently Viewed
        </h2>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <div className="min-w-0 flex-1 scrollbar-none overflow-x-auto"></div>

          <Button variant="destructive" size="icon-sm">
            <Trash className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mx-1 flex touch-pan-x snap-x scrollbar-none items-center gap-3 overflow-x-auto px-1 py-2">
        {movies?.map((movie) => (
          <Link href={`/${movie.type}/${movie.id}`} className="w-full">
            <button
              key={movie.id}
              type="button"
              aria-label={movie.title}
              className={
                "group relative w-full shrink-0 cursor-pointer snap-start overflow-hidden rounded-lg text-left opacity-60 ring-2 ring-transparent transition-[border-color,opacity,transform] duration-200 hover:border-white/30 hover:opacity-100"
              }
            >
              <div className="relative aspect-2/3 max-w-full min-w-38 overflow-hidden rounded-lg bg-neutral-900 sm:w-44 md:w-56 xl:w-64">
                {!imageError && (movie.poster_path || movie.backdrop_path) ? (
                  <Image
                    src={`${TMDB_IMAGE_URL}${movie.poster_path ?? movie.backdrop_path}`}
                    alt={movie.title}
                    fill
                    // onError={() => setImageError(true)}
                    className="object-cover transition-transform duration-300"
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
                            compareIds.includes(movie.id)
                              ? "text-emerald-400 ring-emerald-400"
                              : "ring-chart-1"
                          }
                          onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            handleCompare(movie.id)
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
                      <p className="max-w-34 truncate text-xs font-medium text-muted-foreground sm:text-sm">
                        {movie.title}
                      </p>
                    }
                  />
                  <TooltipContent>{movie.title}</TooltipContent>
                </Tooltip>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span>
                    {" "}
                    {dayjs(movie?.released_date).format("DD/MM/YYYY")}
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="size-3 fill-amber-400" />
                    {movie?.vote_average}
                  </span>
                </div>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </section>
  )
}
