"use client"

import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Lock, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Hero() {
  const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const [imageRef, imageVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section className="relative overflow-hidden">
      {/* decorative blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-[80px] hidden h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-160px] bottom-[-120px] hidden h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl lg:block"
      />

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-20">
        <div
          ref={contentRef}
          className={cn(
            "max-w-xl transition-all duration-700 ease-out",
            contentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          )}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-accent/50 hover:shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Healthcare &amp; Life Sciences AI
          </span>

          <h1 className="mt-6 text-balance text-[36px] font-bold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-[52px]">
            Activate <span className="text-brand-blue">Oncology Trials</span> in Minutes, Not Months.
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Coverage analysis built for speed, intelligence, and audit-ready accuracy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="group h-12 rounded-full bg-accent px-6 text-base font-semibold text-primary transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
            >
              <Link href="/contact-us">
                Get a Demo
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, top: "Built for", bottom: "clinical workflows", delay: 0 },
              { icon: Lock, top: "Designed for", bottom: "regulated environments", delay: 100 },
              { icon: Sparkles, top: "AI-powered", bottom: "operational intelligence", delay: 200 },
            ].map(({ icon: Icon, top, bottom, delay }) => (
              <li
                key={top}
                className="group flex items-start gap-3 transition-all duration-300 hover:-translate-y-0.5"
                style={{ transitionDelay: contentVisible ? `${delay}ms` : "0ms" }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-all duration-300 group-hover:bg-accent/20 group-hover:text-accent">
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <div className="text-sm leading-tight">
                  <div className="text-muted-foreground">{top}</div>
                  <div className="font-semibold text-primary">{bottom}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={imageRef}
          className={cn(
            "relative transition-all duration-700 ease-out delay-200",
            imageVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          )}
        >
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-3xl bg-accent/20 blur-2xl transition-all duration-500" />

          {/* Main: people photo */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(6,26,64,0.25)] transition-all duration-500 hover:shadow-[0_40px_100px_-30px_rgba(6,26,64,0.35)]">
            <Image
              src="/hero-team.jpg"
              alt="Healthcare and clinical research professionals collaborating"
              width={1200}
              height={900}
              priority
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Floating dashboard preview */}
          <div className="absolute -bottom-8 -left-6 hidden w-[58%] overflow-hidden rounded-xl border border-border bg-card shadow-[0_20px_60px_-20px_rgba(6,26,64,0.4)] transition-transform duration-500 hover:-translate-y-1 sm:block lg:-bottom-10 lg:-left-10">
            <Image
              src="/images/ginseng-dashboard-q.png"
              alt="Ginseng coverage analysis dashboard preview"
              width={1600}
              height={1040}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
