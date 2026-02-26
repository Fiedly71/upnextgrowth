'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Smartphone, Target, Globe, ArrowRight } from 'lucide-react';

export default function ServiceShowcaseSection() {
  const services = [
    {
      icon: Smartphone,
      title: 'Facebook & Instagram Advertising',
      description: 'Turn your ads into real clients with strategic campaigns that convert.',
      highlights: [
        'Precise audience targeting',
        'High-converting ad creatives',
        'Continuous optimization',
      ],
      link: '/facebook-instagram-ads',
      color: 'from-blue-600 to-purple-700',
      iconBg: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Target,
      title: 'Qualified Lead Generation',
      description: 'Generate leads that actually convert, not just random contacts.',
      highlights: [
        'Smart targeting strategies',
        'Optimized conversion funnels',
        'Quality over quantity',
      ],
      link: '/lead-generation',
      color: 'from-green-600 to-teal-700',
      iconBg: 'bg-green-100 text-green-600',
    },
    {
      icon: Globe,
      title: 'Website & Landing Pages',
      description: 'Conversion-focused design that turns visitors into clients.',
      highlights: [
        'Strategic page structure',
        'Professional copywriting',
        'Mobile-responsive design',
      ],
      link: '/website-landing-pages',
      color: 'from-purple-600 to-pink-700',
      iconBg: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos services{' '}
            <span className="gradient-text">en détail</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment chaque service peut transformer votre business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col border border-gray-100">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-success-500 mt-0.5">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.link}
                    className="flex items-center justify-between gap-2 text-primary-700 font-semibold group-hover:text-success-600 transition-colors"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à faire passer votre business au niveau supérieur ?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Configurez votre forfait personnalisé en quelques minutes
            </p>
            <Link
              href="/configurateur"
              className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Configurer mon forfait
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
