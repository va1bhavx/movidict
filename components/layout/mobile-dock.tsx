"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_URLS } from "@/lib/data/nav-urls"
import { cn } from "@/lib/utils"
import { Search, X } from "lucide-react"

export default function MobileDock() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  // Auto-focus input when search opens
  React.useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isSearchOpen])

  // Close search on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearchOpen])

  // Close search when route changes
  React.useEffect(() => {
    setIsSearchOpen(false)
  }, [pathname])

  return (
    <>
      {/* Apple-inspired Floating Mobile Dock */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="fixed bottom-4 inset-x-0 z-50 mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center justify-center md:hidden pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 rounded-full p-2 bg-background/80 dark:bg-neutral-900/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)]">
          {/* 4 Navigation Items */}
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
                  "group relative flex size-11 items-center justify-center rounded-full transition-all duration-200 active:scale-90",
                  isActive
                    ? "bg-primary/10 text-primary dark:bg-white/15 dark:text-white font-medium shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10"
                )}
              >
                <Icon className="size-5 transition-transform duration-200 group-hover:scale-110" />

                {/* macOS / iOS Dock Active Dot Indicator */}
                {isActive && (
                  <span
                    className="absolute bottom-1 size-1 rounded-full bg-primary dark:bg-white shadow-[0_0_6px_currentColor]"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">{item.name}</span>
              </Link>
            )
          })}

          {/* Apple Dock Divider */}
          <div
            className="h-5 w-px bg-border/60 dark:bg-white/15 mx-0.5 shrink-0"
            aria-hidden="true"
          />

          {/* 5th Item: Search Trigger */}
          <button
            type="button"
            onClick={() => setIsSearchOpen((prev) => !prev)}
            title="Search movies"
            aria-label="Search movies"
            aria-expanded={isSearchOpen}
            className={cn(
              "group relative flex size-11 items-center justify-center rounded-full transition-all duration-200 active:scale-90 cursor-pointer",
              isSearchOpen
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10"
            )}
          >
            <Search className="size-5 transition-transform duration-200 group-hover:scale-110" />

            {isSearchOpen && (
              <span
                className="absolute bottom-1 size-1 rounded-full bg-primary-foreground shadow-[0_0_6px_currentColor]"
                aria-hidden="true"
              />
            )}

            <span className="sr-only">Search</span>
          </button>
        </div>
      </nav>

      {/* Apple Spotlight Search Modal */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-start px-4 pt-16 md:hidden animate-in fade-in-0 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Spotlight Search"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
            onClick={() => setIsSearchOpen(false)}
            aria-hidden="true"
          />

          {/* Spotlight Card */}
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-background/95 dark:bg-neutral-900/95 p-4 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 animate-in zoom-in-95 slide-in-from-top-3 duration-200">
            <div className="flex items-center gap-3 border-b border-border/60 pb-3">
              <Search className="size-5 text-muted-foreground shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies, genres, actors..."
                className="w-full bg-transparent text-sm placeholder:text-muted-foreground outline-none text-foreground"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-muted-foreground hover:text-foreground rounded-full p-1 cursor-pointer"
                  aria-label="Clear search input"
                >
                  <X className="size-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="rounded-lg bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground cursor-pointer"
              >
                Done
              </button>
            </div>

            {/* Quick Suggestions / Trending Tags */}
            <div className="mt-3 flex flex-col gap-2">
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
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
                    className="rounded-full bg-muted/70 hover:bg-muted px-3 py-1 text-xs text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
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
