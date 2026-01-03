"use client"

import { Building2, Calendar, Users, DollarSign, BarChart3, Shield, FileText, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect } from "react"

const features = [
  {
    icon: Calendar,
    title: "Smart Booking Management",
    description:
      "Streamline reservations across multiple platforms with automated synchronization and real-time availability updates.",
  },
  {
    icon: Users,
    title: "Guest Experience",
    description:
      "Enhance guest satisfaction with automated check-ins, digital keys, and personalized communication throughout their stay.",
  },
  {
    icon: DollarSign,
    title: "Dynamic Pricing",
    description:
      "Maximize revenue with AI-powered pricing that adapts to demand, seasonality, and market conditions in real-time.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Gain actionable insights with comprehensive reporting on occupancy rates, revenue, and guest satisfaction metrics.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Process payments safely with integrated payment solutions and automated invoicing for peace of mind.",
  },
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Manage multiple properties from a single dashboard with centralized control over inventory and operations.",
  },
]

export default function StayPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { scrollYProgress } = useScroll()

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const y1 = useTransform(springScroll, [0, 0.5], [0, 100])
  const y2 = useTransform(springScroll, [0, 0.5], [0, -100])
  const heroScale = useTransform(springScroll, [0, 0.5], [1, 0.8])
  const heroOpacity = useTransform(springScroll, [0, 0.3], [1, 0])

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f1419] overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f1419]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/50"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-light text-tobiira-blue-700 dark:text-tobiira-blue-400">
            <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
              Tobiira IO
            </motion.span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="hidden sm:block">
              <Link
                href="/#products"
                className="text-sm font-light text-gray-700 dark:text-gray-300 hover:text-tobiira-blue-700 dark:hover:text-tobiira-blue-400 transition-colors"
              >
                Products
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="hidden sm:block">
              <Link
                href="/#about"
                className="text-sm font-light text-gray-700 dark:text-gray-300 hover:text-tobiira-blue-700 dark:hover:text-tobiira-blue-400 transition-colors"
              >
                About
              </Link>
            </motion.div>
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
              <Button
                className="gradient-border-button bg-tobiira-blue-700 hover:bg-tobiira-blue-800 dark:bg-tobiira-blue-600 dark:hover:bg-tobiira-blue-700 transition-all duration-300 text-sm"
                asChild
              >
                <Link href="/coming-soon">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-white dark:bg-[#0f1419] overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Mesh Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(to right, #0062ff 1px, transparent 1px), linear-gradient(to bottom, #0062ff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Audience Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-tobiira-blue-600 px-6 py-2 rounded-full mb-12 shadow-lg shadow-tobiira-blue-500/20"
            >
              <p className="text-sm font-regular text-white">For guest houses • boutique hotels • B&Bs</p>
            </motion.div>

            <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-1.5 rounded-full bg-tobiira-blue-100 dark:bg-tobiira-blue-900/30 text-tobiira-blue-700 dark:text-tobiira-blue-300 text-sm font-regular mb-6"
              >
                Coming 2026
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-regular text-gray-900 dark:text-white mb-8 leading-tight"
              >
                Hotel operations, <span className="text-tobiira-blue-600">streamlined</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-12"
              >
                Rooms. Guests. Bills. Done.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <Button
                  size="lg"
                  className="bg-tobiira-blue-600 hover:bg-tobiira-blue-700 text-white px-10 py-7 rounded-full text-lg font-regular transition-all duration-300 shadow-xl shadow-tobiira-blue-500/20"
                >
                  Get Started Free
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">Always free • No credit card</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image Mockup Area */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="aspect-[16/9] rounded-2xl bg-gray-50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/50 shadow-2xl overflow-hidden">
              {/* Dashboard Placeholder Mockup */}
              <div className="w-full h-full p-6 flex flex-col gap-6">
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-20 flex-1 rounded-xl bg-tobiira-blue-50 dark:bg-tobiira-blue-900/20" />
                  ))}
                </div>
                <div className="flex-1 rounded-xl bg-gray-100 dark:bg-gray-800/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-regular text-gray-900 dark:text-white mb-20"
          >
            Managing a hotel shouldn&apos;t be this hard
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Calendar, title: "Manual booking chaos" },
              { icon: DollarSign, title: "Billing errors" },
              { icon: FileText, title: "Lost paperwork" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-tobiira-blue-50 dark:bg-tobiira-blue-900/20 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-tobiira-blue-600" />
                </div>
                <h3 className="text-xl font-light text-gray-700 dark:text-gray-300">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6 bg-white dark:bg-[#0f1419]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-regular text-gray-900 dark:text-white text-center mb-20"
          >
            Everything you need in one place
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Room tracking" },
              { icon: DollarSign, title: "Guest billing" },
              { icon: Calendar, title: "Smart bookings" },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-2xl bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <card.icon className="w-10 h-10 text-tobiira-blue-600 mb-6" />
                <h3 className="text-xl font-regular text-gray-900 dark:text-white">{card.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* East Africa-Specific Features */}
      <section className="py-32 px-6 bg-white dark:bg-[#0f1419]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-regular text-gray-900 dark:text-white text-center mb-20">
            Built for East Africa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-tobiira-blue-50 dark:bg-tobiira-blue-900/20 flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-tobiira-blue-600" />
              </div>
              <h4 className="text-[20px] font-regular text-gray-900 dark:text-white mb-2">Airtel, MTN, M-Pesa ready</h4>
              <p className="text-sm font-light text-gray-600 dark:text-gray-400">Integrated mobile money payments</p>
            </div>
            {/* updated mobile money section to be EA-wide */}
            {/* Additional features can be added here */}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6 bg-tobiira-blue-50 dark:bg-tobiira-blue-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-4xl font-light text-tobiira-blue-900 dark:text-tobiira-blue-100 mb-8 italic"
          >
            &quot;Check-in now takes 2 minutes, not 15&quot;
          </motion.p>
          <p className="text-lg font-light text-tobiira-blue-700 dark:text-tobiira-blue-400">
            — David, Coast Guest House
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 bg-white dark:bg-[#0f1419]">
        <div className="max-w-xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-regular text-gray-900 dark:text-white mb-4"
          >
            Free forever
          </motion.h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-12">All features • No limits</p>
          <Button
            size="lg"
            className="bg-tobiira-blue-600 hover:bg-tobiira-blue-700 text-white px-10 py-6 rounded-full text-lg font-regular"
          >
            Start Now
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gray-100 dark:bg-[#0a0e13]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-regular text-gray-900 dark:text-white mb-8">Ready to streamline?</h2>
          <Button
            size="lg"
            className="bg-tobiira-blue-600 hover:bg-tobiira-blue-700 text-white px-8 py-6 rounded-full text-md font-regular"
          >
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-100 dark:border-gray-800/50 bg-white dark:bg-[#0f1419]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-regular text-gray-900 dark:text-white mb-6">TOBIIRA</h4>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 leading-relaxed">
              Modern real estate technology for East Africa.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-regular text-gray-900 dark:text-white mb-6 uppercase tracking-wider">
              Products
            </h5>
            <div className="flex flex-col gap-4">
              <Link href="/stay" className="text-sm font-light text-gray-600 hover:text-tobiira-blue-600">
                Stay
              </Link>
              <Link href="/one" className="text-sm font-light text-gray-600 hover:text-tobiira-blue-600">
                One
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-sm font-regular text-gray-900 dark:text-white mb-6 uppercase tracking-wider">
              Company
            </h5>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-sm font-light text-gray-600 hover:text-tobiira-blue-600">
                About
              </Link>
              <Link href="/privacy" className="text-sm font-light text-gray-600 hover:text-tobiira-blue-600">
                Privacy
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-sm font-regular text-gray-900 dark:text-white mb-6 uppercase tracking-wider">
              Support
            </h5>
            <div className="flex flex-col gap-4">
              <Link href="/help" className="text-sm font-light text-gray-600 hover:text-tobiira-blue-600">
                Help Center
              </Link>
              <Link href="/contact" className="text-sm font-light text-gray-600 hover:text-tobiira-blue-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-100 dark:border-gray-800/50 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-gray-400 flex items-center gap-2">Made in Uganda 🇺🇬</p>
          <p className="text-xs font-light text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Tobiira IO. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
