'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/unarwanda16X16.png'
import unLogo from '../../public/un-logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { useRouter,usePathname } from 'next/navigation'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useRouter()
  const pathname = usePathname()
  const isActive = (href: string) => {
    return pathname === href
  }

    const toggleMenu = () => {      
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
        isScrolled
          ? 'bg-white shadow-md text-black'
          : 'bg-transparent text-white'
      }`}
    >
    
      <div className=" mx-auto py-2 px-3 md:px-24 flex items-center justify-between">
        <div className="flex items-center">
          <Link className="flex-shrink-0" href="/">
            <Image
              width={130}
              height={50}
              className={`md:w-[160px] w-[80px]`}
              src={logo}
              alt="UNA Rwanda"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 flex-grow justify-center items-center ">
          <a
            href="/"
            className={`hover:text-[#4894DF] px-2 font-semibold ${
              isActive('/') ? 'text-[#4894DF]' : ''
            }`}
          >
            Home
          </a>
          <a
            href="/about-us"
            className={`hover:text-[#4894DF] px-2 font-semibold ${
              isActive('/about-us') ? 'text-[#4894DF]' : ''
            }`}
          >
            About Us
          </a>
          <a
            href="/our-programs"
            className={`hover:text-[#4894DF] px-2 font-semibold ${
              isActive('/our-programs') ? 'text-[#4894DF]' : ''
            }`}
          >
            Our Programs
          </a>
          <a
            href="/our-team"
            className={`hover:text-[#4894DF] px-2 font-semibold ${
              isActive('/our-team') ? 'text-[#4894DF]' : ''
            }`}
          >
            Our Team
          </a>
          <a
            href="get-involved"
            className={`hover:text-[#4894DF] px-2 font-semibold ${
              isActive('/get-involved') ? 'text-[#4894DF]' : ''
            }`}
          >
            Get Involved
          </a>
          <a
            href="/"
            className={`hover:text-[#4894DF] px-2 font-semibold ${
              isActive('') ? 'text-[#4894DF]' : ''
            }`}
          >
            contact us
          </a>
          <a
            href="/"
            className={`hover:text-[#4894DF] px-2 font-semibold ${
              isActive('') ? 'text-[#4894DF]' : ''
            }`}
          >
            Donate
          </a>
        </div>
        <div className="md:hidden flex items-center z-20">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon
                className={`h-10 ${isScrolled ? 'text-black' : 'text-white'}`}
              />
            ) : (
              <Bars3Icon
                className={`h-10 ${isScrolled ? 'text-black' : 'text-white'}`}
              />
            )}
          </button>
        </div>
        <div className="flex items-center">
          <Link className="flex-shrink-0" href="/">
            <Image
              width={130}
              height={50}
              className={`md:w-[160px] w-[80px]`}
              src={unLogo}
              alt="UNA Rwanda"
            />
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white text-black">
          <a
            href="/"
            className={`block px-4 py-2 hover:text-[#4894DF] font-semibold ${
              isActive('/') ? 'text-[#4894DF]' : ''
            }`}
          >
            Home
          </a>
          <a
            href="/about-us"
            className={`block px-4 py-2 hover:text-[#4894DF] font-semibold ${
              isActive('/about-us') ? 'text-[#4894DF]' : ''
            }`}
          >
            About Us
          </a>
          <a
            href="/our-programs"
            className={`block px-4 py-2 hover:text-[#4894DF] font-semibold ${
              isActive('/our-programs') ? 'text-[#4894DF]' : ''
            }`}
          >
            Our Programs
          </a>
          <a
            href="/our-team"
            className={`block px-4 py-2 hover:text-[#4894DF] font-semibold ${
              isActive('/our-team') ? 'text-[#4894DF]' : ''
            }`}
          >
            Our Team
          </a>
          <a
            href="/get-involved"
            className={`block px-4 py-2 hover:text-[#4894DF] font-semibold ${
              isActive('/get-involved') ? 'text-[#4894DF]' : ''
            }`}
          >
            Get Involved
          </a>
          <button
            onClick={() => {
              navigate.push('/')
            }}
            className="block w-full text-left px-4 py-2 bg-gradient-to-r from-purple-400 to-[#4894DF] text-white rounded-md"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
