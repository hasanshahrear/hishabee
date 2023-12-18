import { Dashboard } from "@/features/dashboard"
import { GlobalProvider } from "@/providers"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hishabee",
  description: "Job Task",
}

type TProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <Dashboard>{children}</Dashboard>
        </GlobalProvider>
      </body>
    </html>
  )
}
