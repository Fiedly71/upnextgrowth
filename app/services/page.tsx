'use client';

import React, { useState } from 'react';
import { servicePackages } from '@/data/packages';
import PricingCard from '@/components/PricingCard';
import { ServicePlatform } from '@/types/services';

export default function ServicesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<ServicePlatform | 'all'>('all');

  const filteredPackages = selectedPlatform === 'all'
    ? servicePackages
    : servicePackages.filter(pkg => pkg.platforms.includes(selectedPlatform));

  const platformFilters = [
    { id: 'all' as const, label: 'Tous les services', icon: '🎯' },
    { id: 'meta' as const, label: 'Meta Ads', icon: '📱' },
    { id: 'google' as const, label: 'Google Ads', icon: '🔍' },
    { id: 'web' as const, label: 'Création Web', icon: '🌐' },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title gradient-text mb-6">
            Nos Forfaits de Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le forfait qui correspond à vos ambitions et laissez-nous transformer votre présence digitale en machine à croissance.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {platformFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedPlatform(filter.id)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2
                ${selectedPlatform === filter.id
                  ? 'bg-gradient-accent text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-500'
                }
              `}
            >
              <span className="text-xl">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {filteredPackages.map((pkg) => (
            <PricingCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary-900 to-primary-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'une solution personnalisée ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour créer un forfait sur-mesure adapté à vos besoins spécifiques.
          </p>
          <a
            href="mailto:contact@upnextgrowth.com"
            className="btn btn-outline inline-flex"
          >
            Nous contacter
          </a>
        </div>

        {/* Trust Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-success-500 mb-2">30 jours</div>
            <p className="text-gray-600">Garantie satisfait ou remboursé</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-success-500 mb-2">24/7</div>
            <p className="text-gray-600">Support client disponible</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-success-500 mb-2">+150</div>
            <p className="text-gray-600">Clients satisfaits</p>
          </div>
        </div>
      </div>
    </main>
  );
}
