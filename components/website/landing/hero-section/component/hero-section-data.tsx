import { Button } from "@/components/ui/button"
import { Clock1Icon, Dot, Heart, TextSearchIcon } from "lucide-react"

export default function HeroSectionData() {
  return (
    <div className="flex flex-col justify-center gap-7">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          {/*tags*/}
          <span className="text-sm text-muted-foreground uppercase">
            Adventure
          </span>
          <span className="text-sm text-muted-foreground uppercase">
            Sci-Fi
          </span>
        </div>
        <Dot />
        {/*running time*/}
        <div>
          <span className="flex items-center gap-2 text-sm text-muted-foreground uppercase">
            <Clock1Icon className="size-4" />
            1hr 31m
          </span>
        </div>
      </div>
      <div className="flex max-w-lg flex-col gap-4">
        <h1 className="text-2xl font-medium md:text-5xl">The standard chunk</h1>
        <p className="text-sm leading-relaxed text-pretty">
          The standard chunk of Lorem Ipsum used since 1966 is reproduced below
          for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
          Bonorum et Malorum
        </p>

        <div className="flex items-center gap-2">
          <Button className={"px-4"}>
            <TextSearchIcon /> Review
          </Button>

          <Button variant={"outline"}>
            <Heart />
          </Button>
        </div>
      </div>
    </div>
  )
}
