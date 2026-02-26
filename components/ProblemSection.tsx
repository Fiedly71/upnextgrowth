'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, Zap, Target } from 'lucide-react'
import type { FC } from 'react'

const problems = [
  {
    icon: Target,
    title: 'Few customers despite your online presence',
    color: 'text-red-500',
  },
  {
    icon: TrendingDown,
    title: 'Ads that cost a lot without returns',
    color: 'text-orange-500',
  },
  {
    icon: AlertCircle,
    title: 'Lack of clear digital strategy',
    color: 'text-yellow-500',
  },
  {
    icon: Zap,
    title: 'Difficulty standing out from competition',
    color: 'text-blue-500',
  },
]

const ProblemSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            You invest time and money...{' '}
            <span className="text-accent-500">but results don't follow?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These challenges are common to many businesses without a coherent digital strategy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md-premium hover:shadow-lg-premium transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">{problem.title}</h3>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-10 md:p-12 text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-bold">
              👉 It's not your product that's the problem, it's your digital strategy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
