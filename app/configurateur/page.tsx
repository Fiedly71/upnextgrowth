'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { servicePackages } from '@/data/packages';
import { OrderConfiguration } from '@/types/services';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';

function ConfiguratorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const packageId = searchParams.get('package') || 'growth';
  
  const selectedPackage = servicePackages.find(pkg => pkg.id === packageId) || servicePackages[1];
  
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState<OrderConfiguration>({
    packageId: selectedPackage.id,
    duration: 'mensuel',
    adBudget: 1000,
    addons: {
      contentCreation: false,
      extraLandingPage: false,
      tikTokAds: false,
    },
    totalPrice: selectedPackage.price,
  });

  const steps = [
    { id: 1, title: 'Durée', icon: '📅' },
    { id: 2, title: 'Budget', icon: '💰' },
    { id: 3, title: 'Options', icon: '⚙️' },
    { id: 4, title: 'Récapitulatif', icon: '✅' },
  ];

  // Calculate total price
  useEffect(() => {
    let basePrice = selectedPackage.price;
    
    // Apply duration discount
    if (config.duration === 'trimestriel') {
      basePrice = basePrice * 0.85; // -15%
    } else if (config.duration === 'annuel') {
      basePrice = basePrice * 0.75; // -25%
    }

    // Add addons
    let addonsPrice = 0;
    if (config.addons.contentCreation) addonsPrice += 297;
    if (config.addons.extraLandingPage) addonsPrice += 497;
    if (config.addons.tikTokAds) addonsPrice += 397;

    setConfig(prev => ({ ...prev, totalPrice: Math.round(basePrice + addonsPrice) }));
  }, [config.duration, config.addons, selectedPackage.price]);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    else {
      // Save to localStorage and redirect to checkout
      localStorage.setItem('orderConfig', JSON.stringify(config));
      router.push('/checkout');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-section max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Configurez votre {selectedPackage.name}
          </h1>
          <p className="text-xl text-gray-600">
            Personnalisez votre forfait en quelques étapes
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300
                      ${currentStep >= step.id
                        ? 'bg-gradient-accent text-white shadow-lg scale-110'
                        : 'bg-gray-200 text-gray-400'
                      }
                    `}
                  >
                    {currentStep > step.id ? <Check className="w-8 h-8" /> : step.icon}
                  </div>
                  <span className={`mt-2 text-sm font-semibold ${currentStep >= step.id ? 'text-primary-900' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                      currentStep > step.id ? 'bg-success-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          {/* Step 1: Duration */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Choisissez la durée d'engagement</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: 'mensuel', label: 'Mensuel', subtitle: 'Sans engagement', discount: 0 },
                  { value: 'trimestriel', label: '3 Mois', subtitle: 'Économisez 15%', discount: 15, popular: true },
                  { value: 'annuel', label: '6 Mois', subtitle: 'Économisez 25%', discount: 25 },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setConfig({ ...config, duration: option.value as any })}
                    className={`
                      relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105
                      ${config.duration === option.value
                        ? 'border-success-500 bg-success-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-primary-500'
                      }
                    `}
                  >
                    {option.popular && (
                      <span className="absolute -top-3 right-4 bg-success-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Recommandé
                      </span>
                    )}
                    <div className="text-2xl font-bold mb-2">{option.label}</div>
                    <div className="text-gray-600">{option.subtitle}</div>
                    {option.discount > 0 && (
                      <div className="mt-2 text-success-600 font-bold">-{option.discount}%</div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Budget */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Quel est votre budget publicitaire mensuel ?</h2>
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={config.adBudget}
                    onChange={(e) => setConfig({ ...config, adBudget: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-success-500"
                  />
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-900 mb-4">
                    {config.adBudget.toLocaleString()}€
                  </div>
                  <p className="text-gray-600">Budget mensuel pour les publicités</p>
                </div>
                <div className="mt-8 grid grid-cols-4 gap-4">
                  {[1000, 2500, 5000, 10000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setConfig({ ...config, adBudget: amount })}
                      className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-primary-500 transition-colors"
                    >
                      {amount.toLocaleString()}€
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Addons */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Options supplémentaires</h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                {[
                  {
                    key: 'contentCreation',
                    label: 'Création de contenu premium',
                    description: 'Design de visuels et rédaction de copies publicitaires professionnelles',
                    price: 297,
                  },
                  {
                    key: 'extraLandingPage',
                    label: 'Landing page supplémentaire',
                    description: 'Une page de destination optimisée pour la conversion',
                    price: 497,
                  },
                  {
                    key: 'tikTokAds',
                    label: 'TikTok Ads (Essential/Growth)',
                    description: 'Ajoutez la puissance de TikTok à votre stratégie publicitaire',
                    price: 397,
                  },
                ].map((addon) => (
                  <label
                    key={addon.key}
                    className={`
                      flex items-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-300
                      ${config.addons[addon.key as keyof typeof config.addons]
                        ? 'border-success-500 bg-success-50'
                        : 'border-gray-200 hover:border-primary-500'
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      checked={config.addons[addon.key as keyof typeof config.addons]}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          addons: { ...config.addons, [addon.key]: e.target.checked },
                        })
                      }
                      className="w-6 h-6 text-success-500 rounded focus:ring-success-500 mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-1">{addon.label}</div>
                      <div className="text-gray-600 text-sm">{addon.description}</div>
                    </div>
                    <div className="text-2xl font-bold text-primary-900">+{addon.price}€</div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Summary */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Récapitulatif de votre commande</h2>
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-gradient-to-r from-primary-50 to-success-50 rounded-xl p-6 border border-success-200">
                  <h3 className="text-2xl font-bold mb-4">{selectedPackage.name}</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Prix de base:</span>
                      <span className="font-semibold">{selectedPackage.price}€/mois</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Durée:</span>
                      <span className="font-semibold capitalize">{config.duration}</span>
                    </div>
                    {config.duration !== 'mensuel' && (
                      <div className="flex justify-between text-success-600">
                        <span>Réduction durée:</span>
                        <span className="font-semibold">
                          -{config.duration === 'trimestriel' ? '15' : '25'}%
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Budget publicitaire:</span>
                      <span className="font-semibold">{config.adBudget.toLocaleString()}€/mois</span>
                    </div>
                  </div>
                </div>

                {(config.addons.contentCreation || config.addons.extraLandingPage || config.addons.tikTokAds) && (
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold mb-3">Options supplémentaires:</h4>
                    <div className="space-y-2">
                      {config.addons.contentCreation && (
                        <div className="flex justify-between">
                          <span>Création de contenu premium</span>
                          <span className="font-semibold">+297€</span>
                        </div>
                      )}
                      {config.addons.extraLandingPage && (
                        <div className="flex justify-between">
                          <span>Landing page supplémentaire</span>
                          <span className="font-semibold">+497€</span>
                        </div>
                      )}
                      {config.addons.tikTokAds && (
                        <div className="flex justify-between">
                          <span>TikTok Ads</span>
                          <span className="font-semibold">+397€</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="bg-gradient-accent text-white rounded-xl p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">Total mensuel:</span>
                    <span className="text-4xl font-bold">{config.totalPrice.toLocaleString()}€</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center max-w-3xl mx-auto">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`
              btn flex items-center gap-2
              ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'btn-secondary'}
            `}
          >
            <ChevronLeft className="w-5 h-5" />
            Retour
          </button>

          {/* Price Summary */}
          <div className="hidden md:block text-center">
            <div className="text-sm text-gray-600">Total</div>
            <div className="text-2xl font-bold text-primary-900">{config.totalPrice}€/mois</div>
          </div>

          <button onClick={handleNext} className="btn btn-primary flex items-center gap-2">
            {currentStep === 4 ? 'Procéder au paiement' : 'Suivant'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default function ConfiguratorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Chargement...</div>}>
      <ConfiguratorContent />
    </Suspense>
  );
}
