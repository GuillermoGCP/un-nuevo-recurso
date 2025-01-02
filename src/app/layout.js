import { Geist, Geist_Mono, Atma } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const atma = Atma({
  variable: '--font-atma',
  subsets: ['latin'],
  weight: ['300', '600'],
})
export const metadata = {
  title: 'Un nuevo recurso',
  description:
    'Organización no gubernamental que busca mejorar la calidad de vida de las personas',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${atma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
