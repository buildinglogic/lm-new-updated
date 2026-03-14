"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"

interface TimelineEvent {
  date: string
  title: string
  organization: string
  description: string
  image?: string
  logo?: string
}

const volunteeringEvents: TimelineEvent[] = [
  {
    date: "May 2025",
    title: "IIFT Kakinada - TEDx Speaker",
    organization: "IIFT Kakinada",
    description: "Naveen Athresh delivered a keynote session at TEDxIIFT Kakinada on the theme \"Tech, AI & Entrepreneurship: Giving Perspective to Young Future Business Leaders\" on May 4, 2025. He highlighted how rising AI tools are reshaping business models and unlocking new opportunities for young entrepreneurs. The session, organized by the TEDxIIFT Kakinada team, was met with excellent coordination and execution.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150605-VyA0On8xmQv8L1LltPMbWA6n1wV4kb.png"
  },
  {
    date: "February 2025",
    title: "Talk on Design Thinking and Product Management",
    organization: "BITS Pilani",
    description: "Delivered a talk on Design Thinking and Product Management on 18/02/2025. Naveen's experience with top companies like PayU, Rakuten, and Flipkart had truly amazed the students at BITS Pilani. His entrepreneurial journey stands as a true beacon of the BITS values and mission.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150605-VyA0On8xmQv8L1LltPMbWA6n1wV4kb.png"
  },
  {
    date: "January 2025",
    title: "IIT Madras - Keynote Speaker",
    organization: "IIT Madras & IITM Research Park",
    description: "Naveen Athresh recently delivered an engaging 2-hour session to ~40 startup founders from IIT Madras and IITM Research Park on \"Design Thinking, Product, and Platform Thinking.\" The talk emphasized collaborative, bi-directional dialogue—encouraging active participation over passive listening. Grateful to Amay Mahajan and team for the opportunity.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150610-wAQtv8urvb1NQNKs7EhxhB9irA18YA.png"
  },
  {
    date: "December 2024",
    title: "IIMV - Keynote Speaker",
    organization: "IIM Visakhapatnam",
    description: "Naveen Athresh delivered a keynote session on \"Future of Digital Trust: The New Business Imperative\" at IIM Visakhapatnam on 7th December 2024. He emphasized digital trust as a critical foundation for AI- and quantum-first futures. The session, organized by IIMV Vridhi, was met with excellent coordination and engagement.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150610-wAQtv8urvb1NQNKs7EhxhB9irA18YA.png"
  },
  {
    date: "November 2024",
    title: "NMIT - Gen AI Judge & Sponsor",
    organization: "NMIT",
    description: "Liquidmind AI was proud to be both a silver sponsor and our Founder & CEO, Naveen Athresh, the GenAI judge along with the finale judge across all the tracks including GenAI, Quantum computing, EV/sustainable energy, Web 3.0 amongst other innovative tracks.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150615-gBkV4NI4mF6aX0m9VY8bSa7lVvd60y.png"
  },
  {
    date: "August 2024",
    title: "MIT Media Lab - Co-Panelist",
    organization: "MIT Media Lab, Science and Technology",
    description: "Naveen participated in this AI / ML and Deep learning conference for AI applied to solving societal problems across different industries and verticals including Deep Tech at the Indian Institute of science Bengaluru. Was also a co-panelist with Prof Ramesh Raskar from MIT Media Labs Boston MA, USA.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150615-gBkV4NI4mF6aX0m9VY8bSa7lVvd60y.png"
  },
  {
    date: "March 2024",
    title: "Board Member - EPIC",
    organization: "Product Management Institute of Product Leadership",
    description: "Product leadership Institute is a great institute that brings together leading industry practitioners in this niche area of Product Management to help shape their curriculum and mentor their students with effective / generic best practices with a goal to create 10000 product/platform thinkers from the ground up.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150620-rupEv9s5kyha8H58PD0g9W8xlYzhZ1.png"
  },
  {
    date: "January 2024",
    title: "Speaker - Science and Technology",
    organization: "Indian Institute of Foreign Trade (IIFT) - Official",
    description: "Gave a talk on the current state of the economy, impact of AI/ML on the various industries, the ability to amalgamate / ingrain AI into product/platform thinking and the way forward to a bright bunch of Indian Institute of Foreign Trade, Kakinada IPM students. They have unique programs like the Integrated program in management (IPM) combining the best of MBA-Analytics and MBA(International business) offered by parent IIFT, Delhi/Kolkata. Naveen's talk was well received and Naveen was honored to be speaking to this acclaimed cohort.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150620-rupEv9s5kyha8H58PD0g9W8xlYzhZ1.png"
  },
  {
    date: "August 2023",
    title: "Speaker - Product / Platform thinking",
    organization: "Entrepreneurship Cell, VGSoM, IIT Kharagpur",
    description: "Naveen gave a talk on Product / Platform thinking for 2 hours to a 200 member / student cohort of MBA students of IIT-KGP (VgSOM). Great conversation with the cohort.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150625-VGbCKwoMO9fbclfLCVar2qIUP9DKj2.png"
  },
  {
    date: "February 2023",
    title: "TEDx Speaker",
    organization: "University Visvesvaraya College of Engineering (UVCE)",
    description: "Naveen was a TEDx speaker at this UVCE TEDx event speaking on innovation, my life journey and the choices we need to make to be successful as we meander the maze called life and realism. His talk has seen over 150000 views and counting in <2 months. It went viral a few days after it was released by the TEDx committee on their YouTube channel. With his goal of reaching 20000 audience by 2022 (he has personally given talks in person traveling all over India to top B-schools/IIT/IIMs to reach 9000 students in last 6+ years as of 2023) interested in Product Platform building from India for greater good since 2017/18, this is a satisfying metric but a job only 1% done (Sept 2023).",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150625-VGbCKwoMO9fbclfLCVar2qIUP9DKj2.png"
  },
  {
    date: "August 2022",
    title: "Panel Member - AI / ML Digital Transformation",
    organization: "XLRI Jamshedpur",
    description: "Naveen participated on an AI / ML conclave where Naveen delivered my thoughts to 200+ participants on the future of digital transformation through AI ML deep learning constructs with very acclaimed CXO's of peer companies across verticals.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150631-lJ08Qui5FFuvNFjiEtciI46LE0ckBE.png"
  },
  {
    date: "March 2022",
    title: "Speaker - AI / ML and Digital transformation",
    organization: "IIT Bombay - Shailesh J. Mehta School of Management (SJMSOM)",
    description: "Speaker on REVOLUTIONIZING BUSINESS LANDSCAPE WITH AI AND DIGITAL TRANSFORMATION to over 200 students; a fantastic interaction.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150631-lJ08Qui5FFuvNFjiEtciI46LE0ckBE.png"
  },
  {
    date: "August 2021",
    title: "Panel Member",
    organization: "SIBM, Bengaluru",
    description: "Panel discussion with Partner Organisations and Speakers including leaders from Uber, PayU, Amazon and other top companies.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150631-lJ08Qui5FFuvNFjiEtciI46LE0ckBE.png"
  },
  {
    date: "July 2021",
    title: "Speaker - Product Management",
    organization: "IIM Sirmaur",
    description: "Spoke to over 200 students of IIM 2022 graduating MBA batch on why a career in product management is rewarding and fulfilling and one they should pursue. Interestingly when Naveen was there in 2019, 2 hands went up on knowledge of Product (2%). This time it was more like 50 or 25%. Shows our foray into evangelizing Product across Indian B-School campuses is working!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150636-QoEInxIgGGmh1RWcvAP8uK2shD6CbH.png"
  },
  {
    date: "June 2020",
    title: "Startup panelist / mentor",
    organization: "Conquest BITS Pilani",
    description: "Conquest, an initiative by the Center for Entrepreneurial Leadership, BITS Pilani, is India's First Student-Run Startup Accelerator. We help the best founders build great businesses and raise money. Our program includes online mentoring to the 10 most exciting startups from across the country over 6 weeks, connecting them with field experts. Following this, the startups undergo a 10 day mentorship program in Bangalore. The program ends with the Grand Finale where these startups pitch before India's biggest investment firms and media houses.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150636-QoEInxIgGGmh1RWcvAP8uK2shD6CbH.png"
  },
  {
    date: "October 2020",
    title: "Business Mentor",
    organization: "Systemix: The Systems Consulting, E-commerce and SMAC Club, IIFT",
    description: "Goal is to work with the Systemix club of my alma mater (Indian Institute of Foreign Trade) to mentor their students. Delivered a talk to the 200+ participants of the MBA (IB) class of 2021/2022 in October 2020. It was an engaging discussion with the participants on World Statistics day on 20th October 2020. The world has come a long way in recognising data as a central pivot and theme around everything we do. With data comes a lot of interesting challenges. Management of data, the usage of data, the difference between ethical usage, usage by ads where we are the \"product\", personalisation, Data privacy acts, trust, transparency, quality of data, closing this trust gap, partnering IT and business.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150636-QoEInxIgGGmh1RWcvAP8uK2shD6CbH.png"
  },
  {
    date: "June 2020",
    title: "Speaker / Product Management mentor",
    organization: "S.P. Jain Institute of Management & Research (SPJIMR)",
    description: "Speaker on Product Management (Product / Platform thinking) across a variety of areas to the 2021 MBA cohort.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150640-6WPcYtGUHG9QwDERdx24x2DU1Yb9Mv.png"
  },
  {
    date: "February 2020",
    title: "Speaker/Mentor - Product/Platform thinking",
    organization: "Indian Institute of Foreign Trade (IIFT)",
    description: "Gave a talk to the 2019-2021 MBA (International business) batch of Indian Institute of Foreign Trade (IIFT), New Delhi. Attended by ~200 students. Mentor on the IIFT, Delhi, Systemix network for Product Management from Feb 2020.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150640-6WPcYtGUHG9QwDERdx24x2DU1Yb9Mv.png"
  },
  {
    date: "September 2019",
    title: "Speaker - Product thinking / Panelist",
    organization: "Indian Institute of Management, Sirmaur (Udgam)",
    description: "From the Panel-1 of UDGAM, IIM Sirmaur is proud to present the first speaker Mr. Naveen Athresh (Group Product Manager, Rakuten). Discussing the topic \"Brand Engagement and Customer Loyalty – How far can it be sustained using Data Insights?\" Mr. Naveen Athresh addressed the students that we are sitting on a mountain of data that can be monetized to deliver better services to the customer and to be able to reach various touchpoints in their lives.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150656-p8w0j7VookbGQmWYJ0PBg8wJSjWPLK.png"
  },
  {
    date: "July 2019",
    title: "Speaker-Product Thinking, Panelist, Vivaan 2019",
    organization: "Indian Institute of Foreign Trade - Strategy & Analytics Summit",
    description: "Vivaan 2019 - Strategy & Analytics Summit / value of data at Indian Institute of Foreign Trade.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150704-8SLc3TTYBefvKV1o0pwA7SWB0IfuUf.png"
  },
  {
    date: "July 2019",
    title: "Speaker at NASSCOM",
    organization: "NASSCOM DeepTech",
    description: "Speaker on Product Management (Product / Platform thinking)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150704-8SLc3TTYBefvKV1o0pwA7SWB0IfuUf.png"
  },
  {
    date: "January 2019",
    title: "Product Management Specialist",
    organization: "ISPMA e.V.",
    description: "Delivered a talk on Product Platform thinking with Tathagat Verma chaired by reps from IIM Bengaluru and ISPMA Chairman to over 150 working execs at IIM B. The International Software Product Management Association (ISPMA) is an open non-profit association of experts, companies, and research institutes with the goal to foster software product management excellence across industries. ISPMA establishes software product management as a discipline in both academia and industry, and disseminates and maintains a Curriculum and a Certifiable Body of Knowledge (SPMBOK). The SPMBOK is documented in syllabi that are the basis for training courses and certification exams. The syllabi are available for free for all members. Training courses can be offered by commercial training providers and universities. Certification exams are conducted by independent certification agencies that issue the certificates on behalf of ISPMA. ISPMA also provides a platform for communication and exchange between its members, be it on conferences, in workshops and working groups, or on the internet.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150710-EteHe2pgPMz4jmbnRkNWLZQFfTTRng.png"
  },
  {
    date: "November 2018 - January 2020",
    title: "Mentor/Panelist",
    organization: "University Visvesvaraya College of Engineering (UVCE)",
    description: "Volunteer as a speaker, mentor and panlist on various panels across Inspiron 19, Inspiron 20 and Impetus 19, 20. Also, participating in the renovation activities of UVCE, Bengaluru to restore its heritage. Proud to support my alma mater.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150710-EteHe2pgPMz4jmbnRkNWLZQFfTTRng.png"
  },
  {
    date: "May 2018",
    title: "Startup / Product Management mentor",
    organization: "IAMAI-Mobile10X",
    description: "The Mobile10X hub at Bangalore - GoK Mobile10X startup hub is supported by Government of Karnataka, it has a Testing Lab, Design Lab, Capability Building and Co-working Space. They also provide: Mentorship by industry experts and domain specialists, Advanced tools for testing and implementation, Specific zones for design, development, testing and monetization. #MakeinIndia - Regular interactions, seminars and workshops with peers and industry leaders, Dedicated researchers and advice on monetization.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150717-lQfMmrexg50gTTvowrzGnKJONJFGLi.png"
  },
  {
    date: "April 2018",
    title: "Member",
    organization: "INDIAGLOCAL",
    description: "INDIAGLOCAL is a collaborative not for profit think tank initiative to enable Indian entrepreneurs and ecosystem to grow globally. As a first step to that end, we have set out to build a global community of Indian entrepreneurs and enablers in form of a network of local Indian entrepreneurial communities across the world.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150717-lQfMmrexg50gTTvowrzGnKJONJFGLi.png"
  },
  {
    date: "April 2018",
    title: "Panelist / Product Management mentor",
    organization: "Bootstrapped Labs",
    description: "Part of the panel evaluating startups. Gave a talk on 'Product/Platform thinking' to IIM-Bangalore startup audience as part of their e-cell (NSRCEL) with a video that went viral (>20K views in under 24 hours of publishing) showing the need for hand holding of product / platform startups by Sr. talent in industry #MakeinIndia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150717-lQfMmrexg50gTTvowrzGnKJONJFGLi.png"
  },
  {
    date: "October 2016 - May 2017",
    title: "Industry mentor - Product Management",
    organization: "UpGrad.com",
    description: "Upgrad is shaping the way Product Management evolves in the coming years to build budding product managers. They are looking to industry experts to raise the bar and collaborate to bring the next stream of Product Talent to the fore by grooming them right with effective mentoring.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150717-lQfMmrexg50gTTvowrzGnKJONJFGLi.png"
  },
  {
    date: "April 2013",
    title: "Elite Member - Product Management",
    organization: "Institute of Product Leadership",
    description: "Product leadership Institute is a great institute that brings together leading industry practitioners in this niche area of Product Management to help shape their curriculum and mentor their students with effective / generic best practices. Initially, my involvement with their institute was as a recruiter representing my then company, Capillary Technologies (2013). Later as an elite member to help plan their intrapreneurship workshops. Hopefully, some of their students will practice the sound principles of Product Management to build the next billion $ product company out of India! #MakeinIndia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20150723-sfrBETMXfuEGUpWEVw8iY0tdZiR88M.png"
  },
]

export default function GivingBackPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[120px] lg:pt-[140px] pb-8 px-4 lg:px-6" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-[36px] lg:text-[56px] font-extrabold leading-tight mb-4" style={{ color: "#0F172A" }}>
            Volunteering
          </h1>
          <p className="text-base lg:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
            At Liquidmind AI, we believe in giving back to the community that has nurtured us. Our founder, Naveen Athresh, 
            has been actively involved in mentoring, speaking, and supporting educational institutions and startups across India.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#0066CC] to-[#00A86B] h-full rounded-full" />
            
            {/* Timeline Events */}
            <div className="space-y-8 lg:space-y-12">
              {volunteeringEvents.map((event, idx) => (
                <div 
                  key={idx} 
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 w-full lg:w-auto ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div 
                      className="p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,204,0.2)] hover:scale-[1.02] cursor-pointer group"
                      style={{ 
                        background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)",
                        border: "1px solid #E2E8F0"
                      }}
                    >
                      {/* Date Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-3 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,102,204,0.4)]`}
                        style={{ background: "#0066CC", color: "#FFFFFF" }}>
                        {event.date}
                      </div>
                      
                      <h3 className="text-lg lg:text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-[#0066CC]" style={{ color: "#0F172A" }}>
                        {event.title}
                      </h3>
                      <p className="text-sm font-semibold mb-3" style={{ color: "#00A86B" }}>
                        {event.organization}
                      </p>
                      <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 z-10 transition-all duration-300 hover:scale-125 hover:shadow-[0_0_20px_rgba(0,102,204,0.5)]"
                    style={{ 
                      background: "linear-gradient(135deg, #0066CC, #00A86B)",
                      boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 6px #0066CC"
                    }} 
                  />

                  {/* Image/Logo */}
                  <div className="flex-1 w-full lg:w-auto flex justify-center">
                    <div className="w-full max-w-[280px] h-[180px] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,102,204,0.3)] hover:scale-105"
                      style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center"
                            style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                          </div>
                          <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{event.organization}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Felicitations Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[32px] lg:text-[48px] font-extrabold mb-8" style={{ color: "#0F172A" }}>
            Felicitations
          </h2>
          <div className="p-6 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#0066CC" }}>
              1. Recognized at the Elevate 2019 - Ministry of IT/BT Karnataka
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
              Naveen Athresh was recognized for his contributions to the startup ecosystem and product management 
              community in Karnataka at the prestigious Elevate 2019 event organized by the Ministry of IT/BT, 
              Government of Karnataka.
            </p>
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
