import './globals.css'

export const metadata = {
  title: 'cad3na',
  description: 'cad3na.io',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
