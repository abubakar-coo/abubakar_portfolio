'use client'

import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { ExternalLink, Instagram } from 'lucide-react'

interface DesignProject {
  id: number
  title: string
  description: string
  category: string
  image: string
  link: string
}

const designProjects: DesignProject[] = [
  {
    id: 1,
    title: 'We Serveo Agency',
    description: 'A complete social media portfolio I created featuring brand identity, graphics, and visual content.',
    category: 'Social Media',
    image: 'we-serveo-instagram.jpg',
    link: 'https://www.instagram.com/we_serveo/',
  },
  {
    id: 2,
    title: 'Roofer Domination',
    description: 'Graphic design and social media content I developed for a roofing company with bold, impactful visuals.',
    category: 'Social Media',
    image: 'roofer-domination.jpg',
    link: 'https://www.instagram.com/roofer_domination/',
  },
  {
    id: 3,
    title: 'Hydrogyn Official',
    description: 'Brand identity and social media graphics I designed, creating a cohesive visual presence.',
    category: 'Branding',
    image: 'hydrogyn-official.jpg',
    link: 'https://www.instagram.com/hydrogyn_official/',
  },
  {
    id: 4,
    title: 'B2H Movers',
    description: 'Social media portfolio I created featuring moving company graphics, posts, and brand visuals.',
    category: 'Social Media',
    image: 'b2h-movers.jpg',
    link: 'https://www.instagram.com/b2hmovers/',
  },
  {
    id: 5,
    title: 'Dubi Homes',
    description: 'Real estate branding and social media content I designed with elegant, professional aesthetics.',
    category: 'Real Estate',
    image: 'dubi-homes.jpg',
    link: 'https://www.instagram.com/dubi_homes/',
  },
  {
    id: 6,
    title: 'Smart Assign',
    description: 'Social media graphics and brand visuals I created for a smart assignment platform.',
    category: 'Social Media',
    image: 'smart-assign-instagram.jpg',
    link: 'https://www.instagram.com/assignsmart/',
  },
]

export default function GraphicDesign() {
  return (
    <section id="graphic-design" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 light:from-gray-50 light:via-white light:to-gray-50">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-white dark:text-white light:text-purple-900 light:font-extrabold">
            My Graphic Design Portfolio
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 sm:mb-16"></div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-center text-gray-400 dark:text-gray-400 light:text-purple-800 light:font-medium text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
            A curated collection of my graphic design work. Each piece is crafted with
            precision, creativity, and a deep understanding of visual communication.
          </p>
        </RevealOnScroll>

        {/* Gallery Grid - Larger, more visual layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {designProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={0.1 * index} direction="up">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl overflow-hidden group cursor-pointer relative block transition-transform duration-200 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-blue-500/20 overflow-hidden">
                  <img
                    src={`/images/graphic-design/${project.image.split('/').pop()}`}
                    alt={`${project.title} - Graphic Design Portfolio`}
                    className="w-full h-full object-cover opacity-100 transition-opacity duration-300 relative z-10"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  {/* Placeholder - Only visible when image fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-blue-500/20 z-0 pointer-events-none">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-purple-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-400 dark:text-gray-400 light:text-gray-500 text-sm font-medium">Design Portfolio</span>
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 text-white flex items-center gap-2">
                        {project.title}
                        <Instagram size={16} />
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Category badge - always visible */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Instagram icon on hover */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-purple-500/80 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

