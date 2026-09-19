import { Skeleton } from "@/components/ui/skeleton"

export default function CardsSkeleton() {
  return (
    <div className="flex h-full flex-col gap-3">
      <Skeleton className="relative aspect-2/3 max-w-full min-w-38 animate-pulse overflow-hidden rounded-lg bg-gray-600 sm:w-44 md:w-56 xl:w-64" />
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-20 animate-pulse overflow-hidden rounded-lg bg-gray-600" />
        <Skeleton className="h-4 w-20 animate-pulse overflow-hidden rounded-lg bg-gray-600" />
      </div>
    </div>
  )
}
