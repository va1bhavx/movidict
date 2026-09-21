import Image from "next/image"

const cast = Array.from({ length: 10 })

export default function DetailPageCast() {
  return (
    <section className="w-fullj">
      <div className="grid w-full shrink-0 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {cast.map((_, index) => (
          <div>
            <div
              key={index}
              className="relative aspect-2/3 w-full overflow-hidden rounded-xl bg-neutral-900"
            >
              <Image
                src="https://image.tmdb.org/t/p/w500/cO7J0XSVKPlAjUCMWC7DVBn1Py2.jpg"
                alt=""
                fill
                className="object-cover transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-sm">John Doe.</h2>
              <p className="text-xs text-muted-foreground">Actor</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
