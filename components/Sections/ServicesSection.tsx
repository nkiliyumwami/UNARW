import React from 'react'
import serviceIcon from '../../public/Web-Development.svg'
import { LightBulbIcon, TvIcon } from '@heroicons/react/16/solid'
import { ServiceCard } from '../ui/ServiceCard'

export type service = {
  icon: any
  title: string
  description: string
}

export const ServicesSection = () => {
  const services = [
    {
      icon: <LightBulbIcon />,
      title: 'Digital Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      bgColor: 'bg-yellow-500',
    },
    {
      icon: <TvIcon />,
      title: 'UI/UX Design Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      bgColor: 'bg-purple-500',
    },
    {
      icon: <LightBulbIcon />,
      title: 'Business Consultancy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      bgColor: 'bg-teal-500',
    },
    {
      icon: <LightBulbIcon />,
      title: 'Business Consultancy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      bgColor: 'bg-teal-500',
    },
    {
      icon: <TvIcon />,
      title: 'UI/UX Design Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      bgColor: 'bg-purple-500',
    },
    {
      icon: <LightBulbIcon />,
      title: 'Digital Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      bgColor: 'bg-yellow-500',
    },
  ]
    return (
      <div className="py-12 bg-[#f6f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto -mt-[5px] mb-[60px] max-w-[720px]">
            <h2 className=" font-bold tracking-wide text-[40px] mb-[15px]">
              Our Services
            </h2>
            <p className="my-0 text-[15px] text-[#646464] leading-7 mx-auto  max-w-[650px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}
