import { QUERY_KEYS } from "@/constants/query-keys"
import { useQuery } from "@tanstack/react-query"
import { getUpcomingMovies } from "./movies.api"

export const useGetUpcomingMovies = () => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.upcoming,
    queryFn: getUpcomingMovies,
  })
}
