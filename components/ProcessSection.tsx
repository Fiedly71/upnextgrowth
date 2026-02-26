'use client'

import { motion } from 'framer-motion'
import type { FC } from 'react'

const steps = [
  {
    title: 'In-depth analysis',
    description: 'Analysis of your business, your market, and your current online presence.',
  },
  {
    title: 'Creation & Optimization',
    description: 'Creation or optimization of your website / landing page for conversion.',
  },
  {
    title: 'Campaign launch',
    description: 'Launch of advertising campaigns and strategic conversion funnels.',
  },
  {
    title: 'Continuous optimization',
    description: 'Monitoring, optimization, and continuous improvement of results and ROI.',
  },
]

const ProcessSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="process" className="py-12 md:py-20 relative overflow-hidden section-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-success-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Our{' '}
            <span className="gradient-text">4-step method</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A proven process that guarantees measurable and lasting results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 -right-4 w-8 h-1 bg-gradient-to-r from-success-500 to-transparent"></div>
              )}

              {/* Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-md-premium hover:shadow-lg-premium border border-gray-100 hover:border-success-300 group transition-all duration-300 h-full">
              <div className="rounded-full bg-gradient-to-br from-success-100 to-success-50 w-12 h-12 flex items-center justify-center mb-6 group-hover:from-success-200 group-hover:to-success-100 transition-colors">
                  <span className="text-success-600 font-bold text-lg">{index + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-success-600 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-success-50 to-accent-50 rounded-2xl p-6 md:p-8 border border-success-200"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">AVERAGE DURATION</p>
              <p className="text-xl md:text-2xl font-bold text-primary-900">2-3 months</p>
            </div>
            <div className="hidden md:block border-l-2 border-r-2 border-success-300"></div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">FIRST RESULTS</p>
              <p className="text-xl md:text-2xl font-bold text-success-600">2-4 weeks</p>
            </div>
            <div className="hidden md:block md:col-span-3 border-t-2 border-success-300"></div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">CONTINUOUS IMPROVEMENT</p>
              <p className="text-xl md:text-2xl font-bold text-accent-500">+20% month/month</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
