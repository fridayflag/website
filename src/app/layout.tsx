import type { PropsWithChildren } from "react"
import { Cabin } from 'next/font/google'
import "@/styles/main.scss";

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cabin',
})

export default function DashboardLayout(props: PropsWithChildren) {
  return (
    <html lang="en" className={cabin.className}>
      <body>
        <main>{props.children}</main>
      </body>
    </html>
  )
}
