import { Movie } from "@/types/movies.types"
import Image from "next/image"
import { Badge } from "../ui/badge"
import Link from "next/link"
import { Star } from "lucide-react"

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="w-full">
      <button
        key={movie.id}
        type="button"
        aria-label={movie.title}
        className={
          "group relative w-full shrink-0 cursor-pointer snap-start overflow-hidden rounded-lg text-left opacity-60 ring-2 ring-transparent transition-[border-color,opacity,transform] duration-200 hover:scale-105 hover:border-white/30 hover:opacity-100"
        }
      >
        <div className="relative aspect-2/3 max-w-full min-w-38 overflow-hidden rounded-lg bg-neutral-900 sm:w-44 md:w-56 xl:w-64">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-300"
          />

          <div className="absolute top-2 left-2">
            <Badge
              variant={"secondary"}

              className="border-none! text-[10px] ring ring-chart-1"
            >
              {movie.duration}
            </Badge>
          </div>
        </div>
        <div className="mt-2 px-1">
          <p className="max-w-22 truncate text-sm font-medium text-muted-foreground">
            {movie.title}
          </p>

          <div className="flex items-center justify-between">
            <span>{movie.year}</span>
            <span className="flex items-center gap-2">
              <Star className="size-3 fill-amber-400" />
              {movie.rating}
            </span>
          </div>
        </div>
      </button>
    </Link>
  )
}
