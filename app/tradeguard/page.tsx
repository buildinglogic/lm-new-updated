"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { trackBookDemoCTAClick } from "@/lib/amplitude"
import { ArrowRight, CheckCircle, Shield, X, Check, AlertTriangle, Clock, FileCheck } from "lucide-react"

export default function TradeGuardPage() {
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
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 113, 227, 0.05), transparent)'
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
                style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-blue)' }}
              >
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--accent-blue)' }}>
                TradeGuard
              </span>
            </div>

            <h1 
              className={`mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Stop mismatches<br />
              <span className="text-gradient-blue">before they cost you.</span>
            </h1>

            <p 
              className={`text-xl lg:text-2xl mb-10 max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}
            >
              AI-powered cross-verification of Shipping Bills and Commercial Invoices. 
              Catches every discrepancy in under 5 seconds.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link 
                href="/book-demo"
                onClick={() => trackBookDemoCTAClick('TradeGuard Hero')}
                className="btn-apple-primary text-base px-8 py-3.5 gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-apple-secondary text-base px-8 py-3.5"
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
                { value: "40+", label: "Fields checked" },
                { value: "<5s", label: "Processing time" },
                { value: "95%", label: "Accuracy" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-semibold" style={{ color: 'var(--accent-blue)' }}>
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
            <ComplianceCheckMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   COMPLIANCE CHECK MOCKUP
════════════════════════════════════════════════════════ */
function ComplianceCheckMockup() {
  const fields = [
    { name: "Exporter Name", status: "match" as const },
    { name: "IEC Number", status: "match" as const },
    { name: "HSN Code", status: "match" as const },
    { name: "FOB Value", status: "warning" as const, detail: "$42,500 vs $41,800" },
    { name: "Port of Loading", status: "match" as const },
    { name: "Unit of Quantity", status: "mismatch" as const, detail: "NOS vs PCS" },
  ]

  return (
    <div className="mockup-window animate-float-subtle">
      <div className="mockup-header">
        <div className="mockup-dot mockup-dot-red" />
        <div className="mockup-dot mockup-dot-yellow" />
        <div className="mockup-dot mockup-dot-green" />
        <span className="ml-4 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
          TradeGuard — Compliance Check
        </span>
      </div>
      
      <div className="p-6">
        {/* Tabs */}
        <div className="flex gap-1 mb-6">
          <button 
            className="px-4 py-2 text-sm font-medium rounded-lg"
            style={{ background: 'var(--accent-blue)', color: 'white' }}
          >
            Shipping Bill
          </button>
          <button 
            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            Commercial Invoice
          </button>
        </div>

        {/* Fields list */}
        <div className="space-y-3">
          {fields.map((field, i) => (
            <div 
              key={i}
              className="flex items-center justify-between py-3 border-b border-black/[0.04]"
            >
              <div className="flex items-center gap-3">
                {field.status === "match" && (
                  <Check className="w-4 h-4" style={{ color: 'var(--status-success)' }} />
                )}
                {field.status === "warning" && (
                  <AlertTriangle className="w-4 h-4" style={{ color: 'var(--status-warning)' }} />
                )}
                {field.status === "mismatch" && (
                  <X className="w-4 h-4" style={{ color: 'var(--status-error)' }} />
                )}
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {field.name}
                  </div>
                  {field.detail && (
                    <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {field.detail}
                    </div>
                  )}
                </div>
              </div>
              
              <span 
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  field.status === "match" 
                    ? "badge-success" 
                    : field.status === "warning" 
                      ? "badge-warning" 
                      : "badge-error"
                }`}
              >
                {field.status === "match" ? "MATCH" : field.status === "warning" ? "WARNING" : "MISMATCH"}
              </span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" style={{ color: 'var(--status-warning)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--status-warning)' }}>
              2 Issues Found
            </span>
          </div>
          <span className="text-sm font-mono" style={{ color: 'var(--text-tertiary)' }}>
            ₹2,40,000 at risk
          </span>
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
            Document mismatches are<br />
            <span className="text-gradient-blue">silently draining your profits.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              metric: "2-4 hrs",
              title: "Manual checking time",
              description: "Per shipment, spent cross-referencing documents line by line."
            },
            {
              icon: <FileCheck className="w-8 h-8" />,
              metric: "40+",
              title: "Critical fields",
              description: "That must match exactly between Shipping Bill and Invoice."
            },
            {
              icon: <AlertTriangle className="w-8 h-8" />,
              metric: "3-7%",
              title: "FOB value at risk",
              description: "Lost to rejected drawback claims and customs penalties."
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
                style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-blue)' }}
              >
                {item.icon}
              </div>
              <div 
                className="text-4xl font-semibold mb-3"
                style={{ color: 'var(--accent-blue)' }}
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
      title: "Upload your documents",
      description: "Drop your Shipping Bill and Commercial Invoice. We accept PDF, images, and scanned documents."
    },
    {
      number: "02",
      title: "AI extracts & maps fields",
      description: "Our AI reads and structures 40+ fields from each document, handling complex table layouts and handwritten entries."
    },
    {
      number: "03",
      title: "Instant compliance report",
      description: "Get a detailed mismatch report in under 5 seconds. Every discrepancy is flagged with exact field locations."
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
            Three steps to<br />
            <span className="text-gradient-blue">error-free exports.</span>
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
      title: "HSN / HS Code cross-validation",
      description: "Automatically checks if product classification codes match across documents."
    },
    {
      title: "FOB value & currency detection",
      description: "Catches value discrepancies and currency mismatches that cause drawback rejections."
    },
    {
      title: "Port code semantic matching",
      description: "Understands that 'INBOM1' and 'MUMBAI SEAPORT' refer to the same location."
    },
    {
      title: "IEC / GSTIN verification",
      description: "Validates exporter identity codes are consistent across all documents."
    },
    {
      title: "Unit quantity conflict flagging",
      description: "Detects when units of measurement don't align (PCS vs NOS vs KGS)."
    },
    {
      title: "Country origin mismatch alerts",
      description: "Ensures origin country declarations are consistent to avoid customs holds."
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
            <span className="text-gradient-blue">export compliance.</span>
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
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-blue)' }} />
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
            Manual vs <span className="text-gradient-blue">TradeGuard</span>
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
                <th style={{ color: 'var(--accent-blue)' }}>With TradeGuard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Check Time</td>
                <td style={{ color: 'var(--text-secondary)' }}>2-4 hours</td>
                <td style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{'<'} 5 sec</td>
              </tr>
              <tr>
                <td>Fields Checked</td>
                <td style={{ color: 'var(--text-secondary)' }}>~10</td>
                <td style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>40+</td>
              </tr>
              <tr>
                <td>Error Rate</td>
                <td style={{ color: 'var(--text-secondary)' }}>8-12%</td>
                <td style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{'<'} 1%</td>
              </tr>
              <tr>
                <td>Cost per Check</td>
                <td style={{ color: 'var(--text-secondary)' }}>₹500-1000</td>
                <td style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>₹50</td>
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
      style={{ background: 'var(--accent-blue)' }}
    >
      <div className="content-narrow px-6 text-center">
        <h2 
          className={`text-white mb-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Ready to stop<br />losing money?
        </h2>
        
        <p 
          className={`text-xl text-white/80 mb-10 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          See TradeGuard in action with your actual documents.
        </p>
        
        <Link 
          href="/book-demo"
          onClick={() => trackBookDemoCTAClick('TradeGuard CTA')}
          className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-full transition-all duration-700 delay-200 hover:scale-[1.02] ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            background: 'white', 
            color: 'var(--accent-blue)'
          }}
        >
          Book Your Demo
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
