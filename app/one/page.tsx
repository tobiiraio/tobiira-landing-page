"use client"

import {
  ArrowLeft,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Calendar,
  FileText,
  BarChart3,
  Bell,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect } from "react"

const features = [
  {
    icon: Users,
    title: "Tenant Management",
    description: "Streamline tenant onboarding, lease management, and communication with comprehensive tools.",
  },
  {
    icon: Calendar,
    title: "Long-term Lease Tracking",
    description: "Monitor lease terms, renewals, and key dates with automated reminders and notifications.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Securely store and manage contracts, agreements, and tenant documents in one place.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Maximize occupancy and rental income with data-driven pricing strategies.",
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Stay compliant with housing regulations and ensure data security for all stakeholders.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description: "Track performance across multiple properties with comprehensive reporting tools.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss important events with intelligent alerts for maintenance, payments, and more.",
  },
]

export default function OnePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { scrollYProgress } = useScroll()

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const contentY = useTransform(smoothScroll, [0, 0.5], [0, 150])
  const heroOpacity = useTransform(smoothScroll, [0, 0.4], [1, 0])

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
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <Button variant="outline" className="rounded-lg font-regular text-sm px-6 bg-transparent" asChild>
              <Link href="/coming-soon">Login</Link>
            </Button>
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="font-light dark:hover:bg-gray-800 text-sm sm:text-base">
                  <ArrowLeft className="mr-2 h-4 w-4" /> <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-white dark:bg-[#0f1419] overflow-hidden min-h-[90vh] flex items-center">
        {/* Consistent Mesh Pattern */}
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
              <p className="text-sm font-regular text-white">For landlords • property managers • estates</p>
            </motion.div>

            <motion.div style={{ opacity: heroOpacity }}>
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
                Property management, <span className="text-tobiira-blue-600">simplified</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-12"
              >
                Any building. Any unit type.
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
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">Always free • Mobile first</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Mockup Area */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 relative max-w-[320px] mx-auto"
          >
            <div className="aspect-[9/19] rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />
              <div className="w-full h-full bg-white dark:bg-gray-800 p-4 pt-10 flex flex-col gap-4">
                <div className="h-4 w-24 bg-gray-100 rounded-full" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-16 w-full rounded-xl bg-gray-50 dark:bg-gray-700/50" />
                ))}
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
            Stop losing track of your properties
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: TrendingUp, title: "Late rent unnoticed" },
              { icon: Calendar, title: "Forgotten leases" },
              { icon: BarChart3, title: "Spreadsheet hell" },
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
            Everything organized, automatically
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Tenant tracking" },
              { icon: Bell, title: "Rent reminders" },
              { icon: Calendar, title: "Lease alerts" },
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

      {/* Property Types (Unique Section) */}
      <section className="py-32 px-6 bg-tobiira-blue-50 dark:bg-tobiira-blue-900/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-regular text-gray-900 dark:text-white text-center mb-20">
            Handles any property type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              "Apartments & houses",
              "Office buildings",
              "Retail centers",
              "Warehouses & industrial",
              "Mixed-use developments",
            ].map((type, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-tobiira-blue-600" />
                </div>
                <p className="text-sm font-light text-gray-600 dark:text-gray-400">{type}</p>
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
              <h4 className="text-[20px] font-regular text-gray-900 dark:text-white mb-2">Mobile money ready</h4>
              <p className="text-sm font-light text-gray-600 dark:text-gray-400">Airtel, MTN, M-Pesa ready</p>
            </div>
            {/* Additional features can be added here */}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-[#0a0e13]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl font-light text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed"
          >
            &quot;Manage 30 units from my phone&quot;
          </motion.p>
          <p className="text-lg font-light text-tobiira-blue-700 dark:text-tobiira-blue-400">
            — Sarah, Westlands Property Owner
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
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-12">Unlimited units • All features</p>
          <Button
            size="lg"
            className="bg-tobiira-blue-600 hover:bg-tobiira-blue-700 text-white px-10 py-6 rounded-full text-lg font-regular"
          >
            Start Now
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-tobiira-blue-50 to-white dark:from-[#0d1115] dark:via-[#0f1419] dark:to-[#0a0e13] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(6 118 255) 1px, transparent 1px), linear-gradient(to bottom, rgb(6 118 255) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-3 sm:mb-4 text-center px-2"
          >
            Everything you need for long-stay management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, delay: 0.1 }}
            className="text-base sm:text-lg font-light text-gray-600 dark:text-gray-400 mb-12 sm:mb-16 text-center max-w-3xl mx-auto px-4"
          >
            One provides a complete solution for managing residential properties with tenants staying for months or
            years, not days.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                  },
                }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="gradient-border p-6 sm:p-8 border-0 shadow-lg hover:shadow-2xl dark:bg-[#1a1f29] dark:shadow-gray-900/50 dark:hover:shadow-tobiira-blue-950/30 transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-tobiira-blue-500 to-tobiira-blue-700 flex items-center justify-center mb-4 sm:mb-6"
                  >
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6 bg-gradient-to-tr from-tobiira-blue-50 via-white to-tobiira-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-tobiira-blue-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-tobiira-blue-200/30 dark:from-tobiira-blue-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-tobiira-blue-100/30 dark:from-tobiira-blue-950/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  {[0, 1].map((i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, scale: 0.5, rotate: -15 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                          },
                        },
                      }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className={`aspect-square rounded-2xl ${
                        i === 0
                          ? "bg-gradient-to-br from-tobiira-blue-100 to-tobiira-blue-200 dark:from-tobiira-blue-900 dark:to-tobiira-blue-800"
                          : "bg-gradient-to-br from-tobiira-blue-200 to-tobiira-blue-300 dark:from-tobiira-blue-800 dark:to-tobiira-blue-700"
                      } transition-all duration-500`}
                    />
                  ))}
                </div>
                <div className="space-y-6 mt-8">
                  {[0, 1].map((i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, scale: 0.5, rotate: 15 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                          },
                        },
                      }}
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className={`aspect-square rounded-2xl ${
                        i === 0
                          ? "bg-gradient-to-br from-tobiira-blue-200 to-tobiira-blue-300 dark:from-tobiira-blue-800 dark:to-tobiira-blue-700"
                          : "bg-gradient-to-br from-tobiira-blue-300 to-tobiira-blue-400 dark:from-tobiira-blue-700 dark:to-tobiira-blue-600"
                      } transition-all duration-500`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6">Built for the long term</h2>
              <p className="text-lg font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                One understands that long-stay accommodations require different tools than short-term rentals. From
                lease management to tenant relationships, we provide everything you need to run a successful residential
                property business.
              </p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="space-y-3 text-gray-600 dark:text-gray-400 font-light"
              >
                {[
                  "Automated rent collection and payment tracking",
                  "Maintenance request management with priority tracking",
                  "Tenant portal for seamless communication",
                  "Financial reporting and portfolio insights",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start gap-3"
                  >
                    <motion.span
                      whileHover={{ scale: 1.3 }}
                      className="text-tobiira-blue-700 dark:text-tobiira-blue-400 mt-1"
                    >
                      ✓
                    </motion.span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-tobiira-blue-800 via-tobiira-blue-700 to-tobiira-blue-800 dark:from-tobiira-blue-900 dark:via-tobiira-blue-950 dark:to-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 dark:opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.08) 20px, rgba(255,255,255,0.08) 40px)`,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-tobiira-blue-500/20 blur-3xl rounded-full" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-5xl font-light mb-6"
          >
            Ready to streamline your property management?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 }}
            className="text-lg font-light text-tobiira-blue-100 dark:text-tobiira-blue-300 mb-12"
          >
            Join property managers who trust One to handle their long-stay accommodations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="gradient-border-button bg-white text-tobiira-blue-700 hover:bg-gray-100 transition-all duration-300 font-light"
            >
              Start Free Trial
            </Button>
          </motion.div>
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
