import { Geist, Geist_Mono, Manrope } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import Navbar from "@/components/layout/navbar"
import MobileDock from "@/components/layout/mobile-dock"
import QueryClientProviders from "@/providers/query-client.provider"

const manropeHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
})

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        manropeHeading.variable
      )}
    >
      <body>
        <QueryClientProviders>
          <TooltipProvider>
            <ThemeProvider>
              <div className="relative flex flex-col gap-4">
                {/*headers*/}
                <header className="sticky top-0 z-40 border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md">
                  <Navbar />
                </header>
                {/*main*/}

                <main className="flex p-4 pb-24 md:pb-4">{children}</main>

                {/*footer*/}

                {/* Mobile Dock (pinned to viewport bottom) */}
                <MobileDock />
              </div>
            </ThemeProvider>
          </TooltipProvider>
        </QueryClientProviders>
      </body>
    </html>
  )
}
