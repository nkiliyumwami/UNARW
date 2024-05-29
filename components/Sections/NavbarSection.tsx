import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/unarwanda16X16.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
      console.log('Heyyy');
      
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-20 transition-colors duration-300 pt-[15px] ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-2 px-[30px] flex items-center justify-between">
        <div className="flex items-center">
          <Link className="flex-shrink-0" href="/">
            <Image
              width={150}
              height={50}
              className={`md:w-[150px] w-[80px]`}
              src={logo}
              alt="UNA Rwanda"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 flex-grow justify-end items-center text-white">
          <a href="/" className=" hover:text-[#4894DF]">
            Home
          </a>
          <a href="/" className=" hover:text-[#4894DF]">
            About Us
          </a>
          <a href="#" className=" hover:text-[#4894DF]">
            Services
          </a>
          <a href="#" className=" hover:text-[#4894DF]">
            Contact Us
          </a>
          <button className="bg-gradient-to-r from-purple-400 to-[#4894DF] text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
        <div className="md:hidden flex items-center z-20">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-10 text-white" />
            ) : (
              <Bars3Icon className="h-10 text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="#" className="block px-4 py-2  hover:text-[#4894DF]">
            Home
          </a>
          <a href="#" className="block px-4 py-2  hover:text-[#4894DF]">
            About Us
          </a>
          <a href="#" className="block px-4 py-2  hover:text-[#4894DF]">
            Services
          </a>
          <a href="#" className="block px-4 py-2  hover:text-[#4894DF]">
            Contact Us
          </a>
          <button className="block w-full text-left px-4 py-2 bg-gradient-to-r from-purple-400 to-[#4894DF] text-white rounded-md">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
