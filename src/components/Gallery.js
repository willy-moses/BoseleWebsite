'use client'

import Image from 'next/image'

export default function Gallery() {
  const galleryItems = [
    {
      src: '/images/kgotla.jpg',
      alt: 'Kgotla Meeting',
      title: 'Kgotla Meeting',
      description: 'Community discussing water project'
    },
    {
      src: '/images/youthtwo.jpeg',
      alt: 'Youth Training',
      title: 'Skills Training',
      description: 'Youth learning new skills'
    },
    {
      src: '/images/health.jpg',
      alt: 'Health Day',
      title: 'Health Screening',
      description: 'Community health initiative'
    },
    {
      src: '/images/garden.jpg',
      alt: 'Community Garden',
      title: 'Community Garden',
      description: 'Fresh vegetables for all'
    }
  ]

  return (
    <section id="gallery" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Community in Action</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}