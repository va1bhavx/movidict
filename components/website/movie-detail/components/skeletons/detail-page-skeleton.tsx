import DetailPageHeaderSkeleton from "./detail-page-header-skeleton"
import DetailPageContentSkeleton from "./detail-page-content-skeleton"
import DetailPageExtraInfoSkeleton from "./detail-page-extra-info-skeleton"

export default function DetailPageSkeleton() {
  return (
    <section className="relative flex w-full flex-col gap-5">
      {/* Breadcrumb header skeleton */}
      <DetailPageHeaderSkeleton />

      {/* Main detail page grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {/* Left column: Carousel & About */}
        <div className="col-span-12 sm:col-span-7">
          <DetailPageContentSkeleton />
        </div>

        {/* Right column: Extra Info (Cast skeleton left for now) */}
        <div className="col-span-12 flex flex-col gap-8 sm:col-span-5">
          <DetailPageExtraInfoSkeleton />
        </div>
      </div>
    </section>
  )
}
