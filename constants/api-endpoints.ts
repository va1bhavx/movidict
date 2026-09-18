export const API_ENDPOINTS = {
  movies: {
    popular: "/movie/popular",
    trending: "/trending/movie/day",
    upcoming: "/movie/upcoming",
    topRated: "/movie/top_rated",
    nowPlaying: "/movie/now_playing",
    details: (id: number | string) => `/movie/${id}`,
  },

  genres: {
    movies: "/genre/movie/list",
  },

  search: {
    movies: "/search/movie",
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
