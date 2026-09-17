export const API_ENDPOINTS = {
  movies: {
    popular: "/movies/popular",
    trending: "/movies/trending",
    upcoming: "/movies/upcoming",
    topRated: "/movies/top-rated",
    details: (id: number | string) => `/movies/${id}`,
  },

  search: {
    movies: "/search/movies",
    multi: "/search/multi",
  },

  auth: {
    requestToken: "/auth/request-token",
    callback: "/auth/callback",
    session: "/auth/session",
    logout: "/auth/logout",
  },

  account: {
    details: "/account",
    watchlist: "/account/watchlist",
    favorites: "/account/favorites",
  },
} as const
