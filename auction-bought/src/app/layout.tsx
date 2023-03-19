import './globals.css'

export const metadata = {
  title: 'HoneyBox',
  description: 'Made with Love by ProGamers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
