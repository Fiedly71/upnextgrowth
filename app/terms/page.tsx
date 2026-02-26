import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions générales de vente de Up Next Growth - Services de marketing digital',
}

export default function TermsPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-primary-900" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Conditions Générales de Vente
            </h1>
            <p className="text-xl text-gray-600">
              Dernière mise à jour : Février 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Article 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 1 - Objet</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre Up Next Growth SARL (ci-après "le Prestataire") et tout client professionnel ou particulier (ci-après "le Client") dans le cadre de la fourniture de services de marketing digital.
              </p>
            </section>

            {/* Article 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 2 - Services proposés</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Prestataire propose les services suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Gestion de campagnes publicitaires Meta Ads (Facebook/Instagram)</li>
                <li>Gestion de campagnes Google Ads</li>
                <li>Création de sites web et landing pages</li>
                <li>Génération de leads qualifiés</li>
                <li>Conseil en stratégie digitale</li>
              </ul>
            </section>

            {/* Article 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 3 - Tarifs et forfaits</h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-lg mb-3">Forfaits mensuels</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Pack ESSENTIAL :</strong> 497€ HT/mois - Engagement 1 mois</li>
                  <li><strong>Pack GROWTH :</strong> 997€ HT/mois - Engagement 3 mois (-15%)</li>
                  <li><strong>Pack ELITE :</strong> 2 497€ HT/mois - Engagement 6 mois (-25%)</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Les prix sont indiqués en euros hors taxes. La TVA applicable sera ajoutée au moment de la facturation.
              </p>
            </section>

            {/* Article 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 4 - Commande et engagement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Toute commande vaut acceptation des présentes CGV. La durée d'engagement dépend du forfait choisi :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Pack ESSENTIAL :</strong> Sans engagement minimum</li>
                <li><strong>Pack GROWTH :</strong> Engagement de 3 mois</li>
                <li><strong>Pack ELITE :</strong> Engagement de 6 mois</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                En cas de résiliation anticipée, les mensualités restantes seront dues.
              </p>
            </section>

            {/* Article 5 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 5 - Modalités de paiement</h2>
              <div className="bg-white border-l-4 border-success-500 p-6 rounded-r-xl">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Facturation :</strong> Mensuelle, en début de mois</li>
                  <li><strong>Délai de paiement :</strong> 7 jours à réception de la facture</li>
                  <li><strong>Moyens de paiement :</strong> Carte bancaire, virement, prélèvement SEPA</li>
                  <li><strong>Budget publicitaire :</strong> Non inclus, payé directement aux plateformes</li>
                </ul>
              </div>
            </section>

            {/* Article 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 6 - Retard de paiement</h2>
              <p className="text-gray-700 leading-relaxed">
                En cas de retard de paiement, des pénalités de retard seront appliquées au taux légal en vigueur, majoré de 5 points. Une indemnité forfaitaire de 40€ pour frais de recouvrement sera également due. Le Prestataire se réserve le droit de suspendre les services en cas de non-paiement.
              </p>
            </section>

            {/* Article 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 7 - Obligations du Prestataire</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Prestataire s'engage à :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Mettre en œuvre tous les moyens nécessaires à la bonne exécution des services</li>
                <li>Respecter les bonnes pratiques des plateformes publicitaires</li>
                <li>Fournir des rapports de performance selon la fréquence prévue au contrat</li>
                <li>Protéger la confidentialité des informations du Client</li>
                <li>Informer le Client de toute difficulté rencontrée</li>
              </ul>
            </section>

            {/* Article 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 8 - Obligations du Client</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Client s'engage à :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fournir les accès nécessaires aux comptes publicitaires</li>
                <li>Transmettre les informations et contenus requis dans les délais</li>
                <li>Régler les factures dans les délais convenus</li>
                <li>Maintenir un budget publicitaire suffisant</li>
                <li>Valider les créations publicitaires dans un délai de 48h</li>
              </ul>
            </section>

            {/* Article 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 9 - Garantie satisfait ou remboursé</h2>
              <div className="bg-success-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  Pour le premier mois de collaboration, si le Client n'est pas satisfait des résultats obtenus, il peut demander le remboursement intégral de sa première mensualité dans les 30 jours suivant le début de la prestation. Cette garantie ne s'applique pas au budget publicitaire déjà dépensé.
                </p>
              </div>
            </section>

            {/* Article 10 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 10 - Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed">
                Les créations publicitaires réalisées par le Prestataire deviennent la propriété du Client après paiement intégral. Le Prestataire conserve un droit de citation à des fins de portfolio, sauf opposition écrite du Client.
              </p>
            </section>

            {/* Article 11 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 11 - Limitation de responsabilité</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Prestataire est soumis à une obligation de moyens, non de résultats. La responsabilité du Prestataire est limitée au montant des sommes versées par le Client au cours des 12 derniers mois.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le Prestataire ne peut être tenu responsable des décisions prises par les plateformes publicitaires (suspension de compte, refus de publicités, etc.).
              </p>
            </section>

            {/* Article 12 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 12 - Résiliation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La résiliation doit être notifiée par écrit avec un préavis de :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Pack ESSENTIAL :</strong> 15 jours</li>
                <li><strong>Pack GROWTH et ELITE :</strong> 30 jours</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                En cas de manquement grave de l'une des parties, la résiliation peut être prononcée sans préavis après mise en demeure restée infructueuse pendant 15 jours.
              </p>
            </section>

            {/* Article 13 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 13 - Confidentialité</h2>
              <p className="text-gray-700 leading-relaxed">
                Les parties s'engagent à garder confidentielles toutes les informations échangées dans le cadre de leur collaboration. Cette obligation perdure 2 ans après la fin du contrat.
              </p>
            </section>

            {/* Article 14 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Article 14 - Droit applicable et litiges</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes CGV sont régies par le droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut d'accord, les tribunaux de Paris seront seuls compétents.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-primary-50 to-success-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant ces conditions générales :
              </p>
              <div className="space-y-2">
                <p><strong>Email :</strong> contact@upnextgrowth.com</p>
                <p><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
