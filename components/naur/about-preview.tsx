"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function AboutPreview() {
  const [imageRef, imageVisible] = useScrollAnimation<HTMLDivElement>()
  const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            ref={imageRef}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 ease-out",
              imageVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <Image
              src="/about-naur-v2.jpg"
              alt="Medical professional holding a tablet displaying digital health analytics"
              width={1000}
              height={900}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          <div
            ref={contentRef}
            className={cn(
              "max-w-xl transition-all duration-700 ease-out delay-150",
              contentVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              About NAUR
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-[44px]">
              Technology with a clear purpose.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              At NAUR, we identify and close measurable gaps in healthcare and
              life sciences through advanced software solutions. Our mission is
              to help organizations work with greater clarity, efficiency, and
              impact.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Built for healthcare and life sciences teams",
                "Designed for regulated workflows",
                "Focused on operational clarity",
                "Created to reduce workflow friction",
              ].map((item, index) => (
                <li
                  key={item}
                  className={cn(
                    "group/item flex items-start gap-2.5 text-sm font-medium leading-snug text-primary transition-all duration-300",
                    contentVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  )}
                  style={{ transitionDelay: contentVisible ? `${300 + index * 80}ms` : "0ms" }}
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover/item:scale-150" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button
                asChild
                className="group h-12 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="/about-us">
                  Learn About NAUR
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
