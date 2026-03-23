"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, Check, Calculator, Search, FileText, TrendingUp, Zap, Shield, Globe, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react"
import { trackBookDemoCTAClick } from "@/lib/amplitude"

export default function TariffIQPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <CTASection />
      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

/* ========================
   HERO - TariffIQ specific
======================== */
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F8A]/5 via-background to-background" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#1B4F8A]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#2563EB]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div style={{ opacity, y }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/#products" className="hover:text-foreground transition-colors">Products</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#1B4F8A] font-medium">TariffIQ</span>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4F8A]/10 border border-[#1B4F8A]/20 mb-6"
            >
              <Calculator className="w-4 h-4 text-[#1B4F8A]" />
              <span className="text-sm font-medium text-[#1B4F8A]">HSN Classification & Duty Calculator</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Classify Once.{" "}
              <span className="bg-gradient-to-r from-[#1B4F8A] to-[#2563EB] bg-clip-text text-transparent">
                Maximize
              </span>
              <br />
              Every Incentive.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              Stop guessing HSN codes. TariffIQ uses AI to classify your products to 8-digit ITC-HS 
              and instantly shows whether RoDTEP or Duty Drawback earns you more.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              {[
                { value: "95%", label: "Classification Accuracy" },
                { value: "< 3s", label: "Classification Time" },
                { value: "2x", label: "More Incentive Claims" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-black text-[#1B4F8A]">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/book-demo"
                onClick={() => trackBookDemoCTAClick('TariffIQ Hero')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1B4F8A] to-[#2563EB] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1B4F8A]/30"
              >
                Try TariffIQ Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-foreground border-2 border-border hover:border-[#1B4F8A] transition-all duration-300"
              >
                See How It Works
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <ClassificationDemo />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

/* ========================
   INTERACTIVE CLASSIFICATION DEMO
======================== */
function ClassificationDemo() {
  const [step, setStep] = useState(0)
  const [typing, setTyping] = useState("")
  const fullText = "Basmati rice, aged 2 years, for export to UAE"
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s + 1) % 4)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (step === 0) {
      setTyping("")
      let i = 0
      const typeInterval = setInterval(() => {
        if (i <= fullText.length) {
          setTyping(fullText.slice(0, i))
          i++
        } else {
          clearInterval(typeInterval)
        }
      }, 40)
      return () => clearInterval(typeInterval)
    }
  }, [step])

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#1B4F8A]/20 to-[#2563EB]/20 rounded-3xl blur-xl" />
      
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">TariffIQ Classification</span>
        </div>

        <div className="p-6 space-y-6">
          {/* Input */}
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Product Description</label>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
              <Search className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">
                {typing}
                {step === 0 && <span className="animate-pulse">|</span>}
              </span>
            </div>
          </div>

          {/* Processing */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#1B4F8A]/5 border border-[#1B4F8A]/20"
            >
              <div className="w-5 h-5 border-2 border-[#1B4F8A] border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-[#1B4F8A] font-medium">Analyzing with AI...</span>
            </motion.div>
          )}

          {/* Result */}
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* HSN Code */}
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase">HSN Code</span>
                  <span className="text-xs font-medium text-accent">95% Confidence</span>
                </div>
                <div className="text-2xl font-bold text-foreground">1006 30 20</div>
                <div className="text-sm text-muted-foreground mt-1">Semi-milled or wholly milled rice, basmati</div>
              </div>

              {/* Comparison */}
              {step >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-2 gap-3"
                >
                  <div className="p-4 rounded-xl bg-muted/50 border border-border">
                    <div className="text-xs font-medium text-muted-foreground mb-1">RoDTEP Rate</div>
                    <div className="text-xl font-bold text-foreground">0.5%</div>
                    <div className="text-xs text-muted-foreground">of FOB value</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1B4F8A]/5 border border-[#1B4F8A]/30">
                    <div className="text-xs font-medium text-[#1B4F8A] mb-1">Duty Drawback</div>
                    <div className="text-xl font-bold text-[#1B4F8A]">1.0%</div>
                    <div className="text-xs text-muted-foreground">of FOB value</div>
                    <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1B4F8A] text-white text-xs font-medium">
                      <Sparkles className="w-3 h-3" />
                      Recommended
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ========================
   PAIN POINTS
======================== */
function PainPointsSection() {
  const painPoints = [
    {
      problem: "Wrong HSN = Wrong Everything",
      description: "A single digit error in your HSN code can mean wrong duty rates, rejected drawback claims, and customs delays.",
      cost: "Up to 5% of shipment value lost"
    },
    {
      problem: "RoDTEP vs Drawback Confusion",
      description: "Most exporters pick one scheme without comparing. You could be leaving lakhs on the table every shipment.",
      cost: "Missing 40-60% of potential incentives"
    },
    {
      problem: "Hours of Manual Research",
      description: "Searching through 21,000+ HSN codes and cross-referencing rate notifications is a full-time job.",
      cost: "2-4 hours per classification"
    },
    {
      problem: "Outdated Rate Information",
      description: "Rates change frequently. Using stale data means incorrect duty calculations and compliance risks.",
      cost: "Surprise duties at customs"
    },
  ]

  return (
    <section className="py-24 lg:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-destructive/80 mb-4 block">
            The HSN Classification Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Exporters Struggle with{" "}
            <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              HSN Codes
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-destructive/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">{point.problem}</h3>
              <p className="text-muted-foreground mb-4">{point.description}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
                {point.cost}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   FEATURES
======================== */
function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "AI-Powered Classification",
      description: "Describe your product in plain English. Our AI maps it to the exact 8-digit ITC-HS code with 95% accuracy.",
    },
    {
      icon: Calculator,
      title: "RoDTEP vs Drawback Calculator",
      description: "Instantly compare both incentive schemes side-by-side. Know which one earns you more before you ship.",
    },
    {
      icon: FileText,
      title: "Live Policy Database",
      description: "Always up-to-date export and import policies. Know if your product is Free, Restricted, or Prohibited.",
    },
    {
      icon: TrendingUp,
      title: "Duty Rate Lookup",
      description: "Real-time BCD, IGST, and Cess rates. Calculate exact landed costs for imports in seconds.",
    },
    {
      icon: Globe,
      title: "Country-Specific Rules",
      description: "Different countries have different requirements. We show you exactly what you need for your destination.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "From product description to complete classification in under 3 seconds. No more hours of research.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[#1B4F8A] mb-4 block">
            Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-[#1B4F8A] to-[#2563EB] bg-clip-text text-transparent">
              Perfect Classification
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-[#1B4F8A]/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4F8A] to-[#2563EB] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   HOW IT WORKS
======================== */
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Describe Your Product",
      description: "Enter a plain-text description of your product. Our AI understands context, materials, and use cases.",
    },
    {
      number: "02", 
      title: "AI Classification",
      description: "TariffIQ searches 21,000+ HSN codes and uses semantic matching to find the perfect classification.",
    },
    {
      number: "03",
      title: "Compare Incentives",
      description: "See RoDTEP vs Duty Drawback rates side-by-side. Know exactly which scheme maximizes your earnings.",
    },
    {
      number: "04",
      title: "Export with Confidence",
      description: "Get the full picture: HSN code, duty rates, policy status, and required documents. Ship without surprises.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 px-6 bg-muted/30 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[#1B4F8A] mb-4 block">
            How TariffIQ Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            From Description to Classification in{" "}
            <span className="bg-gradient-to-r from-[#1B4F8A] to-[#2563EB] bg-clip-text text-transparent">
              Seconds
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B4F8A] to-[#2563EB] flex items-center justify-center">
                <span className="text-xl font-bold text-white">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   COMPARISON TABLE
======================== */
function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[#1B4F8A] mb-4 block">
            Why TariffIQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Manual Research vs{" "}
            <span className="bg-gradient-to-r from-[#1B4F8A] to-[#2563EB] bg-clip-text text-transparent">
              TariffIQ
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-semibold text-foreground">Metric</th>
                <th className="text-center p-4 font-semibold text-muted-foreground">Manual</th>
                <th className="text-center p-4 font-semibold text-[#1B4F8A]">TariffIQ</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Classification Time", "2-4 hours", "< 3 seconds"],
                ["Accuracy", "60-70%", "95%+"],
                ["HSN Codes Searchable", "Limited", "21,000+"],
                ["RoDTEP/Drawback Comparison", "Manual", "Automatic"],
                ["Rate Updates", "When you remember", "Real-time"],
                ["Policy Alerts", "None", "Instant"],
              ].map(([metric, manual, tariffiq], idx) => (
                <tr key={idx} className="border-t border-border">
                  <td className="p-4 text-foreground font-medium">{metric}</td>
                  <td className="p-4 text-center text-muted-foreground">{manual}</td>
                  <td className="p-4 text-center text-[#1B4F8A] font-semibold">{tariffiq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

/* ========================
   CTA SECTION
======================== */
function CTASection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-[#1B4F8A] to-[#2563EB] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Stop Leaving Money on the Table
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Every day you classify manually is another day of missed incentives and compliance risk. 
            Start using TariffIQ today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-demo"
              onClick={() => trackBookDemoCTAClick('TariffIQ CTA')}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1B4F8A] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-full font-semibold text-lg text-white border-2 border-white/30 hover:border-white transition-all duration-300"
            >
              Explore Other Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
