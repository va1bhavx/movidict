import { API_ENDPOINTS } from "@/constants/api-endpoints"
import { ErrorResponse, SuccessResponse } from "@/lib/api-response"
import { tmdb } from "@/lib/tmdb"

export async function GET() {
  try {
    const response = await tmdb.get(API_ENDPOINTS.movies.nowPlaying)

    return SuccessResponse(response.data, "Now playing movies fetched!!")
  } catch (err) {
    console.error(err)
    return ErrorResponse(
      err instanceof Error ? err.message : "Something went wrong!",
      500,
      "TMDB_NOW_PLAYING_FETCH_FAILED"
    )
  }
}
