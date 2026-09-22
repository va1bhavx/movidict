"use client"

import CardsSkeleton from "@/components/component/cards-skeletons"
import SeriesCard from "@/components/component/series-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  useGetAiringTodaySeries,
  useGetOnTheAirSeries,
  useGetPopularSeries,
  useGetTopRatedSeries,
} from "@/features/series/series.hooks"
import type { Series } from "@/features/series/series.types"
import compare from "@/utils/handle-compare"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton key={i} />)
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
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton key={i} />)
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
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton key={i} />)
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
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton key={i} />)
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
  const [activeTab, setActiveTab] = useState<string>("airing_today")
  const { compareIds, handleCompare } = compare()

  return (
    <section className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center gap-3">
          <h2 className="shrink-0 text-xl font-medium tracking-tight">
            Series
          </h2>

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <div className="min-w-0 flex-1 scrollbar-none overflow-x-auto">
              <TabsList className="h-9 w-max gap-1 bg-transparent p-0">
                {SERIES_EXPLORER_TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.key}
                    value={tab.key}
                    className="h-8 shrink-0 rounded-md px-3 text-xs whitespace-nowrap text-muted-foreground data-[state=active]:bg-secondary data-[state=active]:text-foreground"
                  >
                    {tab.value}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <Link href={`/${activeTab}?type=series`} className="shrink-0">
              <Button variant="secondary" size="icon" className="size-9">
                <ChevronRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>

        <TabsContent
          value={activeTab}
          className="mx-1 flex touch-pan-x snap-x scrollbar-none items-center gap-3 overflow-x-auto px-1 py-2"
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
