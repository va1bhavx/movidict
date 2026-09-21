"use client"

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
import duration from "dayjs/plugin/duration"
import Autoplay from "embla-carousel-autoplay"

import DetailPageAboutMovie from "./detail-page-about-movie"
dayjs.extend(duration)

export default function DetailPageContent() {
  const movie_details = MOVIE_DETAILS[0]

  return (
    <section className="flex flex-col gap-7">
      {/*Carousel section*/}
      <div>
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
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
      <DetailPageAboutMovie movie_details={movie_details} />
      {/*Extra Info*/}
      {/*<DetailPageExtraInfo movie_details={movie_details} />*/}
    </section>
  )
}
