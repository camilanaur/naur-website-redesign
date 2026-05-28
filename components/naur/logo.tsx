import Image from "next/image"
import { cn } from "@/lib/utils"

export function NaurLogo({
  className,
  width = 114,
  height = 40,
}: {
  className?: string
  width?: number
  height?: number
}) {
  return (
    <Image
      src="/naur-logo.svg"
      alt="NAUR - Purpose-driven software solutions"
      width={width}
      height={height}
      className={cn("h-auto w-auto", className)}
      priority
    />
  )
}
