import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, ChevronRight, Film } from "lucide-react"

export default function DetailPageCarouselSkeleton() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/30 bg-muted/40">
      {/* Main backdrop shimmer */}
      <Skeleton className="h-full w-full rounded-xl bg-muted/60" />

      {/* Subtle cinematic gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />

      {/* Center placeholder icon */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-background/40 backdrop-blur-xs">
          <Film className="size-7 text-muted-foreground/40" />
        </div>
      </div>

      {/* Carousel navigation controls placeholder */}
      <div className="pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
        <div className="flex size-8 items-center justify-center rounded-full border border-border/40 bg-background/70 shadow-sm sm:size-9">
          <ChevronLeft className="size-4 text-muted-foreground/40" />
        </div>
        <div className="flex size-8 items-center justify-center rounded-full border border-border/40 bg-background/70 shadow-sm sm:size-9">
          <ChevronRight className="size-4 text-muted-foreground/40" />
        </div>
      </div>

      {/* Slide indicators placeholder */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        <Skeleton className="h-1.5 w-6 rounded-full bg-foreground/30" />
        <Skeleton className="h-1.5 w-2 rounded-full bg-foreground/15" />
        <Skeleton className="h-1.5 w-2 rounded-full bg-foreground/15" />
        <Skeleton className="h-1.5 w-2 rounded-full bg-foreground/15" />
      </div>
    </div>
  )
}
