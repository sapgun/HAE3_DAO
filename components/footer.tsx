"use client"

import Link from "next/link"
import { Twitter, Github, Linkedin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-[var(--deep-navy)] text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-5">
              <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <polygon points="50,10 90,90 10,90" fill="none" stroke="#00B8D9" strokeWidth="5" />
                <path d="M30,60 Q50,30 70,60" fill="none" stroke="#00B8D9" strokeWidth="5" strokeLinecap="round" />
                <circle cx="30" cy="60" r="5" fill="#00B8D9" />
                <circle cx="50" cy="45" r="5" fill="#00B8D9" />
                <circle cx="70" cy="60" r="5" fill="#00B8D9" />
              </svg>
              <span className="text-white text-xl font-bold">해3DAO</span>
            </div>
            <p className="text-white/70 mb-5">{t("footer.about")}</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--wave-cyan)] transition-all hover:-translate-y-1"
              >
                <Twitter size={20} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--wave-cyan)] transition-all hover:-translate-y-1"
              >
                <Github size={20} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--wave-cyan)] transition-all hover:-translate-y-1"
              >
                <Linkedin size={20} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--wave-cyan)] transition-all hover:-translate-y-1"
              >
                <MessageCircle size={20} className="text-white" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-5">{t("footer.links")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#vision" className="text-white/70 hover:text-white transition-opacity">
                  {t("nav.vision")}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white/70 hover:text-white transition-opacity">
                  {t("nav.features")}
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-white/70 hover:text-white transition-opacity">
                  {t("nav.community")}
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-white/70 hover:text-white transition-opacity">
                  {t("nav.events")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-5">{t("footer.resources")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-opacity">
                  {t("footer.resources.whitepaper")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-opacity">
                  {t("footer.resources.docs")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-opacity">
                  {t("footer.resources.github")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-opacity">
                  {t("footer.resources.faq")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-5">{t("footer.newsletter")}</h3>
            <p className="text-white/70 mb-4">{t("footer.newsletter.description")}</p>
            <form className="flex flex-col xs:flex-row mb-4 w-full">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="bg-white/10 text-white px-4 py-2 rounded-full xs:rounded-r-none flex-1 min-w-0"
                required
              />
              <button
                type="submit"
                className="bg-[var(--wave-cyan)] text-[var(--deep-navy)] px-4 py-2 rounded-full xs:rounded-l-none font-semibold hover:bg-[var(--light-cyan)] transition-colors whitespace-nowrap mt-2 xs:mt-0"
              >
                {t("footer.newsletter.button")}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-white/70 text-sm">{t("footer.copyright")}</div>
      </div>
    </footer>
  )
}

export default Footer
