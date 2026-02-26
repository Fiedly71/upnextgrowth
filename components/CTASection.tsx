'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import type { FC } from 'react'

const CTASection: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })

      // Reset message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Gradient circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-success-500/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl opacity-30"></div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Get a free audit of your strategy and discover how to attract more clients right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <motion.a
              href="/configurateur"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex btn btn-primary group"
            >
              Configurer mon forfait
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex btn btn-outline group"
            >
              Voir tous les forfaits
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-md transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-md transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-md transition-all"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-md transition-all"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-md transition-all resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className="w-full btn btn-primary group disabled:opacity-50"
              >
                {isLoading ? 'Envoi en cours...' : 'Demander mon audit gratuit'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-success-500/20 border border-success-400 rounded-lg text-success-100 text-center"
                >
                  ✅ Thank you! Your request has been sent. We'll contact you very soon!
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-8">Or Contact Us Directly</h3>

            {[
              {
                icon: Mail,
                title: 'Email',
                description: 'contact@upnextgrowth.com',
                action: 'mailto:contact@upnextgrowth.com',
                color: 'from-accent-500 to-accent-600',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                description: 'Let\'s chat live',
                action: 'https://wa.me/33612345678',
                color: 'from-success-500 to-success-600',
              },
              {
                icon: Phone,
                title: 'Phone',
                description: '+33 6 12 34 56 78',
                action: 'tel:+33612345678',
                color: 'from-primary-600 to-primary-700',
              },
            ].map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`block p-6 rounded-2xl bg-gradient-to-r ${method.color} text-white shadow-lg-premium hover:shadow-xl-premium transition-all group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{method.title}</p>
                      <p className="text-white/80 text-sm">{method.description}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
