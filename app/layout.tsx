import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Hospital Galenia App',
  description: 'Clinical management application for Galenia Hospital',
  icons: {
    icon: '/favicon.png',                  // 32x32 o 48x48 funciona bien
    shortcut: '/favicon.png',              // <link rel="shortcut icon" ...>
    apple: '/favicon.png',                 // si quieres que iOS lo use también
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
