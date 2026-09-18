"use client"

import MovieCard from "@/components/component/movie-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { COMPARE_LIMIT } from "@/constants/general"
import { FEATURED_MOVIES } from "@/lib/data/mock-movie-data"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

const SERIES_EXPLORER_TABS = [
  {
    key: "latest",
    value: "Latest",
  },

  {
    key: "trending",
    value: "Trending",
  },
]

export default function Series() {
  const [activeTab, setActiveTab] = useState("latest")
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
          {FEATURED_MOVIES.slice(0, 14).map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              type="series"
              isComparing={compareIds.includes(movie.id)}
              onCompare={() => handleCompare(movie.id)}
            />
          ))}
        </TabsContent>
      </Tabs>
    </section>
  )
}
