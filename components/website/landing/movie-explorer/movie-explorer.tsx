"use client"

import MovieCard from "@/components/component/movie-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { COMPARE_LIMIT } from "@/constants/general"
import { FEATURED_MOVIES } from "@/lib/data/mock-movie-data"
import handleCompare from "@/utils/handle-compare"
import { useState } from "react"
import { toast } from "sonner"

const MOVIE_EXPLORER_TABS = [
  {
    key: "popular",
    value: "Popular",
  },

  {
    key: "series",
    value: "Series",
  },

  {
    key: "bollywood",
    value: "Bollywood",
  },
]

export default function MovieExplorer() {
  const [activeTab, setActiveTab] = useState("popular")
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
    <section>
      <div>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList variant="line">
            {MOVIE_EXPLORER_TABS.map((tab) => (
              <TabsTrigger value={tab.key} key={tab.key}>
                {tab.value}
              </TabsTrigger>
            ))}
          </TabsList>

          {/*movie cards*/}
          <TabsContent
            value={activeTab}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          >
            {FEATURED_MOVIES.slice(0, 14).map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.id}
                type="movie"
                isComparing={compareIds.includes(movie.id)}
                onCompare={() => handleCompare(movie.id)}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
