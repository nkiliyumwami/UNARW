'use client'

import { useState } from 'react'

const EmailSubscriptionPopup = ({ option }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleOpenPopup = () => {
    setIsOpen(true)
  }

  const handleClosePopup = () => {
    setIsOpen(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Perform email subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
    handleClosePopup()
  }

  return (
    <div>
      {/* <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        
      >
        Subscribe
      </button> */}
      <a
        href={option}
        onClick={handleOpenPopup}
        className="text-indigo-600 hover:text-indigo-500 font-medium"
      >
        Learn More
      </a>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gray-900 opacity-75"
            onClick={handleClosePopup}
          ></div>
          <div className="bg-white rounded-lg p-8 z-10">
            <h2 className="text-2xl font-bold mb-4 items-center flex justify-center">
              Subscribe to Our Newsletter
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="flex justify-center capitalize mb-3 px-2 ">
                  Stay informed, by subscribing to our newsletter.
                </div>
                {/* <label htmlFor="email" className="block mb-2">
                  Email:
                </label> */}
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between w-full">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmailSubscriptionPopup
