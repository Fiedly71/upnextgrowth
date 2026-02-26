'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Target, BarChart3, Zap, TrendingUp } from 'lucide-react';

export default function FacebookInstagramAdsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8"
          >
            <span className="text-2xl">📱</span>
            <span className="text-white text-sm font-medium">Facebook & Instagram Advertising</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Turn Facebook & Instagram Ads Into{' '}
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Real Clients
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            We create, manage, and optimize high-performance ad campaigns that help businesses attract the right audience, generate sales, and grow consistently.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="/configurateur"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl hover:shadow-2xl group"
            >
              Get a Free Strategy Call
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
              Why Most Ads <span className="text-red-600">Don't Work</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '💸',
                title: 'Wasted Budget',
                text: 'Many businesses spend money on Facebook and Instagram ads without seeing real results.',
              },
              {
                icon: '🎯',
                title: 'Lack of Strategy',
                text: 'The problem isn\'t the platform — it\'s the lack of strategy, targeting, and optimization.',
              },
              {
                icon: '📉',
                title: 'Low Conversions',
                text: 'Running ads without a clear plan leads to wasted budget, low conversions, and frustration.',
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <span className="text-xl">✨</span>
              Our Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="gradient-text">Advertising Strategy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At OpenXCo Agency, we don't just launch ads — we build complete advertising systems designed to convert.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Target, title: 'Precise audience targeting', color: 'from-blue-500 to-blue-600' },
              { icon: Zap, title: 'High-converting ad creatives', color: 'from-purple-500 to-purple-600' },
              { icon: BarChart3, title: 'Continuous optimization', color: 'from-blue-600 to-purple-600' },
              { icon: TrendingUp, title: 'Data-driven decisions', color: 'from-purple-600 to-pink-600' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-center shadow-xl"
          >
            <p className="text-2xl md:text-3xl font-bold text-white">
              The goal is simple: more clients, not just clicks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100 rounded-full blur-3xl opacity-20"></div>
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
              { icon: '🎯', title: 'Audience research & targeting', desc: 'Deep analysis to find your ideal customers' },
              { icon: '📋', title: 'Campaign strategy & setup', desc: 'Complete campaign architecture and implementation' },
              { icon: '🎨', title: 'Ad creative guidance', desc: 'Expert advice on visuals and copywriting' },
              { icon: '💰', title: 'Budget optimization', desc: 'Maximum ROI from every dollar spent' },
              { icon: '📊', title: 'Performance tracking & reporting', desc: 'Transparent results and actionable insights', span: true },
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-success-100 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success-100 text-success-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <span className="text-xl">📈</span>
              Expected Results
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What You Can <span className="text-success-600">Expect</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'Increased visibility', desc: 'Reach the right audience at the right time', color: 'from-blue-500 to-blue-600' },
              { icon: '📈', title: 'Higher-quality traffic', desc: 'Attract visitors who are ready to buy', color: 'from-purple-500 to-purple-600' },
              { icon: '💰', title: 'More conversions', desc: 'Turn clicks into customers and revenue', color: 'from-success-500 to-success-600' },
              { icon: '🚀', title: 'Better ROAS', desc: 'Maximize return on every ad dollar spent', color: 'from-accent-500 to-accent-600' },
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
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
              Ready to stop wasting money on ads and start getting{' '}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                real results?
              </span>
            </h2>
            
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Book your free consultation now and discover how we can transform your advertising performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/configurateur"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl group"
              >
                Book Your Free Consultation
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
