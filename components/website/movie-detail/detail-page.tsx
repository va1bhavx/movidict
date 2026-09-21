"use client"

import { MOVIE_DETAILS } from "@/lib/data/mock-movie-data"
import DetailPageCast from "./components/detail-page-cast"
import DetailPageContent from "./components/detail-page-content"
import DetailPageExtraInfo from "./components/detail-page-extra-info"
import DetailPageHeader from "./components/detail-page-header"
import {
  useGetMovieDetails,
  useGetMovieImages,
} from "@/features/movies/movies.hooks"

import { DetailPageSkeleton } from "./components/skeletons"

export default function DetailPage({ id }: { id: string | number }) {
  const movieId = Number(id)

  const {
    data: movie_details,
    isLoading,
    isError,
  } = useGetMovieDetails({ id: movieId })
  const {
    data: movie_images,
    isLoading: isMovieImageLoading,
    isError: isMovieImageError,
  } = useGetMovieImages({ id: movieId })

  console.log(movie_images, "movie_images")

  if (isLoading) {
    return <DetailPageSkeleton />
  }

  return (
    <section className="relative flex w-full flex-col gap-5">
      <DetailPageHeader title={movie_details?.original_title} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="col-span-12 sm:col-span-7">
          <DetailPageContent
            movie_images={movie_images}
            movie_details={movie_details}
          />
        </div>
        <div className="col-span-12 flex flex-col gap-8 sm:col-span-5">
          <DetailPageExtraInfo movie_details={movie_details} />
          <DetailPageCast />
        </div>
      </div>
    </section>
  )
}
