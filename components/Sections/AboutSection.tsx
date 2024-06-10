import Image from 'next/image'
import React from 'react'
import WFUNA from '../../public/wfna-logo.png'
import WFUNANew from '../../public/wfuna_new.jpg'
import SDGs from '../../public/SDGs.png'
import VisionMission from './VisionMission'

export const AboutSection = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="flex-shrink-0 flex-grow-0 w-5/12 px-3">
            <div className="flex">
              <Image
                src={WFUNANew.src}
                width={400}
                height={50}
                alt="UNA-RWANDA"
                className="w-full"
              />
              {/* <Image
                src={UNARW.src}
                width={100}
                height={80}
                alt="UNA-RWANDA"
                className="w-full"
              /> */}
            </div>
            <Image
              src={SDGs.src}
              width={400}
              height={80}
              alt="UNA-RWANDA"
              className="w-full"
            />
          </div>
          <div className="flex-shrink-0 flex-grow-0 w-7/12 px-3">
            <div className="pl-[30px]">
              {/* <span className="uppercase mb-2 text-[#1273eb] leading-7 ">About us</span> */}
              <h2 className="mb-4 tracking-wide text-3xl font-bold">
                Who We are
              </h2>

              {/* <h4 className="text-[22px] mb-2 font-semibold">Our History</h4> */}
              <p className="leading-7 text-[15px] text-[#646464]">
                The United Nations Association Rwanda (UNA-RW) is dedicated to
                transformative change, focusing on achieving the Sustainable
                Development Goals (SDGs), with an emphasis on eradicating
                poverty, fostering peace, addressing climate change, and
                protecting the environment. They promote diversity, equity, and
                inclusion, striving for a world where everyone thrives and
                contributes to a brighter future. UNA-RW offers programs in
                knowledge dissemination, human rights promotion, and peace and
                conflict resolution. They are part of a global network of UNAs,
                coordinated by the World Federation of United Nations
                Associations (WFUNA), active in over 100 countries. Join them in
                building a more inclusive and prosperous world for current and
                future generations.
              </p>
            </div>
          </div>
        </div>
        <VisionMission />
      </div>
    </div>
  )
}
