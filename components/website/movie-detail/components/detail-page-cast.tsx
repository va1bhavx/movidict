import { TMDB_IMAGE_URL } from "@/constants/general"
import Image from "next/image"

const cast = Array.from({ length: 10 })

export default function DetailPageCast() {
  return (
    <section className="flex w-full flex-col gap-4">
      <h1 className="text-2xl font-semibold sm:text-xl">Cast</h1>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:gap-x-8">
        {cast.map((_, index) => (
          <div key={index} className="group flex min-w-0 items-center gap-3">
            {/* Profile */}
            <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-neutral-900 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
              <Image
                src={`${TMDB_IMAGE_URL}/cO7J0XSVKPlAjUCMWC7DVBn1Py2.jpg`}
                alt="John Doe"
                fill
                sizes="64px"
                className="object-cover transition-transform duration-300"
              />
            </div>

            {/* Details */}
            <div className="min-w-0">
              <h3 className="truncate text-sm font-medium text-white">
                John Doe
              </h3>

              <p className="mt-0.5 truncate text-xs text-neutral-400">Actor</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
