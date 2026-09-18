import { QUERY_KEYS } from "@/constants/query-keys"
import { useQuery } from "@tanstack/react-query"
import { getMovieGenres } from "./genres.api"

export default function useGetMovieGenres() {
  return useQuery({
    queryKey: QUERY_KEYS.genres.movies,
    queryFn: getMovieGenres,
  })
}
