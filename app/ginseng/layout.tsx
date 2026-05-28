import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ginseng - Coverage Analysis | NAUR",
  description: "Ginseng is an advanced Coverage Analysis solution designed to make the coverage analysis process significantly more efficient and effective for clinical trials.",
}

export default function GinsengLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
