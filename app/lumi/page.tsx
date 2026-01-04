"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Bell,
  Smartphone,
  Wifi,
  Battery,
  ChevronRight,
  CreditCard,
  UtensilsCrossed,
  Cpu,
  XCircle,
  Clock,
  UserX,
  CheckCircle2,
  Zap,
  TrendingUp,
  Layers,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LumiPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const productY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0])
  const productOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-red-600 selection:text-white"
    >
      {/* Navigation - Ultra Minimal Google Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-[18px] font-regular tracking-tight text-white uppercase letter-spacing-[0.1em]">
                Tobiira
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/coming-soon">
              <Button className="bg-white text-black hover:bg-gray-200 h-9 px-5 text-[14px] rounded-full font-regular transition-all">
                Pre-order
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Hero - Cinematic Entrance */}
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
          <motion.div style={{ scale, opacity }} className="z-10 text-center max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[56px] md:text-[88px] font-regular leading-[1.05] tracking-tight mb-8"
            >
              Tobiira presents{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Lumi.</span>
              <br />
              Intelligence in Dining.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[20px] md:text-[24px] font-light text-gray-400 max-w-2xl mx-auto"
            >
              A table top for the fast service.
            </motion.p>
          </motion.div>

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full" />
        </section>

        {/* Problem Section */}
        <section className="py-32 px-6 bg-[#040404]">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-[32px] md:text-[48px] font-regular mb-4">The friction in service.</h2>
              <p className="text-gray-400 font-light text-[18px] max-w-2xl mx-auto">
                Traditional dining is plagued by small delays that add up to a poor experience and lost revenue.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: UserX,
                  title: "Wasted Motion",
                  desc: "Staff spend 40% of their time walking to tables just to see if guests need anything.",
                },
                {
                  icon: Clock,
                  title: "The Wait Gap",
                  desc: "An average guest waits 7-10 minutes between wanting the bill and receiving it.",
                },
                {
                  icon: XCircle,
                  title: "Order Errors",
                  desc: "Miscommunication during peak hours leads to wrong orders and food waste.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-10 bg-zinc-950/40 border border-white/10 rounded-[2.5rem] hover:border-red-600/50 hover:bg-zinc-900/40 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <item.icon className="w-10 h-10 text-red-500/80 mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-[20px] font-regular mb-3 relative z-10">{item.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-32 px-6 bg-[#020202] relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[120px] rounded-full" />

          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-[32px] md:text-[48px] font-regular mb-8 leading-tight">
                  A seamless bridge between <span className="text-red-600">guest and staff.</span>
                </h2>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {[
                    {
                      icon: Zap,
                      title: "Instant Response",
                      desc: "Requests go directly to the staff terminal, cutting response times by 60%.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Frictionless Billing",
                      desc: "Guests signal for the bill and pay via mobile money in seconds, not minutes.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Higher Turnover",
                      desc: "Efficient service allows for faster table turnover and increased daily covers.",
                    },
                  ].map((item, i) => (
                    <motion.div key={i} variants={itemVariants} className="flex gap-6 group">
                      <div className="mt-1 p-3 bg-red-600/10 rounded-2xl border border-red-600/20 group-hover:bg-red-600/20 transition-colors">
                        <item.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-[20px] font-regular mb-1">{item.title}</h4>
                        <p className="text-gray-400 font-light text-[17px] leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-[#080808] rounded-[3.5rem] border border-white/10 p-12 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <div className="text-center">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="w-52 h-52 bg-black rounded-[3rem] border border-white/10 mx-auto mb-8 shadow-2xl flex flex-col items-center justify-center relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CheckCircle2 className="w-16 h-16 text-red-600 mb-4" />
                      <div className="text-[12px] font-mono text-zinc-500 uppercase tracking-widest">Service Alert</div>
                    </motion.div>
                    <div className="text-[26px] font-regular text-white tracking-tight">Table 12 is ready.</div>
                    <div className="text-gray-500 font-light mt-2 text-[18px]">Bill request received.</div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 blur-[60px] rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/10 blur-[60px] rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Precision Engineering Section */}
        <section className="py-32 px-6 bg-[#040404] relative overflow-hidden border-y border-white/5">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[12px] font-regular tracking-wider uppercase mb-6"
              >
                <Layers className="w-3 h-3" /> Precision Engineering
              </motion.div>
              <h2 className="text-[40px] md:text-[64px] font-regular tracking-tight leading-tight mb-6">
                Built to withstand <br className="hidden md:block" />
                <span className="text-red-600">the dinner rush.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
                {[
                  {
                    title: "IP54 Rating",
                    desc: "Spill-resistant casing designed for high-traffic hospitality environments.",
                  },
                  {
                    title: "Antimicrobial Coating",
                    desc: "Treated surface to ensure hygiene and easy cleaning between guests.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  >
                    <h4 className="text-[22px] font-regular mb-3 text-white">{item.title}</h4>
                    <p className="text-gray-500 font-light leading-relaxed text-[17px]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-[320px] aspect-[3/4] flex items-center justify-center">
                  {/* Exploded View Mockup - Decorative Animated Layers */}
                  <motion.div
                    animate={{
                      y: [0, -40, 0],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute top-0 w-48 h-12 bg-zinc-800 rounded-xl border border-white/20 shadow-2xl z-30 flex items-center justify-center"
                  >
                    <div className="w-24 h-4 bg-zinc-900 rounded-full border border-white/10" />
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                    className="w-56 h-72 bg-zinc-900 rounded-[2.5rem] border border-white/10 shadow-2xl z-20 flex flex-col items-center justify-center p-6"
                  >
                    <div className="w-32 h-20 bg-black rounded-lg border border-white/5 mb-6 flex items-center justify-center">
                      <div className="w-16 h-8 bg-red-600/20 rounded-md border border-red-600/30 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-3 gap-3 w-full mt-auto">
                      <div className="aspect-square rounded-full bg-zinc-800 border border-white/5" />
                      <div className="aspect-square rounded-full bg-zinc-800 border border-white/5" />
                      <div className="aspect-square rounded-full bg-zinc-800 border border-white/5" />
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-10 w-64 h-20 bg-zinc-950 rounded-[2rem] border border-white/5 shadow-2xl -z-10"
                  />
                  {/* Red Glow Pulse */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/10 blur-[80px] -z-20 rounded-full" />
                </div>
              </div>

              <div className="lg:col-span-4 space-y-12 order-3">
                {[
                  {
                    title: "Internal Wi-Fi Hub",
                    desc: "Dual-band connectivity for zero-latency communication with the Tobiira Cloud.",
                  },
                  {
                    title: "Haptic Feedback",
                    desc: "Tactile response on button press so guests know their request was received.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  >
                    <h4 className="text-[22px] font-regular mb-3 text-white">{item.title}</h4>
                    <p className="text-gray-500 font-light leading-relaxed text-[17px]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Functions Section */}
        <section className="py-32 px-6 max-w-[1280px] mx-auto">
          <div className="mb-20">
            <h2 className="text-[32px] md:text-[48px] font-regular mb-4">Core Functions</h2>
            <div className="h-1 w-20 bg-red-600" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Bell,
                title: "Call Service",
                desc: "Alert staff instantly with a physical button press. No more waving hands.",
              },
              {
                icon: UtensilsCrossed,
                title: "Request Menus",
                desc: "Digital menus sync to guests' phones via QR code displayed on the Lumi screen.",
              },
              {
                icon: CreditCard,
                title: "Request Bill",
                desc: "Signal for the check from the table. Staff receive precise table-specific alerts.",
              },
              {
                icon: Smartphone,
                title: "Scan to Pay",
                desc: "Integrated mobile money and card payments directly through the table display.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, backgroundColor: "rgba(24, 24, 27, 0.6)" }}
                className="p-10 bg-zinc-950/40 border border-white/10 rounded-[2.5rem] group transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-red-600" />
                </div>
                <item.icon className="w-10 h-10 text-red-600/80 mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-[22px] font-regular mb-3">{item.title}</h3>
                <p className="text-gray-500 font-light text-[16px] leading-relaxed group-hover:text-gray-400 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Built for the Floor Section */}
        <section className="py-32 px-6 bg-[#0a0a0a]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[32px] md:text-[48px] font-regular mb-12">Built for the floor.</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <Wifi className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="text-[20px] font-regular mb-1">Wireless Communication</h4>
                    <p className="text-gray-400 font-light">
                      High-range Wi-Fi ensures every request reaches the kitchen or staff terminal instantly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <Cpu className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="text-[20px] font-regular mb-1">Interactive Display</h4>
                    <p className="text-gray-400 font-light">
                      1.7-inch high-contrast screen for table numbers, dynamic QR codes, and service status.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <Battery className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="text-[20px] font-regular mb-1">Long-life Battery</h4>
                    <p className="text-gray-400 font-light">
                      3 days of active use on a single charge. Powered by standard USB-C for universal compatibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-gradient-to-tr from-red-950/20 to-transparent rounded-[4rem] border border-white/10 overflow-hidden flex items-center justify-center p-16">
              <div className="absolute inset-0 bg-red-600/5 blur-[100px]" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full h-full bg-[#080808] rounded-[3rem] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center gap-12 p-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent pointer-events-none" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="w-32 h-32 bg-black rounded-2xl border border-white/10 flex items-center justify-center relative shadow-2xl"
                >
                  <div className="absolute inset-0 bg-red-600/10 blur-xl animate-pulse" />
                  <div className="text-red-600 font-mono text-[14px] z-10">LUMI OS</div>
                </motion.div>
                <div className="flex gap-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 shadow-inner" />
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 shadow-inner" />
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 shadow-inner" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA - Google Store Style */}
        <section className="py-48 px-6 bg-white text-black text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-[48px] md:text-[72px] font-regular mb-8 tracking-tight">Upgrade your service.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/coming-soon">
                <Button className="bg-black text-white hover:bg-zinc-800 h-16 px-10 text-[18px] rounded-full font-regular">
                  Join the waitlist
                </Button>
              </Link>
              <Link href="/coming-soon" className="flex items-center gap-1 text-[18px] font-regular group">
                Contact sales <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer - Minimal */}
      <footer className="py-16 px-6 bg-[#020202] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[14px] font-light text-gray-500">© 2025 Tobiira | Made in Uganda 🇺🇬</div>
          <div className="flex gap-8 text-[14px] font-light text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/coming-soon" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
