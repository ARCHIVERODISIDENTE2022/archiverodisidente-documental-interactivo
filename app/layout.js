import './globals.css'
import { Roboto_Mono } from 'next/font/google' // eslint-disable-line

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Archivero Disidente',
  description: 'Documental Interactivo'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={robotoMono.className}>
        {children}
      </body>
    </html>
  )
}
