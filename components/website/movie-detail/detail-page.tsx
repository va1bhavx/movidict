import { MOVIE_DETAILS } from "@/lib/data/mock-movie-data"
import DetailPageCast from "./components/detail-page-cast"
import DetailPageContent from "./components/detail-page-content"
import DetailPageExtraInfo from "./components/detail-page-extra-info"
import DetailPageHeader from "./components/detail-page-header"

export default function DetailPage({ id }: { id: string | number }) {
  const movie_details = MOVIE_DETAILS[0]
  return (
    <section className="relative flex w-full flex-col gap-5">
      <DetailPageHeader />
      {/*<div>This is coming from detail page: {id}</div>*/}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="col-span-12 border-b border-border pb-4 sm:col-span-7">
          <DetailPageContent />
        </div>
        <div className="col-span-12 flex flex-col gap-8 sm:col-span-5">
          <DetailPageExtraInfo movie_details={movie_details} />
          <DetailPageCast />
        </div>
      </div>
    </section>
  )
}
