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
    },
    {
      icon: <TvIcon />,
      title: 'UI/UX Design Development',
      description:
        'Don’t let poor design drive your users to competitors. Our dedicated UI/UX design team has the skills to design brand-strengthening interfaces that attract users. If you are looking to create a user-centric design, partner with us.',
    },
    {
      icon: <LightBulbIcon />,
      title: 'Software Consulting',
      description:
        'Need guidance? But, not sure how to proceed? We offer a free consultation service, where we understand your requirements and goals. We suggest the strategy roadmap, technology stack, and features to integrate into your software.',
    },
    {
      icon: <LightBulbIcon />,
      title: 'Enterprise Software Development',
      description:
        'Get custom enterprise software that streamlines your business operations and ensures scalability. We build software solutions like ERP, SCM, CRM, or CMS that meet your organization’s specific requirements.',
    },
    {
      icon: <LightBulbIcon />,
      title: 'Mobile App Development',
      description:
        'Whether you want to build an app for Android, iOS, or cross-platform, we ensure your app is user-friendly, and provides value to its users. Hire our mobile app developers who have experience in developing more than 4400 mobile apps.',
    },
    {
      icon: <LightBulbIcon />,
      title: 'Web Development',
      description:
        'From eCommerce sites to informational portals, we ensure your web presence is responsive and designed to convert visitors into loyal customers. Having delivered 350+ web solutions, we assist you to build an online identity for your product.',
    },
    {
      icon: <LightBulbIcon />,
      title: 'Software Modernization',
      description:
        'Is your current software outdated? We assess your current software, identify areas of improvement, and use modern technologies and methodologies to ensure you remain competitive and efficient.',
    },
  ]
    return (
      <div className='bg-[#f6f3f3]'>
        <div className=" pt-20 pb-[50px] w-full lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] h-full max-w-full mx-auto px-4">
      <div>
        <h2 className="text-[40px] text-center font-bold leading-[50px] mb-[32px] flex justify-center items-center flex-col">
          <span className="text-[20px] font-light">
            OUR SOFTWARE DEVELOPMENT
          </span>
          Services
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {services.map((service: service, index: number) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>    
      </div>
    
  )
}
