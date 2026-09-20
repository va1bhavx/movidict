import DetailPageCast from "./components/detail-page-cast"
import DetailPageContent from "./components/detail-page-content"
import DetailPageHeader from "./components/detail-page-header"

export default function DetailPage({ id }: { id: string | number }) {
  return (
    <section className="relative flex w-full flex-col gap-5">
      <DetailPageHeader />
      {/*<div>This is coming from detail page: {id}</div>*/}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="col-span-7 border-b border-border pb-4 md:border-none">
          <DetailPageContent />
        </div>
        <div className="col-span-5">
          <DetailPageCast />
        </div>
      </div>
    </section>
  )
}
