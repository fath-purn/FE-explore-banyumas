import type { Metadata } from 'next'
import { poppins } from '@/app/ui/fonts'
import './globals.css'
import Navbar from './ui/navbar'

export const metadata: Metadata = {
  title: {
    template: '%s | Explore Banyumas',
    default: 'Explore Banyumas',
  },
  description: 'Explore Banyumas',
  metadataBase: new URL('http://localhost:3000/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        <div className="relative top-[48px]">
          {children}
        </div>
      </body>
    </html>
  )
}
