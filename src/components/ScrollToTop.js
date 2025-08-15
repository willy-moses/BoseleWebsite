'use client'
import { useState, useEffect } from 'react'

// Chevron Up SVG Icon
const ChevronUpIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
)

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{
        background: 'linear-gradient(135deg, #2c5530, #4a7c59)',
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'linear-gradient(135deg, #1e3a21, #2c5530)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'linear-gradient(135deg, #2c5530, #4a7c59)';
      }}
      title="Scroll to top"
    >
      <ChevronUpIcon className="w-6 h-6 mx-auto" />
    </button>
  )
}