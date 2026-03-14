"use client"

import { useState, useRef, useEffect } from "react"
import { HeroMockup } from "./hero-mockup"
import { Check } from "lucide-react"

const tabs = [
  { id: "tradeguard", label: "Tradeguard" },
  { id: "patram", label: "Patram AI" },
  { id: "tariffiq", label: "TariffIQ" },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("tradeguard")
  const { ref, isInView } = useInView()

  // Listen for tab change events from navigation
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail)
    }

    // Check sessionStorage on mount for initial tab
    const storedTab = sessionStorage.getItem('selectedProductTab')
    if (storedTab) {
      setActiveTab(storedTab)
      sessionStorage.removeItem('selectedProductTab')
    }

    // Check URL params
    const urlParams = new URLSearchParams(window.location.search)
    const tabParam = urlParams.get('tab')
    if (tabParam) {
      setActiveTab(tabParam)
    }

    window.addEventListener('changeProductTab', handleTabChange as EventListener)
    return () => window.removeEventListener('changeProductTab', handleTabChange as EventListener)
  }, [])

  return (
    <section ref={ref} id="products" className="py-8 lg:py-12 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Gradient container badge */}
          <div className="gradient-container inline-block mb-4">
            <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase" 
              style={{ background: "#FFFFFF", color: "#0066CC" }}>
              OUR PRODUCTS
            </div>
          </div>
          <h2 className="text-[28px] lg:text-[44px] font-bold leading-tight mb-2" style={{ color: "#0F172A" }}>
            Three Products. <span className="text-[#0066CC]">One Mission.</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "#475569" }}>
            Stop money leaking through your trade documents.
          </p>
        </div>

        {/* Toggle Tab bar - Mono color blue */}
        <div className={`flex justify-center mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex p-1.5 rounded-full" style={{ background: "#0066CC", border: "2px solid #0066CC" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300`}
                style={{
                  background: activeTab === tab.id ? "#FFFFFF" : "transparent",
                  color: activeTab === tab.id ? "#0066CC" : "rgba(255,255,255,0.8)",
                  boxShadow: activeTab === tab.id ? "0 4px 15px rgba(0,0,0,0.1)" : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content with animation */}
        <div className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="animate-fade-in" key={activeTab}>
            {activeTab === "tradeguard" && <TradeguardTab />}
            {activeTab === "patram" && <PatramTab />}
            {activeTab === "tariffiq" && <TariffIQTab />}
          </div>
        </div>
      </div>
    </section>
  )
}

function TradeguardTab() {
  const features = [
    "HSN / HS Code cross-validation",
    "Port code semantic matching",
    "FOB value & currency detection",
    "IEC / GSTIN verification",
    "Unit quantity conflict flagging",
    "Country origin mismatch alerts",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="animate-slide-in-left">
        {/* Gradient container badge */}
        <div className="gradient-container inline-block mb-4">
          <div className="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase" 
            style={{ background: "#FFFFFF", color: "#0066CC" }}>
            MISMATCH DETECTION
          </div>
        </div>
        <h3 className="text-[26px] lg:text-[40px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
          Stop Mismatches <span className="text-[#0066CC]">Before They Cost You.</span>
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
          Tradeguard extracts 40+ fields from your Shipping Bill and Commercial Invoice, maps them 
          intelligently, and flags every discrepancy in under 5 minutes.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-[13px]" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg mb-6" style={{ background: "rgba(0,102,204,0.05)", borderLeft: "3px solid #0066CC" }}>
          <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>
            {"For 100 shipments/month at ₹50L FOB — protects ₹1.5–₹3.5 Cr in annual refunds."}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#demo" className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}>
            Get Started
          </a>
          <a href="https://www.youtube.com/@ABORRIGINALLIQUIDMIND" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-[#0066CC] hover:text-[#0066CC]"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
            Watch Demo
          </a>
        </div>
      </div>

      {/* New animated mismatch detection visualization */}
      <div className="animate-slide-in-right">
        <div className="relative p-6 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)", border: "2px solid #E2E8F0", boxShadow: "0 25px 80px rgba(0,0,0,0.08)" }}>
          {/* Animated scanning line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-0 right-0 h-1 animate-scan-line" style={{ background: "linear-gradient(90deg, transparent, #0066CC, transparent)" }} />
          </div>
          
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#0F172A" }}>TradeGuard Scan</p>
                <p className="text-[10px]" style={{ color: "#64748B" }}>Real-time mismatch detection</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00A86B" }} />
              <span className="text-[11px] font-medium" style={{ color: "#00A86B" }}>Live</span>
            </div>
          </div>

          {/* Document comparison visual */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            {/* Shipping Bill */}
            <div className="p-3 rounded-xl relative overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
              <p className="text-[10px] font-bold uppercase mb-2" style={{ color: "#64748B" }}>Shipping Bill</p>
              <div className="space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span style={{ color: "#94A3B8" }}>HSN Code</span>
                  <span className="font-mono font-medium" style={{ color: "#0F172A" }}>8471.30</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span style={{ color: "#94A3B8" }}>FOB Value</span>
                  <span className="font-mono font-medium animate-pulse" style={{ color: "#DC2626" }}>$42,500</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span style={{ color: "#94A3B8" }}>Quantity</span>
                  <span className="font-mono font-medium" style={{ color: "#0F172A" }}>500 PCS</span>
                </div>
              </div>
            </div>

            {/* Invoice */}
            <div className="p-3 rounded-xl relative overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
              <p className="text-[10px] font-bold uppercase mb-2" style={{ color: "#64748B" }}>Commercial Invoice</p>
              <div className="space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span style={{ color: "#94A3B8" }}>HSN Code</span>
                  <span className="font-mono font-medium" style={{ color: "#0F172A" }}>8471.30</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span style={{ color: "#94A3B8" }}>FOB Value</span>
                  <span className="font-mono font-medium animate-pulse" style={{ color: "#DC2626" }}>$41,800</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span style={{ color: "#94A3B8" }}>Quantity</span>
                  <span className="font-mono font-medium" style={{ color: "#0F172A" }}>500 PCS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mismatch Alert Card */}
          <div className="p-4 rounded-xl relative overflow-hidden animate-border-glow" style={{ background: "rgba(220,38,38,0.03)", border: "2px solid #DC2626" }}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse" style={{ background: "rgba(220,38,38,0.1)" }}>
                <svg className="w-4 h-4" style={{ color: "#DC2626" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm mb-1" style={{ color: "#DC2626" }}>FOB Value Mismatch Detected</p>
                <p className="text-[12px] mb-2" style={{ color: "#475569" }}>
                  Difference of <span className="font-bold" style={{ color: "#DC2626" }}>$700 (1.6%)</span> found between documents
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium" style={{ background: "rgba(220,38,38,0.1)", color: "#DC2626" }}>
                    High Risk
                  </span>
                  <span className="text-[10px]" style={{ color: "#94A3B8" }}>
                    Could affect IGST refund
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid #E2E8F0" }}>
            <div className="text-center">
              <p className="text-lg font-bold" style={{ color: "#0066CC" }}>40+</p>
              <p className="text-[10px]" style={{ color: "#64748B" }}>Fields Checked</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold" style={{ color: "#00A86B" }}>1</p>
              <p className="text-[10px]" style={{ color: "#64748B" }}>Mismatch Found</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold" style={{ color: "#F59E0B" }}>{"< 5s"}</p>
              <p className="text-[10px]" style={{ color: "#64748B" }}>Scan Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PatramTab() {
  const features = [
    "Multi-document cross-referencing",
    "Visual table & chart extraction",
    "Pixel-level answer verification",
    "Page-level evidence tracking",
    "Handles messy scans & layouts",
    "Natural language queries",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="animate-slide-in-left">
        {/* Gradient container badge - green variant */}
        <div className="inline-block mb-4" style={{ padding: "3px", background: "linear-gradient(90deg, #00A86B, #0066CC)", borderRadius: "9999px" }}>
          <div className="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase" 
            style={{ background: "#FFFFFF", color: "#00A86B" }}>
            DOCUMENT INTELLIGENCE
          </div>
        </div>
        <h3 className="text-[26px] lg:text-[40px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
          Ask Anything. <span className="text-[#00A86B]">Get Verified Answers.</span>
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
          Patram AI reads your entire shipment folder and answers questions in natural language. 
          Every answer is pixel-verified. Zero hallucinations.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-[13px]" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        {/* ROI Table */}
        <div className="rounded-lg overflow-hidden mb-6" style={{ border: "1px solid #E2E8F0" }}>
          <table className="w-full text-[13px]">
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th className="text-left font-semibold py-2 px-3" style={{ color: "#64748B" }}>Metric</th>
                <th className="text-left font-semibold py-2 px-3" style={{ color: "#64748B" }}>Before</th>
                <th className="text-left font-semibold py-2 px-3" style={{ color: "#00A86B" }}>With Patram</th>
              </tr>
            </thead>
            <tbody style={{ background: "#FFFFFF" }}>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-2 px-3" style={{ color: "#475569" }}>Audit Time</td>
                <td className="py-2 px-3" style={{ color: "#0F172A" }}>45–90 min</td>
                <td className="py-2 px-3" style={{ color: "#00A86B" }}>{"< 2 min"}</td>
              </tr>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-2 px-3" style={{ color: "#475569" }}>Accuracy</td>
                <td className="py-2 px-3" style={{ color: "#0F172A" }}>85–90%</td>
                <td className="py-2 px-3" style={{ color: "#00A86B" }}>99.9%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#try-patram" className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #00A86B, #0066CC)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,168,107,0.35)" }}>
            Try Free
          </a>
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-[#00A86B] hover:text-[#00A86B]"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
            See Live Q&A
          </button>
        </div>
      </div>

      {/* Chat interface mockup */}
      <div className="border rounded-xl p-5 animate-slide-in-right animate-float card-hover" style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 24px 80px rgba(0,0,0,0.08)" }}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-[13px]" style={{ color: "#0F172A" }}>Patram AI — Document Q&A</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
            <span className="text-xs" style={{ color: "#27C93F" }}>Active</span>
          </div>
        </div>

        <div className="p-2 rounded-lg mb-3" style={{ background: "rgba(0,168,107,0.1)" }}>
          <span className="text-xs" style={{ color: "#00A86B" }}>SB_2025_0441.pdf + Invoice_0441.pdf</span>
        </div>

        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="rounded-xl rounded-br-sm px-3 py-2 max-w-[80%]" style={{ background: "#F1F5F9" }}>
              <p className="text-[13px]" style={{ color: "#0F172A" }}>
                {"\"Is there any discrepancy between invoice and shipping bill?\""}
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%]" style={{ background: "#F8FAFC", borderLeft: "3px solid #00A86B" }}>
              <p className="text-[13px] mb-2" style={{ color: "#0F172A" }}>
                <strong>Found 1 discrepancy:</strong>
              </p>
              <div className="text-[12px] space-y-1 mb-2" style={{ color: "#475569" }}>
                <p>Invoice FOB: <span className="font-mono" style={{ color: "#0F172A" }}>$42,500</span></p>
                <p>Shipping Bill: <span className="font-mono" style={{ color: "#0F172A" }}>$41,800</span></p>
                <p>Difference: <span className="font-mono" style={{ color: "#0066CC" }}>$700 (1.6%)</span></p>
              </div>
              <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px]" style={{ background: "rgba(0,168,107,0.1)" }}>
                <span style={{ color: "#00A86B" }}>99.8% Confidence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TariffIQTab() {
  const features = [
    "Multi-layer AI classification",
    "Handles vague descriptions",
    "RoDTEP vs Drawback comparison",
    "Full landed cost calculation",
    "ITC-HS Policy checking",
    "Clarifying Q&A support",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="animate-slide-in-left">
        {/* Gradient container badge */}
        <div className="gradient-container inline-block mb-4">
          <div className="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase" 
            style={{ background: "#FFFFFF", color: "#0066CC" }}>
            HSN CLASSIFICATION & DUTY
          </div>
        </div>
        <h3 className="text-[26px] lg:text-[40px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
          Know Your HSN Code and Duty. <span className="text-[#0066CC]">Before Shipment.</span>
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
          TariffIQ classifies any product into the correct 8-digit HSN code using our AI 
          engine, then calculates your exact duty liability or export incentive.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-[13px]" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#classify" className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}>
            Classify My Product
          </a>
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-[#0066CC] hover:text-[#0066CC]"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
            See Demo
          </button>
        </div>
      </div>

      {/* TariffIQ interface mockup */}
      <div className="border rounded-xl p-5 animate-slide-in-right animate-float card-hover" style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 24px 80px rgba(0,0,0,0.08)" }}>
        {/* Fixed Role selector - Exporter only */}
        <div className="flex items-center gap-3 mb-4">
          <div className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
            style={{ background: "rgba(0,102,204,0.1)", border: "2px solid #0066CC", color: "#0066CC" }}>
            <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
            Exporter
          </div>
        </div>

        {/* Fixed Input field - Read only */}
        <div className="mb-4">
          <div
            className="w-full px-3 py-2.5 rounded-lg text-sm"
            style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
          >
            stainless steel hex bolts M8
          </div>
        </div>

        {/* Result card */}
        <div className="rounded-lg p-4" style={{ background: "rgba(0,102,204,0.03)", border: "2px solid #0066CC", boxShadow: "0 0 30px rgba(0,102,204,0.1)" }}>
          <div className="mb-3">
            <span className="text-[10px]" style={{ color: "#64748B" }}>HSN Code</span>
            <div className="text-2xl font-mono font-semibold" style={{ color: "#0066CC" }}>7318.15</div>
            <p className="text-[12px] mt-0.5" style={{ color: "#475569" }}>Screws, bolts, nuts — stainless steel</p>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-2 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-[9px]" style={{ color: "#64748B" }}>BCD</span>
              <div className="font-semibold text-sm" style={{ color: "#0F172A" }}>7.5%</div>
            </div>
            <div className="p-2 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-[9px]" style={{ color: "#64748B" }}>IGST</span>
              <div className="font-semibold text-sm" style={{ color: "#0F172A" }}>18%</div>
            </div>
            <div className="p-2 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-[9px]" style={{ color: "#64748B" }}>RoDTEP</span>
              <div className="font-semibold text-sm" style={{ color: "#00A86B" }}>₹21K</div>
            </div>
          </div>

          <div className="p-2 rounded-lg" style={{ background: "rgba(0,168,107,0.1)" }}>
            <p className="text-[12px] font-medium" style={{ color: "#00A86B" }}>
              RoDTEP earns you ₹21K more than Drawback
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
