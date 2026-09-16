"use client"

import MovieCard from "@/components/component/movie-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FEATURED_MOVIES } from "@/lib/data/mock-movie-data"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
  return (
    <section className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between gap-4 sm:items-center">
          <div className="flex w-full flex-row items-center justify-between gap-5">
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

        <TabsContent value={activeTab} className="mt-8 flex flex-wrap gap-8">
          {FEATURED_MOVIES.slice(0, 14).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </TabsContent>
      </Tabs>
    </section>
  )
}
