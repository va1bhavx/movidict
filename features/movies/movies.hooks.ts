import { QUERY_KEYS } from "@/constants/query-keys"
import { useQuery } from "@tanstack/react-query"
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "./movies.api"

export const useGetUpcomingMovies = () => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.upcoming,
    queryFn: getUpcomingMovies,
  })
}

export const useGetNowPlayingMovies = () => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.nowPlaying,
    queryFn: getNowPlayingMovies,
  })
}

export const useGetTopRatedMovies = () => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.topRated,
    queryFn: getTopRatedMovies,
  })
}

export const useGetPopularMovies = () => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.popular,
    queryFn: getPopularMovies,
  })
}
