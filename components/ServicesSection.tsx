'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Target, 
  Globe, 
  TrendingUp, 
  Rocket,
  ArrowRight 
} from 'lucide-react'
import type { FC } from 'react'

const services = [
  {
    icon: Smartphone,
    title: 'Facebook & Instagram Advertising (Meta Ads)',
    description: 'Optimized advertising campaigns to generate measurable results and qualified leads.',
    link: '/facebook-instagram-ads',
  },
  {
    icon: Target,
    title: 'Qualified Lead Generation',
    description: 'Attract prospects ready to buy your products or services with proven strategies.',
    link: '/lead-generation',
  },
  {
    icon: Globe,
    title: 'Website & Landing Page Creation',
    description: 'Fast, modern, conversion-focused pages that transform your visitors into customers.',
    link: '/website-landing-pages',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Strategy & Sales Funnels',
    description: 'A fully optimized customer journey to maximize your conversions.',
    link: '/services',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization & Scaling',
    description: 'Maximize your ROI and grow your business exponentially.',
    link: '/services',
  },
  {
    icon: Globe,
    title: 'Consulting & Digital Strategy',
    description: 'In-depth analysis and strategic recommendations for your digital transformation.',
    link: '/services',
  },
]

const ServicesSection: FC = () => {
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
    <section id="services" className="py-12 md:py-20 relative overflow-hidden section-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-success-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Our expertise in{' '}
            <span className="gradient-text">growth marketing</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A complete digital strategy to grow your business and reach your goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-md-premium hover:shadow-lg-premium border border-gray-100 hover:border-success-300 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-success-100 to-success-50 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                  <Icon className="w-8 h-8 text-success-500 group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-success-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <a href={service.link} className="flex items-center text-success-600 font-semibold group-hover:translate-x-2 transition-transform">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Premium section highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary-900 via-primary-700 to-success-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Website Creation Designed for Conversion</h3>
              <p className="text-white/80 text-lg mb-6">
                A beautiful website isn't enough. We create fast, modern, conversion-focused websites to transform your visitors into customers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-sm">✓</span>
                  Modern & responsive design
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-sm">✓</span>
                  Persuasive copywriting
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-sm">✓</span>
                  Pages optimized for ads
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-sm">✓</span>
                  Effective forms & CTAs
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl"
              >
                🌐
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
