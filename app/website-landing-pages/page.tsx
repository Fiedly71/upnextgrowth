'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Zap, Shield, Smartphone, BarChart } from 'lucide-react';

export default function WebsiteLandingPagesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-pink-700 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8"
          >
            <span className="text-2xl">🌐</span>
            <span className="text-white text-sm font-medium">Website & Landing Page Creation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Websites & Landing Pages{' '}
            <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Built to Convert
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-purple-100 max-w-3xl mx-auto leading-relaxed"
          >
            We design websites and landing pages focused on one thing: turning visitors into clients.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="/configurateur"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:scale-105 transition-all shadow-xl hover:shadow-2xl group"
            >
              Build My Website
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <span className="text-xl">⚠️</span>
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              A Website Without Strategy{' '}
              <span className="text-red-600">Doesn't Convert</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: '👀',
                title: 'Looks Good, No Results',
                text: 'Many websites look good but don\'t generate results.',
              },
              {
                icon: '🚪',
                title: 'Visitors Leave',
                text: 'Without a clear structure, message, and call-to-action, visitors leave without taking action.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <span className="text-xl">✨</span>
              Our Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              <span className="gradient-text">Conversion-Focused</span> Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At OpenXCo Agency, we build websites and landing pages with a clear purpose:
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Zap, title: 'Capture attention', color: 'from-purple-500 to-purple-600' },
              { icon: Shield, title: 'Build trust', color: 'from-pink-500 to-pink-600' },
              { icon: Smartphone, title: 'Guide visitors', color: 'from-purple-600 to-pink-600' },
              { icon: BarChart, title: 'Drive action', color: 'from-pink-600 to-red-600' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-center shadow-xl"
          >
            <p className="text-2xl md:text-3xl font-bold text-white">
              Every element is designed to support conversions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-100 rounded-full blur-3xl opacity-20"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success-100 text-success-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <span className="text-xl">📦</span>
              Package Details
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What's <span className="gradient-text">Included</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📊', title: 'Website or landing page strategy', desc: 'Strategic planning for maximum impact' },
              { icon: '✍️', title: 'Copywriting & structure', desc: 'Persuasive content that converts' },
              { icon: '📱', title: 'Responsive design', desc: 'Perfect on all devices and screen sizes' },
              { icon: '🎯', title: 'Call-to-action optimization', desc: 'Strategic CTAs that drive conversions' },
              { icon: '🚀', title: 'Basic SEO & performance setup', desc: 'Fast loading and search engine ready', span: true },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1 ${item.span ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <span className="text-xl">🌟</span>
              Results
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What You'll <span className="text-purple-600">Get</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '✨', title: 'Professional presence', desc: 'A clear and professional online presence', color: 'from-purple-500 to-purple-600' },
              { icon: '📈', title: 'Higher conversions', desc: 'Increased conversion rates from visitors to customers', color: 'from-pink-500 to-pink-600' },
              { icon: '🎯', title: 'Better ad performance', desc: 'Improved ROI for your advertising campaigns', color: 'from-purple-600 to-pink-600' },
              { icon: '🚀', title: 'Scalable foundation', desc: 'A solid base to grow your business', color: 'from-pink-600 to-red-600' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-pink-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-2xl">🚀</span>
              <span className="text-white text-sm font-medium">Ready to Start?</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Your website should work as a{' '}
              <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                sales tool
              </span>
              {' '}— not just a digital business card.
            </h2>
            
            <p className="text-xl mb-10 text-purple-100 max-w-2xl mx-auto">
              Let's build a conversion-focused website that drives real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/configurateur"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:scale-105 transition-all shadow-xl group"
              >
                Start Your Project Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
