import { ExclamationCircleIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <ExclamationCircleIcon className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Under Maintenance
        </h1>
        <p className="text-gray-600 mb-4">
          We&apos;re currently performing some scheduled maintenance.
        </p>
        <p className="text-gray-600 mb-4">Please check back later.</p>
        <a
          href="/"
          className="text-indigo-600 hover:text-indigo-500 font-medium"
        >
          Go back to Homepage
        </a>
      </div>
    </div>
  )
}

export default page