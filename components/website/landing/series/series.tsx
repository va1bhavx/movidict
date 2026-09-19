"use client"

import CardsSkeleton from "@/components/component/cards-skeletons"
import MovieCard from "@/components/component/movie-card"
import SeriesCard from "@/components/component/series-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { COMPARE_LIMIT } from "@/constants/general"
import {
  useGetAiringTodaySeries,
  useGetOnTheAirSeries,
  useGetPopularSeries,
  useGetTopRatedSeries,
} from "@/features/series/series.hooks"
import type { Series } from "@/features/series/series.types"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

const SERIES_EXPLORER_TABS = [
  {
    key: "airing_today",
    value: "Latest",
  },

  {
    key: "on_the_air",
    value: "On the air",
  },

  {
    key: "popular",
    value: "Popular",
  },

  {
    key: "top_rated",
    value: "Top Rated",
  },
]

function AiringTodayTab({
  compareIds,
  handleCompare,
}: {
  compareIds: number[]
  handleCompare: (moviedId: number) => void
}) {
  const { data, isLoading, isError } = useGetAiringTodaySeries()

  if (isLoading) {
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton />)
  }

  return (
    <>
      {data?.map((series: Series) => (
        <SeriesCard
          key={series.id}
          type="series"
          series={series}
          isComparing={compareIds.includes(series.id)}
          onCompare={() => handleCompare(series.id)}
        />
      ))}
    </>
  )
}

function OnTheAirTab({
  compareIds,
  handleCompare,
}: {
  compareIds: number[]
  handleCompare: (moviedId: number) => void
}) {
  const { data, isLoading, isError } = useGetOnTheAirSeries()

  if (isLoading) {
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton />)
  }

  return (
    <>
      {data?.map((series: Series) => (
        <SeriesCard
          key={series.id}
          type="series"
          series={series}
          isComparing={compareIds.includes(series.id)}
          onCompare={() => handleCompare(series.id)}
        />
      ))}
    </>
  )
}

function TopRatedSeriesTab({
  compareIds,
  handleCompare,
}: {
  compareIds: number[]
  handleCompare: (moviedId: number) => void
}) {
  const { data, isLoading, isError } = useGetTopRatedSeries()

  if (isLoading) {
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton />)
  }

  return (
    <>
      {data?.map((series: Series) => (
        <SeriesCard
          key={series.id}
          type="series"
          series={series}
          isComparing={compareIds.includes(series.id)}
          onCompare={() => handleCompare(series.id)}
        />
      ))}
    </>
  )
}

function PopularTab({
  compareIds,
  handleCompare,
}: {
  compareIds: number[]
  handleCompare: (moviedId: number) => void
}) {
  const { data, isLoading, isError } = useGetPopularSeries()

  if (isLoading) {
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton />)
  }

  return (
    <>
      {data?.map((series: Series) => (
        <SeriesCard
          key={series.id}
          type="series"
          series={series}
          isComparing={compareIds.includes(series.id)}
          onCompare={() => handleCompare(series.id)}
        />
      ))}
    </>
  )
}

export default function Series() {
  const [activeTab, setActiveTab] = useState("airing_today")
  const [compareIds, setCompareIds] = useState<number[]>([])

  const handleCompare = (movieId: number) => {
    if (compareIds.includes(movieId)) {
      setCompareIds((ids) => ids.filter((id) => id !== movieId))
      toast.success("Removed from compare")
      return
    }

    if (compareIds.length >= COMPARE_LIMIT) {
      return toast.error(`Can't add more than ${COMPARE_LIMIT} to compare`)
    }

    setCompareIds((ids) => [...ids, movieId])
    const remaining = COMPARE_LIMIT - (compareIds.length + 1)
    toast.success("Added to compare", {
      description:
        remaining > 0
          ? `You can add ${remaining} more`
          : "Compare list is full.",
    })
  }
  return (
    <section className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between gap-4 sm:items-center">
          <div className="flex w-full flex-row items-center justify-between gap-5 sm:w-fit">
            <h1 className="text-xl">Series</h1>
            <TabsList variant="default" className={"w-full"}>
              {SERIES_EXPLORER_TABS.map((tab) => (
                <TabsTrigger value={tab.key} key={tab.key}>
                  {tab.value}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <Link href={`/${activeTab}?type=series`} className="hidden sm:block">
            <Button variant="secondary" size="sm">
              <ChevronRight />
            </Button>
          </Link>
        </div>

        <TabsContent
          value={activeTab}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {activeTab === "airing_today" && (
            <AiringTodayTab
              compareIds={compareIds}
              handleCompare={handleCompare}
            />
          )}
          {activeTab === "on_the_air" && (
            <OnTheAirTab
              compareIds={compareIds}
              handleCompare={handleCompare}
            />
          )}
          {activeTab === "top_rated" && (
            <TopRatedSeriesTab
              compareIds={compareIds}
              handleCompare={handleCompare}
            />
          )}
          {activeTab === "popular" && (
            <PopularTab compareIds={compareIds} handleCompare={handleCompare} />
          )}
        </TabsContent>
      </Tabs>
    </section>
  )
}
