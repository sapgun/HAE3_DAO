"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, Menu } from "lucide-react"

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "커뮤니티", href: "#community" },
  { label: "기능", href: "#features" },
  { label: "이벤트", href: "#events" },
  { label: "언어", href: "#language" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = () => setIsOpen(false)
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent the click from bubbling to the document
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const headerClasses = `fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 md:hidden ${
    scrolled ? "bg-[#002A4A]/90 backdrop-blur-sm shadow-md" : "bg-transparent"
  }`

  return (
    <>
      <header className={headerClasses}>
        <Link href="#" className="flex items-center gap-2 z-50">
          <span className="font-bold text-xl text-white">해3DAO</span>
        </Link>
        <motion.button
          className="z-50 p-2 text-white focus:outline-none"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#002A4A] z-40 flex flex-col md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-20 px-6 flex flex-col h-full">
              <nav className="flex-1">
                <ul className="space-y-6 text-center">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      <Link
                        href={item.href}
                        className="text-white text-2xl font-medium block py-2 hover:text-white/70 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div
                className="py-8 border-t border-white/20 mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex justify-center gap-4">
                  <button className="border border-white px-4 py-1 rounded-full text-white hover:bg-white/10 transition-colors">
                    🇰🇷 한국어
                  </button>
                  <button className="border border-white px-4 py-1 rounded-full text-white hover:bg-white/10 transition-colors">
                    🇺🇸 English
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
