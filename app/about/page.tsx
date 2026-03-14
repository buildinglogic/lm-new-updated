"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Target, Eye, Heart, Users, Lightbulb, Shield, Award, ArrowRight } from "lucide-react"
import Image from "next/image"

const timelineEvents = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Founded with a mission to revolutionize trade compliance for Indian businesses.",
  },
  {
    year: "2021",
    title: "First Product Launch",
    description: "Launched our AI-powered document extraction platform, serving our first 50 clients.",
  },
  {
    year: "2022",
    title: "Rapid Growth",
    description: "Expanded to 200+ clients and processed over 1 million trade documents.",
  },
  {
    year: "2023",
    title: "Recognition",
    description: "Won Microsoft Startup Award and achieved ISO 27001 certification.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Serving 500+ exporters, recovering ₹100+ crores in duty drawback claims.",
  },
]

const coreValues = [
  {
    icon: Target,
    title: "Customer First",
    description: "Every feature we build starts with a real problem our customers face. We measure success by their success.",
    color: "#0066CC",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We leverage cutting-edge AI to solve problems that traditional software can't. We're always exploring what's next.",
    color: "#00A86B",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Trade data is sensitive. We maintain the highest security standards and never compromise on data protection.",
    color: "#0066CC",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as one team with our customers. Their feedback shapes our roadmap, and we grow together.",
    color: "#00A86B",
  },
]

const leadershipTeam = [
  {
    name: "Founder & CEO",
    role: "Leadership",
    image: "/images/leader-1.jpg",
    description: "Visionary leader with 15+ years in trade compliance and fintech.",
  },
  {
    name: "CTO",
    role: "Technology",
    image: "/images/leader-2.jpg",
    description: "AI/ML expert driving our technical innovation and platform architecture.",
  },
  {
    name: "VP of Product",
    role: "Product",
    image: "/images/leader-3.jpg",
    description: "Product strategist focused on delivering exceptional user experiences.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[140px] lg:pt-[160px] pb-16 lg:pb-20 px-6 lg:px-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="gradient-container inline-block mb-6">
                <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase" 
                  style={{ background: "#FFFFFF", color: "#0066CC" }}>
                  ABOUT LIQUIDMIND
                </div>
              </div>
              <h1 className="text-[38px] lg:text-[52px] font-extrabold leading-tight mb-6" style={{ color: "#0F172A" }}>
                {"We're on a mission to"} <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">simplify trade</span> for India
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#475569" }}>
                Every year, Indian exporters lose crores to inefficient processes, missed opportunities, and complex compliance requirements. We're building AI-powered tools to change that.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-3xl font-bold" style={{ color: "#0066CC" }}>500+</div>
                  <div className="text-sm font-medium" style={{ color: "#475569" }}>Active Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: "#00A86B" }}>₹100Cr+</div>
                  <div className="text-sm font-medium" style={{ color: "#475569" }}>Recovered for Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: "#0066CC" }}>1M+</div>
                  <div className="text-sm font-medium" style={{ color: "#475569" }}>Documents Processed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[380px] lg:h-[450px] rounded-2xl overflow-hidden card-hover" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.1)" }}>
                <Image 
                  src="/images/about-hero.jpg" 
                  alt="Liquidmind Team" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div 
              className="p-8 lg:p-10 rounded-2xl card-hover"
              style={{ background: "#FFFFFF", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(0,102,204,0.1)" }}>
                <Target className="w-7 h-7" style={{ color: "#0066CC" }} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#0F172A" }}>Our Mission</h2>
              <p className="text-[16px] leading-relaxed" style={{ color: "#475569" }}>
                To empower Indian exporters with AI-powered tools that automate compliance, maximize duty refunds, and unlock growth opportunities — making international trade accessible and profitable for businesses of all sizes.
              </p>
            </div>
            
            {/* Vision */}
            <div 
              className="p-8 lg:p-10 rounded-2xl card-hover"
              style={{ background: "#FFFFFF", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(0,168,107,0.1)" }}>
                <Eye className="w-7 h-7" style={{ color: "#00A86B" }} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#0F172A" }}>Our Vision</h2>
              <p className="text-[16px] leading-relaxed" style={{ color: "#475569" }}>
                To become the most trusted trade compliance platform in Asia, helping every exporter — from small manufacturers to large enterprises — compete globally with confidence and complete regulatory peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <div className="gradient-container inline-block mb-4">
              <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase" 
                style={{ background: "#FFFFFF", color: "#0066CC" }}>
                OUR JOURNEY
              </div>
            </div>
            <h2 className="text-3xl lg:text-[44px] font-bold" style={{ color: "#0F172A" }}>Our <span className="text-[#0066CC]">Journey</span></h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div 
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
              style={{ background: "linear-gradient(180deg, #0066CC 0%, #00A86B 100%)" }}
            ></div>
            
            <div className="space-y-8 lg:space-y-0">
              {timelineEvents.map((event, idx) => (
                <div 
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-[45%] ${idx % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
                    <div 
                      className="p-6 rounded-2xl card-hover"
                      style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                    >
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                        style={{ background: idx % 2 === 0 ? "rgba(0,102,204,0.1)" : "rgba(0,168,107,0.1)", color: idx % 2 === 0 ? "#0066CC" : "#00A86B" }}
                      >
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "#0F172A" }}>{event.title}</h3>
                      <p className="text-[15px]" style={{ color: "#475569" }}>{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div 
                    className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4"
                    style={{ 
                      background: "#FFFFFF", 
                      borderColor: idx % 2 === 0 ? "#0066CC" : "#00A86B",
                    }}
                  ></div>
                  
                  {/* Spacer */}
                  <div className="hidden lg:block w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <div className="gradient-container inline-block mb-4">
              <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase" 
                style={{ background: "#FFFFFF", color: "#00A86B" }}>
                OUR VALUES
              </div>
            </div>
            <h2 className="text-3xl lg:text-[44px] font-bold mb-4" style={{ color: "#0F172A" }}>What We <span className="text-[#00A86B]">Stand For</span></h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
              These core values guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl problem-card text-center"
                style={{ background: "#FFFFFF", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: value.color === "#0066CC" ? "rgba(0,102,204,0.1)" : "rgba(0,168,107,0.1)" }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0F172A" }}>{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <div className="gradient-container inline-block mb-4">
              <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase" 
                style={{ background: "#FFFFFF", color: "#0066CC" }}>
                LEADERSHIP
              </div>
            </div>
            <h2 className="text-3xl lg:text-[44px] font-bold mb-4" style={{ color: "#0F172A" }}>Meet Our <span className="text-[#0066CC]">Team</span></h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
              Experienced leaders from trade, technology, and product backgrounds driving our mission forward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div 
                key={idx}
                className="rounded-2xl overflow-hidden card-hover"
                style={{ background: "#F8FAFC" }}
              >
                <div className="relative h-[280px]">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                    style={{ background: "rgba(0,102,204,0.1)", color: "#0066CC" }}
                  >
                    {member.role}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0F172A" }}>{member.name}</h3>
                  <p className="text-sm" style={{ color: "#475569" }}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "linear-gradient(135deg, #0066CC 0%, #00A86B 100%)" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-6">Join Us in Simplifying Trade</h2>
          <p className="text-lg text-white/80 mb-8">
            {"Whether you're an exporter looking to maximize your refunds or a talented individual looking to make an impact — we'd love to connect."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105"
              style={{ background: "#FFFFFF", color: "#0066CC" }}
            >
              Get a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105"
              style={{ background: "transparent", border: "2px solid #FFFFFF", color: "#FFFFFF" }}
            >
              View Open Roles
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
