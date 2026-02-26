'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { FC } from 'react'

const faqs = [
  {
    question: 'How much do your services cost?',
    answer:
      'Each project is different. We offer a strategy tailored to your budget and specific objectives. Contact us for a personalized quote based on your needs.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'The first results can appear within the first few weeks. However, a solid digital strategy is built over the medium and long term for sustainable and growing results.',
  },
  {
    question: 'Do you work with all types of businesses?',
    answer:
      'We mainly collaborate with companies that are serious and eager to grow. We seek lasting partnerships, not one-time relationships.',
  },
  {
    question: 'Do you offer long-term contracts?',
    answer:
      'We offer flexible collaborations, with or without long-term commitment. The goal is to build a trust-based relationship founded on results and performance.',
  },
  {
    question: 'Do I need to have a website to get started?',
    answer:
      'No, we can create your website or landing page from scratch. If you already have one, we\'ll analyze and optimize it for better conversions.',
  },
  {
    question: 'What are your main acquisition channels?',
    answer:
      'We primarily use Facebook Ads, Instagram Ads, Google Ads, and organic growth marketing. We combine multiple channels to maximize your ROI.',
  },
]

interface FAQItem {
  question: string
  answer: string
}

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-success-300 hover:shadow-md-premium transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-base sm:text-lg font-bold text-primary-900">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-6 h-6 text-success-600" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const FAQSection: FC = () => {
  return (
    <section id="faq" className="py-12 md:py-20 relative overflow-hidden section-white">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-success-100 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Frequently{' '}
            <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to the most frequently asked questions from our clients.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} item={faq} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-lg mb-8">
            Do you have other questions?{' '}
            <span className="font-bold text-primary-900">Contact us directly!</span>
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary inline-flex"
          >
            Talk to our team
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
