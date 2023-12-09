
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TinkerHub ICET',
  description: 'event-listing-platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <AuthContextProvider >
        
        <Navbar/>
        {children}
        </AuthContextProvider>
        <Footer/>
        </body>
      
    </html>
     
  )
}
