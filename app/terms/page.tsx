"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TermsPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-light text-tobiira-blue-700 dark:text-tobiira-blue-400">
            Tobiira IO
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-light text-gray-700 dark:text-gray-300 hover:text-tobiira-blue-700 dark:hover:text-tobiira-blue-400 transition-colors"
            >
              Home
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 bg-gradient-to-br from-tobiira-blue-50 via-white to-tobiira-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-tobiira-blue-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(6 118 255) 1px, transparent 1px), linear-gradient(to bottom, rgb(6 118 255) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-6 text-tobiira-blue-700 dark:text-tobiira-blue-400 hover:bg-tobiira-blue-50 dark:hover:bg-gray-800 font-light"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1
            id="hero-title"
            data-animate
            className={`text-5xl font-light text-gray-900 dark:text-white mb-4 transition-all duration-1000 ${
              isVisible["hero-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Terms of Service
          </h1>
          <p
            id="hero-subtitle"
            data-animate
            className={`text-lg font-light text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-200 ${
              isVisible["hero-subtitle"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12 px-6 bg-white dark:bg-gray-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(6 118 255) 1px, transparent 1px), linear-gradient(to bottom, rgb(6 118 255) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section
              id="section-1"
              data-animate
              className={`mb-12 transition-all duration-1000 ${
                isVisible["section-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                By accessing and using Tobiira IO's services, you acknowledge that you have read, understood, and agree
                to be bound by these Terms of Service. If you do not agree to these terms, please do not use our
                services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                These terms apply to all visitors, users, and others who access or use the service. We reserve the right
                to update these terms at any time, and your continued use of the service constitutes acceptance of any
                changes.
              </p>
            </section>

            <section
              id="section-2"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-100 ${
                isVisible["section-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">2. Use of Services</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                Tobiira IO provides a suite of software solutions including accommodation management tools, IoT
                solutions, and data analytics platforms. You agree to use these services only for lawful purposes and in
                accordance with these terms.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You must notify us immediately of any unauthorized use of your
                account.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                You agree not to: (a) use the service for any illegal purpose; (b) interfere with or disrupt the service
                or servers; (c) attempt to gain unauthorized access to any portion of the service; or (d) reproduce,
                duplicate, copy, or exploit any portion of the service without our express written permission.
              </p>
            </section>

            <section
              id="section-3"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-200 ${
                isVisible["section-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">3. Data and Privacy</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                Your use of our services is also governed by our Privacy Policy. We collect and process data in
                accordance with applicable data protection laws. You retain all rights to your data, and we will not use
                your data for any purpose other than providing and improving our services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                We implement industry-standard security measures to protect your data. However, no method of
                transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section
              id="section-4"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-300 ${
                isVisible["section-4"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                The service and its original content, features, and functionality are owned by Tobiira IO and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property
                laws.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                You may not modify, reproduce, distribute, create derivative works of, publicly display, or exploit any
                of our intellectual property without our prior written consent.
              </p>
            </section>

            <section
              id="section-5"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-400 ${
                isVisible["section-5"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">5. Payment and Subscriptions</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                Some services require payment of fees. You agree to pay all applicable fees as described at the time of
                purchase. All fees are non-refundable unless otherwise stated.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Subscription services will automatically renew unless you cancel before the renewal date. We reserve the
                right to change our fees at any time, with notice provided for existing subscriptions.
              </p>
            </section>

            <section
              id="section-6"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-500 ${
                isVisible["section-6"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                To the maximum extent permitted by law, Tobiira IO shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use or inability to use the service.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Our total liability to you for any claims arising from or related to the service shall not exceed the
                amount you paid to us in the twelve months preceding the claim.
              </p>
            </section>

            <section
              id="section-7"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-600 ${
                isVisible["section-7"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">7. Termination</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                We may terminate or suspend your account and access to the service immediately, without prior notice,
                for any reason, including if you breach these Terms of Service.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Upon termination, your right to use the service will immediately cease. All provisions of these terms
                that by their nature should survive termination shall survive, including ownership provisions, warranty
                disclaimers, and limitations of liability.
              </p>
            </section>

            <section
              id="section-8"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-700 ${
                isVisible["section-8"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">8. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@tobiira.io.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white text-xl font-light mb-4">Tobiira IO</div>
              <p className="text-sm font-light">Building the future of connected spaces</p>
            </div>
            <div>
              <h3 className="text-white font-light mb-4">Products</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/stay" className="hover:text-white transition-colors">
                    Stay
                  </Link>
                </li>
                <li>
                  <Link href="/one" className="hover:text-white transition-colors">
                    One
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-light mb-4">Company</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-light mb-4">Legal</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-sm font-light">
            © {new Date().getFullYear()} Tobiira IO. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
