import DetailPageHeaderSkeleton from "./detail-page-header-skeleton"
import DetailPageContentSkeleton from "./detail-page-content-skeleton"
import DetailPageAboutSkeleton from "./detail-page-about-skeleton"
import DetailPageExtraInfoSkeleton from "./detail-page-extra-info-skeleton"
import DetailPageCastSkeleton from "./detail-page-cast-skeleton"

export default function DetailPageSkeleton() {
  return (
    <section className="relative flex w-full flex-col gap-5">
      {/* Breadcrumb header skeleton */}
      <DetailPageHeaderSkeleton />

      {/* Main detail page grid */}
      <div className="grid grid-cols-1 gap-4 border-b border-border md:grid-cols-12">
        {/* Left column: Carousel */}
        <div className="col-span-12 sm:col-span-5">
          <DetailPageContentSkeleton />
        </div>

        {/* Right column: About Movie, Extra Info & Cast */}
        <div className="col-span-12 flex flex-col gap-8 sm:col-span-7">
          <DetailPageAboutSkeleton />
          <DetailPageExtraInfoSkeleton />
          <DetailPageCastSkeleton />
        </div>
      </div>
    </section>
  )
}
