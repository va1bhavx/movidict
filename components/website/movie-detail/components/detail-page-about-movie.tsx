"use client"

import { useEffect, useState } from "react"
import Modal from "@/components/component/modal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MovieDetails, MovieVideo } from "@/features/movies/movies.types"
import dayjs from "dayjs"
import { Bookmark, Share2, Star, TvMinimalPlayIcon, X } from "lucide-react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import Image from "next/image"

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

  const videoPriority: Record<string, number> = {
    Trailer: 0,
    Teaser: 1,
    Clip: 2,
    Featurette: 3,
    "Behind the Scenes": 4,
  }

  const youtubeVideos =
    movie_videos
      ?.filter((video) => video.site === "YouTube")
      .sort(
        (a, b) => (videoPriority[a.type] ?? 99) - (videoPriority[b.type] ?? 99)
      ) ?? []

  const officialTrailer =
    youtubeVideos.find((video) => video.type === "Trailer" && video.official) ??
    youtubeVideos.find((video) => video.type === "Trailer") ??
    youtubeVideos[0]

  const [featured, ...rest] = youtubeVideos
  const [selectedVideo, setSelectedVideo] = useState<MovieVideo | undefined>()
  useEffect(() => {
    if (youtubeVideos.length > 0) {
      setSelectedVideo(youtubeVideos[0])
    }
  }, [movie_videos])

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
          dialogContentClassname="sm:max-w-4xl"
          dialogTitle="More to watch"
          dialogDescription="Trailers, teasers, clips, and behind-the-scenes videos."
        >
          <div className="no-scrollbar max-h-[75vh] space-y-6 overflow-y-auto pr-1">
            {selectedVideo && (
              <section className="space-y-3">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-lg">
                  <LiteYouTubeEmbed
                    key={selectedVideo.id}
                    id={selectedVideo.key}
                    title={selectedVideo.name}
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base leading-tight font-semibold">
                      {selectedVideo.name}
                    </h3>

                    {selectedVideo.official && (
                      <Badge variant="secondary" className="text-[10px]">
                        Official
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>{selectedVideo.type}</span>

                    <span>•</span>

                    <span>{selectedVideo.size}p</span>

                    <span>•</span>

                    <span>
                      {dayjs(selectedVideo.published_at).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              </section>
            )}

            {youtubeVideos.length > 0 && (
              <section className="space-y-3">
                <div>
                  <h3 className="text-sm font-semibold">More videos</h3>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Select a trailer, teaser, or clip to watch.
                  </p>
                </div>

                <div className="no-scrollbar flex gap-4 overflow-x-auto pb-3">
                  {youtubeVideos.map((video) => {
                    const isSelected = selectedVideo?.id === video.id

                    return (
                      <button
                        key={video.id}
                        type="button"
                        onClick={() => setSelectedVideo(video)}
                        className={`group w-44 shrink-0 px-1 py-1 text-left transition-opacity ${
                          isSelected
                            ? "opacity-100"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        <div
                          className={`rounded-lg transition-all ${
                            isSelected
                              ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                              : "ring-1 ring-white/10"
                          }`}
                        >
                          <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-900">
                            <Image
                              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                              alt={video.name}
                              fill
                              className="h-full w-full object-cover transition-transform duration-300"
                            />

                            <div
                              className={`absolute inset-0 transition-colors ${
                                isSelected
                                  ? "bg-black/25"
                                  : "bg-black/35 group-hover:bg-black/20"
                              }`}
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                              <div
                                className={`flex size-9 items-center justify-center rounded-full text-white backdrop-blur-sm transition-transform ${
                                  isSelected ? "bg-primary" : "bg-black/70"
                                }`}
                              >
                                <TvMinimalPlayIcon className="size-4" />
                              </div>
                            </div>

                            <div className="absolute bottom-2 left-2">
                              <Badge
                                className={`border-0 text-[10px] text-primary ${
                                  typeColors[video.type] ?? "bg-neutral-700"
                                }`}
                              >
                                {video.type}
                              </Badge>
                            </div>

                            {video.size && (
                              <div className="absolute right-2 bottom-2">
                                <span className="rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-white/90 backdrop-blur-sm">
                                  {video.size}p
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Video information */}
                        <div className="mt-2 space-y-0.5">
                          <p className="line-clamp-1 text-xs font-medium text-foreground">
                            {video.name}
                          </p>

                          <p className="text-[11px] text-muted-foreground">
                            {video.official ? "Official" : "YouTube"}
                            {" • "}
                            {video.type}
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </section>
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
