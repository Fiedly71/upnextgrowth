'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { FC } from 'react'

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Forfaits', href: '/services' },
    { name: 'À propos', href: '/about' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container-section py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center text-white font-bold">
            UNG
          </div>
          <span className="font-bold text-lg text-primary-900">Up Next Growth</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary flex items-center"
          >
            Voir les forfaits
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden"
          >
            <div className="container-section py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-accent-500 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="/services" className="btn btn-primary w-full text-center">
                Voir les forfaits
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header
