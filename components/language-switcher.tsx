"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <motion.button
        className={`border border-[var(--deep-navy)] px-6 py-2 rounded-full transition-colors ${
          language === "ko"
            ? "bg-[var(--deep-navy)] text-white"
            : "text-[var(--deep-navy)] hover:bg-[var(--deep-navy)] hover:text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("ko")}
      >
        🇰🇷 {t("language.ko")}
      </motion.button>
      <motion.button
        className={`border border-[var(--deep-navy)] px-6 py-2 rounded-full transition-colors ${
          language === "en"
            ? "bg-[var(--deep-navy)] text-white"
            : "text-[var(--deep-navy)] hover:bg-[var(--deep-navy)] hover:text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("en")}
      >
        🇺🇸 {t("language.en")}
      </motion.button>
      <motion.button
        className={`border border-[var(--deep-navy)] px-6 py-2 rounded-full transition-colors ${
          language === "ja"
            ? "bg-[var(--deep-navy)] text-white"
            : "text-[var(--deep-navy)] hover:bg-[var(--deep-navy)] hover:text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("ja")}
      >
        🇯🇵 {t("language.ja")}
      </motion.button>
    </div>
  )
}
