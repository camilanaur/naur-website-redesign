"use client"

import { HeartPulse, Leaf, BrainCircuit, BarChart4 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: HeartPulse,
    title: "Healthcare-first thinking",
    body: "We understand the complexity of clinical and healthcare workflows.",
  },
  {
    icon: Leaf,
    title: "Purpose-driven technology",
    body: "We build with intention to solve real problems that matter.",
  },
  {
    icon: BrainCircuit,
    title: "AI-native solutions",
    body: "Our platforms use AI to enhance accuracy, speed, and clarity.",
  },
  {
    icon: BarChart4,
    title: "Designed for measurable outcomes",
    body: "We help teams improve visibility, efficiency, and decision-making.",
  },
]

export function WhyNaurSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>()
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <h2
          ref={titleRef}
          className={cn(
            "mx-auto max-w-3xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight text-primary transition-all duration-700 ease-out sm:text-4xl lg:text-[44px]",
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          Built at the intersection of healthcare, technology, and measurable
          impact.
        </h2>

        <div ref={cardsRef} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className={cn(
                "group rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_rgba(6,26,64,0.22)]",
                cardsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : "0ms" }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-accent/20 group-hover:text-accent group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-accent">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
