import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kosivira.xyz'),
  title: { default: 'Kosivira | Engineering the Future', template: '%s | Kosivira' },
  description: 'Kosivira is an emerging innovation ecosystem building intelligent, accessible and human-centred solutions, beginning with Kosivira DetectAid.',
  keywords: ['assistive technology', 'visually impaired', 'AI navigation', 'obstacle detection', 'wearable technology', 'accessibility', 'blind assistance'],
  authors: [{ name: 'Kosivira' }],
  openGraph: {
    title: 'Kosivira | Engineering the Future',
    description: 'Intelligent, accessible and human-centred innovation from Lagos, Nigeria.',
    url: 'https://www.kosivira.xyz',
    siteName: 'Kosivira',
    type: 'website',
  },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
