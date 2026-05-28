"use client"

import Link from "next/link"
import { ArrowRight, Leaf, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function SolutionsSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLDivElement>()
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="solutions" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div
          ref={titleRef}
          className={cn(
            "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
            Our Solutions
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.15] tracking-tight text-primary sm:text-4xl lg:text-[44px]">
            The coverage analysis bottleneck, solved
          </h2>
        </div>

        <div ref={cardsRef} className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Ginseng */}
          <article
            className={cn(
              "group flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_35px_80px_-30px_rgba(6,26,64,0.25)] lg:p-10",
              cardsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <header className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-all duration-300 group-hover:scale-110">
                <Leaf className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Ginseng
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-primary transition-colors duration-300 group-hover:text-brand-blue">
                  Coverage Analysis, automated.
                </h3>
              </div>
            </header>

            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Ginseng is a proprietary intelligent SaaS solution for coverage
              analysis for clinical trials. Built with a Physician-Developed
              Clinical &amp; Regulatory Engine, a Coverage Analysts Validated
              Algorithm, and Selective AI Application that requires limited
              human review.
            </p>

            <div className="mt-auto">
              <Button
                asChild
                className="group/btn h-11 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="/ginseng">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </article>

          {/* PonteOpen */}
          <article
            className={cn(
              "group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-primary p-8 text-primary-foreground transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_35px_80px_-30px_rgba(6,26,64,0.4)] lg:p-10",
              cardsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
            style={{ transitionDelay: cardsVisible ? "150ms" : "0ms" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
            />
            <header className="relative flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent transition-all duration-300 group-hover:scale-110">
                <Network className="h-5 w-5" />
              </span>
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  PonteOpen
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Multiparty visibility for complex healthcare projects.
                </h3>
              </div>
            </header>

            <p className="relative text-[15px] leading-relaxed text-white/75">
              PonteOpen gives sponsors, hospitals, laboratories, and providers a
              unified view of timelines, tasks, updates, and project progress —
              all in one place.
            </p>

            <div className="relative mt-auto flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="group/btn h-11 rounded-full bg-accent px-5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
              >
                <Link href="/ponteopen">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-11 rounded-full px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/ponteopen#waitlist">Join the waitlist</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
