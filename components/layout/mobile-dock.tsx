"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_URLS } from "@/lib/data/nav-urls"
import { cn } from "@/lib/utils"
import { Search, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function MobileDock() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isSearchOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearchOpen])

  useEffect(() => {
    setIsSearchOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        aria-label="Mobile Navigation Dock"
        className="pointer-events-none fixed inset-x-0 bottom-3 z-50 mx-auto flex w-full max-w-md items-center justify-center px-3 sm:bottom-4 sm:px-4 md:hidden"
      >
        <div className="pointer-events-auto flex w-full items-center justify-between gap-1 rounded-2xl border border-white/20 bg-background/85 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.6)] backdrop-blur-2xl sm:p-2 dark:border-white/10 dark:bg-neutral-900/85 dark:shadow-[0_16px_48px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)]">
          {NAV_URLS.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.id}
                href={item.href}
                title={item.name}
                aria-label={item.name}
                className={cn(
                  "group relative flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl px-1 py-1.5 transition-all duration-200 active:scale-95",
                  isActive
                    ? "bg-primary/10 font-semibold text-primary shadow-xs dark:bg-white/15 dark:text-white"
                    : "text-muted-foreground hover:bg-black/5 hover:text-foreground active:bg-black/10 dark:hover:bg-white/10"
                )}
              >
                <Icon className="mb-0.5 size-5 shrink-0 transition-transform duration-200 group-hover:scale-105" />

                <span className="max-w-full truncate text-[10px] leading-tight font-medium tracking-tight sm:text-[11px]">
                  {item.name}
                </span>

                {isActive && (
                  <span
                    className="absolute bottom-0.5 size-1 rounded-full bg-primary shadow-[0_0_6px_currentColor] dark:bg-white"
                    aria-hidden="true"
                  />
                )}
              </Link>
            )
          })}

          <div
            className="mx-0.5 h-7 w-px shrink-0 bg-border/60 dark:bg-white/15"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={() => setIsSearchOpen((prev) => !prev)}
            title="Search movies"
            aria-label="Search movies"
            aria-expanded={isSearchOpen}
            className={cn(
              "group relative flex min-w-0 flex-1 cursor-pointer flex-col items-center justify-center rounded-xl px-1 py-1.5 transition-all duration-200 active:scale-95",
              isSearchOpen
                ? "bg-primary font-semibold text-primary-foreground shadow-md"
                : "text-muted-foreground hover:bg-black/5 hover:text-foreground active:bg-black/10 dark:hover:bg-white/10"
            )}
          >
            <Search className="mb-0.5 size-5 shrink-0 transition-transform duration-200 group-hover:scale-105" />

            {/*<span className="text-[10px] sm:text-[11px] font-medium tracking-tight truncate max-w-full leading-tight">
              Search
            </span>*/}

            {isSearchOpen && (
              <span
                className="absolute bottom-0.5 size-1 rounded-full bg-primary-foreground shadow-[0_0_6px_currentColor]"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </nav>

      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 flex animate-in flex-col justify-start px-4 pt-16 duration-200 fade-in-0 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Spotlight Search"
        >
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
            onClick={() => setIsSearchOpen(false)}
            aria-hidden="true"
          />

          <div className="relative mx-auto w-full max-w-md animate-in overflow-hidden rounded-2xl border border-white/20 bg-background/95 p-4 shadow-2xl ring-1 ring-black/5 backdrop-blur-2xl duration-200 zoom-in-95 slide-in-from-top-3 dark:border-white/10 dark:bg-neutral-900/95">
            <div className="flex items-center gap-3 border-b border-border/60 pb-3">
              <Search className="size-5 shrink-0 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies, genres, actors..."
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="cursor-pointer rounded-full p-1 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search input"
                >
                  <X className="size-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="cursor-pointer rounded-lg bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                Done
              </button>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <span className="text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
                Quick Searches
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Batman",
                  "Interstellar",
                  "Sci-Fi",
                  "Top Rated",
                  "Upcoming",
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSearchQuery(tag)}
                    className="cursor-pointer rounded-full bg-muted/70 px-3 py-1 text-xs text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
