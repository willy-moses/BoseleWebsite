import { ClipboardList, BarChart3, FileText, BookOpen, Download, Eye, FileDown, BookMarked } from 'lucide-react'

export default function Resources() {
  const resources = [
    {
      icon: ClipboardList,
      title: 'Meeting Minutes',
      description: 'Access minutes from recent kgotla meetings and committee discussions.',
      buttonText: 'Download Minutes',
      buttonIcon: Download,
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: BarChart3,
      title: 'Project Reports',
      description: 'Detailed reports on completed and ongoing community development projects.',
      buttonText: 'View Reports',
      buttonIcon: Eye,
      gradient: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: FileText,
      title: 'Application Forms',
      description: 'Forms for community assistance, project proposals, and various services.',
      buttonText: 'Get Forms',
      buttonIcon: FileDown,
      gradient: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BookOpen,
      title: 'Community Guidelines',
      description: 'Rules and guidelines for community participation and kgotla proceedings.',
      buttonText: 'Read Guidelines',
      buttonIcon: BookMarked,
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50'
    }
  ]

  return (
    <section id="resources" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Community Resources</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access important documents, reports, and guidelines to stay informed and engaged with our community initiatives.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon
            const ButtonIcon = resource.buttonIcon

            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${resource.gradient} p-8 text-center relative`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <IconComponent className="w-12 h-12 mx-auto text-white drop-shadow-lg mb-3" />
                  <h4 className="font-bold text-xl text-white">{resource.title}</h4>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{resource.description}</p>
                  <button className={`w-full bg-gradient-to-r ${resource.gradient} text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}>
                    <ButtonIcon className="w-4 h-4" />
                    {resource.buttonText}
                  </button>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${resource.gradient}`}></div>
              </div>
            )
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-500">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Need Help Finding Something?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              Can&apos;t find the resource you&apos;re looking for? Contact our community office for assistance or additional information about available services and documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                Request Document
              </button>
              <button className="border-2 border-emerald-500 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4" />
                Contact Office
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '50+', label: 'Documents Available' },
            { number: '12', label: 'Active Projects' },
            { number: '200+', label: 'Downloads This Month' },
            { number: '24/7', label: 'Online Access' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
