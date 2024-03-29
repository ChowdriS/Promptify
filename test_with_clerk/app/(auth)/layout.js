import { Source_Code_Pro } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import {neobrutalism} from "@clerk/themes";

const inter = Source_Code_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptify',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className bg-black flex items-center justify-center min-h-screen`}>
      <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
      >
        {children}
      </ClerkProvider>
      </body>
    </html>
  )
}
