"use client"

import { motion } from "framer-motion"
import { Twitter, Github, MessageCircle } from "lucide-react"
import Link from "next/link"

export function SocialIcons() {
  return (
    <div className="flex gap-4">
      <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }}>
        <Link href="#" className="text-white/60 hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }}>
        <Link href="#" className="text-white/60 hover:text-white transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="sr-only">Discord</span>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }}>
        <Link href="#" className="text-white/60 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </motion.div>
    </div>
  )
}
