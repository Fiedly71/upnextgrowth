'use client';

import React from 'react';
import { ServicePackage } from '@/types/services';
import { Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  package: ServicePackage;
}

export default function PricingCard({ package: pkg }: PricingCardProps) {
  const discountedPrice = pkg.discount 
    ? pkg.price * (1 - pkg.discount / 100) 
    : pkg.price;

  const platformLabels = {
    meta: 'Meta Ads',
    google: 'Google Ads',
    tiktok: 'TikTok Ads',
    web: 'Création Web',
  };

  return (
    <div 
      className={`
        relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
        ${pkg.popular ? 'border-4 border-success-500 scale-105' : 'border border-gray-200'}
      `}
    >
      {pkg.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
          ⭐ BEST-SELLER
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <p className="text-gray-600 italic">{pkg.tagline}</p>
      </div>

      <div className="text-center mb-8">
        {pkg.discount && (
          <div className="mb-2">
            <span className="text-2xl text-gray-400 line-through">{pkg.price}€</span>
            <span className="ml-2 bg-success-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{pkg.discount}%
            </span>
          </div>
        )}
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-gray-900">
            {Math.round(discountedPrice)}€
          </span>
          <span className="text-gray-600 ml-2">/mois</span>
        </div>
        {pkg.duration !== 'mensuel' && (
          <p className="text-sm text-gray-500 mt-2">
            Engagement {pkg.duration === 'trimestriel' ? '3 mois' : '6 mois'}
          </p>
        )}
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-2">Plateformes incluses :</p>
        <div className="flex flex-wrap gap-2">
          {pkg.platforms.map((platform) => (
            <span
              key={platform}
              className="bg-primary-100 text-primary-900 px-3 py-1 rounded-full text-xs font-medium"
            >
              {platformLabels[platform]}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {pkg.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
            )}
            <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-success-50 rounded-lg border border-success-200">
        <p className="text-sm font-semibold text-gray-700 mb-1">🎯 Objectif :</p>
        <p className="text-sm text-gray-600">{pkg.objective}</p>
      </div>

      <Link
        href={`/configurateur?package=${pkg.id}`}
        className={`
          w-full btn flex items-center justify-center gap-2 group
          ${pkg.popular ? 'btn-primary' : 'btn-secondary'}
        `}
      >
        Choisir ce forfait
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
