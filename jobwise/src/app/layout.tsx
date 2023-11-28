import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../../Components/Navbar'
import { Footer } from '../../Components/Footer'


export const metadata: Metadata = {
  title: 'JobWise',
  description: 'JobWise - find your most desired job',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="reletive overflow-hidden flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
