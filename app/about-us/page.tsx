"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BackToHome } from "@/components/naur/back-to-home"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const values = [
  "Collaboration",
  "Integrity",
  "Excellence",
  "Impact",
]

export default function AboutUsPage() {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })
  const [missionRef, missionVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 })
  const [teamRef, teamVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 })
  const [valuesRef, valuesVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

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
                Empowering Healthcare and Life Sciences{" "}
                <span className="text-brand-blue">Through Technology</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                At <strong className="text-primary">Naur Inc.</strong>, we identify and close gaps in the healthcare and life sciences ecosystem, leveraging technology to make a{" "}
                <strong className="text-primary">quantifiable impact</strong> on society.
              </p>
            </div>
            <div
              className={cn(
                "relative transition-all duration-700 delay-200 ease-out",
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/about-team.jpg"
                  alt="NAUR Team collaborating"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                {/* Decorative accent */}
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-accent/30 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-brand-blue/20 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        ref={missionRef}
        className="bg-muted/30 py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <h2
            className={cn(
              "text-center text-2xl font-bold text-primary md:text-3xl transition-all duration-700 ease-out",
              missionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <span className="text-brand-blue">Technology</span> with purpose
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Mission Card */}
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out hover:shadow-lg",
                missionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: missionVisible ? "100ms" : "0ms" }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="mb-4 h-1 w-10 bg-accent" />
              <h3 className="text-xl font-bold text-brand-blue">Why we exist</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To identify and close <strong className="text-primary">measurable gaps</strong> within the healthcare and life sciences ecosystem by leveraging advanced technology. We aim to{" "}
                <strong className="text-primary">empower organizations</strong> with innovative{" "}
                <strong className="text-primary">software solutions</strong> that drive efficiency, accuracy, and a quantifiable impact on society.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out hover:shadow-lg",
                missionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: missionVisible ? "200ms" : "0ms" }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="mb-4 h-1 w-10 bg-accent" />
              <h3 className="text-xl font-bold text-brand-blue">What we build</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Ginseng is a proprietary intelligent SaaS solution inclusive of Physician Developed Clinical & Regulatory Engine + Coverage Analysts Validated Algorithm +Selective AI Application that requires limited human review
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section
        ref={teamRef}
        className="bg-background py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div
            className={cn(
              "mx-auto max-w-3xl rounded-2xl border border-border bg-muted/30 p-8 text-center transition-all duration-700 ease-out lg:p-12",
              teamVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Our Team (<span className="text-brand-blue">Who We Are</span>)
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 bg-accent" />
            <h3 className="mt-6 text-xl font-bold text-brand-blue">
              A <span className="underline decoration-accent decoration-2 underline-offset-4">Unique Team</span> with a Bold Mission
            </h3>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We are not just another software company. We are a{" "}
              <strong className="text-primary">Latino</strong> and{" "}
              <strong className="text-primary">physician-led</strong> team. Our diverse perspectives and relentless drive empower us to create{" "}
              <strong className="text-primary">innovative solutions</strong> that make a real impact in the healthcare and life sciences ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        ref={valuesRef}
        className="bg-background py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div
            className={cn(
              "text-center transition-all duration-700 ease-out",
              valuesVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Our Core <span className="text-brand-blue">Values</span>
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              The <span className="text-brand-blue">Principles</span> That Drive Us
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We embrace <strong className="text-primary">creativity</strong> and{" "}
              <strong className="text-primary">innovation</strong>, fostering a culture that encourages our team to{" "}
              <strong className="text-primary">push boundaries</strong>, explore new ideas, and pioneer{" "}
              <strong className="text-primary">groundbreaking solutions</strong>.
            </p>
          </div>

          {/* Values Arc */}
          <div className="relative mt-16">
            {/* Curved line */}
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 lg:block">
              <svg className="h-24 w-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path
                  d="M0,80 Q250,0 500,80 T1000,80"
                  fill="none"
                  stroke="#5cc8be"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  opacity="0.5"
                />
              </svg>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={value}
                  className={cn(
                    "group relative rounded-2xl border border-border bg-card p-6 text-center transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:-translate-y-2",
                    valuesVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: valuesVisible ? `${150 + index * 100}ms` : "0ms" }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 transition-all duration-300 group-hover:border-accent group-hover:bg-accent/20">
                    <span className="h-3 w-3 rounded-full bg-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-primary">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
