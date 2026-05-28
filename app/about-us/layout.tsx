import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Who We Are | NAUR",
  description: "At Naur Inc., we identify and close gaps in the healthcare and life sciences ecosystem, leveraging technology to make a quantifiable impact on society.",
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
