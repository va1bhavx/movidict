import DetailPageCarouselSkeleton from "./detail-page-carousel-skeleton"
import DetailPageAboutSkeleton from "./detail-page-about-skeleton"

export default function DetailPageContentSkeleton() {
  return (
    <section className="flex flex-col gap-7">
      {/* Carousel skeleton */}
      <DetailPageCarouselSkeleton />

      {/* About movie skeleton */}
      <DetailPageAboutSkeleton />
    </section>
  )
}
