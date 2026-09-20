export interface Genres {
  id: number
  name: string
}

export interface ApiSuccessResponse<T> {
  result: T
  message: string
  meta?: Record<string, unknown>
}

export interface ApiErrorResponse {
  result: []
  message: string
  error?: {
    code?: string
  }
}

export interface PaginatedResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}
