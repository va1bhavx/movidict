import { QUERY_KEYS } from "@/constants/query-keys"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import {
  getMovieCredits,
  getMovieDetails,
  getMovieImages,
  getMovieVideos,
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
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.movies.nowPlaying,
    queryFn: ({ pageParam }) =>
      getNowPlayingMovies({ page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, total_pages } = lastPage.result
      return page < total_pages ? page + 1 : undefined
    },
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

export const useGetMovieDetails = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.details(id),
    queryFn: () => getMovieDetails({ id }),
  })
}

export const useGetMovieImages = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.images(id),
    queryFn: () => getMovieImages({ id }),
  })
}

export const useGetMovieCredits = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.credits(id),
    queryFn: () => getMovieCredits({ id }),
  })
}

export const useGetMovieVideos = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.videos(id),
    queryFn: () => getMovieVideos({ id }),
  })
}
