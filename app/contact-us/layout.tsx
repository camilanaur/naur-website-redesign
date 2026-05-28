import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get a Demo | NAUR",
  description: "Get a demo of Ginseng or share your ideas with us. Our team will reach out to schedule a meeting and discuss your goals.",
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
