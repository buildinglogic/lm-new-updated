"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { trackBookDemoCTAClick, trackWatchDemoClick } from "@/lib/amplitude"
import { ArrowRight, CheckCircle, Shield, Calculator, Globe, Play } from "lucide-react"

export default function HomePage() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <PainPointSection />
      <ProductsShowcase />
      <TrustSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

/* ════════════════════════════════════════════════════════
   HERO SECTION — Apple-style, pain-first messaging
════════════════════════════════════════════════════════ */
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-[52px] overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 113, 227, 0.05), transparent)'
        }}
      />
      
      <div className="content-medium px-6 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Label */}
          <div 
            className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="section-label">India's #1 AI Trade Platform</span>
          </div>

          {/* Main headline */}
          <h1 
            className={`mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ color: 'var(--text-primary)' }}
          >
            Stop losing crores to<br />
            <span className="text-gradient-blue">document errors.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-xl lg:text-2xl mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}
          >
            Indian exporters lose 3-7% of FOB value every month to mismatches 
            between Shipping Bills and Invoices. We catch every error before customs does.
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link 
              href="/book-demo"
              onClick={() => trackBookDemoCTAClick('Hero')}
              className="btn-apple-primary text-base px-8 py-3.5 gap-2"
            >
              Book Free Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <button
              onClick={() => {
                trackWatchDemoClick('Hero')
                document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-apple-secondary text-base px-8 py-3.5 gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          {/* Stats row */}
          <div 
            className={`flex items-center justify-center gap-8 lg:gap-16 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { value: "50%", label: "Trade data mismatches" },
              { value: "30%", label: "Docs with errors" },
              { value: "3-7%", label: "FOB value at risk" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-semibold mb-1"
                  style={{ color: 'var(--accent-blue)' }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-sm"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   PAIN POINT SECTION — The problem, clearly stated
════════════════════════════════════════════════════════ */
function PainPointSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const painPoints = [
    {
      metric: "₹2.4L+",
      title: "At risk per shipment",
      description: "Average exposure from document mismatches in a single export shipment."
    },
    {
      metric: "2-4 hrs",
      title: "Manual checking time",
      description: "Time spent cross-referencing Shipping Bills and Commercial Invoices by hand."
    },
    {
      metric: "40+",
      title: "Fields to verify",
      description: "Critical data points that must match exactly to avoid customs rejection."
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-[var(--bg-secondary)]">
      <div className="content-medium px-6">
        <div className="text-center mb-16">
          <span className="section-label mb-6 inline-block">The Problem</span>
          <h2 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Manual document checking<br />
            <span className="text-gradient-blue">is costing you money.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <div 
              key={i}
              className={`text-center transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div 
                className="text-5xl lg:text-6xl font-semibold mb-4"
                style={{ color: 'var(--accent-blue)' }}
              >
                {point.metric}
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {point.title}
              </h3>
              <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   PRODUCTS SHOWCASE — Three products, each with clear identity
════════════════════════════════════════════════════════ */
function ProductsShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const products = [
    {
      name: "TradeGuard",
      tagline: "Document Verification",
      headline: "Stop mismatches before they cost you.",
      description: "AI-powered cross-verification of Shipping Bills and Commercial Invoices. Catches every discrepancy in under 5 seconds.",
      features: [
        "40+ field cross-validation",
        "Port code semantic matching",
        "FOB value reconciliation",
        "Real-time mismatch alerts"
      ],
      href: "/tradeguard",
      icon: <Shield className="w-8 h-8" />,
      accentColor: "var(--accent-blue)"
    },
    {
      name: "TariffIQ",
      tagline: "HSN Classification",
      headline: "Know your HSN code in seconds.",
      description: "AI classifies products to 8-digit ITC-HS codes with 95% accuracy. Compare RoDTEP vs Duty Drawback to maximize your earnings.",
      features: [
        "8-digit ITC-HS classification",
        "RoDTEP vs Drawback comparison",
        "Full landed cost calculation",
        "Policy compliance checking"
      ],
      href: "/tariffiq",
      icon: <Calculator className="w-8 h-8" />,
      accentColor: "var(--accent-teal)"
    },
    {
      name: "Patram AI",
      tagline: "Export Intelligence",
      headline: "Know the rules before you ship.",
      description: "Instant customs rules, required documents, and duty rates for 190+ countries. Powered by live trade policy data.",
      features: [
        "190+ country coverage",
        "Live duty rate lookup",
        "Required document checklist",
        "Prohibited goods detection"
      ],
      href: "/patram",
      icon: <Globe className="w-8 h-8" />,
      accentColor: "var(--accent-green)"
    }
  ]

  return (
    <section ref={ref} className="section-padding">
      <div className="content-wide px-6">
        <div className="text-center mb-20">
          <span className="section-label mb-6 inline-block">Our Products</span>
          <h2 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Three products.<br />
            <span className="text-gradient-blue">One mission.</span>
          </h2>
          <p 
            className={`mt-6 text-xl max-w-xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ color: 'var(--text-secondary)' }}
          >
            Stop money leaking through your trade documents.
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index, isInView }: { 
  product: {
    name: string
    tagline: string
    headline: string
    description: string
    features: string[]
    href: string
    icon: React.ReactNode
    accentColor: string
  }
  index: number
  isInView: boolean
}) {
  return (
    <div 
      className={`product-card transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: 'var(--bg-tertiary)', color: product.accentColor }}
          >
            {product.icon}
          </div>
          
          <div 
            className="text-sm font-semibold uppercase tracking-wider mb-2"
            style={{ color: product.accentColor }}
          >
            {product.tagline}
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {product.headline}
          </h3>
          
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            {product.description}
          </p>
          
          <ul className="space-y-3 mb-8">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: product.accentColor }} />
                <span style={{ color: 'var(--text-primary)' }}>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            href={product.href}
            className="inline-flex items-center gap-2 text-base font-medium transition-all hover:gap-3"
            style={{ color: product.accentColor }}
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mockup placeholder */}
        <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div 
            className="mockup-window"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div className="mockup-header">
              <div className="mockup-dot mockup-dot-red" />
              <div className="mockup-dot mockup-dot-yellow" />
              <div className="mockup-dot mockup-dot-green" />
              <span className="ml-4 text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                {product.name}
              </span>
            </div>
            <div className="aspect-[4/3] flex items-center justify-center p-12">
              <div 
                className="w-24 h-24 rounded-3xl flex items-center justify-center"
                style={{ background: 'white', color: product.accentColor }}
              >
                {product.icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════
   TRUST SECTION — Recognition and partners
════════════════════════════════════════════════════════ */
function TrustSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const awards = [
    {
      name: "Aegis Graham Bell Award 2026",
      description: "16th AGBA Innovation in Gen AI — CX, Sales & GTM Intelligence Category Winner"
    },
    {
      name: "Karnataka Elevate 2025",
      description: "Selected from 1,474+ applicants — Non-dilutive grant of up to ₹50 Lakhs"
    }
  ]

  const partners = [
    "Microsoft for Startups Founders Hub",
    "Karnataka Government",
    "NVIDIA Inception Program"
  ]

  return (
    <section ref={ref} className="section-padding bg-[var(--bg-secondary)]">
      <div className="content-medium px-6">
        <div className="text-center mb-16">
          <span className="section-label mb-6 inline-block">Recognition</span>
          <h2 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Recognised. Validated.<br />
            <span className="text-gradient-blue">Trusted.</span>
          </h2>
        </div>

        {/* Awards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {awards.map((award, i) => (
            <div 
              key={i}
              className={`feature-card transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {award.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                {award.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div 
          className={`text-center transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm mb-6" style={{ color: 'var(--text-tertiary)' }}>
            Backed by leading technology partners & institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {partners.map((partner, i) => (
              <span 
                key={i}
                className="text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   CTA SECTION — Final conversion push
════════════════════════════════════════════════════════ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={ref} 
      id="video-section"
      className="section-padding"
      style={{ background: 'var(--accent-blue)' }}
    >
      <div className="content-narrow px-6 text-center">
        <h2 
          className={`text-white mb-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Stop losing money to<br />manual documentation.
        </h2>
        
        <p 
          className={`text-xl text-white/80 mb-10 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Get your export operations report and see exactly where compliance gaps are costing you.
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link 
            href="/book-demo"
            onClick={() => trackBookDemoCTAClick('CTA Section')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-full transition-all hover:scale-[1.02]"
            style={{ 
              background: 'white', 
              color: 'var(--accent-blue)'
            }}
          >
            Schedule Your Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link 
            href="/company"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full transition-all hover:bg-white/10"
            style={{ 
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            Contact Us
          </Link>
        </div>
        
        <div 
          className={`flex items-center justify-center gap-6 text-sm text-white/60 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Enterprise-grade Security
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            95% Accuracy
          </span>
        </div>
      </div>
    </section>
  )
}
