'use client'
import React, { useEffect, useState } from 'react'
import Blog, { IBlog } from '../../lib/models/Blog'

export interface Blog{
  _id: string
  title: string
  description: string
  date: Date
  location: string
  picture: string

}

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch('/api/news')
  if (!res.ok) {
    console.error('Failed to fetch news', await res.text())
    throw new Error('Failed to fetch news')
  }
  const data = await res.json()
  console.log('datta',data);
  
  return data.blogs
}

const News = () => {

  const [blogs, setBlogs] = useState<Blog[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsData = await fetchBlogs()
        setBlogs(blogsData)
      } catch (err:any) {
        setError(err.message)
      }
    }

    fetchData()

  }, [])

  if (error) {
    console.log(error);
    
    return <div>Error loading News. Please try again later.</div>
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-50">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
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
              <h2 className="text-2xl font-bold mt-2">{blog.title}</h2>
              <p className="text-gray-800 mt-2">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
