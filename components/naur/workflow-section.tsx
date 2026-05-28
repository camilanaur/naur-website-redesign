"use client"

import { Upload, BarChart3, Users, CheckCircle2, Flag } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const steps = [
  { icon: Upload, title: "Import or create study information" },
  { icon: BarChart3, title: "Analyze coverage requirements" },
  { icon: Users, title: "Review with stakeholders" },
  { icon: CheckCircle2, title: "Track status and approvals" },
  { icon: Flag, title: "Move faster with confidence" },
]

export function WorkflowSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>()
  const [stepsRef, stepsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
        <h2
          ref={titleRef}
          className={cn(
            "mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight text-primary transition-all duration-700 ease-out sm:text-4xl",
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          From clinical trial data to actionable coverage analysis.
        </h2>

        <div ref={stepsRef} className="relative mt-10">
          {/* Dashed connector line - only on desktop */}
          <div
            className={cn(
              "pointer-events-none absolute left-[10%] right-[10%] top-9 hidden h-px border-t border-dashed border-border transition-all duration-1000 ease-out md:block",
              stepsVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            )}
          />

          <ol className="relative flex flex-col gap-4 md:grid md:grid-cols-5 md:gap-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className={cn(
                  "group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-500 ease-out md:flex-col md:items-center md:gap-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:text-center md:hover:-translate-y-1",
                  stepsVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
                style={{ transitionDelay: stepsVisible ? `${i * 100}ms` : "0ms" }}
              >
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-secondary transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10 md:h-[72px] md:w-[72px] md:bg-card md:shadow-[0_8px_24px_-12px_rgba(6,26,64,0.2)] md:group-hover:shadow-[0_12px_32px_-12px_rgba(6,26,64,0.3)]">
                  <s.icon className="h-5 w-5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-accent md:h-6 md:w-6" />
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground transition-all duration-300 group-hover:bg-accent md:-bottom-2 md:right-0 md:group-hover:scale-110">
                    {i + 1}
                  </span>
                </div>
                <p className="text-[15px] font-semibold text-primary transition-colors duration-300 group-hover:text-accent md:mt-5 md:max-w-[180px] md:text-balance md:text-sm">
                  {s.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
