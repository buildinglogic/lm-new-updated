"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* About Us Section */}
      <section className="pt-[120px] lg:pt-[140px] pb-8 px-4 lg:px-6" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-[32px] lg:text-[48px] font-extrabold leading-tight mb-4" style={{ color: "#0F172A" }}>
            About Us
          </h1>
          <p className="text-base lg:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
            Liquidmind AI is redefining trade finance and supply chain management with intelligent AI agents that automate 
            workflows, optimize liquidity, and enhance compliance. Designed for large and mid-sized enterprises, our AI-driven 
            products eliminate inefficiencies, improve decision-making, and scale effortlessly with business growth.
          </p>
        </div>
      </section>

      {/* Team Image */}
      <section className="px-4 lg:px-6 -mt-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative h-[280px] lg:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop"
              alt="Liquidmind Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold mb-4" style={{ color: "#0F172A" }}>
            Our Mission
          </h2>
          <p className="text-base lg:text-lg max-w-4xl mx-auto leading-relaxed mb-6" style={{ color: "#475569" }}>
            Our mission is to empower enterprises with AI-driven intelligence to optimize global trade, finance, and compliance. 
            We build intelligent AI agents that automate complex workflows, enhance decision-making, and drive efficiency—
            helping businesses unlock new opportunities, reduce risk, and scale seamlessly in an evolving digital economy.
          </p>
          <div className="relative h-[200px] lg:h-[300px] max-w-[900px] mx-auto rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=500&fit=crop"
              alt="Stock Exchange Trading Floor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Enterprises Choose Section */}
      <section id="why-choose-us" className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold text-center mb-8" style={{ color: "#0F172A" }}>
            Why Enterprises Choose<br />Liquidmind AI?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5">
            {/* AI-Powered Efficiency */}
            <div className="group p-6 rounded-2xl relative cursor-pointer transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(0,102,204,0.3)] hover:scale-[1.02]" 
              style={{ background: "linear-gradient(to bottom, #f0f7fa, #e8f4f8)" }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, #0F172A, #1e3a5f)" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,102,204,0.5)]"
                  style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 transition-colors duration-500 text-[#0066CC] group-hover:text-white">AI-Powered Efficiency</h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-500 text-[#475569] group-hover:text-white/80">
                  Automate complex trade, finance, and compliance workflows, reducing operational costs and improving accuracy.
                </p>
              </div>
            </div>

            {/* Actionable Intelligence */}
            <div className="group p-6 rounded-2xl relative cursor-pointer transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(0,168,107,0.3)] hover:scale-[1.02]" 
              style={{ background: "linear-gradient(to bottom, #f0f7fa, #e8f4f8)" }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, #0F172A, #1e3a5f)" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,168,107,0.5)]"
                  style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 transition-colors duration-500 text-[#00A86B] group-hover:text-white">Actionable Intelligence</h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-500 text-[#475569] group-hover:text-white/80">
                  Leverage AI-powered insights to optimize liquidity, manage risk, and enhance financial strategies.
                </p>
              </div>
            </div>

            {/* Security & Compliance First */}
            <div className="group p-6 rounded-2xl relative cursor-pointer transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(0,102,204,0.3)] hover:scale-[1.02]" 
              style={{ background: "linear-gradient(to bottom, #f0f7fa, #e8f4f8)" }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, #0F172A, #1e3a5f)" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,102,204,0.5)]"
                  style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 transition-colors duration-500 text-[#0066CC] group-hover:text-white">Security & Compliance First</h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-500 text-[#475569] group-hover:text-white/80">
                  Designed to meet stringent financial and regulatory standards, ensuring data integrity, fraud detection, and risk mitigation.
                </p>
              </div>
            </div>

            {/* Seamless Integration */}
            <div className="group p-6 rounded-2xl relative cursor-pointer transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(0,168,107,0.3)] hover:scale-[1.02]" 
              style={{ background: "linear-gradient(to bottom, #f0f7fa, #e8f4f8)" }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, #0F172A, #1e3a5f)" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,168,107,0.5)]"
                  style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 transition-colors duration-500 text-[#00A86B] group-hover:text-white">Seamless Integration</h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-500 text-[#475569] group-hover:text-white/80">
                  Connect effortlessly with ERP systems, banking platforms, and trade networks, ensuring smooth interoperability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Minds Section */}
      <section id="team" className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold text-center mb-10" style={{ color: "#0F172A" }}>
            Meet the Minds Behind<br />Liquidmind AI
          </h2>

          {/* CEO - Naveen Athresh */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start mb-12 p-6 rounded-2xl" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
            <div className="relative w-[260px] h-[320px] mx-auto lg:mx-0 rounded-xl overflow-hidden">
              <Image
                src="/images/founder-naveen.avif"
                alt="Naveen Athresh - Founder & CEO"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ color: "#0066CC" }}>Naveen Athresh</h3>
              <p className="text-base font-semibold mb-3" style={{ color: "#00A86B" }}>Founder/CEO and Chief Product Officer (March 2024)</p>
              <p className="text-[14px] leading-relaxed mb-3" style={{ color: "#475569" }}>
                Naveen runs liquidmind.ai in the mixed reality, digital commerce/Fintech space. A TEDx speaker, Forbes India 2020 top 100 leader (the only leader selected from Rakuten), he has consistently built 200+ member led high performance teams from scratch, led cross geo Product Engineering and Data sciences teams. He has been regularly featured as a thought leader across leading business dailies. Most recently, Naveen was featured on the January 2024 featured section with an elite list of business people globally (mostly USA) on a Global business magazine (Business Today) and USAwire in an article called "Thought leaders making an impact in the world".
              </p>
              <a href="#" className="text-sm font-medium italic" style={{ color: "#00A86B" }}>
                Click here to know more about the founder
              </a>
            </div>
          </div>

          {/* CTO - Srivani */}
          <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
            <h3 className="text-xl font-bold mb-1" style={{ color: "#0066CC" }}>Srivani Dharwar Vijaya</h3>
            <p className="text-base font-semibold mb-3" style={{ color: "#0F172A" }}>Co Founder Chief Technology Officer (CTO)</p>
            <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
              Srivani has extensive technology architecture experience building/architecting major software systems across her 15+ year+ stints at Capgemini/iGate, Mindtree, Wipro and Infosys. She has a flair for hands-on programming (her specialties lie in enterprise software across SAP systems) and is a big believer in approaching problems from first principles and with a goal towards achieving the strategic objectives laid out. Srivani holds a Bachelors in Engineering degree (BE) from the Visvesvaraya Technology University (VTU) in Information science.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold text-center mb-8" style={{ color: "#0F172A" }}>
            Recognition & <span className="text-[#0066CC]">Awards</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="rounded-xl overflow-hidden" style={{ background: "#0F172A", border: "3px solid #0066CC" }}>
              <div className="relative h-[280px] overflow-hidden">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aegis%20graham%20bell%20award-Io0nVjDGHyxbMH3GUnh9D2M8PtIHjM.jpg" alt="Aegis Graham Bell Award" fill className="object-cover object-center" />
              </div>
              <div className="p-5">
                <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase mb-2"
                  style={{ background: "#0066CC", color: "#FFFFFF" }}>FEBRUARY 2026</div>
                <h3 className="text-lg font-bold mb-1 text-white">Aegis Graham Bell Award</h3>
                <p className="text-[13px] text-white/90">16th AGBA Innovation in Gen AI - CX, Sales & GTM Intelligence Category Winner</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden" style={{ background: "#0F172A", border: "3px solid #0066CC" }}>
              <div className="relative h-[280px] overflow-hidden">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/karnataka%20elevate%20award-6VQmT2ahCZSsynysJCRN0mwxbYjAZp.jpg" alt="Karnataka Elevate Award" fill className="object-cover object-center" />
              </div>
              <div className="p-5">
                <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase mb-2"
                  style={{ background: "#0066CC", color: "#FFFFFF" }}>NOVEMBER 2025</div>
                <h3 className="text-lg font-bold mb-1 text-white">Karnataka Elevate 2025</h3>
                <p className="text-[13px] text-white/90">Selected from 1,474+ applicants across all sectors</p>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-10 text-center">
            <p className="text-base font-medium mb-6" style={{ color: "#64748B" }}>Backed by leading technology partners</p>
            <div className="flex justify-center items-center">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gqt7incm1St02ycvVbXNCKm4NzQz1I.png" 
                alt="Partner Logos - NVIDIA Inception, AWS, Microsoft for Startups" 
                width={700} 
                height={90} 
                className="h-20 lg:h-24 w-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locate Us Section */}
      <section id="map" className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[24px] lg:text-[32px] font-extrabold mb-6" style={{ color: "#00A86B" }}>
            Locate Us
          </h2>
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6849566261147!2d77.5486!3d12.9351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjQiTiA3N8KwMzInNTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
