import { HeartIcon, UserIcon } from "@heroicons/react/16/solid"
import { RiMailLine } from "react-icons/ri"

const involvementOptions = [
  {
    title: 'Volunteer',
    description:
      'Join our team of volunteers and make a difference in your community.',
    icon: UserIcon,
    link: '/volunteer',
  },
  {
    title: 'Donate',
    description: 'Support our mission by making a donation.',
    icon: HeartIcon,
    link: '/donate',
  },
  {
    title: 'Subscribe',
    description: 'Stay updated by subscribing to our newsletter.',
    icon: RiMailLine,
    link: '/subscribe',
  },
]

const GetInvolvedSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-400 to-[#4894DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Get Involved
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <option.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {option.description}
              </p>
              <a
                href={option.link}
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedSection
