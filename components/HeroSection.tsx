'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import type { FC } from 'react'

const HeroSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen bg-gradient-hero pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden flex items-center">
      {/* Gradient circles background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-success-500/20 rounded-full blur-3xl opacity-30 animate-pulse-soft"></div>
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl opacity-30 animate-pulse-soft"></div>

      <div className="container-section relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-success-400" />
            <span className="text-white text-sm font-medium">Welcome to Up Next Growth</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-tight"
          >
            Attract more customers{' '}
            <span className="bg-gradient-to-r from-success-300 to-accent-300 bg-clip-text text-transparent">
              every month
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            We help businesses generate qualified leads and increase sales through online advertising and strategic growth marketing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <motion.a
              href="/configurateur"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary group"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline"
            >
              Voir nos forfaits
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-white text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-success-500 flex items-center justify-center">
                ✓
              </div>
              <span>Customized strategy</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                ✓
              </div>
              <span>Measurable results</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-success-400 flex items-center justify-center">
                ✓
              </div>
              <span>24/7 support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
