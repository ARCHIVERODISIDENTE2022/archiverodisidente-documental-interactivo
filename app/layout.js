import './globals.css'

export const metadata = {
  title: 'Archivero Disidente',
  description: 'Documental Interactivo'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body>
        {children}
      </body>
    </html>
  )
}
