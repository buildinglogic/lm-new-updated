"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { trackBookDemoCTAClick } from "@/lib/amplitude"
import { ArrowRight, CheckCircle, Calculator, Search, Zap, BarChart3 } from "lucide-react"

export default function TariffIQPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ComparisonSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

/* ════════════════════════════════════════════════════════
   HERO SECTION
════════════════════════════════════════════════════════ */
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center pt-[52px] overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 122, 122, 0.05), transparent)'
        }}
      />
      
      <div className="content-wide px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div 
              className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-teal)' }}
              >
                <Calculator className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--accent-teal)' }}>
                TariffIQ
              </span>
            </div>

            <h1 
              className={`mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Know your HSN code<br />
              <span style={{ color: 'var(--accent-teal)' }}>in seconds.</span>
            </h1>

            <p 
              className={`text-xl lg:text-2xl mb-10 max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}
            >
              AI classifies your product to the correct 8-digit ITC-HS code, calculates duty liability, 
              and tells you whether RoDTEP or Drawback earns you more.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link 
                href="/book-demo"
                onClick={() => trackBookDemoCTAClick('TariffIQ Hero')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-full transition-all hover:scale-[1.02]"
                style={{ background: 'var(--accent-teal)', color: 'white' }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full transition-all hover:bg-[var(--bg-tertiary)]"
                style={{ 
                  color: 'var(--accent-teal)',
                  border: '1px solid rgba(0, 122, 122, 0.3)'
                }}
              >
                See How It Works
              </button>
            </div>

            {/* Quick stats */}
            <div 
              className={`flex items-center gap-8 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                { value: "8-digit", label: "ITC-HS precision" },
                { value: "<10s", label: "Classification time" },
                { value: "95%", label: "Accuracy" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-semibold" style={{ color: 'var(--accent-teal)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <HSNClassifierMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   HSN CLASSIFIER MOCKUP
════════════════════════════════════════════════════════ */
function HSNClassifierMockup() {
  return (
    <div className="mockup-window animate-float-subtle">
      <div className="mockup-header">
        <div className="mockup-dot mockup-dot-red" />
        <div className="mockup-dot mockup-dot-yellow" />
        <div className="mockup-dot mockup-dot-green" />
        <span className="ml-4 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
          TariffIQ — HSN Classifier
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--status-success)' }}>
          <span className="w-2 h-2 rounded-full bg-[var(--status-success)] animate-pulse-subtle" />
          Online
        </span>
      </div>
      
      <div className="p-6">
        {/* User query */}
        <div className="flex justify-end mb-4">
          <div 
            className="px-4 py-3 rounded-2xl rounded-br-md text-sm text-white max-w-xs"
            style={{ background: 'var(--accent-teal)' }}
          >
            What is the HSN code and best export scheme for centrifugal pumps?
          </div>
        </div>

        {/* AI response */}
        <div className="flex justify-start mb-4">
          <div 
            className="px-4 py-4 rounded-2xl rounded-bl-md max-w-sm"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-4 h-4" style={{ color: 'var(--accent-teal)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--accent-teal)' }}>
                HSN 84137096 — High confidence: 95%
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
              Slurry pumps | Other centrifugal pumps. Chapter 84 — Nuclear Reactors, Boilers, Machinery.
            </p>
            <div className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
              8-digit ITC-HS: 8413 70 96
            </div>
          </div>
        </div>

        {/* Scheme comparison */}
        <div 
          className="p-4 rounded-xl"
          style={{ background: 'var(--bg-tertiary)' }}
        >
          <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>
            Incentive Comparison
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-black/[0.04]">
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>RoDTEP</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--accent-teal)' }}>0.5%</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/[0.04]">
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Duty Drawback (AIR)</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>0.3%</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Recommended</span>
              <span className="badge-success">RoDTEP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════
   PROBLEM SECTION
════════════════════════════════════════════════════════ */
function ProblemSection() {
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
    <section ref={ref} className="section-padding bg-[var(--bg-secondary)]">
      <div className="content-medium px-6">
        <div className="text-center mb-16">
          <span className="section-label mb-6 inline-block">The Problem</span>
          <h2 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Wrong HSN codes are<br />
            <span style={{ color: 'var(--accent-teal)' }}>blocking your refunds.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-8 h-8" />,
              metric: "1-2 days",
              title: "Manual classification time",
              description: "Searching through ITC-HS schedules to find the right 8-digit code."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              metric: "~70%",
              title: "Manual accuracy rate",
              description: "Human error rate when classifying complex products without AI assistance."
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              metric: "Lakhs",
              title: "Lost to wrong scheme",
              description: "Choosing Drawback when RoDTEP pays more, or vice versa."
            }
          ].map((item, i) => (
            <div 
              key={i}
              className={`feature-card text-center transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-teal)' }}
              >
                {item.icon}
              </div>
              <div 
                className="text-4xl font-semibold mb-3"
                style={{ color: 'var(--accent-teal)' }}
              >
                {item.metric}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   HOW IT WORKS
════════════════════════════════════════════════════════ */
function HowItWorksSection() {
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

  const steps = [
    {
      number: "01",
      title: "Describe your product",
      description: "Tell us what you're exporting in plain English. No need to know the technical classification."
    },
    {
      number: "02",
      title: "AI finds the right HSN",
      description: "Our 4-layer AI engine searches, matches, and verifies the correct 8-digit ITC-HS code with 95% accuracy."
    },
    {
      number: "03",
      title: "Get scheme recommendation",
      description: "Instantly see RoDTEP vs Duty Drawback comparison and know which scheme maximizes your earnings."
    }
  ]

  return (
    <section ref={ref} id="how-it-works" className="section-padding">
      <div className="content-medium px-6">
        <div className="text-center mb-16">
          <span className="section-label mb-6 inline-block">How It Works</span>
          <h2 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            From description to<br />
            <span style={{ color: 'var(--accent-teal)' }}>HSN in seconds.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i}
              className={`relative transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div 
                className="text-6xl font-bold mb-6"
                style={{ color: 'var(--bg-tertiary)' }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   FEATURES
════════════════════════════════════════════════════════ */
function FeaturesSection() {
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

  const features = [
    {
      title: "8-digit ITC-HS classification",
      description: "Full precision classification to the most specific tariff code, not just chapter level."
    },
    {
      title: "RoDTEP vs Drawback comparison",
      description: "Automatically calculates and compares both schemes to maximize your export incentives."
    },
    {
      title: "Full landed cost calculation",
      description: "For importers: BCD, SWS, IGST, and Compensation Cess calculated instantly."
    },
    {
      title: "ITC-HS policy checking",
      description: "Checks if your product is Free, Restricted, or Prohibited for export/import."
    },
    {
      title: "Handles vague descriptions",
      description: "Our AI asks clarifying questions when needed, just like a customs expert would."
    },
    {
      title: "Clarifying Q&A support",
      description: "Multi-turn conversation to narrow down ambiguous product descriptions."
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-[var(--bg-secondary)]">
      <div className="content-medium px-6">
        <div className="text-center mb-16">
          <span className="section-label mb-6 inline-block">Features</span>
          <h2 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Built for<br />
            <span style={{ color: 'var(--accent-teal)' }}>tariff intelligence.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i}
              className={`feature-card transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-teal)' }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   COMPARISON TABLE
════════════════════════════════════════════════════════ */
function ComparisonSection() {
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
    <section ref={ref} className="section-padding">
      <div className="content-narrow px-6">
        <div className="text-center mb-12">
          <h2 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Manual vs <span style={{ color: 'var(--accent-teal)' }}>TariffIQ</span>
          </h2>
        </div>

        <div 
          className={`overflow-hidden rounded-2xl border border-black/[0.04] transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <table className="comparison-table">
            <thead>
              <tr style={{ background: 'var(--bg-tertiary)' }}>
                <th>Metric</th>
                <th>Manual</th>
                <th style={{ color: 'var(--accent-teal)' }}>With TariffIQ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Classification Time</td>
                <td style={{ color: 'var(--text-secondary)' }}>1-2 days</td>
                <td style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>{'<'} 10 sec</td>
              </tr>
              <tr>
                <td>Accuracy</td>
                <td style={{ color: 'var(--text-secondary)' }}>~70%</td>
                <td style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>95%</td>
              </tr>
              <tr>
                <td>Scheme Comparison</td>
                <td style={{ color: 'var(--text-secondary)' }}>Manual lookup</td>
                <td style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>Automatic</td>
              </tr>
              <tr>
                <td>Policy Check</td>
                <td style={{ color: 'var(--text-secondary)' }}>Separate process</td>
                <td style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>Included</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   CTA SECTION
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
      className="section-padding"
      style={{ background: 'var(--accent-teal)' }}
    >
      <div className="content-narrow px-6 text-center">
        <h2 
          className={`text-white mb-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Stop guessing<br />your HSN codes.
        </h2>
        
        <p 
          className={`text-xl text-white/80 mb-10 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          See TariffIQ classify your products in real-time.
        </p>
        
        <Link 
          href="/book-demo"
          onClick={() => trackBookDemoCTAClick('TariffIQ CTA')}
          className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-full transition-all duration-700 delay-200 hover:scale-[1.02] ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            background: 'white', 
            color: 'var(--accent-teal)'
          }}
        >
          Book Your Demo
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
