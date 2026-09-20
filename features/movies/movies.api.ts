import { api } from "@/lib/axios"
import { ApiSuccessResponse } from "@/types/general.types"
import { MovieListResponse } from "./movies.types"

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
