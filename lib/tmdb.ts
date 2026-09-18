import axios from "axios"

export const tmdb = axios.create({
  baseURL: `${process.env.TMDB_API_URL}${process.env.TMDB_API_VERSION}/`,
  headers: {
    Accept: "application/json",
  },
})

tmdb.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`
    return config
  },
  (error) => Promise.reject(error)
)

tmdb.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      console.error(`TMDB Error: `, error.response.status, error.response.data)
    }
    if (error.response?.status === 401) {
      // return authentication error
    } else {
      console.error("TMDB Network error, ", error.message)
    }

    return Promise.reject(error)
  }
)
