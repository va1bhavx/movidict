import { PaginatedResponse } from "@/types/general.types"

export interface Movie {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  softcore: boolean
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieListResponse extends PaginatedResponse<Movie> {
  dates?: {
    maximum: string
    minimum: string
  }
}

// export interface MovieList {
//   backdrop: string
//   description: string
//   duration: string
//   genres: string[]
//   id: 14
//   image: string
//   rating: string
//   reviews: string
//   tagline: string
//   title: string
//   year: string
// }
