'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 relative overflow-hidden'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white glow-button',
    secondary: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/50 glow-button',
    outline: 'bg-transparent text-white border-2 border-white/20 hover:border-white/40',
  }

  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault()
            const element = document.querySelector(href)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }
          onClick?.()
        }}
        className={`${baseClasses} ${variantClasses[variant]} ${className} inline-block`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    )
  }

  return buttonContent
}

