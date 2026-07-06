import { Playfair_Display, Lora, Dancing_Script, Cinzel } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata = {
  title: "Brother's Pizza & Italian Restaurant | Blackstone, VA",
  description:
    "The Only Authentic and Original Italian Cuisine in Town. Located at 301 North Main Street, Blackstone, VA 23824. Call us at (434) 292-7249.",
  keywords: 'Italian restaurant, pizza, Blackstone VA, pasta, authentic Italian, Brother\'s Pizza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lora.variable} ${dancing.variable} ${cinzel.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
