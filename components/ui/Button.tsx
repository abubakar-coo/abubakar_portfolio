'use client'

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
  const baseClasses = 'px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 relative'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white glow-button hover:from-blue-600 hover:to-cyan-600',
    secondary: 'bg-blue-500/20 text-blue-300 border border-blue-500/50 glow-button hover:bg-blue-500/30 hover:border-blue-500/70',
    outline: 'bg-transparent text-white border-2 border-white/20 hover:border-white/40',
  }

  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )

  if (href) {
    return (
      <a
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
      >
        {children}
      </a>
    )
  }

  return buttonContent
}

