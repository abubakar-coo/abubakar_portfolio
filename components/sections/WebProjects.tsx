'use client'

import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { ExternalLink } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'S-Vision',
    description: 'A modern, responsive website I created with a focus on user experience and visual appeal.',
    image: 's-vision.jpg',
    tags: ['Web Development', 'Responsive Design'],
    link: 'https://www.svision.site/',
  },
  {
    id: 2,
    title: 'We Serveo',
    description: 'A professional agency website I built featuring clean design and smooth interactions.',
    image: 'we-serveo.jpg',
    tags: ['Web Development', 'Agency Site'],
    link: 'https://weserveo.com/',
  },
  {
    id: 3,
    title: 'Smart Assign',
    description: 'A functional web application I developed with intuitive interface and robust features.',
    image: 'smart-assign.jpg',
    tags: ['Web App', 'User Interface'],
    link: 'https://www.smartassign.info/',
  },
  {
    id: 4,
    title: 'SeeInc Online',
    description: 'A sleek online platform I created with modern design principles and seamless navigation.',
    image: 'seeinc-online.jpg',
    tags: ['Web Development', 'Platform'],
    link: 'http://seeinconline.com/',
  },
  {
    id: 5,
    title: 'Nicole Designs',
    description: 'A beautiful portfolio website I designed and developed to showcase creative work.',
    image: 'nicole-designs.jpg',
    tags: ['Portfolio', 'Creative Design'],
    link: 'https://nicole-designs.vercel.app/',
  },
  {
    id: 6,
    title: 'Roofer Domination',
    description: 'A lead generation website I created for a Meta Ads agency specializing in roofing leads at scale.',
    image: 'roofer-domination.jpg',
    tags: ['Web Development', 'Lead Generation'],
    link: 'https://roofer-domination.vercel.app/',
  },
]

export default function WebProjects() {
  return (
    <section id="web-projects" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-white dark:text-white light:text-gray-900 light:font-extrabold">
            My Web Projects
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 sm:mb-16"></div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-center text-gray-400 dark:text-gray-400 light:text-gray-800 light:font-medium text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
            Here are some of the websites I've created. Each project represents hours of
            research, design, and development to deliver exceptional results.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={0.1 * index} direction="up">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl overflow-hidden group cursor-pointer block transition-transform duration-200 hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden">
                  <img
                    src={`/images/web-projects/${project.image.split('/').pop()}`}
                    alt={`${project.title} - Website Screenshot`}
                    className="w-full h-full object-cover opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.opacity = '1'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-gray-500 dark:text-gray-500 light:text-gray-400 text-sm">Project Screenshot</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-indigo-500/30 text-indigo-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-indigo-500/80 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

