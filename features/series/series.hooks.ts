import { QUERY_KEYS } from "@/constants/query-keys"
import { useQuery } from "@tanstack/react-query"
import {
  getAiringTodaySeries,
  getOnTheAirSeries,
  getPopularSeries,
  getTopRatedSeries,
} from "./series.api"

export const useGetAiringTodaySeries = () => {
  return useQuery({
    queryKey: QUERY_KEYS.series.airingToday,
    queryFn: getAiringTodaySeries,
  })
}

export const useGetOnTheAirSeries = () => {
  return useQuery({
    queryKey: QUERY_KEYS.series.onTheAir,
    queryFn: getOnTheAirSeries,
  })
}

export const useGetTopRatedSeries = () => {
  return useQuery({
    queryKey: QUERY_KEYS.series.topRated,
    queryFn: getTopRatedSeries,
  })
}

export const useGetPopularSeries = () => {
  return useQuery({
    queryKey: QUERY_KEYS.series.popular,
    queryFn: getPopularSeries,
  })
}
