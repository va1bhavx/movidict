import { getLocalStorageItem, setLocalStorageItem } from "@/lib/localstorage"
import { Genres } from "@/types/general.types"

export function getGenres(
  genreIds: number[] | undefined,
  genres: Genres[]
): Genres[] {
  if (!genreIds) return []

  return genreIds
    ?.map((id) => genres?.find((genre) => genre.id === id))
    ?.filter((genre): genre is Genres => Boolean(genre))
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export function addToLocalStorage(key: string, movie: Record<string, unknown>) {
  const existing = getLocalStorageItem(key) ?? []

  const updated = [
    movie,
    ...existing.filter(
      (item: Record<string, unknown>) =>
        !(item.id === movie.id && item.type === movie.type)
    ),
  ].slice(0, 10)

  setLocalStorageItem(key, updated)
}
