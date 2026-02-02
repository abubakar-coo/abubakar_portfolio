'use client'

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
      {/* Background Image - Desktop - Original Image, No Overlay */}
      <div 
        className="hidden md:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/hero-bg.jpg)',
        }}
      />

      {/* Background Image - Mobile - Original Image, No Overlay */}
      <div 
        className="md:hidden absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/hero-bg-mobile.jpg)',
        }}
      />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <RevealOnScroll delay={0.1}>
          {/* Primary Headline - Pure White, Montserrat Bold */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-white"
            style={{ 
              fontFamily: 'var(--font-montserrat)',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.8), 0 1px 10px rgba(0, 0, 0, 0.6)'
            }}
          >
            I Create Digital Experiences
          </h1>
          {/* Name - Pure White, Montserrat Extra Bold */}
          <p
            className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-white"
            style={{ 
              fontFamily: 'var(--font-montserrat)',
              textShadow: '0 2px 15px rgba(0, 0, 0, 0.7), 0 1px 8px rgba(0, 0, 0, 0.5)'
            }}
          >
            Abubakar Arif
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          {/* Secondary Text - Light Grey, Inter Regular */}
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#CCCCCC] font-normal mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            style={{ 
              fontFamily: 'var(--font-inter)',
              textShadow: '0 1px 10px rgba(0, 0, 0, 0.7), 0 1px 5px rgba(0, 0, 0, 0.5)'
            }}
          >
            Crafting premium websites and stunning graphic designs with research-backed
            methodology and attention to detail.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
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
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}

