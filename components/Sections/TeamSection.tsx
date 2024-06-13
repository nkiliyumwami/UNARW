import { PhoneIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Jacky from '../../public/Jacky.jpg'
import Clara from '../../public/teamClarisse.jpg'
import Jane from '../../public/jane2.jpeg'
import { MdMail } from 'react-icons/md'
import { LuLinkedin } from 'react-icons/lu'

const leaderShipTeam = [
  {
    name: 'Clarisse Ingabire ',
    title: 'Executive Secretary	',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'mark@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Jane Kabera',
    title: 'Director of Programs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Jane,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  }
]

const boardMembers = [
  {
    name: 'Jackline Kamanzi',
    title: 'Founder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Jacky,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Celine Mukamurenzi',
    title: 'President',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: '',
    phone: '+123 456 7890',
  },
  {
    name: 'Potel Jossam',
    title: 'Vice President',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Jane,
    email: '',
    phone: '+123 456 7890',
  },
  {
    name: 'Marie Belise Isingizwe',
    title: 'Treasurer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Ngoga',
    title: 'Arbitration Committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Jane  Uwera',
    title: 'Arbitration Committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Rose Mutesi ',
    title: 'Arbitration Committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Assiimwe Murebwayire ',
    title: 'Gender Coordinator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Elloy KAZIGABA',
    title: 'Youth Coordinator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Sylvain',
    title: 'Audit committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Peter KATANISA',
    title: 'Audit committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
  {
    name: 'Jeanine Uwimana',
    title: 'Audit committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'emily@example.com',
    phone: '+123 456 7890',
  },
]

const OurTeam = () => {
  return (
    <section className="py-12 bg-[#f6f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl tracking-wide text-center mb-4 font-bold">
          Our Team
        </h2>
        <h1 className="text-2xl tracking-wide mb-4 font-semibold">
          Leadership Team
        </h1>
        <div className="flex flex-wrap -mx-4 mt-10">
          {leaderShipTeam.map((member, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 transition-transform duration-300 transform hover:scale-110"
            >
              <div className="bg-white relative p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={235}
                    height={235}
                    className="rounded-full mx-auto h-[230px] object-cover object-left-top"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">{member.title}</p>
                {/* <p className="text-gray-500 text-center mt-2">
                  {member.description}
                </p> */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <MdMail className="h-6 w-6" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <PhoneIcon className="h-6 w-6" />
                  </a>
                  <a href={`#`} className="text-gray-500 hover:text-gray-700">
                    <LuLinkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-2xl tracking-wide mb-4 font-semibold">Board Members</h1>
        <div className="flex flex-wrap -mx-4 mt-10">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 transition-transform duration-300 transform hover:scale-110"
            >
              <div className="bg-white relative p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={235}
                    height={235}
                    className="rounded-full mx-auto h-[230px] object-cover object-left-top"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">{member.title}</p>
                {/* <p className="text-gray-500 text-center mt-2">
                  {member.description}
                </p> */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <MdMail className="h-6 w-6" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <PhoneIcon className="h-6 w-6" />
                  </a>
                  <a href={`#`} className="text-gray-500 hover:text-gray-700">
                    <LuLinkedin className="h-6 w-6" />
                  </a>
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
