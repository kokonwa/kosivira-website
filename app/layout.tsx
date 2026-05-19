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
  title: 'Kosivira DetectAid | AI-Powered Navigation for the Visually Impaired',
  description: 'Kosivira DetectAid is an intelligent wearable assistive system designed to improve independence, safety, and mobility through real-time obstacle detection and environmental awareness.',
  keywords: ['assistive technology', 'visually impaired', 'AI navigation', 'obstacle detection', 'wearable technology', 'accessibility', 'blind assistance'],
  authors: [{ name: 'Kosivira' }],
  openGraph: {
    title: 'Kosivira DetectAid | AI-Powered Navigation for the Visually Impaired',
    description: 'Intelligent wearable assistive technology for real-time obstacle detection and environmental awareness.',
    type: 'website',
  },
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
