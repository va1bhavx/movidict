export const API_ENDPOINTS = {
  movies: {
    popular: "/movie/popular",
    trending: "/trending/movie/day",
    upcoming: "/movie/upcoming",
    topRated: "/movie/top_rated",
    nowPlaying: (page: number) => `/movie/now_playing?page=${page}`,
    details: (id: number) => `/movie/${id}`,
    images: (id: number) => `/movie/${id}/images`,
  },

  series: {
    airing_today: "/tv/airing_today",
    // trending: "/trending/movie/day",
    on_the_air: "/tv/on_the_air",
    popular: "/tv/popular",
    top_rated: "/tv/top_rated",
    details: (id: number | string) => `/tv/${id}`,
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
