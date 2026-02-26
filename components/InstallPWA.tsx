'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Smartphone, Share, Plus } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallBanner, setShowInstallBanner] = useState(false)
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Détecte si l'app est déjà installée (mode standalone)
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches
      || (window.navigator as any).standalone === true
    setIsStandalone(isInStandaloneMode)

    // Détecte iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isIOSDevice)

    // Pour Android/Chrome
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // Affiche la bannière après 3 secondes si pas déjà refusée
      const dismissed = localStorage.getItem('pwa-banner-dismissed')
      if (!dismissed) {
        setTimeout(() => setShowInstallBanner(true), 3000)
      }
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Si c'est iOS et pas en mode standalone, propose l'installation après un délai
    if (isIOSDevice && !isInStandaloneMode) {
      const dismissed = localStorage.getItem('pwa-banner-dismissed')
      if (!dismissed) {
        setTimeout(() => setShowInstallBanner(true), 5000)
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSInstructions(true)
      return
    }

    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowInstallBanner(false)
    }
  }

  const dismissBanner = () => {
    setShowInstallBanner(false)
    localStorage.setItem('pwa-banner-dismissed', 'true')
  }

  // Ne rien afficher si déjà installé
  if (isStandalone) return null

  // Ne rien afficher si pas de prompt disponible et pas iOS
  if (!deferredPrompt && !isIOS) return null

  return (
    <>
      {/* Bannière flottante d'installation */}
      <AnimatePresence>
        {showInstallBanner && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="p-4 md:p-5">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1">
                      Installez Up Next Growth
                    </h3>
                    <p className="text-sm text-gray-600">
                      Accédez rapidement à nos services depuis votre écran d'accueil
                    </p>
                  </div>
                  <button
                    onClick={dismissBanner}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={dismissBanner}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Plus tard
                  </button>
                  <button
                    onClick={handleInstallClick}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-accent text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Installer
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal d'instructions iOS */}
      <AnimatePresence>
        {showIOSInstructions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4"
            onClick={() => setShowIOSInstructions(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Installer sur iPhone/iPad</h3>
                  <button
                    onClick={() => setShowIOSInstructions(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary-900">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">
                        Appuyez sur le bouton Partager
                      </p>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Share className="w-5 h-5" />
                        <span className="text-sm">En bas de l'écran Safari</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary-900">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">
                        Sélectionnez "Sur l'écran d'accueil"
                      </p>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Plus className="w-5 h-5" />
                        <span className="text-sm">Dans la liste des options</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-success-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-success-600">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">
                        Appuyez sur "Ajouter"
                      </p>
                      <p className="text-sm text-gray-500">
                        L'app sera ajoutée à votre écran d'accueil
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowIOSInstructions(false)}
                  className="w-full mt-6 py-3 rounded-xl bg-gradient-accent text-white font-medium"
                >
                  J'ai compris
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton fixe d'installation (visible sur mobile uniquement si pas en standalone) */}
      {(deferredPrompt || isIOS) && !showInstallBanner && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={handleInstallClick}
          className="fixed bottom-20 right-4 md:hidden w-14 h-14 rounded-full bg-gradient-accent text-white shadow-lg flex items-center justify-center z-40"
          aria-label="Installer l'application"
        >
          <Download className="w-6 h-6" />
        </motion.button>
      )}
    </>
  )
}
