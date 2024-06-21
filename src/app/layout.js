import "./globals.css";

export const metadata = {
  title: 'fleetscan',
  description: 'Web Design for Transportation and Trucking Companies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
