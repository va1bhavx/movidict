import { Skeleton } from "@/components/ui/skeleton"

export default function DetailPageAboutSkeleton() {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-4 sm:border-none">
      {/* Genre badges */}
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>

      {/* Title, tagline & meta */}
      <div className="flex flex-col gap-2.5">
        {/* Title */}
        <Skeleton className="h-8 w-4/5 rounded-md sm:h-9 md:h-10 md:w-2/3" />

        {/* Tagline */}
        <Skeleton className="h-4 w-1/2 rounded-md sm:w-2/5" />

        {/* Rating and Release Date */}
        <div className="flex items-center gap-3 pt-1">
          <div className="flex items-center gap-1.5">
            <Skeleton className="size-3.5 rounded-full" />
            <Skeleton className="h-4 w-12 rounded" />
          </div>
          <Skeleton className="h-4 w-28 rounded" />
        </div>
      </div>

      {/* Overview synopsis lines */}
      <div className="flex flex-col gap-2 pt-1">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-[96%] rounded" />
        <Skeleton className="h-4 w-[88%] rounded" />
        <Skeleton className="h-4 w-[62%] rounded" />
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Skeleton className="h-9 w-36 rounded-md sm:w-40" />
        <Skeleton className="h-9 w-36 rounded-md sm:w-40" />
        <Skeleton className="size-9 rounded-md" />
      </div>
    </div>
  )
}
