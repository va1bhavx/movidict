import Modal from "@/components/component/modal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MovieDetails, MovieVideo } from "@/features/movies/movies.types"
import dayjs from "dayjs"
import { Bookmark, Share2, Star, TvMinimalPlayIcon, X } from "lucide-react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

export default function DetailPageAboutMovie({
  movie_details,
  movie_videos,
}: {
  movie_details: MovieDetails | undefined
  movie_videos: MovieVideo[] | undefined
}) {
  console.log(movie_videos, "movie_videos")

  const typeColors: Record<string, string> = {
    Trailer: "bg-red-600",
    Teaser: "bg-orange-600",
    Clip: "bg-blue-600",
    Featurette: "bg-purple-600",
    "Behind the Scenes": "bg-emerald-600",
  }

  const youtubeVideos =
    movie_videos
      ?.filter((v) => v.site === "YouTube")
      .sort((a, b) => {
        const priority = (t: string) =>
          t === "Trailer" ? 0 : t === "Teaser" ? 1 : 2
        return priority(a.type) - priority(b.type)
      }) ?? []

  const [featured, ...rest] = youtubeVideos

  return (
    <div className="flex flex-col gap-4 border-b border-border pb-4 sm:border-none">
      <div className="flex flex-wrap gap-2">
        {movie_details?.genres?.map((genre) => (
          <Badge key={genre.id} variant={"secondary"}>
            {genre.name}
          </Badge>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold md:text-3xl">
          {movie_details?.original_title}
        </h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          {movie_details?.tagline}
        </p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-semibold">
            <Star className="size-3 fill-amber-400 text-amber-400" />

            <span>{movie_details?.vote_average?.toFixed(1)}</span>

            <span className="text-[10px] text-amber-300/70">/ 10</span>
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground sm:text-sm">
              {dayjs(movie_details?.release_date).format("MMMM DD, YYYY")}
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="leading-normal text-muted-foreground">
          {movie_details?.overview}
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Modal
          dialogTriggerRender={
            <Button>
              <TvMinimalPlayIcon />
              Watch trailer
            </Button>
          }
          dialogContentClassname="sm:max-w-2xl"
          dialogTitle="More to watch"
          dialogDescription="Trailers, clips, and hand-picked picks similar to this movie."
        >
          {/* ← This wrapper gets the fixed height + scroll */}
          <div className="no-scrollbar flex max-h-[60vh] flex-col gap-4 overflow-y-auto pr-1">
            {/* featured video */}
            {featured && (
              <div className="group relative overflow-hidden rounded-xl ring-1 ring-white/10">
                <LiteYouTubeEmbed
                  id={featured.key}
                  title={featured.name}
                  // className="w-full"
                />
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <div className="flex items-center gap-2">
                    <Badge
                      className={typeColors[featured.type] ?? "bg-neutral-700"}
                    >
                      {featured.type}
                    </Badge>
                    <span className="line-clamp-1 text-sm font-medium text-white/90">
                      {featured.name}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {rest.map((video) => (
                  <div
                    key={video.id}
                    className="group relative overflow-hidden rounded-lg ring-1 ring-white/10 transition-shadow hover:ring-white/25"
                  >
                    <LiteYouTubeEmbed id={video.key} title={video.name} />
                    <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <Badge
                        variant="outline"
                        className={`text-[10px] ${typeColors[video.type] ?? "bg-neutral-700"} border-0`}
                      >
                        {video.type}
                      </Badge>
                      <p className="mt-1 truncate text-xs text-white/80">
                        {video.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>

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
