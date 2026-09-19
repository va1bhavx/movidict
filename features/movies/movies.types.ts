export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  popularity: string
  poster_path: string
  release_date: string
  softcore: boolean
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieList {
  backdrop: string
  description: string
  duration: string
  genres: string[]
  id: 14
  image: string
  rating: string
  reviews: string
  tagline: string
  title: string
  year: string
}
