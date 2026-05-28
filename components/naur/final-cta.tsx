"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function FinalCTA() {
  const [sectionRef, sectionVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative overflow-hidden bg-secondary/70 py-20 lg:py-24"
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl transition-all duration-1000 ease-out",
          sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-24 -bottom-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl transition-all duration-1000 ease-out delay-200",
          sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
      />
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div
            className={cn(
              "transition-all duration-700 ease-out",
              sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-[44px]">
              Ready to simplify complex healthcare workflows?
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              Discover how NAUR can help your team move faster, improve
              visibility, and make clinical operations easier to manage.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col gap-3 transition-all duration-700 ease-out delay-200 sm:flex-row lg:justify-end",
              sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <Button
              asChild
              className="group h-12 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
            >
              <Link href="/contact-us">Get a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
