import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/naur/header'
import { Footer } from '@/components/naur/footer'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NAUR — Purpose-driven AI software for healthcare and life sciences',
  description:
    'NAUR builds intelligent platforms that help clinical and healthcare teams simplify complex workflows, improve visibility, and move faster with confidence.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} bg-background`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
