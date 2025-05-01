import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'AJ Dumanhug – Offensive Security Engineer',
  description:
    'AJ Dumanhug is a cybersecurity professional with over eight years of practical experience, mainly in offensive security, application security, and penetration testing.',
  openGraph: {
    title: "AJ Dumanhug – Offensive Security Engineer",
    description: "AJ Dumanhug is a cybersecurity professional with over eight years of practical experience, mainly in offensive security, application security, and penetration testing.",
    url: "https://h4ck3r.sh",
    siteName: "AJ Dumanhug – Offensive Security Engineer",
    images: [
      {
        url: "https://h4ck3r.sh/images/me.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <GoogleAnalytics GA_TRACKING_ID="G-ZYC4ZP7G3R" />
      </body>
    </html>
  )
}
