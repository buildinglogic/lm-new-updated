"use client"

import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  products: [
    { name: "TradeGuard", href: "/tradeguard" },
    { name: "TariffIQ", href: "/tariffiq" },
    { name: "Patram AI", href: "/patram" },
  ],
  company: [
    { name: "About", href: "/company" },
    { name: "Careers", href: "/careers" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Contact", href: "/book-demo" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-black/[0.04]" style={{ background: 'var(--bg-secondary)' }}>
      {/* Main footer */}
      <div className="content-wide px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-1">
            <Image 
              src="/images/liquidmind-logo.png"
              alt="Liquidmind"
              width={130}
              height={32}
              className="h-7 w-auto mb-4"
              style={{ filter: 'brightness(0)' }}
            />
            <p className="text-sm mb-6" style={{ color: 'var(--text-tertiary)' }}>
              India's #1 AI Trade Compliance Platform
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/liquid-mind-product-consulting-inc./" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/[0.04]"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@LIQUIDMIND_AI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/[0.04]"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="mailto:support@liquidmind.ai"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/[0.04]"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-tertiary)' }}>
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-tertiary)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-tertiary)' }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Contact info */}
            <div className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>
                Contact
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                support@liquidmind.ai
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                Bangalore, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/[0.04]">
        <div className="content-wide px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            © 2026 LIQUIDMIND Product Consulting Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-tertiary)' }}>
            <Link href="/legal/privacy-policy" className="transition-colors hover:opacity-70">Privacy</Link>
            <span>·</span>
            <Link href="/legal/terms" className="transition-colors hover:opacity-70">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
