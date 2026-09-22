export const QUERY_KEYS = {
  movies: {
    popular: ["movies", "popular"],
    trending: ["movies", "trending"],
    upcoming: ["movies", "upcoming"],
    nowPlaying: ["movies", "nowPlaying"],
    topRated: ["movies", "topRated"],

    details: (id: number) => ["movies", "details", id],
    images: (id: number) => ["movies", "images", id],
    credits: (id: number) => ["movies", "credits", id],
    videos: (id: number) => ["movies", "videos", id],
  },
  genres: {
    movies: ["genres", "movies"],
  },

  series: {
    popular: ["tv", "popular"],
    airingToday: ["tv", "trending"],
    onTheAir: ["tv", "upcoming"],
    topRated: ["tv", "topRated"],

    details: (id: number) => ["tv", "details", id],
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
