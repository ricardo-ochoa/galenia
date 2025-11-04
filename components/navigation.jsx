"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Activity, Calendar, DollarSign, TrendingUp, Users, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const pathname = usePathname()
  const { theme, resolvedTheme, setTheme } = useTheme()
  const isDark = (theme ?? resolvedTheme) === "dark"

  const links = [
    { href: "/", label: "Dashboard", icon: Activity },
    { href: "/quirofanos", label: "Quirófanos", icon: Calendar },
    { href: "/presupuestos", label: "Presupuestos", icon: DollarSign },
    { href: "/demanda", label: "Demanda", icon: TrendingUp },
    { href: "/asistente-paciente", label: "Asistente", icon: Users },
  ]

  const handleToggleTheme = () => setTheme(isDark ? "light" : "dark")

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between p-2">
          {/* Logo + nombre */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Galenia Logo"
              width={120}
              height={40}
              priority
              className="rounded-sm object-contain"
            />
          </Link>

          {/* Links + toggle tema */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {links.map((link) => {
                const Icon = link.icon
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                )
              })}
            </div>
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
