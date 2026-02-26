'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';

export default function PricingPreviewSection() {
  const packages = [
    {
      name: 'Pack ESSENTIAL',
      tagline: 'Le test de marché',
      price: 497,
      features: [
        'Gestion d\'une plateforme',
        '2-3 créations publicitaires',
        'Pixel de suivi',
        'Rapport mensuel',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Pack GROWTH',
      tagline: 'Le best-seller',
      price: 997,
      popular: true,
      features: [
        'Meta Ads + Google Ads',
        'Landing Page incluse',
        'A/B Testing continu',
        'Support prioritaire',
      ],
      color: 'from-success-500 to-success-600',
    },
    {
      name: 'Pack ELITE',
      tagline: 'L\'arsenal complet',
      price: 2497,
      features: [
        'Omnicanal (Meta, Google, TikTok)',
        'Site web complet (5 pages)',
        'Dashboard temps réel',
        'Expert dédié',
      ],
      color: 'from-primary-700 to-primary-900',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-success-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"></div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choisissez le forfait{' '}
            <span className="gradient-text">parfait pour vous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour automatiser votre croissance, du choix du service au paiement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-2xl shadow-xl p-6 transition-all ${
                pkg.popular ? 'ring-4 ring-success-500 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-success-500 to-success-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  BEST-SELLER
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-gray-600 italic text-sm">{pkg.tagline}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}€</span>
                  <span className="text-gray-600 ml-2">/mois</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/configurateur?package=${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`w-full btn ${
                  pkg.popular ? 'btn-primary' : 'btn-secondary'
                } flex items-center justify-center group mb-3`}
              >
                Choisir ce forfait
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="w-full text-center text-sm text-gray-600 hover:text-primary-700 font-medium transition-colors"
              >
                Voir tous les détails →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary-900 font-semibold hover:gap-3 transition-all"
          >
            Voir tous les détails des forfaits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-bold text-lg mb-2">Configuration en 5 min</h4>
            <p className="text-gray-600 text-sm">
              Configurateur interactif pour personnaliser votre forfait
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-3">💳</div>
            <h4 className="font-bold text-lg mb-2">Paiement sécurisé</h4>
            <p className="text-gray-600 text-sm">
              Intégration Stripe pour des paiements 100% sécurisés
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold text-lg mb-2">Dashboard en temps réel</h4>
            <p className="text-gray-600 text-sm">
              Suivez vos performances et vos résultats en live
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
