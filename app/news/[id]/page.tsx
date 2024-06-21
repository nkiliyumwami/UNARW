'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Blog } from '../page'

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share'
import { usePathname } from 'next/navigation'

const fetchBlogById = async (id: string): Promise<Blog> => {
  const res = await fetch(`/api/news/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch blog')
  }
  const data = await res.json()
  return data.blog
}

const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch('/api/news')
  if (!res.ok) {
    throw new Error('Failed to fetch blogs')
  }
  const data = await res.json()
  return data.blogs
}

const Page = ({ params }: { params: { id: string } }) => {
const router = useRouter()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (params.id) {
      fetchBlogById(params.id as string)
        .then((data) => setBlog(data))
        .catch((err) => setError(err.message))
    }
  }, [params.id])

  useEffect(() => {
    fetchBlogs()
      .then((data) => setBlogs(data))
      .catch((err) => setError(err.message))
  }, [])

  if (error) {
    return <div>Error loading news. Please try again later.</div>
  }

  if (!blog) {
    return <div>Loading...</div>
  }

  const handleNavigation = (direction: 'prev' | 'next') => {
    const currentIndex = blogs.findIndex((b) => b._id === params.id)
    if (direction === 'prev' && currentIndex > 0) {
      router.push(`/news/${blogs[currentIndex - 1]._id}`)
    }
    if (direction === 'next' && currentIndex < blogs.length - 1) {
      router.push(`/news/${blogs[currentIndex + 1]._id}`)
    }
  }

  return (
    <div className="container mx-auto px-4 pt-36">
      <img
        src={blog.picture}
        alt={blog.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-600 text-sm">
          {new Date(blog.date).toLocaleDateString()}
        </p>
        <p className="text-gray-600 text-sm">{blog.location}</p>
        <h2 className="text-4xl font-bold mt-2">{blog.title}</h2>
        <p className="text-gray-800 mt-2">{blog.description}</p>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => handleNavigation('prev')}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleNavigation('next')}
          >
            Next
          </button>
        </div>
        <div className="mt-4">
          <FacebookShareButton
            url={`https://yourwebsite.com/news/${blog._id}`}
            // quote={blog.title}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://yourwebsite.com/news/${blog._id}`}
            title={blog.title}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}

export default Page
