import axios from "axios"

export const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 401) {
      return "You are not authenticated"
    }

    if (error.response?.status === 404) {
      return "The requested resource was not found."
    }

    if (error.response?.status === 429) {
      return "Too many requests. Please try again later."
    }

    if (error.response?.status === 500) {
      return "TMDB is currently unavailable."
    }

    return error.response?.data.status_message ?? error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return "Something went wrong!"
}
