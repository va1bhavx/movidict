import { Genres, PaginatedResponse } from "@/types/general.types"

interface ProductionCompaniesValues {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

interface ProductionCountriesValues {
  iso_3166_1: string
  name: string
}

interface SpokenLanguagesValues {
  english_name: string
  iso_639_1: string
  name: string
}

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

export interface MovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null
  budget: number
  genres: Genres[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompaniesValues[]
  production_countries: ProductionCountriesValues[]
  release_date: string
  revenue: number
  runtime: number
  softcore: boolean
  spoken_languages: SpokenLanguagesValues[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieImagesValues {
  aspect_ratio: number
  height: number
  iso_3166_1: null | string
  iso_639_1: null | string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface MovieImages {
  backdrops: MovieImagesValues[]
  id: number
  logos: MovieImagesValues[]
  posters: MovieImagesValues[]
}

interface MovieCastList {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
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
