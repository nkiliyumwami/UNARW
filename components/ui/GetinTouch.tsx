import { PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const GetInTouch = () => {
  return (
    <div className="bg-[#f6f3f3] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-10 space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center flex-1 border px-3 pt-3 pb-5 bg-white">
            <div className="mb-2 flex justify-center ">
              <FiMail className="h-10 w-10 rounded-full hover:bg-[#4894df8c] p-2" />
            </div>
            <h3 className="text-lg font-medium">Mail Here</h3>
            <div className="flex flex-col">
              <a
                href={`mailto:${'clarisse@unarwanda.org'}`}
                className="text-gray-500 hover:text-[#4894DF]"
              >
                Clarisse Ingabire
              </a>
              <a
                href={`mailto:${'clarisse@unarwanda.org'}`}
                className="text-gray-500 hover:text-[#4894DF]"
              >
                Jane Kabera
              </a>
            </div>
          </div>

          <div className="text-center flex-1 border p-3 bg-white">
            <div className="mb-2 flex justify-center">
              <HiOutlineLocationMarker className="h-10 w-10 rounded-full hover:bg-[#4894df8c] p-2" />
            </div>
            <h3 className="text-lg font-medium">Visit Here</h3>
            <p className="text-gray-500">KN 72 Street</p>
            <p className="text-gray-500">Kigali, RWANDA</p>
          </div>

          <div className="text-center flex-1 border p-3 bg-white">
            <div className="mb-2 flex justify-center">
              <PhoneIcon className="h-10 w-10 rounded-full hover:bg-[#4894df8c] p-2" />
            </div>
            <h3 className="text-lg font-medium fl">Call Us</h3>
            <div className="flex flex-col">
              <a
                href="tel:+250 788 832 640"
                className="text-gray-500 hover:text-[#4894DF]"
              >
                +250 788 832 640
              </a>
              <a
                href="tel:+250 788 832 640"
                className="text-gray-500 hover:text-[#4894DF]"
              >
                +250 788 832 640
              </a>
            </div>
          </div>
        </div>
        <div className="p-8 border rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Get In Touch</h2>
          <form action="#" method="POST" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
              <div className="flex-1">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="Name"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
              <div className="flex-1">
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="Phone number"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="w-full border-gray-300 rounded-md shadow-sm p-3"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#4894DF] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#4a80b6]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
