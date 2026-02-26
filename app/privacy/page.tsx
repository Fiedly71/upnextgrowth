import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ShieldCheck, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité de Up Next Growth - Protection de vos données personnelles',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container-section max-w-4xl">
          {/* Back link */}
          <Link 
            href="/legal" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux mentions légales
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 rounded-2xl mb-6">
              <ShieldCheck className="w-8 h-8 text-success-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-600">
              Dernière mise à jour : Février 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Up Next Growth s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web et nos services.
              </p>
            </section>

            {/* Données collectées */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">1. Données collectées</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous collectons les types de données suivants :
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-lg mb-3">Données fournies directement</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Nom de l'entreprise</li>
                  <li>Informations de facturation</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Données collectées automatiquement</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Durée de visite</li>
                  <li>Source de trafic</li>
                </ul>
              </div>
            </section>

            {/* Utilisation des données */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">2. Utilisation des données</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fournir nos services de marketing digital</li>
                <li>Communiquer avec vous concernant votre projet</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Envoyer des newsletters (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            {/* Base légale */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">3. Base légale du traitement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le traitement de vos données est fondé sur :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>L'exécution du contrat :</strong> pour fournir nos services</li>
                <li><strong>Votre consentement :</strong> pour les newsletters et cookies marketing</li>
                <li><strong>Notre intérêt légitime :</strong> pour améliorer nos services</li>
                <li><strong>Nos obligations légales :</strong> conservation des factures</li>
              </ul>
            </section>

            {/* Partage des données */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">4. Partage des données</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données peuvent être partagées avec :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nos prestataires techniques (hébergement, paiement)</li>
                <li>Les plateformes publicitaires (Meta, Google) pour l'exécution des campagnes</li>
                <li>Les autorités légales si requis par la loi</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nous ne vendons jamais vos données personnelles à des tiers.
              </p>
            </section>

            {/* Conservation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">5. Durée de conservation</h2>
              <div className="bg-white border-l-4 border-primary-500 p-6 rounded-r-xl">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Données clients :</strong> 5 ans après la fin de la relation commerciale</li>
                  <li><strong>Données prospects :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                  <li><strong>Cookies :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </section>

            {/* Vos droits */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">6. Vos droits</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-success-50 p-4 rounded-xl">
                  <h4 className="font-bold text-success-700">Droit d'accès</h4>
                  <p className="text-sm text-gray-600">Obtenir une copie de vos données</p>
                </div>
                <div className="bg-success-50 p-4 rounded-xl">
                  <h4 className="font-bold text-success-700">Droit de rectification</h4>
                  <p className="text-sm text-gray-600">Corriger vos données inexactes</p>
                </div>
                <div className="bg-success-50 p-4 rounded-xl">
                  <h4 className="font-bold text-success-700">Droit à l'effacement</h4>
                  <p className="text-sm text-gray-600">Demander la suppression de vos données</p>
                </div>
                <div className="bg-success-50 p-4 rounded-xl">
                  <h4 className="font-bold text-success-700">Droit à la portabilité</h4>
                  <p className="text-sm text-gray-600">Récupérer vos données dans un format lisible</p>
                </div>
                <div className="bg-success-50 p-4 rounded-xl">
                  <h4 className="font-bold text-success-700">Droit d'opposition</h4>
                  <p className="text-sm text-gray-600">Refuser certains traitements</p>
                </div>
                <div className="bg-success-50 p-4 rounded-xl">
                  <h4 className="font-bold text-success-700">Droit de limitation</h4>
                  <p className="text-sm text-gray-600">Limiter l'utilisation de vos données</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-6">
                Pour exercer vos droits : <strong>dpo@upnextgrowth.com</strong>
              </p>
            </section>

            {/* Sécurité */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">7. Sécurité des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement SSL, accès restreint, sauvegardes régulières, et formation de notre équipe à la protection des données.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-primary-50 to-success-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette politique de confidentialité :
              </p>
              <div className="space-y-2">
                <p><strong>Email :</strong> dpo@upnextgrowth.com</p>
                <p><strong>Courrier :</strong> Up Next Growth - DPO, [Adresse]</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Vous pouvez également déposer une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-900 hover:underline">www.cnil.fr</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
