// Activity Icons
const WaterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.2L7.8 6.4c-3.1 3.1-3.1 8.2 0 11.3 1.5 1.5 3.5 2.3 5.6 2.3s4.1-.8 5.6-2.3c3.1-3.1 3.1-8.2 0-11.3L12 2.2zm0 17.1c-1.4 0-2.7-.5-3.7-1.5-2-2-2-5.4 0-7.4L12 6.8l3.7 3.6c2 2 2 5.4 0 7.4-1 1-2.3 1.5-3.7 1.5z"/>
  </svg>
)

const RoadIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 12H4v-6h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h6v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v6z"/>
  </svg>
)

const BookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
  </svg>
)

const HeartIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)

const WheatIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

const ScalesIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
)

export default function Activities() {
  const activities = [
    {
      icon: WaterIcon,
      title: 'Water & Sanitation',
      description: 'Coordinating with relevant authorities to ensure clean water access and proper sanitation facilities for all community members.'
    },
    {
      icon: RoadIcon,
      title: 'Infrastructure Development',
      description: 'Advocating for and overseeing road maintenance, community center improvements, and other essential infrastructure projects.'
    },
    {
      icon: BookIcon,
      title: 'Education Support',
      description: 'Supporting local schools, organizing adult literacy programs, and promoting educational opportunities for all ages.'
    },
    {
      icon: HeartIcon,
      title: 'Health Initiatives',
      description: 'Coordinating health awareness campaigns, supporting clinic operations, and promoting community wellness programs.'
    },
    {
      icon: WheatIcon,
      title: 'Agricultural Projects',
      description: 'Supporting local farmers, promoting sustainable farming practices, and coordinating community gardening initiatives.'
    },
    {
      icon: ScalesIcon,
      title: 'Traditional Governance',
      description: 'Facilitating kgotla meetings, mediating disputes, and maintaining our traditional decision-making processes.'
    }
  ]

  return (
    <section id="activities" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2c5530' }}>Our Key Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-t-4 hover:shadow-xl transition-shadow duration-300" style={{ borderTopColor: '#4a7c59' }}>
                <div className="text-4xl mb-4 text-center" style={{ color: '#4a7c59' }}>
                  <IconComponent className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2c5530' }}>{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}