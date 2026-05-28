import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PonteOpen — Multiparty visibility | NAUR",
  description:
    "PonteOpen offers complete visibility into multi-entity projects: clinical trials, patient care, healthcare facility renovations, and complex drug development.",
}

export default function PonteOpenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
