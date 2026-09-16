import {
  CalendarClock,
  LucideIcon,
  Rocket,
  Sparkles,
  StarCheck,
} from "lucide-react"

interface NAVURLS {
  id: number
  name: string
  href: string
  icon: LucideIcon
}

export const NAV_URLS: NAVURLS[] = [
  {
    id: 1,
    name: "Trending",
    href: "/trending",
    icon: Rocket,
  },

  {
    id: 2,
    name: "Top-rated",
    href: "/top-rated",
    icon: StarCheck,
  },

  {
    id: 3,
    name: "Latest",
    href: "/latest",
    icon: Sparkles,
  },

  {
    id: 4,
    name: "Upcoming",
    href: "/upcoming",
    icon: CalendarClock,
  },
]
