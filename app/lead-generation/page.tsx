'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Users, Filter, TrendingUp, CheckCircle } from 'lucide-react';

export default function LeadGenerationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-green-600 via-teal-600 to-teal-700 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8"
          >
            <span className="text-2xl">🎯</span>
            <span className="text-white text-sm font-medium">Qualified Lead Generation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Qualified Leads That Turn Into{' '}
            <span className="bg-gradient-to-r from-green-200 to-teal-200 bg-clip-text text-transparent">
              Customers
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            We help businesses generate high-quality leads that are ready to convert — not just random contacts.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="/configurateur"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 hover:scale-105 transition-all shadow-xl hover:shadow-2xl group"
            >
              Start Generating Leads
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <span className="text-xl">⚠️</span>
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              More Leads <span className="text-orange-600">Doesn't Mean</span> More Sales
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📊',
                title: 'Low Conversion',
                text: 'Many businesses collect leads that never convert.',
              },
              {
                icon: '⌛',
                title: 'Wasted Resources',
                text: 'Low-quality leads waste time, money, and energy.',
              },
              {
                icon: '🎯',
                title: 'Quality Over Quantity',
                text: 'What really matters is lead quality, not quantity.',
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <span className="text-xl">✨</span>
              Our Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="gradient-text">Lead Generation System</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At OpenXCo Agency, we focus on attracting people who are genuinely interested in your offer.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: CheckCircle, title: 'Clear value propositions', color: 'from-green-500 to-green-600' },
              { icon: Filter, title: 'Smart targeting', color: 'from-teal-500 to-teal-600' },
              { icon: TrendingUp, title: 'Optimized funnels', color: 'from-green-600 to-teal-600' },
              { icon: Users, title: 'Follow-up strategies', color: 'from-teal-600 to-cyan-600' },
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
            className="bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-2xl text-center shadow-xl"
          >
            <p className="text-2xl md:text-3xl font-bold text-white">
              Every lead is designed to have a real potential to become a client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-100 rounded-full blur-3xl opacity-20"></div>
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
              { icon: '📊', title: 'Lead funnel strategy', desc: 'Complete funnel design optimized for conversions' },
              { icon: '📢', title: 'Ad & traffic setup', desc: 'Multi-channel campaigns to drive qualified traffic' },
              { icon: '📝', title: 'Lead forms or landing pages', desc: 'High-converting pages designed to capture leads' },
              { icon: '✔️', title: 'Qualification process', desc: 'Systems to filter and score lead quality' },
              { icon: '📊', title: 'Performance monitoring', desc: 'Real-time tracking and optimization', span: true },
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

      {/* Who This Is For Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <span className="text-xl">👥</span>
              Perfect For
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Who This Is <span className="text-green-600">For</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '💼', title: 'Service-based businesses', desc: 'Consultants, agencies, and professional services', color: 'from-green-500 to-green-600' },
              { icon: '🏪', title: 'Local businesses', desc: 'Restaurants, retailers, and local service providers', color: 'from-teal-500 to-teal-600' },
              { icon: '👔', title: 'Coaches & consultants', desc: 'Business coaches, trainers, and advisors', color: 'from-green-600 to-teal-600' },
              { icon: '🚀', title: 'Growing brands', desc: 'Scaling businesses ready to expand their reach', color: 'from-teal-600 to-cyan-600' },
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
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 via-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        
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
              If you want leads that actually convert,{' '}
              <span className="bg-gradient-to-r from-green-200 to-teal-200 bg-clip-text text-transparent">
                this service is for you.
              </span>
            </h2>
            
            <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
              Start generating qualified leads that are ready to become paying customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/configurateur"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 hover:scale-105 transition-all shadow-xl group"
              >
                Get Qualified Leads Now
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
