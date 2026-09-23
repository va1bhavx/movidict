"use client"

import DetailPageCast from "./components/detail-page-cast"
import DetailPageContent from "./components/detail-page-content"
import DetailPageExtraInfo from "./components/detail-page-extra-info"
import DetailPageHeader from "./components/detail-page-header"
import {
  useGetMovieCredits,
  useGetMovieDetails,
  useGetMovieImages,
  useGetMovieVideos,
} from "@/features/movies/movies.hooks"

import { DetailPageSkeleton } from "./components/skeletons"
import { useEffect } from "react"
import { addToLocalStorage } from "@/utils/general"
import DetailPageAboutMovie from "./components/detail-page-about-movie"

export default function DetailPage({ id }: { id: string | number }) {
  const movieId = Number(id)

  const {
    data: movie_details,
    isLoading,
    isError,
  } = useGetMovieDetails({ id: movieId })
  const { data: movie_images } = useGetMovieImages({ id: movieId })

  const { data: movie_credits } = useGetMovieCredits({ id: movieId })
  const { data: movie_videos, isLoading: isMovieVideosLoading } =
    useGetMovieVideos({ id: movieId })

  useEffect(() => {
    if (!movie_details) return

    const movie = {
      id: movie_details?.id,
      title: movie_details?.original_title,
      vote_count: movie_details?.vote_count,
      vote_average: movie_details?.vote_average,
      backdrop_path: movie_details?.backdrop_path,
      poster_path: movie_details?.poster_path,
      released_date: movie_details?.release_date,
      type: "movie",
      viewedAt: Date.now(),
    }

    addToLocalStorage("user_recently_viewed", movie)
  }, [movie_details])

  if (isLoading) {
    return <DetailPageSkeleton />
  }

  return (
    <section className="relative flex w-full flex-col gap-5">
      <DetailPageHeader title={movie_details?.original_title} />

      <div className="grid grid-cols-1 gap-4 border-b border-border md:grid-cols-12">
        <div className="col-span-12 sm:col-span-5">
          <DetailPageContent
            movie_images={movie_images}
            movie_details={movie_details}
          />
        </div>
        <div className="col-span-12 flex flex-col gap-8 sm:col-span-7">
          <DetailPageAboutMovie
            movie_videos={movie_videos}
            movie_details={movie_details}
            isVideoLoading={isMovieVideosLoading}
          />
          <DetailPageExtraInfo movie_details={movie_details} />
          <DetailPageCast casts={movie_credits} />
        </div>
      </div>
    </section>
  )
}
