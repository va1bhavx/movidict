import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TMDB_IMAGE_URL } from "@/constants/general"
import { MovieCast } from "@/features/movies/movies.types"
import Image from "next/image"
import { useState } from "react"

export default function DetailPageCast({ casts }: { casts: MovieCast[] }) {
  const [imageError, setImageError] = useState<boolean>(false)
  return (
    <section className="flex w-full flex-col gap-4">
      <h1 className="text-2xl font-semibold sm:text-xl">Cast</h1>

      <div className="mx-1 flex touch-pan-x snap-x scrollbar-none items-center gap-6 overflow-x-auto py-2">
        {casts?.map((cast, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center gap-3 order-${cast.order}`}
          >
            {/* Profile */}
            <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-neutral-900 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
              {!imageError && cast.profile_path ? (
                <Image
                  src={`${TMDB_IMAGE_URL}${cast.profile_path}`}
                  alt={`Profile picture of ${cast.original_name}`}
                  fill
                  onError={() => setImageError(true)}
                  className="object-cover transition-transform duration-300"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-800 to-gray-900 p-3">
                  <span className="line-clamp-3 text-center text-sm font-medium text-gray-400">
                    {cast.original_name}
                  </span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="text-center">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <h3 className="max-w-22 truncate text-xs font-medium text-muted-foreground sm:text-sm">
                      {cast.original_name}
                    </h3>
                  }
                />
                <TooltipContent>{cast.original_name}</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <p className="max-w-20 truncate text-xs font-medium text-muted-foreground sm:text-sm">
                      {cast.character}
                    </p>
                  }
                />
                <TooltipContent>{cast.character}</TooltipContent>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
