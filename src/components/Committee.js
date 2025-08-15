// src/components/Committee.js
export default function Committee() {
  const members = [
    {
      name: 'Mr. Kgomotso Tshosa',
      position: 'Chairperson',
      initials: 'KT',
      description: 'Leading committee meetings and community initiatives. Experienced community leader with over 10 years of service.'
    },
    {
      name: 'Mrs. Gorata Sekwati',
      position: 'Vice Chairperson',
      initials: 'GS',
      description: 'Supporting leadership and project coordination. Active in women\'s development programs and youth mentorship.'
    },
    {
      name: 'Mr. Thabo Mogapi',
      position: 'Secretary',
      initials: 'TM',
      description: 'Managing records and correspondence. Handles all committee documentation and communication with government officials.'
    },
    {
      name: 'Mrs. Mma-Kgomo Sekai',
      position: 'Treasurer',
      initials: 'MS',
      description: 'Financial management and budget oversight. Ensures transparent handling of committee funds and project finances.'
    },
    {
      name: 'Mr. Lesego Motlhaping',
      position: 'Development Projects Coordinator',
      initials: 'LM',
      description: 'Specializes in infrastructure and water projects coordination. Liaisons with contractors and government agencies.'
    },
    {
      name: 'Mrs. Boitumelo Gaolathe',
      position: 'Community Outreach Coordinator',
      initials: 'BG',
      description: 'Focuses on community engagement and social programs. Organizes health campaigns and educational initiatives.'
    }
  ]

  return (
    <section id="committee" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12  to-green-700">Committee Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Avatar with Initials */}
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Contact Info */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Contact the Committee</h3>
          <p className="text-gray-600 mb-4">
            For community matters, project inquiries, or to join our initiatives, reach out to any committee member.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              committee@community.bw
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Kgotla Grounds, Every Saturday 10 AM
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}