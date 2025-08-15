'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Play, Pause, ArrowDown } from 'lucide-react'

const slides = [
  {
    image: '/images/backimg.jpg',
    title: 'Welcome to Bosele Kgotla',
    subtitle: 'Unity • Progress • Community',
    description: 'Working together to build a stronger, more vibrant community in the heart of Gantsi District.',
    buttonText: 'Discover Our Mission',
    buttonLink: '#about',
    gradient: 'from-emerald-900/80 via-green-800/70 to-teal-700/80'
  },
  {
    image: '/images/img1.jpg',
    title: 'Empowering Our Youth',
    subtitle: 'Skills • Education • Opportunity',
    description: 'Providing comprehensive programs and meaningful opportunities for the next generation to thrive.',
    buttonText: 'Join Our Programs',
    buttonLink: '#activities',
    gradient: 'from-blue-900/80 via-indigo-800/70 to-purple-700/80'
  },
  {
    image: '/images/img2.jpg',
    title: 'Preserving Our Heritage',
    subtitle: 'Culture • Tradition • Legacy',
    description: 'Keeping our rich traditions and cultural heritage alive through community events and education.',
    buttonText: 'Explore Our Culture',
    buttonLink: '#gallery',
    gradient: 'from-orange-900/80 via-amber-800/70 to-yellow-700/80'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover transition-transform duration-[6000ms] ease-out"
            style={{
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }}
            priority={index === 0}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
        </div>
      ))}

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
      >
        {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div
          className={`text-center text-white max-w-5xl mx-auto transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium tracking-wide">
              {slides[currentSlide].subtitle}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block transform transition-all duration-700 delay-300">
              {slides[currentSlide].title}
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-90 transform transition-all duration-700 delay-500">
            {slides[currentSlide].description}
          </p>

          <div className="transform transition-all duration-700 delay-700">
            <Link
              href={slides[currentSlide].buttonLink}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:from-orange-400 hover:to-red-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              {slides[currentSlide].buttonText}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentSlide ? 'scale-125' : 'hover:scale-110'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-orange-400 shadow-lg shadow-orange-400/50'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 mx-auto w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 mb-6">
        <div className="flex flex-col items-center text-white/80 animate-bounce">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 left-6 z-30 text-white/80 font-medium">
        <span className="text-lg">{currentSlide + 1}</span>
        <span className="text-sm mx-1">/</span>
        <span className="text-sm">{slides.length}</span>
      </div>
    </section>
  )
}
