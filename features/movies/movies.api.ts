import { api } from "@/lib/axios"
import { ApiSuccessResponse } from "@/types/general.types"
import { MovieDetails, MovieImages, MovieListResponse } from "./movies.types"

export const getUpcomingMovies = async () => {
  const { data } = await api.get("/movies/upcoming")

  return data
}

export const getNowPlayingMovies = async ({ page }: { page: number }) => {
  const { data } = await api.get<ApiSuccessResponse<MovieListResponse>>(
    `/movies/now_playing?page=${page}`
  )

  return data
}

export const getTopRatedMovies = async () => {
  const { data } = await api.get("/movies/top_rated")

  return data?.result?.results
}

export const getPopularMovies = async () => {
  const { data } = await api.get("/movies/popular")

  return data?.result?.results
}

export const getMovieDetails = async ({ id }: { id: number }) => {
  const { data } = await api.get<ApiSuccessResponse<MovieDetails>>(
    `/movies/movie_details?id=${id}`
  )

  return data?.result
}

export const getMovieImages = async ({ id }: { id: number }) => {
  const { data } = await api.get<ApiSuccessResponse<MovieImages>>(
    `/movies/movie_images?id=${id}`
  )

  return data?.result
}
