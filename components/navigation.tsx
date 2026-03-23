"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, Youtube, Linkedin, Mail, Globe, ArrowRightLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { trackNavClick, trackExternalLinkClicked } from "@/lib/amplitude"

const products = [
  {
    name: "TariffIQ",
    tagline: "HSN Classification & Duty",
    description: "AI classifies your product to 8-digit ITC-HS and compares RoDTEP vs Drawback earnings.",
    color: "#1B4F8A",
    gradientFrom: "#1B4F8A",
    gradientTo: "#2563EB",
    href: "/products/tariffiq",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "TradeGuard",
    tagline: "Document Mismatch Detection",
    description: "Cross-checks 40+ fields between your Shipping Bill and Invoice in under 5 seconds.",
    color: "#0066CC",
    gradientFrom: "#0066CC",
    gradientTo: "#0052A3",
    href: "/products/tradeguard",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Patram AI",
    tagline: "Export Intelligence Advisor",
    description: "Instant customs rules, duty rates and compliance checklists for 190+ countries.",
    color: "#00A86B",
    gradientFrom: "#00A86B",
    gradientTo: "#008B5E",
    href: "/products/patram",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

const companyLinks = [
  { name: "About", href: "/company" },
  { name: "Mission", href: "/company#mission" },
  { name: "Why Choose Us?", href: "/company#why-choose-us" },
  { name: "Minds Behind Liquidmind AI", href: "/company#team" },
  { name: "Timeline", href: "/company/timeline" },
  { name: "Map", href: "/company#map" },
  { name: "Giving Back", href: "/company/giving-back" },
  { name: "divider", href: "" },
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms" },
]

// Popular countries for the picker
const countries = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "AE", name: "UAE", flag: "🇦🇪" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "FR", name: "France", flag: "🇫🇷" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)
  const [countryPickerOpen, setCountryPickerOpen] = useState(false)
  const [exportCountry, setExportCountry] = useState(countries[0]) // India default
  const [importCountry, setImportCountry] = useState(countries[1]) // US default
  const [selectingType, setSelectingType] = useState<'export' | 'import' | null>(null)
  const countryPickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close country picker on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryPickerRef.current && !countryPickerRef.current.contains(event.target as Node)) {
        setCountryPickerOpen(false)
        setSelectingType(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCountrySelect = (country: typeof countries[0]) => {
    if (selectingType === 'export') {
      setExportCountry(country)
    } else if (selectingType === 'import') {
      setImportCountry(country)
    }
    setSelectingType(null)
    setCountryPickerOpen(false)
  }

  const swapCountries = () => {
    const temp = exportCountry
    setExportCountry(importCountry)
    setImportCountry(temp)
  }

  return (
    <>
      {/* Award Announcement Bar - Marquee */}
      {!scrolled && (
        <div
          className="fixed top-0 left-0 right-0 z-50 h-10 overflow-hidden bg-foreground"
        >
          <div className="h-full flex items-center animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-8 text-sm font-semibold text-background flex items-center gap-4">
                <span>Aegis Graham Bell Award 2026 Winner</span>
                <span className="opacity-40">|</span>
                <span>Karnataka Elevate 2025 Winner</span>
                <span className="opacity-40">|</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm' 
            : 'bg-foreground'
        }`}
        style={{ height: "72px", top: scrolled ? "0" : "40px" }}
      >
        <div className="w-full h-full px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full py-3 flex-shrink-0 transition-transform duration-200 active:scale-95">
            <Image
              src="/images/liquidmind-logo.png"
              alt="Liquidmind"
              width={150}
              height={40}
              className={`h-10 w-auto object-contain ${scrolled ? 'brightness-0' : ''}`}
              priority
            />
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className={`flex items-center gap-1.5 text-base font-semibold transition-colors ${
                scrolled ? 'text-foreground hover:text-primary' : 'text-background/80 hover:text-background'
              }`}>
                Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Invisible bridge */}
              <div className="absolute top-full left-0 right-0 h-3" />

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[340px] p-2 rounded-2xl bg-card border border-border shadow-2xl"
                  >
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={() => { trackNavClick(`Product: ${product.name}`); setProductsOpen(false) }}
                        className="w-full text-left px-4 py-3 rounded-xl transition-all hover:bg-muted flex items-center gap-3 group"
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                          style={{ background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})` }}>
                          {product.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</div>
                          <div className="text-xs text-muted-foreground">{product.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className={`flex items-center gap-1.5 text-base font-semibold transition-colors py-4 ${
                scrolled ? 'text-foreground hover:text-primary' : 'text-background/80 hover:text-background'
              }`}>
                Company <ChevronDown className={`w-4 h-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className="absolute top-full left-0 right-0 h-3" />

              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[280px] p-2 rounded-2xl bg-card border border-border shadow-2xl"
                  >
                    {companyLinks.map((link) =>
                      link.name === "divider" ? (
                        <div key="divider" className="my-1 mx-2 h-px bg-border" />
                      ) : (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium text-foreground transition-all hover:bg-muted hover:text-primary"
                          onClick={() => { trackNavClick(link.name); setCompanyOpen(false) }}
                        >
                          {link.name}
                        </Link>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/newsletter" onClick={() => trackNavClick("Newsletter")} className={`text-base font-semibold transition-colors ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-background/80 hover:text-background'
            }`}>Newsletter</Link>
            <Link href="/careers" onClick={() => trackNavClick("Careers")} className={`text-base font-semibold transition-colors ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-background/80 hover:text-background'
            }`}>Careers</Link>
          </div>

          {/* Right side - Country Picker + Social icons + Book Demo */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Country Picker */}
            <div ref={countryPickerRef} className="relative">
              <button
                onClick={() => setCountryPickerOpen(!countryPickerOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${
                  scrolled 
                    ? 'bg-muted hover:bg-muted/80 border border-border' 
                    : 'bg-background/10 hover:bg-background/20 border border-background/20'
                }`}
              >
                <span className="text-lg">{exportCountry.flag}</span>
                <ArrowRightLeft className={`w-4 h-4 ${scrolled ? 'text-muted-foreground' : 'text-background/60'}`} />
                <span className="text-lg">{importCountry.flag}</span>
                <ChevronDown className={`w-3 h-3 ${scrolled ? 'text-muted-foreground' : 'text-background/60'}`} />
              </button>

              <AnimatePresence>
                {countryPickerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+8px)] right-0 w-[320px] p-4 rounded-2xl bg-card border border-border shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-foreground">Trade Route</h3>
                      <button 
                        onClick={swapCountries}
                        className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                        title="Swap countries"
                      >
                        <ArrowRightLeft className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>

                    {/* Export From */}
                    <div className="mb-4">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Exporting From
                      </label>
                      <button
                        onClick={() => setSelectingType(selectingType === 'export' ? null : 'export')}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                          selectingType === 'export' 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/30'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{exportCountry.flag}</span>
                          <span className="font-medium text-foreground">{exportCountry.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${selectingType === 'export' ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Import To */}
                    <div className="mb-4">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Importing To
                      </label>
                      <button
                        onClick={() => setSelectingType(selectingType === 'import' ? null : 'import')}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                          selectingType === 'import' 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/30'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{importCountry.flag}</span>
                          <span className="font-medium text-foreground">{importCountry.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${selectingType === 'import' ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Country List */}
                    <AnimatePresence>
                      {selectingType && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-border pt-3 mt-3"
                        >
                          <div className="max-h-[200px] overflow-y-auto space-y-1 pr-1 scrollbar-thin">
                            {countries.map((country) => {
                              const isSelected = selectingType === 'export' 
                                ? country.code === exportCountry.code 
                                : country.code === importCountry.code
                              return (
                                <button
                                  key={country.code}
                                  onClick={() => handleCountrySelect(country)}
                                  className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all ${
                                    isSelected ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-lg">{country.flag}</span>
                                    <span className={`text-sm ${isSelected ? 'font-semibold' : 'font-medium text-foreground'}`}>
                                      {country.name}
                                    </span>
                                  </div>
                                  {isSelected && <Check className="w-4 h-4" />}
                                </button>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1">
              <a href="https://www.youtube.com/@LIQUIDMIND_AI" target="_blank" rel="noopener noreferrer"
                onClick={() => trackExternalLinkClicked("https://www.youtube.com/@LIQUIDMIND_AI")}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  scrolled ? 'hover:bg-muted' : 'hover:bg-background/10'
                }`}>
                <Youtube className={`w-5 h-5 ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-background/70 hover:text-background'}`} />
              </a>
              <a href="https://www.linkedin.com/company/liquid-mind-product-consulting-inc./" target="_blank" rel="noopener noreferrer"
                onClick={() => trackExternalLinkClicked("https://www.linkedin.com/company/liquid-mind-product-consulting-inc./")}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  scrolled ? 'hover:bg-muted' : 'hover:bg-background/10'
                }`}>
                <Linkedin className={`w-5 h-5 ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-background/70 hover:text-background'}`} />
              </a>
              <a href="mailto:support@liquidmind.ai"
                onClick={() => trackExternalLinkClicked("mailto:support@liquidmind.ai")}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  scrolled ? 'hover:bg-muted' : 'hover:bg-background/10'
                }`}>
                <Mail className={`w-5 h-5 ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-background/70 hover:text-background'}`} />
              </a>
            </div>

            {/* Book Demo Button */}
            <Link 
              href="/book-demo" 
              onClick={() => trackNavClick("Book Demo")} 
              className="px-6 py-2.5 rounded-full text-base font-semibold text-background bg-gradient-to-r from-primary to-accent transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-foreground hover:bg-muted' : 'text-background hover:bg-background/10'
            }`}
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              if (mobileMenuOpen) { setMobileProductsOpen(false); setMobileCompanyOpen(false) }
            }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden fixed left-0 right-0 z-40 overflow-y-auto bg-card border-t border-border"
              style={{
                top: scrolled ? "72px" : "112px",
                bottom: 0,
              }}
            >
              <div className="px-4 pt-4 pb-28">
                {/* Mobile Country Picker */}
                <div className="p-4 mb-4 rounded-2xl bg-muted/50 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-foreground">Trade Route</span>
                    <button 
                      onClick={swapCountries}
                      className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                    >
                      <ArrowRightLeft className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border">
                      <span className="text-xl">{exportCountry.flag}</span>
                      <span className="text-sm font-medium">{exportCountry.code}</span>
                    </div>
                    <ArrowRightLeft className="w-4 h-4 text-muted-foreground" />
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border">
                      <span className="text-xl">{importCountry.flag}</span>
                      <span className="text-sm font-medium">{importCountry.code}</span>
                    </div>
                  </div>
                </div>

                {/* Products accordion */}
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between py-4 text-base font-semibold text-foreground border-b border-border"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="py-2"
                    >
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          onClick={() => { trackNavClick(`Product: ${product.name}`); setMobileMenuOpen(false) }}
                          className="w-full flex items-center gap-3 px-2 py-3 rounded-xl transition-colors hover:bg-muted"
                        >
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})` }}>
                            {product.icon}
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-semibold text-foreground">{product.name}</div>
                            <div className="text-xs text-muted-foreground">{product.tagline}</div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Company accordion */}
                <button
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="w-full flex items-center justify-between py-4 text-base font-semibold text-foreground border-b border-border"
                >
                  Company
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileCompanyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="py-2"
                    >
                      {companyLinks.map((link) =>
                        link.name === "divider" ? (
                          <div key="divider" className="my-2 mx-2 h-px bg-border" />
                        ) : (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block px-2 py-3 rounded-xl text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            onClick={() => { trackNavClick(link.name); setMobileMenuOpen(false) }}
                          >
                            {link.name}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Flat links */}
                <Link href="/newsletter"
                  className="flex items-center py-4 text-base font-semibold text-foreground border-b border-border"
                  onClick={() => { trackNavClick("Newsletter"); setMobileMenuOpen(false) }}>
                  Newsletter
                </Link>
                <Link href="/careers"
                  className="flex items-center py-4 text-base font-semibold text-foreground border-b border-border"
                  onClick={() => { trackNavClick("Careers"); setMobileMenuOpen(false) }}>
                  Careers
                </Link>

                {/* Social + Book Demo */}
                <div className="pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a href="https://www.youtube.com/@LIQUIDMIND_AI" target="_blank" rel="noopener noreferrer"
                      onClick={() => trackExternalLinkClicked("https://www.youtube.com/@LIQUIDMIND_AI")}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-muted">
                      <Youtube className="w-5 h-5 text-primary" />
                    </a>
                    <a href="https://www.linkedin.com/company/liquid-mind-product-consulting-inc./" target="_blank" rel="noopener noreferrer"
                      onClick={() => trackExternalLinkClicked("https://www.linkedin.com/company/liquid-mind-product-consulting-inc./")}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-muted">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a href="mailto:support@liquidmind.ai"
                      onClick={() => trackExternalLinkClicked("mailto:support@liquidmind.ai")}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-muted">
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                  <Link
                    href="/book-demo"
                    className="px-6 py-3 rounded-full text-base font-semibold text-background bg-gradient-to-r from-primary to-accent"
                    onClick={() => { trackNavClick("Book Demo"); setMobileMenuOpen(false) }}
                  >
                    Book Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-card border-t border-border">
        <a href="https://wa.me/919845592468" onClick={() => trackExternalLinkClicked("https://wa.me/919845592468")} 
          className="flex-1 py-3.5 text-center text-foreground font-semibold text-base border-r border-border">
          WhatsApp
        </a>
        <Link href="/book-demo" onClick={() => trackNavClick("Book Demo")} 
          className="flex-1 py-3.5 text-center font-semibold text-base text-background bg-gradient-to-r from-primary to-accent">
          Book Demo
        </Link>
      </div>
    </>
  )
}
