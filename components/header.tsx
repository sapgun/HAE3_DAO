"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed w-full top-0 z-50 bg-[#002A4A]">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center">
          <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="mr-3">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="#00B8D9" strokeWidth="5" />
            <path d="M30,60 Q50,30 70,60" fill="none" stroke="#00B8D9" strokeWidth="5" strokeLinecap="round" />
            <circle cx="30" cy="60" r="5" fill="#00B8D9" />
            <circle cx="50" cy="45" r="5" fill="#00B8D9" />
            <circle cx="70" cy="60" r="5" fill="#00B8D9" />
          </svg>
          <span className="text-white text-xl font-bold">해3DAO</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#vision" className="text-white hover:text-[var(--wave-cyan)] transition-colors font-medium">
            {t("nav.vision")}
          </Link>
          <Link href="#features" className="text-white hover:text-[var(--wave-cyan)] transition-colors font-medium">
            {t("nav.features")}
          </Link>
          <Link href="#community" className="text-white hover:text-[var(--wave-cyan)] transition-colors font-medium">
            {t("nav.community")}
          </Link>
          <Link href="#events" className="text-white hover:text-[var(--wave-cyan)] transition-colors font-medium">
            {t("nav.events")}
          </Link>
          <button className="bg-[var(--wave-cyan)] text-[var(--deep-navy)] px-5 py-2 rounded-full font-semibold transition-all hover:bg-[var(--light-cyan)] hover:-translate-y-0.5">
            {t("button.connect")}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button className="bg-[var(--wave-cyan)] text-[var(--deep-navy)] px-4 py-1.5 rounded-full font-semibold mr-4 text-sm">
            {t("button.connect")}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--deep-navy)] absolute w-full">
          <nav className="container py-5">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#vision"
                  className="text-white block py-2 hover:text-[var(--wave-cyan)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.vision")}
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-white block py-2 hover:text-[var(--wave-cyan)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.features")}
                </Link>
              </li>
              <li>
                <Link
                  href="#community"
                  className="text-white block py-2 hover:text-[var(--wave-cyan)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.community")}
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="text-white block py-2 hover:text-[var(--wave-cyan)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.events")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
