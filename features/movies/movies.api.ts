import { api } from "@/lib/axios"

export const getUpcomingMovies = async () => {
  const { data } = await api.get("/movies/upcoming")

  return data
}

export const getNowPlayingMovies = async () => {
  const { data } = await api.get("/movies/now_playing")

  return data
}
