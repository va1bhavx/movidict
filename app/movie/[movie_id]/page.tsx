export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ movie_id: string }>
}) {
  const { movie_id } = await params

  return <div>Movie: {movie_id}</div>
}
