"use client"

import Link from "next/link"
import { House } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToHome() {
  return (
    <Link href="/">
      <Button
        variant="ghost"
        size="sm"
        className="gap-2 hover:bg-transparent hover:text-brand-blue"
      >
        <House className="h-4 w-4" />
        Home
      </Button>
    </Link>
  )
}
