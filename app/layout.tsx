import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Poppins } from "next/font/google"
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
export const metadata: Metadata = {
  title: 'Arabety',
  description: 'Arabety is the number one road side assitance team out there.',
  icons: {
    icon: '../public/assets/hoobank.svg'
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
   </>
  )
}