"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, FileWarning, Calculator, Globe, ChevronRight, Play, Shield, Zap, TrendingUp } from "lucide-react"
import { trackBookDemoCTAClick } from "@/lib/amplitude"

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <ProblemNarrativeSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

/* ========================
   HERO SECTION - Apple-style minimal
======================== */
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, #0F172A 1px, transparent 1px), linear-gradient(to bottom, #0F172A 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Award Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Aegis Graham Bell Award 2026 Winner
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
        >
          Stop Losing{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Crores
          </span>
          <br />
          to Trade Errors.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Indian exporters lose 3-7% of FOB value every shipment to document mismatches, 
          wrong HSN codes, and compliance gaps. Our AI catches every error before customs does.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book-demo"
            onClick={() => trackBookDemoCTAClick('Hero')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Book Free Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-foreground border-2 border-border hover:border-foreground transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            See How It Works
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mt-16 pt-16 border-t border-border/50"
        >
          {[
            { value: "50%", label: "Trade data mismatches detected" },
            { value: "30%", label: "Documents with critical errors" },
            { value: "3-7%", label: "FOB value at risk per shipment" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground max-w-[140px]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

/* ========================
   PRODUCT SHOWCASE - 3 Products with links
======================== */
function ProductShowcase() {
  const products = [
    {
      id: "tariffiq",
      name: "TariffIQ",
      tagline: "HSN Classification & Duty Calculator",
      description: "AI classifies your product to 8-digit ITC-HS code and compares RoDTEP vs Duty Drawback to maximize your earnings.",
      icon: Calculator,
      color: "from-[#1B4F8A] to-[#2563EB]",
      features: ["95% classification accuracy", "RoDTEP vs Drawback comparison", "Real-time duty rates"],
      href: "/products/tariffiq",
    },
    {
      id: "tradeguard",
      name: "TradeGuard",
      tagline: "Document Mismatch Detection",
      description: "Cross-checks 40+ fields between Shipping Bill and Invoice in under 5 seconds. Zero customs delays.",
      icon: Shield,
      color: "from-primary to-[#0052A3]",
      features: ["40+ fields validated", "5 second analysis", "Semantic port matching"],
      href: "/products/tradeguard",
    },
    {
      id: "patram",
      name: "Patram AI",
      tagline: "Export Intelligence Advisor",
      description: "Instant customs rules, duty rates, and compliance checklists for 190+ countries. Your 24/7 trade expert.",
      icon: Globe,
      color: "from-accent to-[#008B5E]",
      features: ["190+ countries covered", "Live policy data", "AI-powered answers"],
      href: "/products/patram",
    },
  ]

  return (
    <section id="products" className="py-24 lg:py-32 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three Products.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              One Mission.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            End-to-end trade compliance automation for Indian exporters.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link href={product.href} className="group block h-full">
                <div className="relative h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {product.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    Explore {product.name}
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   PROBLEM NARRATIVE - Pain points (moved from hero to section 2)
======================== */
function ProblemNarrativeSection() {
  const problems = [
    {
      stat: "$1.5T",
      title: "Lost to Trade Inefficiencies",
      description: "Global trade contraction driven by document errors and compliance gaps.",
      source: "UNCTAD Report"
    },
    {
      stat: "50%",
      title: "Data Mismatches",
      description: "Export-import data errors distort over half of global trade figures.",
      source: "ADB Report"
    },
    {
      stat: "30%",
      title: "Critical Document Errors",
      description: "Nearly a third of trade documents contain errors causing delays.",
      source: "World Bank"
    },
    {
      stat: "3-7%",
      title: "FOB Value Lost",
      description: "Drawback, IGST refunds, RoDTEP scrips - money that never comes back.",
      source: "CBIC Analysis"
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
            The Cost of Doing Nothing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Your Trade Documents Are{" "}
            <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Bleeding Money
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-destructive/20 transition-all duration-300 group"
            >
              <div className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                {problem.stat}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{problem.description}</p>
              <span className="text-xs text-muted-foreground/60 font-medium">{problem.source}</span>
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
      title: "Upload Documents",
      description: "Drop your Shipping Bill, Commercial Invoice, or any trade document. We support all formats.",
      icon: FileWarning,
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI extracts 40+ fields, validates HSN codes, and cross-references against live policy data.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Get Results",
      description: "Instant mismatch report, duty calculations, and compliance recommendations in seconds.",
      icon: TrendingUp,
    },
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            From Upload to Insights in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Seconds
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative text-center"
            >
              {/* Connecting line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              {/* Step number */}
              <div className="text-6xl font-black text-muted/50 mb-4">{step.number}</div>
              
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   TESTIMONIALS
======================== */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "TradeGuard caught 3 critical mismatches in our first shipment that would have cost us lakhs in delayed drawback.",
      author: "Export Manager",
      company: "Leading Textile Exporter",
    },
    {
      quote: "TariffIQ's HSN classification is incredibly accurate. We've saved hours of manual research on every shipment.",
      author: "Compliance Head",
      company: "Auto Parts Manufacturer",
    },
    {
      quote: "Patram AI is like having a customs expert available 24/7. Game changer for our export operations.",
      author: "Director",
      company: "Pharmaceutical Exporter",
    },
  ]

  return (
    <section className="py-24 lg:py-32 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            Trusted by Exporters
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-background/5 border border-background/10"
            >
              <p className="text-lg text-background/90 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-background">{testimonial.author}</div>
                <div className="text-sm text-background/60">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   CTA SECTION
======================== */
function CTASection() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Stop the Bleeding?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join hundreds of Indian exporters who have already saved crores with Liquidmind AI. 
            Get started with a free demo today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-demo"
              onClick={() => trackBookDemoCTAClick('CTA Section')}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
            >
              Book Your Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="https://wa.me/919845592468"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-full font-semibold text-lg text-foreground border-2 border-border hover:border-foreground transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            No credit card required. Results in under 5 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
