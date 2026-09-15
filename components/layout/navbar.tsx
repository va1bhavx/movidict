import { NAV_URLS } from "@/lib/data/nav-urls"
import Link from "next/link"
import { Input } from "../ui/input"
import { User2Icon } from "lucide-react"
import { Button } from "../ui/button"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-12">
        <h1 className="font-heading text-3xl font-bold">Movidict.</h1>
        <nav>
          <ul className="flex items-center gap-4">
            {NAV_URLS.map((url) => (
              <Link href={url.href} key={url.id}>
                {url.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex w-120 items-center gap-4">
        <div className="w-full">
          <Input className="w-full max-w-lg" placeholder="Search any movie" />
        </div>
        <Button
          variant={"ghost"}
          className="mx-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-500/30 text-center ring ring-ring"
        >
          <User2Icon className="size-4 self-center" />
        </Button>
      </div>
    </div>
  )
}
