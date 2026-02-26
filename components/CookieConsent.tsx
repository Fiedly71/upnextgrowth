'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings, Check } from 'lucide-react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà fait son choix
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Affiche le banner après un délai
      setTimeout(() => setShowBanner(true), 1500)
    } else {
      // Charge les préférences sauvegardées
      try {
        const savedPrefs = JSON.parse(consent)
        setPreferences(savedPrefs)
      } catch {
        // Si erreur, affiche le banner
        setShowBanner(true)
      }
    }
  }, [])

  const acceptAll = () => {
    const newPrefs = { necessary: true, analytics: true, marketing: true }
    setPreferences(newPrefs)
    localStorage.setItem('cookie-consent', JSON.stringify(newPrefs))
    setShowBanner(false)
    setShowSettings(false)
    // Activer les scripts analytics et marketing ici
  }

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const newPrefs = { necessary: true, analytics: false, marketing: false }
    setPreferences(newPrefs)
    localStorage.setItem('cookie-consent', JSON.stringify(newPrefs))
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay pour les paramètres */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setShowSettings(false)}
            />
          )}

          {/* Banner principal */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[70] p-4 mb-16 md:mb-0"
          >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {!showSettings ? (
                // Banner simple
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Cookie className="w-6 h-6 text-primary-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">🍪 Nous utilisons des cookies</h3>
                        <p className="text-sm text-gray-600">
                          Pour améliorer votre expérience et analyser le trafic.{' '}
                          <Link href="/privacy" className="text-primary-900 hover:underline">
                            En savoir plus
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Personnaliser
                      </button>
                      <button
                        onClick={rejectAll}
                        className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
                      >
                        Refuser tout
                      </button>
                      <button
                        onClick={acceptAll}
                        className="px-6 py-2.5 rounded-xl bg-gradient-accent text-white font-medium hover:shadow-lg transition-all text-sm"
                      >
                        Accepter tout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Panneau de paramètres détaillés
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Paramètres des cookies</h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Necessary cookies */}
                    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Cookies essentiels</h4>
                        <p className="text-sm text-gray-600">
                          Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.
                        </p>
                      </div>
                      <div className="flex items-center h-6 w-11 rounded-full bg-success-500 cursor-not-allowed">
                        <span className="ml-auto mr-1 w-4 h-4 bg-white rounded-full"></span>
                      </div>
                    </div>

                    {/* Analytics cookies */}
                    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Cookies analytiques</h4>
                        <p className="text-sm text-gray-600">
                          Nous aident à comprendre comment les visiteurs utilisent notre site (Google Analytics).
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                        className={`flex items-center h-6 w-11 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-success-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        ></span>
                      </button>
                    </div>

                    {/* Marketing cookies */}
                    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Cookies marketing</h4>
                        <p className="text-sm text-gray-600">
                          Utilisés pour le ciblage publicitaire (Meta Pixel, Google Ads).
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                        className={`flex items-center h-6 w-11 rounded-full transition-colors ${
                          preferences.marketing ? 'bg-success-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        ></span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={rejectAll}
                      className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Refuser tout
                    </button>
                    <button
                      onClick={acceptSelected}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-primary-900 text-white font-medium hover:bg-primary-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Sauvegarder mes choix
                    </button>
                    <button
                      onClick={acceptAll}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-accent text-white font-medium hover:shadow-lg transition-all"
                    >
                      Accepter tout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
