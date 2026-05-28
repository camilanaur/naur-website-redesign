"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BackToHome } from "@/components/naur/back-to-home"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import {
  Search,
  Clock,
  MessageSquare,
  LayoutDashboard,
  Shield,
  Activity,
  CheckCircle2,
} from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Automated Coverage Analysis",
    description: "Easily generate coverage analysis for cancer clinical trials with automated tools that streamline the process.",
  },
  {
    icon: Clock,
    title: "Faster Review Cycles",
    description: "Accelerate the review process with efficient workflows and automated notifications.",
  },
  {
    icon: MessageSquare,
    title: "Enhanced study team communication",
    description: "Enhance collaboration between study teams through automated tools.",
  },
  {
    icon: LayoutDashboard,
    title: "Comprehensive Dashboard",
    description: "Access a complete overview of all ongoing and completed coverage analyses from a single dashboard.",
  },
  {
    icon: Shield,
    title: "Secure Data Management",
    description: "Ensure all data is managed securely, with compliance to relevant regulations and standards.",
  },
  {
    icon: Activity,
    title: "Real-Time Tracking",
    description: "Track the status of each coverage analysis in real-time, from creation to completion.",
  },
]

const benefits = [
  "Fast",
  "Accurate",
  "User friendly",
  "Intelligent",
]

export default function GinsengPage() {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })
  const [whatRef, whatVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 })
  const [featuresRef, featuresVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-4">
        <BackToHome />
      </div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-background py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className={cn(
                "transition-all duration-700 ease-out",
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-[42px]">
                <span className="text-brand-blue">Ginseng:</span> Revolutionizing the{" "}
                <span className="text-brand-blue">Coverage Analysis Process</span> through a tailored software solution
              </h1>
              <div className="mt-8">
                <Button
                  asChild
                  className="h-12 rounded-full bg-accent px-8 text-sm font-semibold text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact-us">Get a Demo</Link>
                </Button>
              </div>
            </div>
            <div
              className={cn(
                "relative transition-all duration-700 delay-200 ease-out",
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/ginseng-dashboard-q.png"
                  alt="Ginseng Dashboard - Coverage Analysis Platform"
                  width={1600}
                  height={1040}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ginseng Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div
            ref={whatRef}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            {/* Circular Benefits Diagram */}
            <div
              className={cn(
                "relative flex items-center justify-center transition-all duration-700 ease-out",
                whatVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              )}
            >
              <div className="relative h-[340px] w-[340px] md:h-[400px] md:w-[400px]">
                {/* Orbit ring */}
                <div className="absolute inset-[44px] rounded-full border-2 border-dashed border-accent/30 md:inset-[52px]" />
                {/* Central G logo */}
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent/20 md:h-32 md:w-32">
                  <span className="text-5xl font-bold text-accent md:text-6xl">G</span>
                </div>
                {/* Benefits positioned around — radius matches ring (container/2 - inset) */}
                {benefits.map((benefit, index) => {
                  const angle = (index * 90 - 90) * (Math.PI / 180)
                  return (
                    <div
                      key={benefit}
                      className={cn(
                        "absolute left-1/2 top-1/2 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-border bg-card text-center shadow-md transition-all duration-500 hover:scale-110 hover:border-accent md:h-[96px] md:w-[96px]",
                        whatVisible ? "opacity-100" : "opacity-0"
                      )}
                      style={{
                        transform: `translate(-50%, -50%) translate(${Math.cos(angle) * 126}px, ${Math.sin(angle) * 126}px)`,
                        transitionDelay: whatVisible ? `${200 + index * 100}ms` : "0ms",
                      }}
                    >
                      <span className="text-xs font-semibold text-primary md:text-sm">{benefit}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Content */}
            <div
              className={cn(
                "transition-all duration-700 delay-200 ease-out",
                whatVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              )}
            >
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                What Is <span className="text-brand-blue">Ginseng</span>?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                <strong className="text-primary">Ginseng</strong> – an advanced{" "}
                <strong className="text-primary">Coverage Analysis</strong> solution designed to make the coverage analysis (CA) process significantly more efficient and effective. As our pioneering product,{" "}
                <strong className="text-primary">Ginseng</strong> is meticulously designed and developed to address the Principal Investigator (PI) experience while addressing regulatory and compliance requirements.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">25 MILLION+</strong> People across the US benefit as advanced therapies and treatments are brought to people faster worldwide (6 billion people).
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    According to a study published in the journal <em>Health Information National Trends Survey</em>, 9% of American adults have ever participated in a clinical trial.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-primary px-8 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Link href="/contact-us">Get a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paradigm Shift Banner */}
      <section className="bg-muted py-10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            <strong className="text-primary">Ginseng</strong> is not just a software solution; it is a paradigm shift in how you{" "}
            <strong className="text-primary">approach coverage analysis</strong>. By choosing Ginseng as your coverage analysis system, you are investing in a product designed to{" "}
            <strong className="text-primary">elevate your experience</strong> and speed to getting{" "}
            <strong className="text-primary">life-saving</strong> therapies to patients faster.
          </p>
        </div>
      </section>

      {/* Inside Ginseng — product gallery */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
              Inside Ginseng
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-[44px]">
              Built end-to-end for{" "}
              <span className="text-brand-blue">clinical research teams.</span>
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              From the moment a study is uploaded to the moment a billing grid is approved, every step is purpose-built for PIs, QAMs, and study coordinators.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Big card: Dashboard */}
            <figure className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_rgba(6,26,64,0.25)] transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(6,26,64,0.35)] lg:col-span-8">
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                      <CheckCircle2 className="h-3 w-3" />
                      Dashboard
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-primary sm:text-2xl">
                      Every study, every status, in one place.
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                      Track coverage analyses across review states with completion times, sponsors, and PIs at a glance.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-border bg-background">
                  <Image
                    src="/images/ginseng-dashboard-q.png"
                    alt="Ginseng dashboard listing all studies and their review state"
                    width={1600}
                    height={1040}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </figure>

            {/* Tall card: Login */}
            <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-primary text-primary-foreground shadow-[0_30px_60px_-30px_rgba(6,26,64,0.4)] transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(6,26,64,0.5)] lg:col-span-4">
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  <Shield className="h-3 w-3" />
                  Secure access
                </span>
                <h3 className="text-xl font-semibold sm:text-2xl">
                  Built for regulated environments.
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/80">
                  Role-based authentication for PIs, QAMs, and sponsors with full audit trails.
                </p>
              </div>
              <div className="mt-auto overflow-hidden">
                <Image
                  src="/images/ginseng-login.png"
                  alt="Ginseng login screen with NAUR branding"
                  width={1600}
                  height={1040}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </figure>

            {/* Wide card: Add study */}
            <figure className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_rgba(6,26,64,0.25)] transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(6,26,64,0.35)] lg:col-span-6">
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                  <Search className="h-3 w-3" />
                  Add Study
                </span>
                <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                  Upload a protocol. Map page ranges. Done.
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Guided steps capture protocol details, schedule of events, and objectives in minutes.
                </p>
                <div className="overflow-hidden rounded-xl border border-border bg-background">
                  <Image
                    src="/images/ginseng-add-study.png"
                    alt="Ginseng Add Study flow capturing protocol details"
                    width={1600}
                    height={1040}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </figure>

            {/* Wide card: Billing grid */}
            <figure className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_rgba(6,26,64,0.25)] transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(6,26,64,0.35)] lg:col-span-6">
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                  <LayoutDashboard className="h-3 w-3" />
                  Billing Grid
                </span>
                <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                  Audit-ready billing grid, automatically generated.
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Sponsor (S), Insurance (N), and Non-billable (NB) assignments per visit and assessment.
                </p>
                <div className="overflow-hidden rounded-xl border border-border bg-background">
                  <Image
                    src="/images/ginseng-query.png"
                    alt="Ginseng billing grid with coverage assignments across visits"
                    width={1600}
                    height={2120}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section
        ref={featuresRef}
        className="bg-background py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div
            className={cn(
              "text-center transition-all duration-700 ease-out",
              featuresVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Product <span className="text-brand-blue">Features</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "group relative rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1",
                    featuresVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: featuresVisible ? `${100 + index * 80}ms` : "0ms" }}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="mb-3 h-1 w-8 bg-accent/50" />
                  <h3 className="text-lg font-semibold text-brand-blue">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description.split(/(\breview process\b|\bautomated\b|\bcomplete overview\b|\bmanaged securely\b|\bstatus\b|\bcollaboration\b)/gi).map((part, i) => {
                      const isHighlight = /^(review process|automated|complete overview|managed securely|status|collaboration)$/i.test(part)
                      return isHighlight ? <strong key={i} className="text-primary">{part}</strong> : part
                    })}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
