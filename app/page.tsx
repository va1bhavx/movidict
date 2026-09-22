"use client"
import HeroSection from "@/components/website/landing/hero-section/hero-section"
import Movies from "@/components/website/landing/movies/movies"
import RecentlyViewed from "@/components/website/landing/recently-viewed/recently-viewed"
import Series from "@/components/website/landing/series/series"
import { getLocalStorageItem } from "@/lib/localstorage"

export default function Page() {
  const recently_viewed_movie_details = getLocalStorageItem(
    "user_recently_viewed"
  )

  console.log(recently_viewed_movie_details, "recently_viewed_movie_details")
  return (
    <div className="flex w-full flex-col gap-8">
      <HeroSection />
      <RecentlyViewed movies={recently_viewed_movie_details} />
      <Movies />
      <Series />
    </div>
  )
}
