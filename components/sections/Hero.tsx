'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#web-projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 sm:pt-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/hero-bg.jpg)',
        }}
      >
        {/* Dark Overlay for text readability - increased for better visibility control */}
        <div className="absolute inset-0 bg-black/75 dark:bg-black/70 light:bg-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <RevealOnScroll delay={0.2}>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white dark:text-white light:text-gray-900 light:font-extrabold"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
          >
            I Create Digital Experiences
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-indigo-400 dark:text-indigo-400 light:text-indigo-800 light:font-bold"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
          >
            Abubakar Arif
          </motion.p>
        </RevealOnScroll>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 dark:text-gray-400 light:text-gray-800 light:font-medium mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: 'easeOut' }}
        >
          Crafting premium websites and stunning graphic designs with research-backed
          methodology and attention to detail.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
        >
            <Button onClick={scrollToProjects} variant="primary">
              View My Work
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector('#about')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              variant="secondary"
            >
              Learn More About Me
            </Button>
          </motion.div>

      </div>
    </section>
  )
}

