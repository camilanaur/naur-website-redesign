"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"
import { NaurLogo } from "./logo"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const columns = [
  {
    title: "Ginseng:",
    subtitle: "Coverage analysis",
    links: [{ label: "Learn More", href: "/ginseng" }],
  },
  {
    title: "PonteOpen:",
    subtitle: "Multiparty visibility",
    links: [{ label: "Learn More", href: "/ponteopen" }],
  },
  {
    title: "",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
]

export function Footer() {
  const [footerRef, footerVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <footer
      ref={footerRef}
      className="bg-footer-bg text-footer-foreground"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-10">
        <div
          className={cn(
            "grid grid-cols-1 gap-10 transition-all duration-700 ease-out md:grid-cols-2 lg:grid-cols-5",
            footerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <NaurLogo width={100} height={36} className="brightness-0 invert" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/naur-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NAUR on LinkedIn"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-all duration-300 hover:border-accent hover:bg-accent hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {columns.map((c, colIndex) => (
            <div
              key={colIndex}
              className={cn(
                "transition-all duration-500 ease-out",
                footerVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: footerVisible ? `${100 + colIndex * 80}ms` : "0ms" }}
            >
              {c.title && (
                <h4 className="text-sm font-semibold text-white">
                  {c.title}
                  {c.subtitle && <span className="block font-normal text-white/70">{c.subtitle}</span>}
                </h4>
              )}
              <ul className={cn("space-y-2", c.title ? "mt-3" : "mt-0")}>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group relative text-sm text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div
            className={cn(
              "transition-all duration-500 ease-out",
              footerVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: footerVisible ? "340ms" : "0ms" }}
          >
            <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
              <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Location
            </h4>
            <address className="mt-3 not-italic text-sm leading-relaxed text-white/70">
              245 Main Street,
              <br />
              Cambridge, MA 02142 USA
            </address>
          </div>
        </div>

        <div
          className={cn(
            "mt-10 border-t border-white/10 pt-6 text-center transition-all duration-700 ease-out delay-300",
            footerVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <p className="text-xs text-white/50">
            © 2026 NAUR INC. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}
