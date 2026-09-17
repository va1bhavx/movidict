export const QUERY_KEYS = {
  movies: {
    popular: ["movies", "popular"],
    trending: ["movies", "trending"],
    upcoming: ["movies", "upcoming"],

    details: (id: number) => ["movies", "details", id],
  },

  search: {
    movies: (query: string) => ["search", "movies", query],
  },

  auth: {
    session: ["auth", "session"],
  },

  account: {
    details: ["account", "details"],
    watchlist: ["account", "watchlist"],
    favorites: ["account", "favorites"],
  },
} as const
