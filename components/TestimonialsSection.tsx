'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import type { FC } from 'react'

const testimonials = [
  {
    name: 'Marie Dubois',
    company: 'Boutique Élégance',
    role: 'Fondatrice',
    image: '/testimonials/client1.jpg',
    rating: 5,
    text: "Grâce à Up Next Growth, notre chiffre d'affaires a augmenté de 40% en seulement 3 mois. Leur expertise en Meta Ads est impressionnante !",
    results: '+40% CA en 3 mois',
  },
  {
    name: 'Thomas Laurent',
    company: 'TechStart SAS',
    role: 'CEO',
    image: '/testimonials/client2.jpg',
    rating: 5,
    text: "L'équipe est réactive, professionnelle et surtout, les résultats sont là. Notre coût par lead a baissé de 60%. Je recommande vivement.",
    results: '-60% coût par lead',
  },
  {
    name: 'Sophie Martin',
    company: 'Coach Bien-être',
    role: 'Coach certifiée',
    image: '/testimonials/client3.jpg',
    rating: 5,
    text: "Je n'y connaissais rien en publicité en ligne. Ils ont tout pris en charge et j'ai maintenant un flux constant de clients qualifiés chaque semaine.",
    results: '25 leads/semaine',
  },
  {
    name: 'Pierre Moreau',
    company: 'Immobilier Plus',
    role: 'Directeur commercial',
    image: '/testimonials/client4.jpg',
    rating: 5,
    text: "Notre retour sur investissement publicitaire est passé de 2x à 5x. Up Next Growth comprend vraiment les enjeux business.",
    results: 'ROAS x5',
  },
]

const TestimonialsSection: FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-success-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Ce que disent nos{' '}
            <span className="gradient-text">clients</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Plus de 150 entreprises nous font confiance pour leur croissance digitale
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-success-100">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Result badge */}
              <div className="inline-block bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                📈 {testimonial.results}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-success-100 flex items-center justify-center text-primary-900 font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-success-100 border-2 border-white flex items-center justify-center text-xs font-bold text-primary-900"
                >
                  {['MD', 'TL', 'SM', 'PM'][i]}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 font-bold text-gray-900">4.9/5</span>
              </div>
              <p className="text-xs text-gray-500">Basé sur 150+ avis clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
