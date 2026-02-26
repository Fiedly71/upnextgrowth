'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Lock, Rocket } from 'lucide-react'
import type { FC } from 'react'

const trustPoints = [
  {
    icon: TrendingUp,
    title: 'Performance first',
    description: 'Data-driven approach and measurable results, not empty promises.',
  },
  {
    icon: Users,
    title: 'Personalized strategies',
    description: 'Every project is unique. No generic solutions or ready-made templates.',
  },
  {
    icon: Lock,
    title: 'Total transparency',
    description: 'You know exactly what\'s being done, why, and what the results are.',
  },
  {
    icon: Rocket,
    title: 'Long-term vision',
    description: 'We build sustainable growth, not fleeting results.',
  },
]

const TrustSection: FC = () => {
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
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-success-100 rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/2"></div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Why work with{' '}
            <span className="gradient-text">Up Next Growth</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're not looking for clients, we're building lasting partnerships based on trust and results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12"
        >
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md-premium hover:shadow-lg-premium border border-gray-100 transition-all duration-300"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success-100 to-success-50 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-success-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-900 via-primary-700 to-success-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-bold mb-4">
              👉 We're not looking for clients, we're building partnerships
            </p>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Based on mutual trust, transparency, and tangible results.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {[
            { number: '120+', label: 'Satisfied clients' },
            { number: '300%', label: 'Average ROI' },
            { number: '10K+', label: 'Leads generated' },
            { number: '4.9/5', label: 'Client rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.number}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection
