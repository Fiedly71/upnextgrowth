'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@upnextgrowth.com',
      link: 'mailto:contact@upnextgrowth.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 6 12 34 56 78',
      link: 'tel:+33612345678',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Remote - France entière',
      link: null,
    },
    {
      icon: Clock,
      title: 'Disponibilité',
      value: 'Lun-Ven, 9h-18h',
      link: null,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-xl text-gray-600">
              Que vous ayez une question, un projet en tête ou simplement envie de discuter stratégie, nous sommes là pour vous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-sm text-gray-500 mb-1">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-primary-900 font-medium hover:text-success-500 transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-primary-900 font-medium">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-success-500" />
                  <h2 className="text-2xl font-bold">Envoyez-nous un message</h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-success-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                    <p className="text-gray-600">
                      Nous vous répondrons dans les 24 heures.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-success-500 focus:border-transparent transition-all"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-success-500 focus:border-transparent transition-all"
                          placeholder="jean@entreprise.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-success-500 focus:border-transparent transition-all"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-success-500 focus:border-transparent transition-all"
                          placeholder="Nom de l'entreprise"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget mensuel envisagé
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-success-500 focus:border-transparent transition-all"
                      >
                        <option value="">Sélectionnez un budget</option>
                        <option value="< 500€">Moins de 500€/mois</option>
                        <option value="500-1000€">500€ - 1 000€/mois</option>
                        <option value="1000-2500€">1 000€ - 2 500€/mois</option>
                        <option value="> 2500€">Plus de 2 500€/mois</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-success-500 focus:border-transparent transition-all resize-none"
                        placeholder="Parlez-nous de votre projet, vos objectifs, vos défis actuels..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-primary flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Book a call */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-success-400" />
                  <h3 className="text-xl font-bold">Réservez un appel gratuit</h3>
                </div>
                <p className="text-white/80 mb-6">
                  30 minutes pour discuter de votre projet et voir comment nous pouvons vous aider à atteindre vos objectifs.
                </p>
                <a
                  href="https://calendly.com/upnextgrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-primary-900 hover:bg-gray-100 w-full justify-center"
                >
                  Choisir un créneau
                </a>
              </div>

              {/* FAQ Preview */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Questions fréquentes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Quel est le délai de réponse ?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Nous répondons généralement dans les 24 heures ouvrées.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Proposez-vous des audits gratuits ?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Oui, nous offrons un audit gratuit de vos campagnes actuelles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Travaillez-vous avec des TPE/PME ?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Absolument ! Nos forfaits sont conçus pour toutes les tailles d'entreprise.
                    </p>
                  </div>
                </div>
                <a href="/#faq" className="text-success-600 font-medium mt-4 inline-block hover:text-success-700">
                  Voir toutes les FAQ →
                </a>
              </div>

              {/* Trust badges */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Ils nous font confiance</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs"
                    >
                      Logo {i}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
