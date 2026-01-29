import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abubakar Arif | Creative Developer & Designer',
  description: 'A showcase of my web development projects and graphic design work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}

