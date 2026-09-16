"use client"

import MovieCard from "@/components/component/movie-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FEATURED_MOVIES } from "@/lib/data/mock-movie-data"
import { useState } from "react"

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
    key: "anime",
    value: "Anime",
  },

  {
    key: "bollywood",
    value: "Bollywood",
  },
]

export default function MovieExplorer() {
  const [activeTab, setActiveTab] = useState("popular")
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
            className={"mt-8 flex flex-wrap gap-8"}
          >
            {FEATURED_MOVIES.slice(0, 14).map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
