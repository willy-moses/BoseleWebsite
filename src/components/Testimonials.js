'use client'
import { useState, useEffect } from 'react'
import { Quote, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      text: "Thanks to the committee's efforts, our village now has reliable water access. My family no longer has to walk kilometers for clean water.",
      author: "Mma Kelebogile Phiri",
      role: "Community Member",
      location: "Mochudi Village",
      rating: 5,
      category: "Water Access"
    },
    {
      text: "The youth training programs have given our young people hope and skills. My son is now employed thanks to the carpentry course.",
      author: "Rra Tshepo Modise",
      role: "Parent & Elder",
      location: "Gabane Village",
      rating: 5,
      category: "Youth Development"
    },
    {
      text: "The committee listens to our concerns and takes action. They truly represent the voice of our community.",
      author: "Mma Neo Gaotlhobogwe",
      role: "Village Representative",
      location: "Tlokweng Village",
      rating: 5,
      category: "Community Leadership"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [testimonials.length, isAutoPlaying])

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-400 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4 fill-current" />
            Community Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Voices from Our
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from community members whose lives have been transformed through our collective efforts
          </p>
        </div>

        {/* Main testimonial card */}
        <div className="max-w-5xl mx-auto relative">
          {/* Navigation arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="relative p-8 md:p-12">
              {/* Quote icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-20 h-20 text-blue-500" />
              </div>

              <div className="relative z-10">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-in-out ${
                      index === currentTestimonial
                        ? 'opacity-100 visible transform translate-y-0'
                        : 'opacity-0 invisible absolute inset-0 transform translate-y-4'
                    }`}
                  >
                    {/* Category badge */}
                    <div className="flex justify-center mb-6">
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
                        {testimonial.category}
                      </span>
                    </div>

                    {/* Star rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 text-center mb-8 leading-relaxed max-w-4xl mx-auto">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author info */}
                    <div className="text-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
                      <cite className="not-italic">
                        <div className="text-xl font-bold text-gray-900 mb-1">
                          {testimonial.author}
                        </div>
                        <div className="text-blue-600 font-medium mb-1">
                          {testimonial.role}
                        </div>
                        <div className="text-gray-500">
                          {testimonial.location}
                        </div>
                      </cite>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`relative transition-all duration-300 ${
                  index === currentTestimonial ? 'scale-125' : 'hover:scale-110'
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}>
                  {index === currentTestimonial && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6 max-w-xs mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-center mt-2 text-sm text-gray-500">
              {currentTestimonial + 1} of {testimonials.length}
            </div>
          </div>
        </div>

        {/* Bottom call-to-action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <Heart className="w-5 h-5 fill-current" />
            <span className="font-semibold">Share Your Story</span>
          </div>
        </div>
      </div>
    </section>
  )
}
