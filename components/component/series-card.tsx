import Image from "next/image"
import { Badge } from "../ui/badge"
import Link from "next/link"
import { Star, TrianglesCenterlineDashedVertical } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { TMDB_IMAGE_URL } from "@/constants/general"
import dayjs from "dayjs"
import { Series } from "@/features/series/series.types"
import { useState } from "react"

export default function SeriesCard({
  series,
  type = "movie",
  isComparing,
  onCompare,
}: {
  series: Series
  type?: string
  isComparing: boolean
  onCompare: () => void
}) {
  const [imageError, setImageError] = useState<boolean>(false)

  return (
    <Link href={`/${type}/${series.id}`} className="w-full">
      <button
        key={series.id}
        type="button"
        aria-label={series.original_name}
        className={
          "group relative w-full shrink-0 cursor-pointer snap-start overflow-hidden rounded-lg text-left opacity-60 ring-2 ring-transparent transition-[border-color,opacity,transform] duration-200 hover:border-white/30 hover:opacity-100"
        }
      >
        <div className="relative aspect-2/3 max-w-full min-w-38 overflow-hidden rounded-lg bg-neutral-900 sm:w-44 md:w-56 xl:w-64">
          {!imageError && (series.poster_path || series.backdrop_path) ? (
            <Image
              src={`${TMDB_IMAGE_URL}${series.poster_path ?? series.backdrop_path}`}
              alt={series.original_name}
              fill
              onError={() => setImageError(true)}
              className="object-cover transition-transform duration-300"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-3">
              <span className="line-clamp-3 text-center text-sm font-medium text-gray-400">
                {series.original_name}
              </span>
            </div>
          )}

          {/*<div className="absolute top-2 left-2">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Badge
                    variant={"secondary"}

                    className="border-none! text-[10px] ring ring-chart-1"
                  >
                    {movie.duration}
                  </Badge>
                }
              />
              <TooltipContent>Movie Duration</TooltipContent>
            </Tooltip>
          </div>*/}

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
                <p className="max-w-30 truncate text-sm font-medium text-muted-foreground">
                  {series.original_name}
                </p>
              }
            />
            <TooltipContent>{series.original_name}</TooltipContent>
          </Tooltip>

          <div className="flex items-center justify-between">
            <span> {dayjs(series?.first_air_date).format("DD/MM/YYYY")}</span>
            <span className="flex items-center gap-2">
              <Star className="size-3 fill-amber-400" />
              {series?.vote_average}
            </span>
          </div>
        </div>
      </button>
    </Link>
  )
}
