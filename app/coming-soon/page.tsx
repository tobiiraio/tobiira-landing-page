"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ComingSoonPage() {
  const words = "Coming Soon".split(" ")
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-[#0062ff] overflow-hidden relative font-sans">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 border border-white/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            rotate: [0, -45, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-1/4 w-64 h-64 border-2 border-white/10 rounded-[3rem]"
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6">
        <div className="flex flex-wrap justify-center gap-x-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="text-[40px] md:text-[56px] font-regular text-white tracking-tight"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            type: "spring",
            stiffness: 200,
          }}
          className="px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xl md:text-2xl font-regular"
        >
          2026
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-white origin-left opacity-30"
      />
    </main>
  )
}
