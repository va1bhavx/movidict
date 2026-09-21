import { Skeleton } from "@/components/ui/skeleton"

export default function DetailPageExtraInfoSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <Skeleton className="h-7 w-28 rounded-md" />

      {/* Grid of info items */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {/* Budget/Revenue */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-28 rounded" />
          <Skeleton className="h-3.5 w-32 rounded" />
        </div>

        {/* Runtime */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-3.5 w-24 rounded" />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-16 rounded" />
          <Skeleton className="h-3.5 w-20 rounded" />
        </div>

        {/* Votes */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-16 rounded" />
          <div className="flex items-center gap-1.5">
            <Skeleton className="size-3.5 rounded-full" />
            <Skeleton className="h-3.5 w-24 rounded" />
          </div>
        </div>

        {/* Country/Language */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32 rounded" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-3.5 w-12 rounded" />
            <Skeleton className="h-3.5 w-10 rounded" />
          </div>
        </div>

        {/* Homepage */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-3.5 w-40 rounded" />
        </div>

        {/* Production Companies */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
          <Skeleton className="h-4 w-36 rounded" />
          <div className="mt-2 grid grid-cols-1 gap-3">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <Skeleton className="size-8 shrink-0 rounded-full" />
                <div className="flex flex-col gap-1.5">
                  <Skeleton className="h-3.5 w-28 rounded" />
                  <Skeleton className="h-3 w-14 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
