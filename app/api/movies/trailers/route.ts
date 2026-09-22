import { API_ENDPOINTS } from "@/constants/api-endpoints"
import { ErrorResponse, SuccessResponse } from "@/lib/api-response"
import { tmdb } from "@/lib/tmdb"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const rawMovieId = req.nextUrl.searchParams.get("id")
    const movieId = Number(rawMovieId ?? 1)

    if (!Number.isInteger(movieId) || movieId < 1) {
      return ErrorResponse("Invalid page number", 400, "INVALID_PAGE_NUMBER")
    }

    const response = await tmdb.get(API_ENDPOINTS.movies.videos(movieId))

    return SuccessResponse(
      response.data,
      `Videos for movie id: ${movieId} fetched!!`
    )
  } catch (err) {
    console.error(err)
    return ErrorResponse(
      err instanceof Error ? err.message : "Something went wrong!",
      500,
      "TMDB_MOVIE_TRAILERS_FETCH_FAILED"
    )
  }
}
