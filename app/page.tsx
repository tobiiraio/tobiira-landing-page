"use client"

import { ArrowRight, Building2, Smartphone, Brain, CloudOff, Zap, ShieldCheck, MapPin, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const heroY = useTransform(smoothScroll, [0, 0.5], ["0%", "30%"])
  const heroOpacity = useTransform(smoothScroll, [0, 0.3], [1, 0])
  const heroScale = useTransform(smoothScroll, [0, 0.5], [1, 1.1])
  const bgY = useTransform(smoothScroll, [0, 1], ["0%", "40%"])

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f1419] overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0f1419]/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/50"
      >
        <nav className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-regular tracking-tight text-tobiira-blue-600 dark:text-tobiira-blue-400"
          >
            TOBIIRA
          </motion.div>
          <div className="flex items-center gap-8">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="rounded-lg border-gray-200 dark:border-gray-700 font-regular text-sm px-6 bg-transparent"
                asChild
              >
                <Link href="/coming-soon">Login</Link>
              </Button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Audience Bar */}
      <div className="pt-[72px]">
        <div className="bg-[#F5F5F5] dark:bg-gray-800/50 py-3 text-center">
          <p className="text-[14px] font-light text-gray-600 dark:text-gray-400">
            For property owners • hotel operators • renters
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 px-6 overflow-hidden">
        {/* Background Map Graphic (Minimalist) */}
        <motion.div style={{ y: bgY, scale: heroScale }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20 mix-blend-multiply"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1590059132213-f91590b106b2?q=80&w=2070&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-tobiira-blue-50/50 dark:from-[#0f1419] dark:via-[#0f1419]/90 dark:to-[#0a0e13]" />

          {/* Animated data lines / mesh grid pattern */}
          <motion.div
            animate={{ opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgb(6 118 255) 1px, transparent 1px), linear-gradient(to bottom, rgb(6 118 255) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-[1280px] mx-auto text-center relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-[56px] font-regular text-gray-900 dark:text-white mb-6 leading-[1.1] max-w-4xl mx-auto"
          >
            Spatial intelligence for <span className="text-tobiira-blue-600">African real estate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-[28px] font-light text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Manage. Book. Discover. All AI-powered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-tobiira-blue-600 hover:bg-tobiira-blue-700 text-white rounded-lg px-10 py-7 text-[16px] font-regular shadow-xl shadow-tobiira-blue-500/20"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Products
            </Button>
          </motion.div>

          {/* Minimal Uganda Map Outline Placeholder */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="mt-24 opacity-20 dark:opacity-30"
          >
            <MapPin className="h-12 w-12 text-tobiira-blue-600 mx-auto" />
            <p className="text-[12px] uppercase tracking-widest mt-4 text-gray-400">Built in Uganda</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-24 sm:py-[100px] px-6 bg-[#FAFAFA] dark:bg-[#0a0e13]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-[36px] font-regular text-gray-900 dark:text-white mb-4">
              The complete platform
            </h2>
            <p className="text-[18px] font-light text-gray-600 dark:text-gray-400">
              Everything you need in one ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TOBIIRA ONE */}
            <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 border-0 shadow-lg dark:bg-gray-800/50 rounded-2xl flex flex-col">
                <span className="text-[12px] font-regular text-tobiira-blue-600 uppercase tracking-wider mb-4">
                  TOBIIRA ONE
                </span>
                <h3 className="text-[24px] font-regular text-gray-900 dark:text-white mb-3">
                  Any property. Any unit type.
                </h3>
                <p className="text-[18px] font-light text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                  For landlords & property managers
                </p>
                <div className="mb-8 aspect-video bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-tobiira-blue-600/20" />
                </div>
                <Link
                  href="/one"
                  className="text-tobiira-blue-600 hover:text-tobiira-blue-700 font-regular inline-flex items-center gap-2 group"
                >
                  Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            </motion.div>

            {/* TOBIIRA STAY */}
            <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 border-0 shadow-lg dark:bg-gray-800/50 rounded-2xl flex flex-col">
                <span className="text-[12px] font-regular text-tobiira-blue-600 uppercase tracking-wider mb-4">
                  TOBIIRA STAY
                </span>
                <h3 className="text-[24px] font-regular text-gray-900 dark:text-white mb-3">
                  Hotel operations, streamlined
                </h3>
                <p className="text-[18px] font-light text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                  For hotels & guest houses
                </p>
                <div className="mb-8 aspect-video bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-center justify-center">
                  <Zap className="w-16 h-16 text-tobiira-blue-600/20" />
                </div>
                <Link
                  href="/stay"
                  className="text-tobiira-blue-600 hover:text-tobiira-blue-700 font-regular inline-flex items-center gap-2 group"
                >
                  Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            </motion.div>

            {/* TOBIIRA MARKETPLACE */}
            <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 border-0 shadow-lg dark:bg-gray-800/50 rounded-2xl flex flex-col">
                <span className="text-[12px] font-regular text-tobiira-blue-600 uppercase tracking-wider mb-4">
                  TOBIIRA MARKETPLACE
                </span>
                <h3 className="text-[24px] font-regular text-gray-900 dark:text-white mb-3">Find your space</h3>
                <p className="text-[18px] font-light text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                  AI-powered property search
                </p>
                <div className="mb-8 aspect-video bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-center justify-center">
                  <Brain className="w-16 h-16 text-tobiira-blue-600/20" />
                </div>
                <Link
                  href="#"
                  className="text-tobiira-blue-600 hover:text-tobiira-blue-700 font-regular inline-flex items-center gap-2 group"
                >
                  Search Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Tobiira */}
      <section className="py-24 sm:py-[100px] px-6 bg-white dark:bg-[#0f1419]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-[36px] font-regular text-gray-900 dark:text-white mb-4">
              Built in Uganda, for Africa
            </h2>
            <p className="text-[18px] font-light text-gray-600 dark:text-gray-400">
              Powered by AI, designed for African realities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: "Mobile Money Ready",
                text: "Airtel Money, MTN, M-Pesa integration for seamless payments.",
              },
              {
                icon: Zap,
                title: "SMS & WhatsApp",
                text: "No app required for tenants/guests. Communicate on their terms.",
              },
              {
                icon: Brain,
                title: "Spatial Intelligence",
                text: "Location-aware, context-smart data for better property insights.",
              },
              {
                icon: CloudOff,
                title: "Offline-First",
                text: "Works even with poor connectivity. Your business never stops.",
              },
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-tobiira-blue-50 dark:bg-tobiira-blue-900/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-tobiira-blue-600" />
                </div>
                <div>
                  <h4 className="text-[20px] font-regular text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-[16px] font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#E3F2FD] dark:bg-tobiira-blue-900/10 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-[36px] font-regular text-gray-900 dark:text-white">Making an impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "500+", label: "Properties Managed" },
              { val: "10,000+", label: "Units Managed" },
              { val: "5,000+", label: "Happy Tenants" },
              { val: "95%", label: "Uptime" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-[48px] font-regular text-tobiira-blue-600 mb-2">{stat.val}</p>
                <p className="text-[14px] font-light text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-[100px] px-6 bg-white dark:bg-[#0f1419]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-3xl sm:text-[36px] font-regular text-gray-900 dark:text-white mb-20">
            The future is spatial
          </h2>
          <motion.div whileHover={{ y: -10 }} className="max-w-2xl mx-auto">
            <Link href="/lumi">
              <Card className="p-12 border-0 shadow-2xl dark:bg-gray-800/50 rounded-[2.5rem] overflow-hidden group cursor-pointer">
                <div className="aspect-square w-32 h-32 bg-gray-100 dark:bg-gray-900 rounded-3xl mx-auto mb-10 flex items-center justify-center group-hover:bg-red-50 dark:group-hover:bg-red-950/20 transition-colors">
                  <Utensils className="w-16 h-16 text-gray-400 group-hover:text-red-600 transition-colors" />
                </div>
                <span className="text-[12px] font-regular text-red-600 uppercase tracking-[0.2em] mb-4 block">
                  TOBIIRA LUMI
                </span>
                <h3 className="text-[28px] font-regular text-gray-900 dark:text-white mb-4">
                  Restaurant operations at the speed of light
                </h3>
                <div className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-[12px] font-light text-gray-500 mb-0">
                  Coming 2026
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* For Developers */}
      <section className="py-24 sm:py-[100px] px-6 bg-[#F5F5F5] dark:bg-[#0a0e13]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-[36px] font-regular text-gray-900 dark:text-white mb-6">Build on Tobiira</h2>
          <p className="text-[18px] font-light text-gray-600 dark:text-gray-400 mb-12">
            Access our spatial data APIs and build the next generation of real estate tools
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 rounded-lg text-[16px] font-regular bg-transparent"
            >
              Read API Docs →
            </Button>
            <Button className="w-full sm:w-auto bg-tobiira-blue-600 hover:bg-tobiira-blue-700 text-white px-8 py-6 rounded-lg text-[16px] font-regular">
              Get API Key
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-[100px] px-6 bg-white dark:bg-[#0f1419]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-[36px] font-regular text-gray-900 dark:text-white mb-12">
            Ready to get started?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="w-full rounded-full py-8 text-[16px] font-regular border-tobiira-blue-200 dark:border-tobiira-blue-800 bg-transparent"
                asChild
              >
                <Link href="/one">I manage properties</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="w-full rounded-full py-8 text-[16px] font-regular bg-tobiira-blue-600 hover:bg-tobiira-blue-700"
                asChild
              >
                <Link href="/stay">I run a hotel</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="w-full rounded-full py-8 text-[16px] font-regular border-tobiira-blue-200 dark:border-tobiira-blue-800 bg-transparent"
              >
                I&apos;m looking for space
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#212121] text-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h5 className="text-[14px] font-regular uppercase tracking-widest mb-8">Products</h5>
            <div className="flex flex-col gap-4">
              <Link href="/one" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light">
                One
              </Link>
              <Link href="/stay" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light">
                Stay
              </Link>
              <span className="text-gray-400 text-[14px] font-light">Marketplace</span>
              <span className="text-gray-400 text-[14px] font-light">Cube</span>
            </div>
          </div>
          <div>
            <h5 className="text-[14px] font-regular uppercase tracking-widest mb-8">Company</h5>
            <div className="flex flex-col gap-4">
              <span className="text-gray-400 text-[14px] font-light">About</span>
              <span className="text-gray-400 text-[14px] font-light">Careers</span>
              <span className="text-gray-400 text-[14px] font-light">Blog</span>
            </div>
          </div>
          <div>
            <h5 className="text-[14px] font-regular uppercase tracking-widest mb-8">Developers</h5>
            <div className="flex flex-col gap-4">
              <span className="text-gray-400 text-[14px] font-light">API Docs</span>
              <span className="text-gray-400 text-[14px] font-light">GitHub</span>
              <span className="text-gray-400 text-[14px] font-light">Status</span>
            </div>
          </div>
          <div>
            <h5 className="text-[14px] font-regular uppercase tracking-widest mb-8">Support</h5>
            <div className="flex flex-col gap-4">
              <span className="text-gray-400 text-[14px] font-light">Help Center</span>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light">
                Contact
              </Link>
              <span className="text-gray-400 text-[14px] font-light">Community</span>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[14px] font-light text-gray-500 flex items-center gap-2">Made in Uganda 🇺🇬</p>
          <div className="flex gap-8">
            <span className="text-[12px] font-light text-gray-500">© 2025 Tobiira</span>
            <Link href="/terms" className="text-[12px] font-light text-gray-500 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-[12px] font-light text-gray-500 hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
