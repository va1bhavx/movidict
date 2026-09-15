import { Card } from "@/components/ui/card"
import HeroSectionData from "./component/hero-section-data"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="cover-image relative flex flex-col justify-center gap-7">
      <HeroSectionData />

      {/*movie covers*/}

      <div className="absolute -bottom-10 flex max-w-lg flex-wrap gap-4">
        <div className="h-30 w-20 overflow-hidden rounded-lg ring ring-border">
          <Image
            src={"/batman-cover-home-image.webp"}
            alt="batman image"
            width={1000}
            height={1000}
            className="object-fit h-full w-full overflow-hidden"
          />
        </div>
        <div className="h-30 w-20 overflow-hidden rounded-lg ring ring-border">
          <Image
            src={"/batman-cover-home-image.webp"}
            alt="batman image"
            width={1000}
            height={1000}
            className="object-fit h-full w-full overflow-hidden"
          />
        </div>
        <div className="h-30 w-20 overflow-hidden rounded-lg ring ring-border">
          <Image
            src={"/batman-cover-home-image.webp"}
            alt="batman image"
            width={1000}
            height={1000}
            className="object-fit h-full w-full overflow-hidden"
          />
        </div>
        <div className="h-30 w-20 overflow-hidden rounded-lg ring ring-border">
          <Image
            src={"/batman-cover-home-image.webp"}
            alt="batman image"
            width={1000}
            height={1000}
            className="object-fit h-full w-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  )
}
