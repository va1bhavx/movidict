import Image from "next/image"

const cast = Array.from({ length: 10 })

export default function DetailPageCast() {
  return (
    <section className="w-full">
      <div className="flex w-full flex-wrap gap-4">
        {cast.map((_, index) => (
          <div>
            <div
              key={index}
              className="w relative overflow-hidden rounded-full bg-neutral-900"
            >
              <Image
                src="https://image.tmdb.org/t/p/w500/cO7J0XSVKPlAjUCMWC7DVBn1Py2.jpg"
                alt=""
                height={80}
                width={80}
                className="h-20 w-20 object-cover transition-transform duration-300"
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
