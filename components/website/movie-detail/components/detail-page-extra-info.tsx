import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MovieDetails } from "@/features/movies/movies.types"
import { getInitials } from "@/utils/general"
import { Star } from "lucide-react"
import Link from "next/link"
import countryToCurrency from "country-to-currency"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

export default function DetailPageExtraInfo({
  movie_details,
}: {
  movie_details: MovieDetails
}) {
  const country = movie_details.origin_country[0]
  const currency =
    (country as keyof typeof countryToCurrency) in countryToCurrency
      ? countryToCurrency[country as keyof typeof countryToCurrency]
      : "USD"

  const budget = new Intl.NumberFormat(country, {
    style: "currency",
    currency,
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(movie_details.budget)

  const revenue = new Intl.NumberFormat(country, {
    style: "currency",
    currency,

    notation: "compact",
    maximumFractionDigits: 1,
  }).format(movie_details.revenue)

  const d = dayjs.duration(movie_details.runtime, "hour")
  const runtimeResult = `${d.hours()}hr ${d.minutes()}min ${d.seconds()}sec`

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold sm:text-xl">Extra Info</h1>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div>
          <h1>Budget/Revenue</h1>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {budget}/{revenue}
          </p>
        </div>

        <div>
          <h1>Runtime</h1>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {runtimeResult}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {movie_details.status}
          </p>
        </div>

        <div>
          <h1>Votes</h1>
          <div className="flex items-center gap-1 text-xs font-semibold">
            <Star className="size-3 fill-amber-400 text-amber-400" />

            <span>{movie_details?.vote_average?.toFixed(1)}</span>

            <span className="text-[10px] text-amber-300/70">/ 10</span>
            <span className="text-muted-foreground">
              ({movie_details.vote_count})
            </span>
          </div>
        </div>

        <div>
          <h1>Country/Language</h1>
          <div className="flex items-center gap-2">
            {movie_details.origin_country.map((country) => (
              <p
                key={country}
                className="text-xs text-muted-foreground sm:text-sm"
              >
                {country}
              </p>
            ))}

            <p className="text-xs text-muted-foreground sm:text-sm">
              "{movie_details.original_language}"
            </p>
          </div>
        </div>

        <div>
          <h1>Homepage</h1>
          <Link
            className="text-xs text-muted-foreground underline decoration-chart-2 sm:text-sm"
            href={movie_details.homepage}
          >
            {movie_details.homepage}
          </Link>
        </div>

        <div>
          <h1>Production Companies</h1>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {movie_details.production_companies.map((company) => (
              <div key={company.id} className="flex items-center gap-2">
                <div>
                  <Avatar size="sm">
                    <AvatarImage src={company.logo_path} />
                    <AvatarFallback>{getInitials(company.name)}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h2 className="text-sm">{company.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {company.origin_country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
