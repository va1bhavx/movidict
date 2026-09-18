import { api } from "@/lib/axios"

export const getMovieGenres = async () => {
  const { data } = await api.get("/genres/movies")

  return data?.result?.genres
}
