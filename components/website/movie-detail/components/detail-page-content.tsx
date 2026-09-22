"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import Autoplay from "embla-carousel-autoplay"

import { MovieDetails, MovieImages } from "@/features/movies/movies.types"
import Image from "next/image"
import { TMDB_IMAGE_URL } from "@/constants/general"
import { DetailPageCarouselSkeleton } from "./skeletons"
dayjs.extend(duration)

export default function DetailPageContent({
  movie_details,
  movie_images,
}: {
  movie_details: MovieDetails | undefined
  movie_images: MovieImages | undefined
}) {
  return (
    <section className="flex flex-col gap-7">
      <div className="">
        {movie_images?.backdrops && movie_images.backdrops.length > 0 ? (
          <Carousel
            className="max-w-xl"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {movie_images.backdrops.map((backdrop, index) => (
                <CarouselItem key={backdrop.file_path}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
                    <Image
                      src={`${TMDB_IMAGE_URL}${backdrop.file_path}`}
                      alt={`Movie backdrop ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:-left-6" />
            <CarouselNext className="-right-4 sm:-right-6" />
          </Carousel>
        ) : (
          <DetailPageCarouselSkeleton />
        )}
      </div>
    </section>
  )
}
