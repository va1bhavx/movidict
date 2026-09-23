import { Skeleton } from "@/components/ui/skeleton"

export default function TrailerModalSkeleton() {
  return (
    <div className="no-scrollbar max-h-[75vh] space-y-6 overflow-y-auto pr-1">
      {/* Featured video */}
      <section className="space-y-3">
        <Skeleton className="aspect-video w-full rounded-xl bg-muted" />

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-48 rounded-md" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-14 rounded" />
            <Skeleton className="h-3 w-1 rounded-full" />
            <Skeleton className="h-3 w-10 rounded" />
            <Skeleton className="h-3 w-1 rounded-full" />
            <Skeleton className="h-3 w-24 rounded" />
          </div>
        </div>
      </section>

      {/* More videos */}
      <section className="space-y-3">
        <div className="space-y-1">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-3 w-64 max-w-full rounded" />
        </div>

        {/* Video cards */}
        <div className="no-scrollbar flex gap-4 overflow-hidden pb-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-44 shrink-0 px-1 py-1">
              <Skeleton className="aspect-video w-full rounded-lg" />

              <div className="mt-2 space-y-1">
                <Skeleton className="h-3 w-32 rounded" />
                <Skeleton className="h-3 w-24 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <div className="flex justify-end md:hidden">
          <Skeleton className="h-4 w-28 rounded" />
        </div>
      </section>
    </div>
  )
}
