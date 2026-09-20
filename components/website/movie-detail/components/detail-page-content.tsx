"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MOVIE_DETAILS } from "@/lib/data/mock-movie-data"
import dayjs from "dayjs"
import Autoplay from "embla-carousel-autoplay"
import { Bookmark, Share2, Star, TvMinimalPlayIcon } from "lucide-react"

export default function DetailPageContent() {
  const movie_details = MOVIE_DETAILS[0]
  return (
    <section className="flex flex-col gap-4">
      {/*Carousel section*/}
      <div>
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 sm:-left-6" />
          <CarouselNext className="-right-4 sm:-right-6" />
        </Carousel>
      </div>

      {/*movie content*/}

      <div className="flex flex-col gap-4 border-b border-border pb-4">
        <div className="flex flex-wrap gap-2">
          {movie_details.genres.map((genre) => (
            <Badge key={genre.id} variant={"secondary"}>
              {genre.name}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold md:text-3xl">
            {movie_details.original_title}
          </h1>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {movie_details.tagline}
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-semibold">
              <Star className="size-3 fill-amber-400 text-amber-400" />

              <span>{movie_details?.vote_average?.toFixed(1)}</span>

              <span className="text-[10px] text-amber-300/70">/ 10</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-muted-foreground sm:text-sm">
                {dayjs(movie_details.release_date).format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="leading-normal text-muted-foreground">
            {movie_details.overview}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size={"lg"}>
            <TvMinimalPlayIcon />
            Watch trailer
          </Button>
          <Button size={"lg"} variant={"outline"}>
            <Bookmark />
            Sign in to save
          </Button>
          <Button size={"icon-lg"} variant={"outline"}>
            <Share2 />
          </Button>
        </div>
      </div>

      {/*credits*/}

      <div>
        <h1 className="text-2xl font-semibold sm:text-xl">Credits</h1>
      </div>
    </section>
  )
}
