import { api } from "@/lib/axios"

export const getAiringTodaySeries = async () => {
  const { data } = await api.get("/series/airing_today")

  return data?.result?.results
}

export const getOnTheAirSeries = async () => {
  const { data } = await api.get("/series/on_the_air")

  return data?.result?.results
}

export const getPopularSeries = async () => {
  const { data } = await api.get("/series/popular")

  return data?.result?.results
}

export const getTopRatedSeries = async () => {
  const { data } = await api.get("/series/top_rated")

  return data?.result?.results
}
