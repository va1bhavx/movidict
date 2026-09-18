import { Skeleton } from "@/components/ui/skeleton"

export default function HeroSectionSkeleton() {
  return (
    <section className="relative min-h-[520px] overflow-hidden sm:min-h-[560px] md:min-h-[630px]">
      {/* Background */}
      <Skeleton className="absolute inset-0 h-full w-full rounded-none" />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[520px] items-end p-5 sm:min-h-[560px] sm:p-8 md:min-h-[630px] md:p-10">
        <div className="flex w-full max-w-2xl flex-col gap-5">
          {/* Genres + metadata */}
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-6 w-20 rounded-full bg-[#292b2f]" />
            <Skeleton className="h-6 w-24 rounded-full bg-[#292b2f]" />
            <Skeleton className="h-6 w-16 rounded-full bg-[#292b2f]" />

            <Skeleton className="ml-1 h-4 w-16 bg-[#242529]" />
            <Skeleton className="h-4 w-12 bg-[#242529]" />

            <Skeleton className="h-6 w-20 rounded-full bg-[#292b2f]" />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-2">
            <Skeleton className="h-10 w-[85%] bg-[#25272b] sm:h-12 md:h-14" />
            <Skeleton className="h-10 w-[55%] bg-[#25272b] sm:h-12 md:h-14" />
          </div>

          {/* Overview */}
          <div className="flex max-w-xl flex-col gap-2">
            <Skeleton className="h-3.5 w-full bg-[#202226] sm:h-4" />
            <Skeleton className="h-3.5 w-[92%] bg-[#202226] sm:h-4" />
            <Skeleton className="h-3.5 w-[72%] bg-[#202226] sm:h-4" />
          </div>

          {/* Buttons */}
          <div className="mt-1 flex items-center gap-3">
            <Skeleton className="h-10 w-36 rounded-full bg-[#292b2f]" />
            <Skeleton className="h-10 w-24 rounded-full bg-[#24262a]" />
            <Skeleton className="size-10 rounded-full bg-[#292b2f]" />
          </div>
        </div>
      </div>

      {/* Movie thumbnails */}
      <div className="absolute right-5 bottom-5 z-10 hidden gap-2 sm:flex">
        <Skeleton className="h-20 w-14 rounded-md bg-[#1c1e21]" />
        <Skeleton className="h-20 w-14 rounded-md bg-[#1c1e21]" />
        <Skeleton className="h-20 w-14 rounded-md bg-[#1c1e21]" />
        <Skeleton className="h-20 w-14 rounded-md bg-[#1c1e21]" />
        <Skeleton className="h-20 w-14 rounded-md bg-[#1c1e21]" />
      </div>
    </section>
  )
}
