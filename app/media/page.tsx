'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import bgImage from '../../public/unHome.png'
import Link from 'next/link'

interface ImageData {
  public_id: string
  format: string
  id: string
}

export default function Media() {
  const [images, setImages] = useState<ImageData[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('/api/media')

      const data = await response.json()
      setImages(data)
      setLoading(false)
    }
    fetchImages()
  }, [])

  const openPopup = (image: ImageData) => {
    setSelectedImage(image)
    console.log(selectedImage);
    
  }

  const closePopup = () => {
    setSelectedImage(null)
  }

  return (
    <div>
      <div
        className="py-32 h-[256px] bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      </div>
      {loading ? (
        <div className=" min-h-screen p-32 mx-auto w-full">
          <svg
            className="animate-spin w-full flex items-center justify-center  text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4335 4335"
            width="100"
            height="100"
          >
            <path
              fill="#008DD2"
              d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
            />
          </svg>
        </div>
      ) : (
        <div className="min-h-scree flex flex-col items-center justify-center max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="text-center mx-auto -mt-[5px] mb-[60px] max-w-[720px]">
            <h2 className="font-bold tracking-wide mb-4  text-3xl ">Gallery</h2>
          </div>
          <div className="flex flex-wrap -m-2">
            {images.map(({ public_id, format, id }, index) => (
              <motion.div
                key={index}
                className="p-2 w-1/3"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                viewport={{}}
              >
                <Link
                  href={`/media/?photoId=${id}`}
                  // href={`/news/${event._id}`}
                  className="relative transition-all duration-300 ease no-underline bg-transparent"
                >
                  <div
                    className="overlay"
                    onClick={() => openPopup({ public_id, format, id })}
                  ></div>
                  <Image
                    alt={`Image ${index + 1}`}
                    width={720}
                    height={300}
                    className="w-full h-[300px] mb-5 align-middle object-cover transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                    style={{ transform: 'translate3d(0, 0, 0)' }}
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closePopup}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              alt={`Popup Image`}
              width={960}
              height={600}
              className="object-cover rounded-lg"
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_960/${selectedImage.public_id}.${selectedImage.format}`}
            />
          </div>
        </div>
      )}
    </div>
  )
}
