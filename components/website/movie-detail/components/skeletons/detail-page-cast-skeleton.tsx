import { Skeleton } from "@/components/ui/skeleton"

export default function DetailPageCastSkeleton() {
  return (
    <section className="flex w-full flex-col gap-4">
      {/* Heading */}
      <Skeleton className="h-7 w-16 rounded-md sm:h-6" />

      {/* Cast list scroll row */}
      <div className="mx-1 flex touch-pan-x snap-x scrollbar-none items-center gap-6 overflow-x-auto py-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex shrink-0 flex-col items-center gap-3"
          >
            {/* Circular profile avatar */}
            <Skeleton className="size-14 rounded-full ring-1 ring-white/10" />

            {/* Actor name and character placeholders */}
            <div className="flex flex-col items-center gap-1.5 text-center">
              <Skeleton className="h-3.5 w-18 rounded" />
              <Skeleton className="h-3 w-14 rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
