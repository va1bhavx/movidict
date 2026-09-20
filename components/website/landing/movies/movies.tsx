"use client"

import MovieCard from "@/components/component/movie-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { COMPARE_LIMIT } from "@/constants/general"
import {
  useGetNowPlayingMovies,
  useGetPopularMovies,
  useGetTopRatedMovies,
  useGetUpcomingMovies,
} from "@/features/movies/movies.hooks"
import { Movie } from "@/features/movies/movies.types"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"
import CardsSkeleton from "../../../component/cards-skeletons"

const MOVIE_EXPLORER_TABS = [
  {
    key: "now_playing",
    value: "Latest",
  },

  {
    key: "popular",
    value: "Popular",
  },

  {
    key: "top_rated",
    value: "Top Rated",
  },

  {
    key: "upcoming",
    value: "Upcoming",
  },
]

function NowPlayingTab({
  compareIds,
  handleCompare,
}: {
  compareIds: number[]
  handleCompare: (moviedId: number) => void
}) {
  const {
    data: nowPlayingMovies,
    isLoading: nowPlayingLoading,
    isError: nowPlayingError,
  } = useGetNowPlayingMovies()

  if (nowPlayingLoading) {
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton />)
  }

  return (
    <>
      {nowPlayingMovies?.result?.results.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          type="movie"
          movie={movie}
          isComparing={compareIds.includes(movie.id)}
          onCompare={() => handleCompare(movie.id)}
        />
      ))}
    </>
  )
}

function PopularMoviesTab({
  compareIds,
  handleCompare,
}: {
  compareIds: number[]
  handleCompare: (moviedId: number) => void
}) {
  const {
    data: popularMovies,
    isLoading: popularLoading,
    isError: popularError,
  } = useGetPopularMovies()

  if (popularLoading) {
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton />)
  }

  return (
    <>
      {popularMovies?.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          type="movie"
          movie={movie}
          isComparing={compareIds.includes(movie.id)}
          onCompare={() => handleCompare(movie.id)}
        />
      ))}
    </>
  )
}

function TopRatedMoviesTab({
  compareIds,
  handleCompare,
}: {
  compareIds: number[]
  handleCompare: (moviedId: number) => void
}) {
  const {
    data: topRatedMovies,
    isLoading: topRatedLoading,
    isError: topRatedError,
  } = useGetTopRatedMovies()

  if (topRatedLoading) {
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton />)
  }

  return (
    <>
      {topRatedMovies?.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          type="movie"
          movie={movie}
          isComparing={compareIds.includes(movie.id)}
          onCompare={() => handleCompare(movie.id)}
        />
      ))}
    </>
  )
}

function UpcomingMoviesTab({
  compareIds,
  handleCompare,
}: {
  compareIds: number[]
  handleCompare: (moviedId: number) => void
}) {
  const {
    data: upcomingMovies,
    isLoading: upcomingLoading,
    isError: upcomingError,
  } = useGetUpcomingMovies()

  if (upcomingLoading) {
    return [1, 2, 3, 4, 5, 6].map((i) => <CardsSkeleton />)
  }

  return (
    <>
      {upcomingMovies?.result?.results.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          type="movie"
          movie={movie}
          isComparing={compareIds.includes(movie.id)}
          onCompare={() => handleCompare(movie.id)}
        />
      ))}
    </>
  )
}

export default function Movies() {
  const [activeTab, setActiveTab] = useState("now_playing")

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
        <div className="flex items-center gap-3">
          <h2 className="shrink-0 text-xl font-medium tracking-tight">
            Movies
          </h2>

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <div className="min-w-0 flex-1 scrollbar-none overflow-x-auto">
              <TabsList className="h-9 w-max gap-1 bg-transparent p-0">
                {MOVIE_EXPLORER_TABS.map((tab) => (
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
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {activeTab === "now_playing" && (
            <NowPlayingTab
              compareIds={compareIds}
              handleCompare={handleCompare}
            />
          )}
          {activeTab === "popular" && (
            <PopularMoviesTab
              compareIds={compareIds}
              handleCompare={handleCompare}
            />
          )}
          {activeTab === "top_rated" && (
            <TopRatedMoviesTab
              compareIds={compareIds}
              handleCompare={handleCompare}
            />
          )}
          {activeTab === "upcoming" && (
            <UpcomingMoviesTab
              compareIds={compareIds}
              handleCompare={handleCompare}
            />
          )}
        </TabsContent>
      </Tabs>
    </section>
  )
}
