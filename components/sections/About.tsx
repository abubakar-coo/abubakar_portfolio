'use client'

import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            About Me
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 sm:mb-16"></div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <RevealOnScroll delay={0.2} direction="left">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a creative developer and designer passionate about building digital
                experiences that combine aesthetic excellence with functional design.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                My approach is research-backed and detail-oriented. I believe in creating
                work that not only looks exceptional but also performs flawlessly across
                all devices and platforms.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Every project I undertake is an opportunity to push boundaries, experiment
                with new technologies, and deliver solutions that exceed expectations.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25} direction="right">
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-300">My Philosophy</h3>
                <p className="text-gray-400">
                  Design is not just about how it looks—it's about how it works, how it feels,
                  and how it impacts the user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-300">My Process</h3>
                <p className="text-gray-400">
                  Research → Design → Develop → Test → Iterate. Every step is crucial,
                  and I ensure quality at each stage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-300">My Commitment</h3>
                <p className="text-gray-400">
                  I'm committed to continuous learning and staying at the forefront of
                  design and development trends.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

