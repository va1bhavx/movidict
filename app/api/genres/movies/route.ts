import { API_ENDPOINTS } from "@/constants/api-endpoints"
import { ErrorResponse, SuccessResponse } from "@/lib/api-response"
import { tmdb } from "@/lib/tmdb"

export async function GET() {
  try {
    const { data } = await tmdb.get(API_ENDPOINTS.genres.movies)
    return SuccessResponse(data, "Movies genres fetched successfully!!")
  } catch (err) {
    console.error(err)
    return ErrorResponse(
      err instanceof Error ? err.message : "Something went wrong!",
      500,
      "TMDB_GENRES_FETCH_FAILED"
    )
  }
}
