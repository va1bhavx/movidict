import DetailPage from "@/components/website/movie-detail/detail-page"

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ movie_id: string }>
}) {
  const { movie_id } = await params

  return <DetailPage id={movie_id} />
}
