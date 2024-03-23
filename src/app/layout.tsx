import Header from '@/templates/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/templates/Footer'
import Copyright from '@/templates/Copyright'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ponpes Abu Hurairah',
  description: 'Ponpes Abu Hurairah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  )
}
