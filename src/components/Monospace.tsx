import clsx from 'clsx';
import { Google_Sans_Code } from 'next/font/google'
import { HTMLAttributes } from 'react'

const googleSansCode = Google_Sans_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-google-sans-code',
})

export function Monospace(props: HTMLAttributes<HTMLSpanElement>) {
  const { className, children, ...rest } = props;
  return (
    <span className={clsx(googleSansCode.className, className)} {...rest}>{children}</span>
  )
}
