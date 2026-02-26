'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'
import type { FC } from 'react'

const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Meta Ads Advertising', href: '/facebook-instagram-ads' },
        { name: 'Lead Generation', href: '/lead-generation' },
        { name: 'Website Creation', href: '/website-landing-pages' },
        { name: 'Tous nos forfaits', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Pricing', href: '/services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Use', href: '/terms' },
        { name: 'Legal Notice', href: '/legal' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden pt-12 md:pt-20 pb-6">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-success-500/10 rounded-full blur-3xl opacity-30"></div>

      <div className="container-section relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center text-white font-bold">
                UNG
              </div>
              <span className="font-bold text-base md:text-lg">Up Next Growth</span>
            </div>
            <p className="text-white/70 mb-6">
              Your partner for sustainable and measurable digital growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-success-400" />
                <span>contact@upnextgrowth.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-success-400" />
                <span>+33 6 12 34 56 78</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-success-400" />
                <span>Remote - Anywhere in France</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white/70 text-sm text-center md:text-left"
          >
            <p>&copy; 2026 Up Next Growth. All rights reserved.</p>
            <p className="mt-2">
              Made by{' '}
              <a
                href="https://gui-fiedly.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success-400 hover:text-success-300 transition-colors font-semibold"
              >
                GF Digital Studio
              </a>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-success-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </motion.div>

          {/* Scroll to top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center hover:shadow-glow transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
