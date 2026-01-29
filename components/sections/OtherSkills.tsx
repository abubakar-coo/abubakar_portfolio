'use client'

import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

interface Skill {
  name: string
  level: number
  icon?: string
}

const skillCategories = [
  {
    title: 'Web Development',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Node.js', level: 85 },
    ],
  },
  {
    title: 'Design Tools',
    skills: [
      { name: 'Adobe Photoshop', level: 90 },
      { name: 'Adobe Illustrator', level: 88 },
      { name: 'Figma', level: 92 },
      { name: 'Adobe XD', level: 85 },
    ],
  },
  {
    title: 'Additional Skills',
    skills: [
      { name: 'UI/UX Design', level: 90 },
      { name: 'Motion Graphics', level: 85 },
      { name: '3D Modeling', level: 75 },
      { name: 'Video Editing', level: 80 },
    ],
  },
]

export default function OtherSkills() {
  return (
    <section id="other-skills" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            Other Skills & Expertise
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 sm:mb-16"></div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <p className="text-center text-gray-400 text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
            Beyond web development and graphic design, I've developed expertise in various
            tools and technologies that enhance my creative capabilities.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <RevealOnScroll
              key={category.title}
              delay={0.2 * categoryIndex}
              direction="up"
            >
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-indigo-300">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Additional Info Section */}
        <RevealOnScroll delay={0.6} direction="up">
          <div className="mt-12 sm:mt-16 glass rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-300">
              Always Learning, Always Creating
            </h3>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              The digital landscape is constantly evolving, and so am I. I'm always exploring
              new tools, techniques, and technologies to expand my skill set and deliver
              cutting-edge solutions. Whether it's mastering a new framework or experimenting
              with emerging design trends, I'm committed to staying at the forefront of
              creative technology.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

