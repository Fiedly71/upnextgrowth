'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { OrderConfiguration, ClientOnboarding } from '@/types/services';
import { servicePackages } from '@/data/packages';
import { CreditCard, Lock, Check, Mail, Phone, Building, Globe, Target, Users } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [orderConfig, setOrderConfig] = useState<OrderConfiguration | null>(null);
  const [loading, setLoading] = useState(false);
  const [clientInfo, setClientInfo] = useState<ClientOnboarding>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    facebookBusinessManager: '',
    googleAdsAccount: '',
    objectives: '',
    targetAudience: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('orderConfig');
    if (saved) {
      setOrderConfig(JSON.parse(saved));
    } else {
      router.push('/services');
    }
  }, [router]);

  if (!orderConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  const selectedPackage = servicePackages.find(pkg => pkg.id === orderConfig.packageId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      // Save client info to localStorage (in production, send to backend)
      localStorage.setItem('clientInfo', JSON.stringify(clientInfo));
      localStorage.setItem('orderCompleted', 'true');
      
      // Redirect to success page
      router.push('/dashboard');
      setLoading(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setClientInfo({
      ...clientInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-section max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Finaliser votre commande
          </h1>
          <p className="text-xl text-gray-600">
            Dernière étape avant de démarrer votre croissance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Récapitulatif</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="font-bold text-lg">{selectedPackage?.name}</div>
                  <div className="text-sm text-gray-600 capitalize">{orderConfig.duration}</div>
                </div>

                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Prix de base</span>
                    <span>{selectedPackage?.price}€</span>
                  </div>
                  {orderConfig.duration !== 'mensuel' && (
                    <div className="flex justify-between text-success-600">
                      <span>Réduction</span>
                      <span>-{orderConfig.duration === 'trimestriel' ? '15' : '25'}%</span>
                    </div>
                  )}
                  {orderConfig.addons.contentCreation && (
                    <div className="flex justify-between">
                      <span>Création de contenu</span>
                      <span>+297€</span>
                    </div>
                  )}
                  {orderConfig.addons.extraLandingPage && (
                    <div className="flex justify-between">
                      <span>Landing page</span>
                      <span>+497€</span>
                    </div>
                  )}
                  {orderConfig.addons.tikTokAds && (
                    <div className="flex justify-between">
                      <span>TikTok Ads</span>
                      <span>+397€</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total mensuel</span>
                    <span className="text-3xl font-bold text-primary-900">
                      {orderConfig.totalPrice}€
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-success-50 rounded-lg p-4 border border-success-200">
                <div className="flex items-center gap-2 text-success-700 mb-2">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Garanties incluses</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Satisfait ou remboursé 30 jours</li>
                  <li>✓ Résiliation sans frais</li>
                  <li>✓ Support prioritaire</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Informations personnelles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Prénom *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={clientInfo.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nom *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={clientInfo.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={clientInfo.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={clientInfo.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Informations entreprise</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Nom de l'entreprise *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={clientInfo.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Site web
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={clientInfo.website}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Campaign Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Informations campagne</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Facebook Business Manager ID (optionnel)
                    </label>
                    <input
                      type="text"
                      name="facebookBusinessManager"
                      value={clientInfo.facebookBusinessManager}
                      onChange={handleChange}
                      placeholder="Numéro de compte Facebook Business Manager"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Google Ads ID (optionnel)
                    </label>
                    <input
                      type="text"
                      name="googleAdsAccount"
                      value={clientInfo.googleAdsAccount}
                      onChange={handleChange}
                      placeholder="Numéro de compte Google Ads"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Vos objectifs marketing *
                    </label>
                    <textarea
                      name="objectives"
                      required
                      value={clientInfo.objectives}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ex: Générer 50 leads qualifiés par mois, augmenter les ventes de 30%, etc."
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Votre audience cible *
                    </label>
                    <textarea
                      name="targetAudience"
                      required
                      value={clientInfo.targetAudience}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ex: Entrepreneurs 35-55 ans, zone géographique: France, intérêts: marketing digital"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  Paiement sécurisé
                </h3>
                
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <p className="font-semibold mb-1">Paiement 100% sécurisé avec Stripe</p>
                      <p className="text-blue-700">
                        Vos informations sont cryptées et sécurisées. Nous n'avons pas accès à vos données bancaires.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn btn-primary text-lg py-4 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Traitement en cours...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Procéder au paiement sécurisé
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  En validant, vous acceptez nos{' '}
                  <a href="#" className="text-primary-700 hover:underline">conditions générales</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
