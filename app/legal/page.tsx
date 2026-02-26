import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ShieldCheck, FileText, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site Up Next Growth - Agence de marketing digital',
}

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container-section max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
              <Scale className="w-8 h-8 text-primary-900" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-600">
              Informations légales sur Up Next Growth
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-12">
            <h2 className="font-bold text-lg mb-4">Navigation rapide</h2>
            <div className="grid md:grid-cols-2 gap-3">
              <Link href="/privacy" className="flex items-center gap-2 text-primary-900 hover:text-success-500 transition-colors">
                <ShieldCheck className="w-4 h-4" />
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="flex items-center gap-2 text-primary-900 hover:text-success-500 transition-colors">
                <FileText className="w-4 h-4" />
                Conditions générales de vente
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Éditeur du site */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">1. Éditeur du site</h2>
              <div className="bg-white border-l-4 border-primary-500 p-6 rounded-r-xl">
                <p className="mb-2"><strong>Raison sociale :</strong> Up Next Growth SARL</p>
                <p className="mb-2"><strong>Forme juridique :</strong> Société à responsabilité limitée</p>
                <p className="mb-2"><strong>Capital social :</strong> 10 000 €</p>
                <p className="mb-2"><strong>SIRET :</strong> XXX XXX XXX XXXXX</p>
                <p className="mb-2"><strong>RCS :</strong> Paris B XXX XXX XXX</p>
                <p className="mb-2"><strong>Numéro TVA intracommunautaire :</strong> FR XX XXXXXXXXX</p>
                <p className="mb-2"><strong>Siège social :</strong> [Adresse complète]</p>
                <p className="mb-2"><strong>Téléphone :</strong> +33 X XX XX XX XX</p>
                <p className="mb-2"><strong>Email :</strong> contact@upnextgrowth.com</p>
                <p className="mb-2"><strong>Directeur de la publication :</strong> [Nom Prénom]</p>
              </div>
            </section>

            {/* Hébergement */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">2. Hébergement du site</h2>
              <div className="bg-white border-l-4 border-success-500 p-6 rounded-r-xl">
                <p className="mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p className="mb-2"><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p className="mb-2"><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-900 hover:text-success-500">vercel.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            {/* Données personnelles */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">4. Protection des données personnelles</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour exercer ces droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Par email : dpo@upnextgrowth.com</li>
                <li>Par courrier : Up Next Growth, [Adresse], à l'attention du DPO</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Pour en savoir plus sur la gestion de vos données, consultez notre{' '}
                <Link href="/privacy" className="text-primary-900 font-semibold hover:text-success-500">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">5. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Les cookies suivants sont utilisés :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (panier, session)</li>
                <li><strong>Cookies analytiques :</strong> Google Analytics pour mesurer l'audience</li>
                <li><strong>Cookies marketing :</strong> Meta Pixel pour les publicités ciblées</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">6. Limitation de responsabilité</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Up Next Growth s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Up Next Growth ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En conséquence, Up Next Growth décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">7. Droit applicable</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-primary-50 to-success-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">8. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-gray-700">
                  <strong>Email :</strong>{' '}
                  <a href="mailto:contact@upnextgrowth.com" className="text-primary-900 font-semibold hover:text-success-500">
                    contact@upnextgrowth.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Téléphone :</strong> +33 X XX XX XX XX
                </p>
                <p className="text-gray-700">
                  <strong>Adresse :</strong> [Adresse complète du siège social]
                </p>
              </div>
            </section>

            {/* Date de mise à jour */}
            <p className="text-sm text-gray-500 text-center mt-12">
              Dernière mise à jour : 26 février 2026
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
