import '@/styles/globals.css'
import React from 'react'
import localFont from '@next/font/local'

const jost = localFont({
  src: [
    {
      path: '../styles/fonts/static/Jost-Regular.ttf',
      weight: '400',
    },
    {
      path: '../styles/fonts/static/Jost-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../styles/fonts/static/Jost-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-jost',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jost.variable} font-sans`}>
      <body className="h-full w-full bg-prod-white-ghost">{children}</body>
    </html>
  )
}
