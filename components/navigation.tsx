"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { trackNavClick, trackExternalLinkClicked } from "@/lib/amplitude"

const products = [
  {
    name: "TradeGuard",
    tagline: "Document Verification",
    href: "/tradeguard",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "TariffIQ",
    tagline: "HSN Classification",
    href: "/tariffiq",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    name: "Patram AI",
    tagline: "Export Intelligence",
    href: "/patram",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
]

const companyLinks = [
  { name: "About", href: "/company" },
  { name: "Mission", href: "/company#mission" },
  { name: "Why Choose Us", href: "/company#why-choose-us" },
  { name: "Team", href: "/company#team" },
  { name: "Timeline", href: "/company/timeline" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main Navigation - Apple-style glass nav */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-nav border-b border-black/[0.04]' 
            : 'bg-white/80 backdrop-blur-xl'
        }`}
        style={{ height: "52px" }}
      >
        <div className="content-full h-full px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center h-full flex-shrink-0 transition-opacity duration-200 hover:opacity-70"
            onClick={() => trackNavClick("Logo")}
          >
            <Image
              src="/images/liquidmind-logo.png"
              alt="Liquidmind"
              width={130}
              height={32}
              className="h-7 w-auto object-contain"
              style={{ filter: 'brightness(0)' }}
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
              <button 
                className="flex items-center gap-1 text-[13px] font-medium transition-colors"
                style={{ color: scrolled ? 'var(--text-primary)' : 'var(--text-primary)' }}
              >
                Products 
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                  productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div 
                  className="w-[280px] p-2 rounded-2xl bg-white border border-black/[0.04]"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                >
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors hover:bg-[var(--bg-tertiary)] group"
                      onClick={() => { trackNavClick(`Product: ${product.name}`); setProductsOpen(false) }}
                    >
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                        style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
                      >
                        {product.icon}
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {product.name}
                        </div>
                        <div className="text-[12px]" style={{ color: 'var(--text-tertiary)' }}>
                          {product.tagline}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[13px] font-medium transition-colors"
                style={{ color: 'var(--text-primary)' }}
              >
                Company 
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                  companyOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div 
                  className="w-[200px] p-2 rounded-2xl bg-white border border-black/[0.04]"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                >
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-3 py-2 rounded-xl text-[13px] font-medium transition-colors hover:bg-[var(--bg-tertiary)]"
                      style={{ color: 'var(--text-primary)' }}
                      onClick={() => { trackNavClick(link.name); setCompanyOpen(false) }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/newsletter" 
              onClick={() => trackNavClick("Newsletter")} 
              className="text-[13px] font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--text-primary)' }}
            >
              Newsletter
            </Link>
            
            <Link 
              href="/careers" 
              onClick={() => trackNavClick("Careers")} 
              className="text-[13px] font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--text-primary)' }}
            >
              Careers
            </Link>
          </div>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link 
              href="/book-demo" 
              onClick={() => trackNavClick("Book Demo")} 
              className="btn-apple-primary text-[13px] py-2 px-5"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2 transition-opacity hover:opacity-70"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-[52px] left-0 right-0 bottom-0 z-50 bg-white overflow-y-auto transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4">
          {/* Products */}
          <div className="mb-6">
            <div className="text-[11px] font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-tertiary)' }}>
              Products
            </div>
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="flex items-center justify-between py-3 border-b border-black/[0.04] group"
                onClick={() => { trackNavClick(`Product: ${product.name}`); setMobileMenuOpen(false) }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {product.name}
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--text-tertiary)' }}>
                      {product.tagline}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="mb-6">
            <div className="text-[11px] font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-tertiary)' }}>
              Company
            </div>
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between py-3 border-b border-black/[0.04]"
                onClick={() => { trackNavClick(link.name); setMobileMenuOpen(false) }}
              >
                <span className="text-[15px] font-medium" style={{ color: 'var(--text-primary)' }}>
                  {link.name}
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)]" />
              </Link>
            ))}
          </div>

          {/* Other links */}
          <div className="mb-8">
            <Link
              href="/newsletter"
              className="flex items-center justify-between py-3 border-b border-black/[0.04]"
              onClick={() => { trackNavClick("Newsletter"); setMobileMenuOpen(false) }}
            >
              <span className="text-[15px] font-medium" style={{ color: 'var(--text-primary)' }}>
                Newsletter
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)]" />
            </Link>
            <Link
              href="/careers"
              className="flex items-center justify-between py-3 border-b border-black/[0.04]"
              onClick={() => { trackNavClick("Careers"); setMobileMenuOpen(false) }}
            >
              <span className="text-[15px] font-medium" style={{ color: 'var(--text-primary)' }}>
                Careers
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)]" />
            </Link>
          </div>

          {/* CTA */}
          <Link 
            href="/book-demo" 
            className="btn-apple-primary w-full justify-center"
            onClick={() => { trackNavClick("Book Demo"); setMobileMenuOpen(false) }}
          >
            Book Demo
          </Link>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-white border-t border-black/[0.04]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <a 
          href="https://wa.me/919845592468" 
          onClick={() => trackExternalLinkClicked("https://wa.me/919845592468")} 
          className="flex-1 py-3.5 text-center text-[14px] font-medium border-r border-black/[0.04]"
          style={{ color: 'var(--text-primary)' }}
        >
          WhatsApp
        </a>
        <Link 
          href="/book-demo" 
          onClick={() => trackNavClick("Book Demo")} 
          className="flex-1 py-3.5 text-center font-medium text-[14px] text-white"
          style={{ background: 'var(--accent-blue)' }}
        >
          Book Demo
        </Link>
      </div>
    </>
  )
}
