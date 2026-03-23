"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, Globe, MessageSquare, FileText, Clock, Zap, Shield, ChevronRight, BookOpen, Search, AlertCircle, CheckCircle, Upload, Send } from "lucide-react"
import { trackBookDemoCTAClick } from "@/lib/amplitude"

export default function PatramAIPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <UseCasesSection />
      <ComparisonSection />
      <CTASection />
      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

/* ========================
   HERO - Patram AI specific (Green theme)
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
      {/* Background gradient - Patram Green theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#008B5E]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

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
              <span className="text-accent font-medium">Patram AI</span>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Export Intelligence Advisor</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Your 24/7{" "}
              <span className="bg-gradient-to-r from-accent to-[#008B5E] bg-clip-text text-transparent">
                Export Expert
              </span>
              <br />
              On Demand.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              Upload any trade document and ask questions in plain English. 
              Patram AI reads the entire document and gives you accurate, sourced answers instantly.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              {[
                { value: "190+", label: "Countries Covered" },
                { value: "24/7", label: "Always Available" },
                { value: "1.5s", label: "Avg Response Time" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-black text-accent">{stat.value}</div>
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
                onClick={() => trackBookDemoCTAClick('Patram AI Hero')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-[#008B5E] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
              >
                Try Patram AI Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-foreground border-2 border-border hover:border-accent transition-all duration-300"
              >
                See Use Cases
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <ChatDemo />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

/* ========================
   CHAT DEMO ANIMATION
======================== */
function ChatDemo() {
  const [step, setStep] = useState(0)
  const messages = [
    { type: "user", text: "Can I export cotton fabric to Germany? What documents do I need?" },
    { type: "ai", text: "Based on your uploaded policy document, cotton fabric (HSN 5208) can be exported to Germany freely. However, there are specific requirements:", isTyping: false },
    { type: "ai-detail", icon: AlertCircle, color: "text-orange-500", title: "EU Compliance Required", text: "Azo dyes are prohibited in textiles sold in the EU. Your fabric must be tested and certified below 30 mg/kg." },
    { type: "ai-detail", icon: FileText, color: "text-accent", title: "Documents Required", text: "EUR.1 Certificate of Origin, Form A from DGFT, OEKO-TEX certification if using chemicals." },
    { type: "ai-detail", icon: CheckCircle, color: "text-accent", title: "Duty Rate", text: "0% under EU-India FTA if proper origin documentation is provided." },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= messages.length - 1) {
          // Reset after showing all messages
          setTimeout(() => setStep(0), 3000)
          return prev
        }
        return prev + 1
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-[#008B5E]/20 rounded-3xl blur-xl" />
      
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-[#008B5E] flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-foreground">Patram AI</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Online
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Upload className="w-4 h-4" />
            export_policy_2024.pdf
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 space-y-4 min-h-[380px] max-h-[380px] overflow-hidden">
          {messages.slice(0, step + 1).map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={msg.type === "user" ? "flex justify-end" : ""}
            >
              {msg.type === "user" ? (
                <div className="max-w-[80%] p-4 rounded-2xl rounded-br-sm bg-accent text-white">
                  {msg.text}
                </div>
              ) : msg.type === "ai" ? (
                <div className="max-w-[90%] p-4 rounded-2xl rounded-bl-sm bg-muted/50 border border-border">
                  <p className="text-foreground">{msg.text}</p>
                </div>
              ) : (
                <div className="max-w-[90%] ml-4 p-3 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-3">
                    {msg.icon && <msg.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${msg.color}`} />}
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-1">{msg.title}</div>
                      <div className="text-sm text-muted-foreground">{msg.text}</div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Typing indicator */}
          {step < messages.length - 1 && (
            <div className="flex gap-2 p-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border">
            <Search className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">Ask about your export...</span>
            <Send className="w-5 h-5 text-accent ml-auto" />
          </div>
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
      problem: "Complex Trade Documents",
      description: "Export policies, FTAs, and compliance docs are hundreds of pages long. Finding specific information takes hours.",
      impact: "4-6 hours per document"
    },
    {
      problem: "Outdated Information",
      description: "Regulations change constantly. What was allowed last month might be restricted today. Missing updates costs money.",
      impact: "Compliance risks"
    },
    {
      problem: "Country-Specific Rules",
      description: "Every destination has different requirements. What works for the US won't work for EU or ASEAN.",
      impact: "190+ rule sets to track"
    },
    {
      problem: "No Expert On Call",
      description: "Customs consultants are expensive and not always available. Questions arise at midnight before shipments.",
      impact: "Delayed decisions"
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
            The Export Knowledge Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Exporters Need{" "}
            <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Instant Answers
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
      icon: BookOpen,
      title: "Multi-Modal Document Analysis",
      description: "Upload PDFs with tables, charts, and graphs. Our AI reads everything - text, visuals, and complex layouts.",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Questions",
      description: "Ask questions in plain English. No need to learn search syntax or navigate complex menus.",
    },
    {
      icon: Globe,
      title: "190+ Countries Covered",
      description: "From major markets like US, EU, UAE to emerging destinations. Always current trade policies.",
    },
    {
      icon: FileText,
      title: "Sourced Answers",
      description: "Every answer cites the exact section and page from your document. Full traceability.",
    },
    {
      icon: Zap,
      title: "1.5 Second Response",
      description: "No waiting. Get comprehensive answers faster than you can type your next question.",
    },
    {
      icon: Shield,
      title: "AI Fact-Checking",
      description: "Built-in verification layer prevents hallucinations. Answers are validated against source documents.",
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
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            AI That Understands{" "}
            <span className="bg-gradient-to-r from-accent to-[#008B5E] bg-clip-text text-transparent">
              Trade Documents
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
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-[#008B5E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
   USE CASES
======================== */
function UseCasesSection() {
  const useCases = [
    {
      title: "FTA Eligibility Check",
      question: "Is my product eligible for preferential duty under India-UAE CEPA?",
      answer: "Based on your product classification (HSN 8471.30) and origin criteria in the uploaded CEPA agreement, your product qualifies for 0% duty if you meet the 40% value addition rule...",
    },
    {
      title: "Document Requirements",
      question: "What certificates do I need to export pharmaceuticals to Brazil?",
      answer: "For pharmaceutical exports to Brazil, you'll need: ANVISA registration, Certificate of Pharmaceutical Product (CPP), GMP certificate from CDSCO, and Portuguese-translated product information...",
    },
    {
      title: "Restriction Check",
      question: "Can I export dual-use electronics to Russia?",
      answer: "Based on current DGFT notifications and international sanctions, items under ITC-HS 8471 series have export restrictions to Russia. You'll need a SCOMET license from DGFT...",
    },
  ]

  return (
    <section id="use-cases" className="py-24 lg:py-32 px-6 bg-foreground text-background scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Real-World Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Questions Exporters Ask Every Day
          </h2>
        </motion.div>

        <div className="space-y-6">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-background/5 border border-background/10"
            >
              <div className="text-sm font-medium text-accent mb-3">{useCase.title}</div>
              <div className="flex gap-4 items-start mb-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-accent" />
                </div>
                <p className="text-lg text-background font-medium">{useCase.question}</p>
              </div>
              <div className="flex gap-4 items-start ml-12">
                <p className="text-background/70">{useCase.answer}</p>
              </div>
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
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Why Patram AI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Manual Research vs{" "}
            <span className="bg-gradient-to-r from-accent to-[#008B5E] bg-clip-text text-transparent">
              Patram AI
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
                <th className="text-center p-4 font-semibold text-accent">Patram AI</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Research Time", "4-6 hours", "1.5 seconds"],
                ["Availability", "Business hours", "24/7"],
                ["Countries Covered", "Your expertise", "190+"],
                ["Source Citations", "Sometimes", "Always"],
                ["Document Analysis", "Manual reading", "AI-powered"],
                ["Cost per Query", "Consultant fees", "Pennies"],
              ].map(([metric, manual, patram], idx) => (
                <tr key={idx} className="border-t border-border">
                  <td className="p-4 text-foreground font-medium">{metric}</td>
                  <td className="p-4 text-center text-muted-foreground">{manual}</td>
                  <td className="p-4 text-center text-accent font-semibold">{patram}</td>
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
    <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-accent to-[#008B5E] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get Answers in Seconds, Not Hours
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Stop wasting hours searching through documents. 
            Let Patram AI be your always-on export intelligence advisor.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-demo"
              onClick={() => trackBookDemoCTAClick('Patram AI CTA')}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accent rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
