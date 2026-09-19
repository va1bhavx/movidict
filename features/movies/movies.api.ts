import { api } from "@/lib/axios"

export const getUpcomingMovies = async () => {
  const { data } = await api.get("/movies/upcoming")

  return data
}

export const getNowPlayingMovies = async () => {
  const { data } = await api.get("/movies/now_playing")

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
