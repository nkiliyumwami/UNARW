import { AboutSection } from '@/components/Sections/AboutSection'
import React from 'react'
import bgImage from '../../public/about.jpg'


const AboutUs = () => {
  return (
    <div>
      <div
        className="py-32 h-[256px] bg-center bg-cover bg-no-repeat -mb-24 relative"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      </div>
      <AboutSection />
    </div>
  )
}

export default AboutUs