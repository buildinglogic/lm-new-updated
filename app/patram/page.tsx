"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { trackBookDemoCTAClick } from "@/lib/amplitude"
import { ArrowRight, CheckCircle, Globe, AlertTriangle, FileText, MapPin, Clock } from "lucide-react"

export default function PatramPage() {
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
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(52, 199, 89, 0.05), transparent)'
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
                style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-green)' }}
              >
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--accent-green)' }}>
                Patram AI
              </span>
            </div>

            <h1 
              className={`mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Know the rules<br />
              <span className="text-gradient-green">before you ship.</span>
            </h1>

            <p 
              className={`text-xl lg:text-2xl mb-10 max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}
            >
              Instant customs rules, required documents, duty rates and compliance checklists 
              for 190+ countries. Powered by live trade policy data.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link 
                href="/book-demo"
                onClick={() => trackBookDemoCTAClick('Patram Hero')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-full transition-all hover:scale-[1.02]"
                style={{ background: 'var(--accent-green)', color: 'white' }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full transition-all hover:bg-[var(--bg-tertiary)]"
                style={{ 
                  color: 'var(--accent-green)',
                  border: '1px solid rgba(52, 199, 89, 0.3)'
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
                { value: "190+", label: "Countries" },
                { value: "<30s", label: "Research time" },
                { value: "Live", label: "Policy data" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-semibold" style={{ color: 'var(--accent-green)' }}>
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
            <ExportAdvisorMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   EXPORT ADVISOR MOCKUP
════════════════════════════════════════════════════════ */
function ExportAdvisorMockup() {
  return (
    <div className="mockup-window animate-float-subtle">
      <div className="mockup-header">
        <div className="mockup-dot mockup-dot-red" />
        <div className="mockup-dot mockup-dot-yellow" />
        <div className="mockup-dot mockup-dot-green" />
        <span className="ml-4 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
          Patram AI — Export Advisor
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
            style={{ background: 'var(--accent-green)' }}
          >
            I want to export organic cotton fabric to Germany
          </div>
        </div>

        {/* Warning alert */}
        <div 
          className="flex items-start gap-3 p-4 rounded-xl mb-4"
          style={{ background: 'rgba(255, 149, 0, 0.1)' }}
        >
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--status-warning)' }} />
          <div>
            <div className="text-sm font-semibold mb-1" style={{ color: 'var(--status-warning)' }}>
              Restricted in Germany
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Azo dyes are prohibited in textiles sold in the EU. Your fabric must be tested and certified 
              below 30 mg/kg before customs will clear it.
            </p>
          </div>
        </div>

        {/* Requirements list */}
        <div 
          className="p-4 rounded-xl"
          style={{ background: 'var(--bg-tertiary)' }}
        >
          <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>
            Documents Required
          </div>
          <div className="space-y-2">
            {[
              "Certificate of Origin",
              "GOTS Certification",
              "Azo-free Test Report",
              "Commercial Invoice",
              "Packing List"
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" style={{ color: 'var(--accent-green)' }} />
                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Duty info */}
        <div className="mt-4 pt-4 border-t border-black/[0.04] flex items-center justify-between">
          <div>
            <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Import Duty (Germany)</div>
            <div className="text-lg font-semibold" style={{ color: 'var(--accent-green)' }}>8% + 19% VAT</div>
          </div>
          <div className="text-right">
            <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>GSP Eligible</div>
            <span className="badge-success">Yes</span>
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
            Export research is<br />
            <span className="text-gradient-green">eating your time.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              metric: "3-8 hrs",
              title: "Manual research time",
              description: "Per country, searching through customs websites and trade agreements."
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              metric: "190+",
              title: "Countries to track",
              description: "Each with different rules, duties, and documentation requirements."
            },
            {
              icon: <FileText className="w-8 h-8" />,
              metric: "Partial",
              title: "Coverage",
              description: "Manual research often misses critical restrictions and requirements."
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
                style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-green)' }}
              >
                {item.icon}
              </div>
              <div 
                className="text-4xl font-semibold mb-3"
                style={{ color: 'var(--accent-green)' }}
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
      title: "Tell us what and where",
      description: "Describe your product and destination country. No need for HSN codes — we figure that out."
    },
    {
      number: "02",
      title: "AI checks all policies",
      description: "We scan live trade data, customs regulations, and bilateral agreements in real-time."
    },
    {
      number: "03",
      title: "Get your export brief",
      description: "Receive a complete compliance checklist: duties, required documents, restrictions, and certifications."
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
            From question to<br />
            <span className="text-gradient-green">export brief in seconds.</span>
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
      title: "Country-specific customs rules",
      description: "Detailed regulations for each destination, not generic guidelines."
    },
    {
      title: "Live duty rate lookup",
      description: "Current tariff rates including preferential rates from trade agreements."
    },
    {
      title: "Required document checklist",
      description: "Every certificate, license, and form you need for compliant export."
    },
    {
      title: "Prohibited goods detection",
      description: "Instantly know if your product faces restrictions or bans."
    },
    {
      title: "GSP eligibility check",
      description: "See if you qualify for preferential duty rates under GSP schemes."
    },
    {
      title: "Multi-country comparison",
      description: "Compare export requirements across multiple destinations at once."
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
            <span className="text-gradient-green">global trade.</span>
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
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-green)' }} />
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
            Manual vs <span className="text-gradient-green">Patram AI</span>
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
                <th>Manual Research</th>
                <th style={{ color: 'var(--accent-green)' }}>With Patram</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Research Time</td>
                <td style={{ color: 'var(--text-secondary)' }}>3-8 hours</td>
                <td style={{ color: 'var(--accent-green)', fontWeight: 600 }}>{'<'} 30 sec</td>
              </tr>
              <tr>
                <td>Policy Coverage</td>
                <td style={{ color: 'var(--text-secondary)' }}>Partial</td>
                <td style={{ color: 'var(--accent-green)', fontWeight: 600 }}>190+ countries</td>
              </tr>
              <tr>
                <td>Data Freshness</td>
                <td style={{ color: 'var(--text-secondary)' }}>Variable</td>
                <td style={{ color: 'var(--accent-green)', fontWeight: 600 }}>Live</td>
              </tr>
              <tr>
                <td>Document Checklist</td>
                <td style={{ color: 'var(--text-secondary)' }}>Manual compile</td>
                <td style={{ color: 'var(--accent-green)', fontWeight: 600 }}>Automatic</td>
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
      style={{ background: 'var(--accent-green)' }}
    >
      <div className="content-narrow px-6 text-center">
        <h2 
          className={`text-white mb-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Stop researching.<br />Start exporting.
        </h2>
        
        <p 
          className={`text-xl text-white/80 mb-10 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          See Patram AI answer your export questions in real-time.
        </p>
        
        <Link 
          href="/book-demo"
          onClick={() => trackBookDemoCTAClick('Patram CTA')}
          className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-full transition-all duration-700 delay-200 hover:scale-[1.02] ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            background: 'white', 
            color: 'var(--accent-green)'
          }}
        >
          Book Your Demo
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
