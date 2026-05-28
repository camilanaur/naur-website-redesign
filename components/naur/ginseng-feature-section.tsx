"use client"

import Image from "next/image"
import {
  RefreshCcw,
  Gauge,
  MessagesSquare,
  Inbox,
  ShieldCheck,
  Activity,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: RefreshCcw,
    title: "Automated Coverage Analysis",
    body: "Reduce manual effort and improve accuracy.",
  },
  {
    icon: Gauge,
    title: "Faster Review Cycles",
    body: "Shorten review time and accelerate decisions.",
  },
  {
    icon: MessagesSquare,
    title: "PI and QAM Communication",
    body: "Streamline communication and keep everyone aligned.",
  },
  {
    icon: Inbox,
    title: "Centralized Feedback",
    body: "Collect, track, and resolve feedback in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-ready Workflow",
    body: "Built for regulated environments and audit readiness.",
  },
  {
    icon: Activity,
    title: "Real-Time Process Tracking",
    body: "Monitor progress and stay ahead of deadlines.",
  },
]

export function GinsengFeatureSection() {
  const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>()
  const [imageRef, imageVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
          Ginseng Solution
        </span>

        <div className="mt-3 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)] lg:gap-16">
          <div ref={contentRef}>
            <h2
              className={cn(
                "text-balance text-3xl font-bold leading-[1.1] tracking-tight text-primary transition-all duration-700 ease-out sm:text-4xl lg:text-[44px]",
                contentVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              Validated clinical trial data,{" "}
              <span className="text-brand-blue">Instantly.</span>
            </h2>

            <p
              className={cn(
                "mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 ease-out delay-100 sm:text-[17px]",
                contentVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              Our engine cross-references{" "}
              <strong className="font-semibold text-primary">NCCN, NCDs, LCDs, and FDA labels</strong>{" "}
              against your protocol, building a transparent, audit-ready coverage determination for every trial.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, body }, index) => (
                <li
                  key={title}
                  className={cn(
                    "group flex items-start gap-3 transition-all duration-500 ease-out",
                    contentVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  )}
                  style={{ transitionDelay: contentVisible ? `${150 + index * 80}ms` : "0ms" }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-all duration-300 group-hover:bg-accent/20 group-hover:text-accent group-hover:scale-110">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                      {title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={imageRef}
            className={cn(
              "relative transition-all duration-700 ease-out delay-200",
              imageVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-accent/15 blur-2xl transition-all duration-500" />

            {/* Stacked composition: billing grid + add study modal */}
            <div className="relative">
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-25px_rgba(6,26,64,0.25)] transition-all duration-500 hover:shadow-[0_40px_80px_-25px_rgba(6,26,64,0.35)]">
                <Image
                  src="/images/ginseng-query.png"
                  alt="Ginseng billing grid with validated coverage assignments per visit"
                  width={1600}
                  height={2120}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-6 hidden w-[62%] overflow-hidden rounded-xl border border-border bg-card shadow-[0_20px_60px_-20px_rgba(6,26,64,0.45)] sm:block lg:-bottom-12 lg:-right-10">
                <Image
                  src="/images/ginseng-add-study.png"
                  alt="Ginseng protocol upload step preview"
                  width={1600}
                  height={1040}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
