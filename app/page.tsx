import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import ServicesSection from '@/components/ServicesSection'
import ServiceShowcaseSection from '@/components/ServiceShowcaseSection'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import BenefitsSection from '@/components/BenefitsSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import TrustSection from '@/components/TrustSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ServiceShowcaseSection />
      <PricingPreviewSection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <TrustSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
