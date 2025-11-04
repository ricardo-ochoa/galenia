import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
