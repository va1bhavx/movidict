import HeroSection from "@/components/website/landing/hero-section/hero-section"
import MovieExplorer from "@/components/website/landing/movie-explorer/movie-explorer"
import Movies from "@/components/website/landing/movies/movies"
import Series from "@/components/website/landing/series/series"

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-8">
      <HeroSection />
      <MovieExplorer />
      <Movies />
      <Series />
    </div>
  )
}
