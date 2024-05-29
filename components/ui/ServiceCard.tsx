import Image from 'next/image'
import React from 'react'

export const ServiceCard = ({ service }: any) => {
  return (
    <div className="px-[15px] mb-[10px] w-full md:w-1/3 flex items-center justify-center">
      <div className="px-3 py-6 flex flex-col justify-center items-center rounded-lg border border-[#EAF3FF] bg-white mb-6 h-calc-100-minus-25 transition-all duration-200 ease-in-out text-black relative cursor-pointer shadow-[0px_4px_16px_rgba(0,0,0,0.06)]">
        <div className="mb-3">
          <Image src={service.icon} alt={service.title} />
        </div>
        <div className="mb-[10px] leading-7 text-[18px]"> {service.title}</div>
        <div className="text-[14px] leading-6 text-center">
          {service.description}
        </div>
      </div>
    </div>
  )
}
