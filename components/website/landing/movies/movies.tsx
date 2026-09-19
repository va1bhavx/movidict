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
        <div className="flex gap-4 sm:items-center sm:justify-between">
          <div className="flex w-full flex-col gap-3 sm:w-fit sm:flex-row sm:items-center sm:gap-5">
            <h1 className="text-xl">Movies</h1>
            <TabsList variant="default" className={"w-full"}>
              {MOVIE_EXPLORER_TABS.map((tab) => (
                <TabsTrigger value={tab.key} key={tab.key}>
                  {tab.value}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <Link href={`/${activeTab}?type=movie`} className="hidden sm:block">
            <Button variant="secondary" size="sm">
              <ChevronRight />
            </Button>
          </Link>
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
