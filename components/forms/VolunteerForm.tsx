import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormValues {
  firstname: string
  lastname: string
  email: string
  address: string
  phone: string
  message: string
  type: 'membership' | 'volunteering'
}

export default function GetInvolvedForm({ isOpen, setIsOpen, type }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const handleClosePopup = () => {
    setIsOpen(false)
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('/api/get-involved', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const result = await response.json()
      console.log('Success:', result)
      // Handle success (e.g., show a success message, reset the form)
    } catch (error) {
      console.error('Error:', error)
      // Handle error (e.g., show an error message)
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gray-900 opacity-75"
            onClick={handleClosePopup}
          ></div>
          <div className="bg-white rounded-lg p-8 z-10">
            <h2 className="text-2xl font-bold mb-4 items-center flex justify-center">
              Get Involved
              {/* {type === 'volunteer' ? 'Volunteer' : 'Membership'} */}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 flex gap-4">
                <div>
                  <label htmlFor="firstname" className="block mb-2">
                    Firstname:
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    {...register('firstname', {
                      required: 'Firstname is required',
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  {errors.firstname && (
                    <p className="text-red-500">{errors.firstname.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastname" className="block mb-2">
                    Lastname:
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    {...register('lastname', {
                      required: 'Lastname is required',
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  {errors.lastname && (
                    <p className="text-red-500">{errors.lastname.message}</p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block mb-2">
                  Address:
                </label>
                <input
                  type=""
                  id="address"
                  {...register('address', { required: 'Address is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Type:</label>
                <select
                  {...register('type', { required: 'Type is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                  <option value="membership">Membership</option>
                  <option value="volunteering">Volunteering</option>
                </select>
                {errors.type && (
                  <p className="text-red-500">{errors.type.message}</p>
                )}
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
