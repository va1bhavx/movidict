"use client"

import { NAV_URLS } from "@/lib/data/nav-urls"
import Link from "next/link"
import { Input } from "../ui/input"
import { User2Icon } from "lucide-react"
import { Button } from "../ui/button"
import useTypingPlaceholder from "@/hooks/useTypingPlaceholder"
import { PLACEHOLDER_DATA } from "@/lib/data/general.data"

export default function Navbar() {
  const placeholder = useTypingPlaceholder(PLACEHOLDER_DATA)

  return (
    <>
      <div className="mb-4 flex items-center justify-center gap-4 rounded-lg bg-accent/30 px-4 py-3 text-center text-xs shadow-sm ring ring-chart-1/30 sm:text-sm">
        <p>I am building it live on Youtube: </p>
        <Link
          href={"https://www.youtube.com/@va1bhavx/streams"}
          className="underline hover:text-chart-1"
        >
          Come Visit
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <h1 className="font-heading text-3xl font-bold">Movidict.</h1>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_URLS.map((url) => {
                const Icon = url.icon
                return (
                  <Link
                    href={url.href}
                    key={url.id}
                    className="flex items-center gap-2"
                  >
                    <Icon className="size-4" /> {url.name}
                  </Link>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className="flex max-w-full items-center gap-4 md:max-w-120">
          <div className="hidden w-full md:block">
            <Input className="w-full max-w-xl" placeholder={placeholder} />
          </div>
          <Button
            variant={"ghost"}
            className="mx-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-500/30 text-center ring ring-ring"
          >
            <User2Icon className="size-4 self-center" />
          </Button>
        </div>
      </div>
    </>
  )
}
