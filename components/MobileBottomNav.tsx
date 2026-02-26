'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Briefcase, Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', icon: Home, label: 'Accueil' },
  { href: '/services', icon: Briefcase, label: 'Forfaits' },
  { href: '/contact', icon: Phone, label: 'Contact' },
]

export default function MobileBottomNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Masque la nav quand on scroll vers le bas, affiche quand on scroll vers le haut
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const moreLinks = [
    { href: '/about', label: 'À propos' },
    { href: '/legal', label: 'Mentions légales' },
    { href: '/privacy', label: 'Confidentialité' },
    { href: '/terms', label: 'CGV' },
  ]

  return (
    <>
      {/* Menu supplémentaire */}
      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setShowMenu(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="fixed bottom-16 left-0 right-0 bg-white rounded-t-3xl z-50 md:hidden shadow-2xl"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Menu</h3>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-2">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setShowMenu(false)}
                      className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 md:hidden safe-area-bottom"
      >
        <div className="flex items-center justify-around py-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-2 px-4 rounded-xl transition-colors ${
                  isActive
                    ? 'text-success-600 bg-success-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <item.icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5]' : ''}`} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </Link>
            )
          })}
          <button
            onClick={() => setShowMenu(true)}
            className="flex flex-col items-center py-2 px-4 rounded-xl text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Menu className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">Plus</span>
          </button>
        </div>
      </motion.nav>
    </>
  )
}
