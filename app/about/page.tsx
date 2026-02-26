'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Target, Rocket, Users, Award, Heart, Zap } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Résultats mesurables',
    description: 'Chaque action est orientée ROI. Nous ne promettons pas, nous démontrons.',
  },
  {
    icon: Rocket,
    title: 'Innovation constante',
    description: 'Nous testons en permanence les nouvelles stratégies pour garder une longueur d\'avance.',
  },
  {
    icon: Users,
    title: 'Partenariat',
    description: 'Votre succès est notre succès. Nous travaillons ensemble, pas pour vous.',
  },
  {
    icon: Heart,
    title: 'Transparence',
    description: 'Accès complet aux données, rapports clairs, communication honnête.',
  },
]

const stats = [
  { value: '150+', label: 'Clients accompagnés' },
  { value: '2.5M€', label: 'Budget géré annuellement' },
  { value: '4.2x', label: 'ROAS moyen' },
  { value: '97%', label: 'Taux de satisfaction' },
]

const team = [
  {
    name: 'Alexandre Martin',
    role: 'Fondateur & Stratège Digital',
    image: '/team/founder.jpg',
    description: 'Ex-consultant Meta, 10 ans d\'expérience en acquisition digitale.',
  },
  {
    name: 'Sophie Dubois',
    role: 'Directrice des Opérations',
    image: '/team/operations.jpg',
    description: 'Spécialiste Google Ads certifiée, optimisation de funnel.',
  },
  {
    name: 'Thomas Bernard',
    role: 'Lead Designer',
    image: '/team/designer.jpg',
    description: 'UX/UI expert, création de landing pages à haute conversion.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-success-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-section relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nous transformons votre <span className="text-success-400">marketing digital</span>
            </h1>
            <p className="text-xl text-white/80">
              Up Next Growth est née d'une conviction : chaque entreprise mérite une stratégie digitale performante, sans jargon inutile et avec des résultats concrets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-success-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Notre histoire
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 mb-4">
                  Après avoir géré plus de 5 millions d'euros de budget publicitaire pour des startups et PME, nous avons remarqué un problème récurrent : les entreprises se faisaient souvent sur-promettre des résultats irréalistes par des agences plus intéressées par leurs honoraires que par les performances de leurs clients.
                </p>
                <p className="text-gray-700 mb-4">
                  C'est pourquoi nous avons créé Up Next Growth en 2023 avec une mission simple : <strong>délivrer des résultats mesurables avec une transparence totale</strong>.
                </p>
                <p className="text-gray-700">
                  Aujourd'hui, nous accompagnons plus de 150 entreprises dans leur croissance digitale, avec un taux de satisfaction de 97% et un ROAS moyen de 4.2x.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-success-50 rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Notre promesse</h3>
                  <p className="text-gray-600">Ce qui nous différencie</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Pas de jargon : des explications claires et actionnables</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Garantie 30 jours satisfait ou remboursé</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Accès complet à vos comptes publicitaires</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Rapports détaillés et transparents</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              L'équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des experts passionnés par la croissance digitale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-success-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary-900" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-success-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="container-section text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à accélérer votre croissance ?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et voyons comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="btn btn-primary bg-white text-primary-900 hover:bg-gray-100">
                Voir nos forfaits
              </a>
              <a href="/contact" className="btn btn-outline border-white text-white hover:bg-white/10">
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
