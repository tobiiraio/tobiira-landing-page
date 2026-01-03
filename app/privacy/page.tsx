"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PrivacyPage() {
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
            Privacy Policy
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
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                At Tobiira IO, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our services. Please read this policy carefully to
                understand our practices regarding your personal data.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this
                policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section
              id="section-2"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-100 ${
                isVisible["section-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                We collect several types of information from and about users of our services:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4 space-y-2">
                <li>
                  <strong className="font-regular">Personal Information:</strong> Name, email address, phone number,
                  billing information, and other identifiers you provide when creating an account or using our services.
                </li>
                <li>
                  <strong className="font-regular">Usage Data:</strong> Information about how you interact with our
                  services, including access times, pages viewed, and the routes you take through our platform.
                </li>
                <li>
                  <strong className="font-regular">Device Information:</strong> IP address, browser type, operating
                  system, and device identifiers.
                </li>
                <li>
                  <strong className="font-regular">Property Data:</strong> Information about properties you manage,
                  including addresses, occupancy details, and related analytics.
                </li>
              </ul>
            </section>

            <section
              id="section-3"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-200 ${
                isVisible["section-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>To send administrative information, updates, and security alerts</li>
                <li>To respond to your comments, questions, and customer service requests</li>
                <li>To analyze usage trends and preferences to improve user experience</li>
                <li>To detect, prevent, and address technical issues or fraudulent activity</li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section
              id="section-4"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-300 ${
                isVisible["section-4"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4 space-y-2">
                <li>
                  <strong className="font-regular">Service Providers:</strong> With third-party vendors who perform
                  services on our behalf, such as payment processing, data analysis, and hosting.
                </li>
                <li>
                  <strong className="font-regular">Legal Requirements:</strong> When required by law or to respond to
                  legal processes.
                </li>
                <li>
                  <strong className="font-regular">Business Transfers:</strong> In connection with a merger,
                  acquisition, or sale of assets.
                </li>
                <li>
                  <strong className="font-regular">With Your Consent:</strong> When you explicitly agree to share your
                  information.
                </li>
              </ul>
            </section>

            <section
              id="section-5"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-400 ${
                isVisible["section-5"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">5. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and privacy</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we
                strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section
              id="section-6"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-500 ${
                isVisible["section-6"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4 space-y-2">
                <li>
                  <strong className="font-regular">Access:</strong> Request access to the personal information we hold
                  about you
                </li>
                <li>
                  <strong className="font-regular">Correction:</strong> Request correction of inaccurate or incomplete
                  data
                </li>
                <li>
                  <strong className="font-regular">Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong className="font-regular">Portability:</strong> Request a copy of your data in a structured
                  format
                </li>
                <li>
                  <strong className="font-regular">Objection:</strong> Object to processing of your personal information
                </li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                To exercise these rights, please contact us at privacy@tobiira.io.
              </p>
            </section>

            <section
              id="section-7"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-600 ${
                isVisible["section-7"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">7. Data Retention</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                policy, unless a longer retention period is required or permitted by law. When we no longer need your
                information, we will securely delete or anonymize it.
              </p>
            </section>

            <section
              id="section-8"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-700 ${
                isVisible["section-8"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your own. These countries
                may have different data protection laws. We ensure appropriate safeguards are in place to protect your
                information in accordance with this policy.
              </p>
            </section>

            <section
              id="section-9"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-800 ${
                isVisible["section-9"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                Our services are not intended for children under 16 years of age. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>
            </section>

            <section
              id="section-10"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-900 ${
                isVisible["section-10"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date. We encourage you to review this policy
                periodically.
              </p>
            </section>

            <section
              id="section-11"
              data-animate
              className={`mb-12 transition-all duration-1000 delay-1000 ${
                isVisible["section-11"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at
                privacy@tobiira.io.
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
