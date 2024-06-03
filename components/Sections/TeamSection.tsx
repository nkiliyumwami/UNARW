import { PhoneIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { FaMailchimp } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'


const teamMembers = [
  {
    name: 'John Doe',
    title: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/path-to-image.jpg',
    email: 'john@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Jane Smith',
    title: 'CTO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/path-to-image.jpg',
    email: 'jane@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Mark Johnson',
    title: 'CFO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/path-to-image.jpg',
    email: 'mark@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Emily Davis',
    title: 'COO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/path-to-image.jpg',
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
]

const OurTeam = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Team
        </h2>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">{member.title}</p>
                <p className="text-gray-500 text-center mt-2">
                  {member.description}
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaMailchimp className="h-6 w-6" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <PhoneIcon className="h-6 w-6" />
                  </a>
                  <HiLocationMarker className="h-6 w-6 text-gray-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
