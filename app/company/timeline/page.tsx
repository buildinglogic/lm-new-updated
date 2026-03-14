"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

interface TimelineEvent {
  date: string
  title: string
  description: string
  image?: string
  side: "left" | "right"
}

const timelineData: { year: string; events: TimelineEvent[] }[] = [
  {
    year: "2026",
    events: [
      {
        date: "February 2026",
        title: "Aegis Graham Bell Award",
        description: "February 27, 2026 — Liquidmind AI was honoured with the prestigious Aegis Graham Bell Award in the Gen AI CX Sales GTM Intelligence category, recognising our work in transforming international trade through Generative AI.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aegis%20graham%20bell%20award-FNygvu53TozfXV9JCyrg96GfgIzNos.jpg",
        side: "right"
      },
      {
        date: "February 2026",
        title: "India AI Summit 2026",
        description: "Liquidmind AI exhibited at the India AI Summit 2026 (February 18-20) at Hall 8, Booth SP88, Bharat Mandapam, Delhi. We showcased TradeGuard AI, Patram AI, and HSN+ AI to enterprises, government delegations, DGFT representatives, and investors — generating significant momentum for our Agentic AI platform transforming international trade compliance.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%20ai%20summit-yxUYFefS28uNVp5V4qsmnZJpm01FTv.avif",
        side: "left"
      },
    ]
  },
  {
    year: "2025",
    events: [
      {
        date: "November 2025",
        title: "Karnataka Elevate 2025 Grant Winner",
        description: "ELEVATE 2025 GRANT WINNER awarded by Hon. IT/BT Minister Shri Priyank Kharge at Bengaluru Tech Summit (BTS 2025) on 20 Nov 2025. Winner in the Karnataka Elevate 2025 Program among 180 startups, chosen from 1,474+ applicants across sectors provided a non dilutive grant of upto Rs 50 lakhs.",
        side: "right"
      },
      {
        date: "May 2025",
        title: "TEDxIT Kakinada Keynote",
        description: "Our Founder delivered a keynote session at TEDxIT Kakinada on the theme 'Tech, AI & Entrepreneurship: Giving Perspective to Young Future Business Leaders' on May 4, 2025. He highlighted how rising AI tools are reshaping business models and unlocking new opportunities for young entrepreneurs.",
        side: "left"
      },
      {
        date: "February 2025",
        title: "Bharat Fintech Summit 2025",
        description: "Liquidmind AI participated on the Bharat Fintech Summit 2025.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feb%202025%20bharat%20fintech-0faTPtjoXpaAV7VGNG7ySf72VbIE80.avif",
        side: "right"
      },
      {
        date: "January 2025",
        title: "Economic Times SME Regional Summit",
        description: "Our founder participated on an invite only conclave of Economic Times SME regional summit to promote Make in India to empower MSMEs and driving financial inclusion.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jan%202025%20economic%20times-fgEkvVQTeTcAgCd2HaD0ds8NkLSAhy.avif",
        side: "left"
      },
      {
        date: "January 2025",
        title: "National Conference on Strategic Trade Controls",
        description: "Our founder participated on a two day workshop at the National conference on strategic trade controls (NCSTC) - 16/17 January 2025.",
        side: "right"
      },
      {
        date: "January 2025",
        title: "MIT Media Lab's E79 Hub Workshop",
        description: "Liquidmind AI joined MIT Media Lab's E79 Hub workshop, celebrating innovation rooted in India's heritage. Named for 'Bharat' and the 79° East longitude, E79 blends deep tech with cultural identity. Day 1 featured inspiring sessions with Prof. Ramesh Raskar and the E79 team, fostering groundbreaking, culturally connected ventures.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B79Hub-qDjM2nLu3UIzLsUVbsY8f63PQ5woHd.avif",
        side: "left"
      },
    ]
  },
  {
    year: "2024",
    events: [
      {
        date: "December 2024",
        title: "IIM Vizag's Vriddhi 6.0",
        description: "Our founder, Naveen Athresh, delivered a session on 'Future of Digital Trust: The New Business Imperative' at IIM Vizag's Vriddhi 6.0 event on 8th December 2024.",
        side: "right"
      },
      {
        date: "December 2024",
        title: "In-house AI Hackathon",
        description: "An in-house hackathon from 7th to 12th December, boosting team morale and tackling MSME challenges with innovative solutions. A celebration of creativity and high energy!",
        side: "left"
      },
      {
        date: "November 2024",
        title: "NVIDIA Inception Program",
        description: "By becoming part of the NVIDIA Inception Program, we aim to accelerate our development efforts and achieve significant milestones in optimizing our products. The program will provide us with essential go-to-market support, training, and access to cutting-edge technology resources from NVIDIA, enabling us to refine our innovative solutions for MSMEs.",
        side: "right"
      },
      {
        date: "November 2024",
        title: "GenAI Judge at Innovation Summit",
        description: "Liquidmind AI was proud to be both a silver sponsor and our Founder & CEO, Naveen Athresh, the GenAI Judge alongside the Finals Judge across all the tracks including GenAI, Quantum computing, EV/sustainable energy, Web 3.0 amongst other innovative tracks.",
        side: "left"
      },
      {
        date: "August 2024",
        title: "AI/ML & Deep Learning Conference at IISc",
        description: "Our founder, Naveen Athresh participated in this AI / ML and Deep learning conference for AI applied to solving societal problems across different industries and verticals including Deep Tech at the Indian Institute of Science Bengaluru. He was also a co-panelist with Prof Ramesh Raskar from MIT Media Labs Boston MA, USA.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aug%202024-Mdbs5XxonZB2AIN3WcznrrjPE7FSMK.avif",
        side: "right"
      },
      {
        date: "March 2024",
        title: "USA Wire Feature",
        description: "In March 2024, our founder's insightful article was featured on USAWire, a prominent news platform. The article, titled 'Thought Leaders Making An Impact in The World,' provided valuable insights and strategies for success in today's rapidly evolving business landscape.",
        side: "left"
      },
      {
        date: "January 2024",
        title: "Business Today Feature",
        description: "Our founder Naveen Athresh got featured with an elite list of business people globally (mostly USA) on a Global business magazine (Business Today) in an article called 'Thought Leaders making an Impact in the world'. The feature covered mostly USA and some global executives. It was insightful to see the cohort ranging from highly accomplished US Navy officers, Co-founders and CEO's of large USA energy conglomerates to stage Venture Capital firms/pension funds of state of Pennsylvania, banks like First USA and Suntrust bank, Dr's in field of medicine spanning immunology, oncology, leading eye surgeons and some leading leadership coaches.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business%20today-tHjXLY0PmD3ZqGFRekMSqu5C2rYf91.avif",
        side: "right"
      },
    ]
  },
  {
    year: "2023",
    events: [
      {
        date: "October 2023",
        title: "AI-ML Systems Workshop",
        description: "Our founder, Naveen Athresh, attended the AI-ML Systems Workshop held from October 23-28, 2023, in Bengaluru, India.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-ML-workshop-october-iB6AuJdQugvLWxGP4tjmJsqwxwZ5cm.avif",
        side: "left"
      },
      {
        date: "July 2023",
        title: "TEDx Talk - 135,000+ Views",
        description: "Our founder's TEDx talk witnessed 135000+ views in <2 months",
        side: "right"
      },
      {
        date: "June 2023",
        title: "Strategic Pivot to Trade Finance",
        description: "LIQUIDMIND® Product takes a significant pivot towards solving pain points in the world of Fintech/Digital Commerce/Export/Import Trade Finance for businesses at the intersection of Artificial Intelligence/machine learning applied to above verticals.",
        side: "left"
      },
      {
        date: "2023",
        title: "IIT Madras Guest Lecture",
        description: "Our founder, Naveen Athresh was at IIT Madras to give a talk to their BTech students on user research and design thinking product thinking. Got a detailed tour of the great deep tech work they are doing around hyper loop and electric autonomous vehicles and solar powered vehicles.",
        side: "right"
      },
    ]
  },
  {
    year: "2018",
    events: [
      {
        date: "August 2018",
        title: "Startup India Recognition",
        description: "LIQUIDMIND® Product formally gets registered as a startup by the DIPP (Department of Industrial policy and promotion) under Startup India",
        side: "left"
      },
      {
        date: "January 2018",
        title: "KITES Incubation at IIFT Delhi",
        description: "LIQUIDMIND® Product is an Indian Institute of Foreign Trade (IIFT), Delhi KITES incubated startup. KITES stands for Knowledge for Innovation in Trade and Entrepreneurship (an entrepreneurial startup) part of the e-cell, IIFT, Delhi (a division of Ministry of Commerce, Government of India)",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jan%202018-vVdBk9wmvB2ZcERUWMTeMHD91AZDjC.avif",
        side: "right"
      },
      {
        date: "2017, 2018 - till date",
        title: "IP Forum Participation",
        description: "LIQUIDMIND® Product has maintained an unwavering commitment towards preserving Intellectual property rights (IPR) - across filing patents, trademarks, copyrights and geographical indication. We are regulars at conferences like the World IP Forum globally over the last few decades and FICCI.",
        side: "left"
      },
    ]
  },
  {
    year: "2017",
    events: [
      {
        date: "May 2017",
        title: "TechCrunch Disrupt, New York",
        description: "TechCrunch Disrupt, New York - Demoed our conversational commerce product for fast fashion during this 3 day event.",
        side: "right"
      },
      {
        date: "6th May 2017",
        title: "IDEO Labs Design Thinking",
        description: "Sowed the seeds for LIQUIDMIND design thinking with the guidance of the top leaders at IDEO LABS, Cambridge Massachusetts, USA.",
        side: "left"
      },
      {
        date: "2017",
        title: "Harvard Business School - HBX Connect",
        description: "HBX Connect - LIQUIDMIND Founders participate on Entrepreneurship/Design thinking sessions and workshops at Harvard Business school, Boston, Massachusetts, USA to sow the seeds for LIQUIDMIND AI",
        side: "right"
      },
      {
        date: "3 March 2017 - till date",
        title: "Trademark Registration",
        description: "LIQUIDMIND® and LIQUID MIND® are formally registered Trademarks of LIQUIDMIND Product Consulting Private Limited",
        side: "left"
      },
      {
        date: "23 February 2017",
        title: "Company Incorporation",
        description: "LIQUIDMIND is formally incorporated as a Private Limited company.",
        side: "right"
      },
    ]
  },
]

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  
  return (
    <div 
      ref={ref}
      className={`flex items-center gap-6 lg:gap-10 mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Left Content */}
      <div className={`flex-1 ${event.side === 'left' ? 'lg:text-right' : 'lg:text-right lg:opacity-0 lg:invisible'}`}>
        {event.side === 'left' && (
          <div className="hidden lg:block">
            {event.image && (
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}>
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
            )}
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3" style={{ background: "#0066CC", color: "#FFFFFF" }}>
              {event.date}
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-sm lg:text-[15px] leading-relaxed text-white/70">{event.description}</p>
          </div>
        )}
      </div>

      {/* Center Line & Dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-4 h-4 rounded-full border-4 animate-pulse" style={{ borderColor: "#0066CC", background: "#0F172A" }} />
        <div className="w-0.5 h-full min-h-[100px]" style={{ background: "linear-gradient(180deg, #0066CC, #00A86B)" }} />
      </div>

      {/* Right Content */}
      <div className={`flex-1 ${event.side === 'right' ? 'lg:text-left' : 'lg:text-left lg:opacity-0 lg:invisible'}`}>
        {event.side === 'right' && (
          <div className="hidden lg:block">
            {event.image && (
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}>
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
            )}
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3" style={{ background: "#0066CC", color: "#FFFFFF" }}>
              {event.date}
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-sm lg:text-[15px] leading-relaxed text-white/70">{event.description}</p>
          </div>
        )}

        {/* Mobile View - Show all content on right */}
        <div className="lg:hidden">
          {event.image && (
            <div className="relative w-full h-40 mb-3 rounded-xl overflow-hidden" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}>
              <Image src={event.image} alt={event.title} fill className="object-cover" />
            </div>
          )}
          <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-2" style={{ background: "#0066CC", color: "#FFFFFF" }}>
            {event.date}
          </div>
          <h3 className="text-base font-bold text-white mb-1.5">{event.title}</h3>
          <p className="text-xs leading-relaxed text-white/70">{event.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function TimelinePage() {
  return (
    <>
      <Navigation />
      <main className="pt-[112px] lg:pt-[112px]" style={{ background: "#0F172A" }}>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 px-4 lg:px-8 text-center" style={{ background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="gradient-container inline-block mb-6">
              <div className="px-5 py-2 rounded-full text-sm font-bold tracking-[0.12em] uppercase" 
                style={{ background: "#0F172A", color: "#FFFFFF" }}>
                OUR JOURNEY
              </div>
            </div>
            <h1 className="text-[36px] lg:text-[56px] font-extrabold leading-tight mb-6 text-white">
              Key Activities / <span className="text-[#0066CC]">Company Timeline</span>
            </h1>
            <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
              From our humble beginnings in 2017 to becoming India's leading AI trade compliance platform, 
              explore the milestones that shaped Liquidmind AI.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 lg:py-24 px-4 lg:px-8 relative" style={{ background: "#0F172A" }}>
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #0066CC, transparent)" }} />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #00A86B, transparent)" }} />
          </div>

          <div className="max-w-5xl mx-auto relative">
            {timelineData.map((yearGroup, yearIndex) => (
              <div key={yearGroup.year} className="mb-16">
                {/* Year Marker */}
                <div className="flex justify-center mb-10">
                  <div 
                    className="px-8 py-4 rounded-2xl text-[40px] lg:text-[56px] font-black"
                    style={{ 
                      background: "linear-gradient(135deg, #0066CC, #00A86B)", 
                      color: "#FFFFFF",
                      boxShadow: "0 20px 60px rgba(0,102,204,0.3)"
                    }}
                  >
                    {yearGroup.year}
                  </div>
                </div>

                {/* Events */}
                {yearGroup.events.map((event, eventIndex) => (
                  <TimelineItem 
                    key={`${yearGroup.year}-${eventIndex}`} 
                    event={event} 
                    index={yearIndex * 10 + eventIndex} 
                  />
                ))}
              </div>
            ))}

            {/* Stay Tuned */}
            <div className="text-center py-12">
              <div 
                className="inline-block px-10 py-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)" }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Stay tuned for updates</h3>
                <p className="text-white/60">More milestones coming soon...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
