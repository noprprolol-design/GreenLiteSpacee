"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Info, Building2, User, MapPin, LogIn, LogOut, Settings } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null) // <–– nanti bisa diganti NextAuth/Firebase
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Tentang Kami", href: "#tentang-kami", icon: Info },
    { label: "Fasilitas", href: "#fasilitas", icon: Building2 },
    { label: "Lokasi", href: "#lokasi", icon: MapPin },
  ]

  const handleNavClick = (e: any, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent group-hover:from-cyan-700 group-hover:to-teal-700 transition">
              GreenLiteSpace
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition font-medium"
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              )
            })}

            {/* USER MENU (desktop) */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition font-medium"
              >
                <User size={18} />
                {user ? user.name : "User"}
              </button>

              {/* Dropdown */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg py-2">
                  {!user ? (
                    <Link
                      href="/login"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-cyan-50 text-gray-700"
                    >
                      <LogIn size={18} /> Login
                    </Link>
                  ) : (
                    <>
                      <Link
                        href="/account"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-cyan-50 text-gray-700"
                      >
                        <Settings size={18} /> My Account
                      </Link>
                      <button
                        onClick={() => setUser(null)}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-gray-700"
                      >
                        <LogOut size={18} /> Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 hover:bg-cyan-50 rounded-lg transition" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-cyan-600" /> : <Menu size={24} className="text-cyan-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-cyan-100 pt-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition font-medium"
                >
                  <Icon size={20} />
                  {item.label}
                </a>
              )
            })}

            {/* MOBILE USER MENU */}
            <div className="px-4 pt-2">
              {!user ? (
                <Link
                  href="/login"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition font-medium"
                >
                  <LogIn size={20} /> Login
                </Link>
              ) : (
                <>
                  <Link
                    href="/account"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition font-medium"
                  >
                    <Settings size={20} /> My Account
                  </Link>
                  <button
                    onClick={() => setUser(null)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 rounded-lg"
                  >
                    <LogOut size={20} /> Logout
                  </button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
