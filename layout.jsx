import './globals.css'

export const metadata = {
  title: 'FILMSYN - Audiovisual Director & Designer',
  description: 'Immersive cinematic narratives and audiovisual experiences crafted to set your brand apart.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
