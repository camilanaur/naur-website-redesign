"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Layout,
  RefreshCw,
  ListChecks,
  Shield,
  FileText,
  Sparkles,
  Star,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BackToHome } from "@/components/naur/back-to-home"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: Sparkles,
    title: "Early Access",
    description:
      "Be among the first to explore our platform and experience its features before anyone else.",
  },
  {
    icon: Star,
    title: "Exclusive Offers",
    description:
      "Receive priority notifications and insider updates on the latest developments and enhancements to the platform.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description:
      "Enjoy dedicated assistance and early onboarding to ensure you make the most of our tools from day one.",
  },
]

const features = [
  {
    icon: Layout,
    title: "Template Creation",
    description:
      "Customize and create templates for various types of projects, such as clinical trials, patient care coordination, or biotech product launches.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Updates",
    description:
      "Track progress and receive real-time updates from all involved parties, ensuring timely information flow and swift decision-making.",
  },
  {
    icon: ListChecks,
    title: "Task Assignment",
    description:
      "Assign tasks to different stakeholders and monitor their completion status, whether it's coordinating with research teams or managing renovation milestones.",
  },
  {
    icon: Shield,
    title: "Secure Sharing",
    description:
      "Share project details and updates securely with relevant entities, including regulatory bodies, research institutions, or supply chain partners.",
  },
  {
    icon: FileText,
    title: "Comprehensive Reporting",
    description:
      "Generate detailed reports on project progress, compliance, and performance, aiding in effective management and review.",
  },
]

export default function PonteOpenPage() {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const [formRef, formVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const [featuresRef, featuresVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })
  const [ctaRef, ctaVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-4">
        <BackToHome />
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-160px] top-[60px] hidden h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-160px] bottom-[-120px] hidden h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-3xl lg:block"
        />

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-20">
          <div
            ref={heroRef}
            className={cn(
              "max-w-xl transition-all duration-700 ease-out",
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              PonteOpen
            </span>

            <h1 className="mt-6 text-balance text-[36px] font-bold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-[52px]">
              Discover PonteOpen: Your{" "}
              <span className="text-brand-blue">Ultimate Visibility Tool.</span>
            </h1>

            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              PonteOpen is designed to offer complete visibility into your
              multi-entity projects. Whether you&apos;re managing clinical trials,
              coordinating patient care, overseeing healthcare facility
              renovations, or navigating complex drug development processes,
              PonteOpen delivers the transparency and insights you need to stay
              informed, coordinated, and in control.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="group h-12 rounded-full bg-accent px-6 text-base font-semibold text-primary transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
              >
                <a href="https://forms.cloud.microsoft/r/7X76FfMgJT?origin=lprLink" target="_blank" rel="noopener noreferrer">
                    Join the Waitlist
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-border bg-card px-6 text-base font-semibold text-primary hover:border-primary/30 hover:bg-secondary"
              >
                <Link href="#features">See features</Link>
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "relative transition-all duration-700 ease-out delay-200",
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
          >
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-3xl bg-accent/20 blur-2xl" />
            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(6,26,64,0.25)] transition-all duration-500 hover:shadow-[0_40px_100px_-30px_rgba(6,26,64,0.35)]">
              <Image
                src="/ponteopen-dashboard.jpg"
                alt="PonteOpen multi-party project visibility dashboard preview"
                width={1200}
                height={820}
                priority
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist removed — external Microsoft Form will be used via CTA button */}

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div
            ref={benefitsRef}
            className={cn(
              "mx-auto max-w-2xl text-center transition-all duration-700 ease-out",
              benefitsVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
              Why join early
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.15] tracking-tight text-primary sm:text-4xl">
              Benefits of joining the waitlist
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {benefits.map((b, index) => (
              <article
                key={b.title}
                className={cn(
                  "group rounded-2xl border border-border bg-card p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_25px_60px_-25px_rgba(6,26,64,0.2)]",
                  benefitsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: benefitsVisible ? `${index * 120}ms` : "0ms" }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-primary">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
              Key features
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.15] tracking-tight text-primary sm:text-4xl">
              Everything you need to keep multi-party projects aligned.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              From tracking patient care plans and clinical trial progress to
              managing the logistics of medical device development and biotech
              launches, PonteOpen ensures all stakeholders are aligned and up to
              date.
            </p>
          </div>

          <div ref={featuresRef} className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {features.map((f, index) => (
              <article
                key={f.title}
                className={cn(
                  "group rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_25px_60px_-25px_rgba(6,26,64,0.2)]",
                  featuresVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: featuresVisible ? `${index * 80}ms` : "0ms" }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-primary">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1080px] px-6 lg:px-10">
          <div
            ref={ctaRef}
            className={cn(
              "relative overflow-hidden rounded-3xl bg-primary p-10 text-center transition-all duration-700 ease-out lg:p-14",
              ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <CheckCircle2 className="mx-auto h-9 w-9 text-accent" />
              <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Ready to align your stakeholders?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                Join the PonteOpen waitlist and get early access to the
                visibility tool built for healthcare and life sciences.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  className="group h-12 rounded-full bg-accent px-6 text-base font-semibold text-primary transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:scale-[1.02]"
                >
                  <Link href="#waitlist">
                    Join the Waitlist
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
