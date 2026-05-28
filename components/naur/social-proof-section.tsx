"use client"

import { Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "It was nice to see... the heavier-hitting studies come through the [Ginseng] system.",
    author: "Director of Finance",
    role: "Health System",
  },
  {
    quote:
      "[Even] having the [CA] shell — 60–70% done — reduces the manual build work significantly.",
    author: "CTO Finance Director",
    role: "NCI Comprehensive Cancer Center",
  },
]

export function SocialProofSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLDivElement>()
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div
          ref={titleRef}
          className={cn(
            "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
            Co-Creating the Future
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.15] tracking-tight text-primary sm:text-4xl lg:text-[44px]">
            Co-Creating the Future of{" "}
            <span className="text-brand-blue">Clinical Trial Activation</span>
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Insights from our pilot programs at the forefront of oncology research. Ginseng generated complex coverage analyses, including successful basket and multi-arm studies, with no functional blockers during testing.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {testimonials.map((t, index) => (
            <figure
              key={t.author}
              className={cn(
                "group relative flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_60px_-25px_rgba(6,26,64,0.22)] lg:p-10",
                cardsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: cardsVisible ? `${index * 120}ms` : "0ms" }}
            >
              <Quote
                className="h-8 w-8 text-accent transition-transform duration-500 group-hover:scale-110"
                aria-hidden
              />
              <blockquote className="text-pretty text-lg leading-relaxed text-primary lg:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto border-t border-border pt-5">
                <div className="text-sm font-semibold text-primary">
                  {t.author}
                </div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
