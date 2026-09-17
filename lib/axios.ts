import axios from "axios"

export const api = axios.create({
  baseURL: `/api`,
  headers: {
    Accept: "application/json",
  },
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      console.error(`Api Error: `, error.response.status, error.response.data)
    } else {
      console.error("Network error, ", error.message)
    }

    return Promise.reject(error)
  }
)
