"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, Check, Shield, FileCheck, AlertTriangle, Clock, Zap, Eye, ChevronRight, FileText, CheckCircle2, XCircle } from "lucide-react"
import { trackBookDemoCTAClick } from "@/lib/amplitude"

export default function TradeGuardPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <DemoSection />
      <ComparisonSection />
      <CTASection />
      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

/* ========================
   HERO - TradeGuard specific
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
      {/* Background gradient - TradeGuard Blue theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

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
              <span className="text-primary font-medium">TradeGuard</span>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Document Mismatch Detection</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Catch Every{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mismatch
              </span>
              <br />
              Before Customs Does.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              TradeGuard extracts 40+ fields from your Shipping Bill and Commercial Invoice, 
              maps them intelligently, and flags every discrepancy in under 5 seconds.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              {[
                { value: "40+", label: "Fields Validated" },
                { value: "< 5s", label: "Analysis Time" },
                { value: "99%", label: "Accuracy Rate" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-black text-primary">{stat.value}</div>
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
                onClick={() => trackBookDemoCTAClick('TradeGuard Hero')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
              >
                Try TradeGuard Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-foreground border-2 border-border hover:border-primary transition-all duration-300"
              >
                See It In Action
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Interactive Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <ScanDemo />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

/* ========================
   SCAN DEMO ANIMATION
======================== */
const SCAN_FIELDS = [
  { field: "Exporter Name", sb: "RAJESH EXPORTS LTD", inv: "RAJESH EXPORTS LTD", status: "match" },
  { field: "HSN Code", sb: "8471.30", inv: "8471.30", status: "match" },
  { field: "FOB Value", sb: "$42,500", inv: "$41,800", delta: "-$700 (1.6%)", status: "mismatch" },
  { field: "Port of Loading", sb: "INNSA1", inv: "NHAVA SHEVA", status: "warning" },
  { field: "IEC Number", sb: "0508004381", inv: "0508004381", status: "match" },
]

function ScanDemo() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [scanning, setScanning] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount(prev => {
        if (prev >= SCAN_FIELDS.length) {
          setScanning(false)
          // Reset after showing results
          setTimeout(() => {
            setVisibleCount(0)
            setScanning(true)
          }, 4000)
          return prev
        }
        return prev + 1
      })
    }, 700)

    return () => clearInterval(interval)
  }, [])

  const matches = SCAN_FIELDS.slice(0, visibleCount).filter(f => f.status === "match").length
  const issues = SCAN_FIELDS.slice(0, visibleCount).filter(f => f.status !== "match").length

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl" />
      
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-foreground">TradeGuard Scan</div>
              <div className="text-xs text-muted-foreground">SB_0441 vs INV_0441</div>
            </div>
          </div>
          
          {scanning ? (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">Scanning...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                {matches} OK
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-500">
                {issues} Flagged
              </span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="h-1 w-full bg-muted">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${(visibleCount / SCAN_FIELDS.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Results */}
        <div className="p-4 space-y-3 min-h-[320px]">
          {SCAN_FIELDS.map((field, idx) => {
            const visible = idx < visibleCount
            const active = idx === visibleCount - 1 && scanning
            const isMismatch = field.status === "mismatch"
            const isWarning = field.status === "warning"

            return (
              <motion.div
                key={field.field}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: visible ? 1 : 0.1, y: visible ? 0 : 10 }}
                className={`p-3 rounded-xl border transition-all ${
                  active ? 'border-primary shadow-lg shadow-primary/10' :
                  isMismatch ? 'border-orange-500/30 bg-orange-500/5' :
                  isWarning ? 'border-yellow-500/30 bg-yellow-500/5' :
                  'border-border bg-muted/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {active ? (
                      <div className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                    ) : isMismatch ? (
                      <XCircle className="w-5 h-5 text-orange-500" />
                    ) : isWarning ? (
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    )}
                    <span className="font-medium text-foreground">{field.field}</span>
                  </div>
                  <span className={`text-sm font-mono ${isMismatch ? 'text-orange-500' : isWarning ? 'text-yellow-600' : 'text-muted-foreground'}`}>
                    {field.sb}
                  </span>
                </div>

                {(isMismatch || isWarning) && visible && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2 pt-2 border-t border-border/50 flex items-center gap-4 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">SB</span>
                      <span className="text-foreground">{field.sb}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-500 font-medium">INV</span>
                      <span className="text-orange-500">{field.inv}</span>
                    </div>
                    {field.delta && (
                      <span className="ml-auto text-orange-500 font-medium">{field.delta}</span>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
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
      problem: "30% of Documents Have Critical Errors",
      description: "Manual document checking is error-prone. Even experienced teams miss discrepancies that cost lakhs.",
      impact: "Delayed shipments, rejected claims"
    },
    {
      problem: "Customs Holds Kill Your Cash Flow",
      description: "A single mismatch between SB and Invoice can hold your shipment for days. Meanwhile, your working capital is stuck.",
      impact: "3-7 days average delay"
    },
    {
      problem: "Drawback Claims Rejected at Source",
      description: "DGFT rejects claims for the smallest discrepancies. FOB value differences of even 1% can flag your entire claim.",
      impact: "Months of follow-up"
    },
    {
      problem: "Port Code Confusion",
      description: "INNSA1 vs Nhava Sheva vs JNPT - different systems use different formats. Manual matching is a nightmare.",
      impact: "Semantic matching needed"
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
            The Document Mismatch Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Manual Checking{" "}
            <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Always Fails
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
                <AlertTriangle className="w-4 h-4" />
                {point.impact}
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
      icon: Eye,
      title: "AI Document Intelligence",
      description: "Azure Document Intelligence extracts text, tables, and exact bounding boxes from any PDF format.",
    },
    {
      icon: FileCheck,
      title: "40+ Field Validation",
      description: "Every critical field is checked: exporter details, HSN codes, values, quantities, port codes, and more.",
    },
    {
      icon: Zap,
      title: "Semantic Matching",
      description: "Our AI understands that 'NHAVA SHEVA' and 'INNSA1' refer to the same port. No false positives.",
    },
    {
      icon: FileText,
      title: "Interactive PDF Viewer",
      description: "Click any extracted field to see exactly where it came from in the original document.",
    },
    {
      icon: Clock,
      title: "5 Second Analysis",
      description: "From upload to complete mismatch report in under 5 seconds. No waiting, no manual comparison.",
    },
    {
      icon: Shield,
      title: "Human-in-the-Loop",
      description: "AI flags issues, you make the final call. Review, approve, or override any detection.",
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
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Enterprise-Grade{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Document Intelligence
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
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
   LIVE DEMO SECTION
======================== */
function DemoSection() {
  return (
    <section id="demo" className="py-24 lg:py-32 px-6 bg-foreground text-background scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            See It In Action
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            How TradeGuard Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Upload Documents",
              description: "Drop your Shipping Bill and Commercial Invoice. We support all PDF formats.",
            },
            {
              step: "02",
              title: "AI Extraction",
              description: "Our AI extracts 40+ fields with exact bounding boxes for full traceability.",
            },
            {
              step: "03",
              title: "Get Results",
              description: "Instant mismatch report with color-coded severity. Review and export.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-black text-primary/30 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-background mb-3">{item.title}</h3>
              <p className="text-background/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   COMPARISON
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
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            Why TradeGuard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Manual Checking vs{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TradeGuard
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
                <th className="text-center p-4 font-semibold text-primary">TradeGuard</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Check Time", "2-4 hours", "< 5 seconds"],
                ["Fields Checked", "~10", "40+"],
                ["Accuracy", "70-80%", "99%"],
                ["Semantic Matching", "Impossible", "Built-in"],
                ["Audit Trail", "None", "Complete"],
                ["Cost per Check", "Staff hours", "Pennies"],
              ].map(([metric, manual, tradeguard], idx) => (
                <tr key={idx} className="border-t border-border">
                  <td className="p-4 text-foreground font-medium">{metric}</td>
                  <td className="p-4 text-center text-muted-foreground">{manual}</td>
                  <td className="p-4 text-center text-primary font-semibold">{tradeguard}</td>
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
   CTA
======================== */
function CTASection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-primary to-accent text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Stop Losing Money to Document Errors
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Every mismatch you miss is money walking out the door. 
            Let TradeGuard catch them all before customs does.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-demo"
              onClick={() => trackBookDemoCTAClick('TradeGuard CTA')}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Free Trial
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
