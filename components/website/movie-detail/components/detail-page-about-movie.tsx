import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MovieDetails } from "@/features/movies/movies.types"
import dayjs from "dayjs"
import { Bookmark, Share2, Star, TvMinimalPlayIcon } from "lucide-react"

export default function DetailPageAboutMovie({
  movie_details,
}: {
  movie_details: MovieDetails
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-4 sm:border-none">
      <div className="flex flex-wrap gap-2">
        {movie_details.genres.map((genre) => (
          <Badge key={genre.id} variant={"secondary"}>
            {genre.name}
          </Badge>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold md:text-3xl">
          {movie_details.original_title}
        </h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          {movie_details.tagline}
        </p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-semibold">
            <Star className="size-3 fill-amber-400 text-amber-400" />

            <span>{movie_details?.vote_average?.toFixed(1)}</span>

            <span className="text-[10px] text-amber-300/70">/ 10</span>
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground sm:text-sm">
              {dayjs(movie_details.release_date).format("MMMM DD, YYYY")}
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="leading-normal text-muted-foreground">
          {movie_details.overview}
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button>
          <TvMinimalPlayIcon />
          Watch trailer
        </Button>
        <Button variant={"outline"}>
          <Bookmark />
          Sign in to save
        </Button>
        <Button variant={"outline"}>
          <Share2 />
        </Button>
      </div>
    </div>
  )
}
