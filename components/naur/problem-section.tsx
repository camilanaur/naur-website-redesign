"use client"

import { Network, TimerReset, DollarSign, Eye } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const cards = [
  {
    icon: TimerReset,
    title: "Faster completion",
    body: (
      <>
        Ginseng completes a coverage analysis in under <strong className="font-semibold text-brand-blue">30 minutes</strong>, versus <strong className="font-semibold text-brand-blue">15–50 days</strong> at benchmarked cancer centers.
      </>
    ),
  },
  {
    icon: DollarSign,
    title: "Reduced costs",
    body: (
      <>
        At least <strong className="font-semibold text-brand-blue">30%</strong> cost reduction versus outsourced coverage analysis, with greater savings possible depending on volume and contract duration.*
      </>
    ),
  },
  {
    icon: Eye,
    title: "Improved accuracy",
    body: (
      <>
        <strong className="font-semibold text-brand-blue">90%</strong> accuracy on oncology coverage analyses, grounded in NCCN Guidelines, NCDs & LCDs, FDA labels, eviCore guidelines, and institutional preferences.
      </>
    ),
  },
]

export function ProblemSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>()
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <h2
          ref={titleRef}
          className={cn(
            "mx-auto max-w-3xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight text-primary transition-all duration-700 ease-out sm:text-4xl lg:text-[44px]",
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          Coverage analysis shouldn&apos;t slow your trials down.
        </h2>
        <p
          className={cn(
            "mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted-foreground transition-all duration-700 ease-out delay-100 sm:text-lg",
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          Manual coverage analysis is fragmented, slow, and hard to audit. Ginseng changes that.
        </p>

        <div
          ref={cardsRef}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {cards.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className={cn(
                "group rounded-2xl border border-border bg-card p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_rgba(6,26,64,0.22)]",
                cardsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : "0ms" }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-accent/20 group-hover:text-accent group-hover:scale-110">
                <Icon className="h-5 w-5 transition-transform duration-300" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          *Conditional savings depend on volume, contract duration, and program specifics.
        </p>
      </div>
    </section>
  )
}
