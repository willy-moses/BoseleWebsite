import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bosele Kgotla Village Development Committee - Gantsi',
  description: 'Serving Gantsi District • Building Community Together',
  keywords: 'Bosele Kgotla, VDC, Gantsi, Botswana, community development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}