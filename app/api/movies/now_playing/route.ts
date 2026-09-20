import { API_ENDPOINTS } from "@/constants/api-endpoints"
import { MovieListResponse } from "@/features/movies/movies.types"
import { ErrorResponse, SuccessResponse } from "@/lib/api-response"
import { tmdb } from "@/lib/tmdb"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const rawPage = req.nextUrl.searchParams.get("page")
    const page = Number(rawPage ?? 1)

    if (!Number.isInteger(page) || page < 1) {
      return ErrorResponse("Invalid page number", 400, "INVALID_PAGE_NUMBER")
    }
    const response = await tmdb.get<MovieListResponse>(
      API_ENDPOINTS.movies.nowPlaying(page)
    )

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
