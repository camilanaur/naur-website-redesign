"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NaurLogo } from "./logo"
import { cn } from "@/lib/utils"

const navLinks = [
  {
    label: "Solutions",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Ginseng", href: "/ginseng", description: "Coverage analysis" },
      { label: "PonteOpen", href: "/ponteopen", description: "Multiparty visibility" },
    ],
  },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="NAUR home" className="shrink-0">
          <NaurLogo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <div key={l.label} className="relative">
              {l.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-brand-blue"
                  >
                    {l.label}
                    <ChevronDown className={cn(
                      "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200",
                      dropdownOpen && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "absolute left-0 top-full pt-2 transition-all duration-200",
                    dropdownOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2"
                  )}>
                    <div className="w-56 rounded-lg border border-border bg-card p-2 shadow-lg">
                      {l.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-md px-3 py-2.5 transition-colors hover:bg-secondary"
                        >
                          <span className="block text-sm font-medium text-foreground">{child.label}</span>
                          <span className="block text-xs text-muted-foreground">{child.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={l.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-blue",
                    pathname === l.href ? "text-brand-blue" : "text-foreground/80"
                  )}
                >
                  {l.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" className="h-10 rounded-full px-5 text-sm font-medium text-foreground hover:bg-secondary">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="h-10 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            <Link href="/contact-us">Get a Demo</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background lg:hidden",
          open ? "max-h-[480px]" : "max-h-0",
          "transition-[max-height] duration-300 ease-out",
        )}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-4">
          <div className="border-b border-border pb-2 mb-2">
            <span className="px-3 py-2 text-xs font-semibold uppercase text-muted-foreground">Solutions</span>
            {navLinks[0].children?.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
              >
                {child.label}
                <span className="block text-sm text-muted-foreground">{child.description}</span>
              </Link>
            ))}
          </div>
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium hover:bg-secondary",
                pathname === l.href ? "text-brand-blue" : "text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
            <Button asChild variant="outline" className="h-12 rounded-full border-border bg-transparent text-foreground">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact-us">Get a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
