import { api } from "@/lib/axios"

export const getUpcomingMovies = async () => {
  const { data } = await api.get("/movies/upcoming")

  return data
}
