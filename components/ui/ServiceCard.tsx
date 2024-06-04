import Image from 'next/image'
import React from 'react'

export const ServiceCard = ({ service }: any) => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white text-center">
      <div className="flex justify-center items-center">
        <div
          className={`w-[70px] h-[70px]  flex items-center justify-center rounded-full p-2 ${service.bgColor}`}
        >
          <service.icon className=' w-7 h-7'/>
        </div>
      </div>

      <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-gray-600">{service.description}</p>
    </div>
  )
}
