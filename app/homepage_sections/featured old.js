'use client'
import { useEffect, useState } from 'react'
import axiosInstance from '@/helpers/axiosInstance'
import Link from 'next/link'
import truncate from '@/helpers/truncate'
import Image from 'next/image'

export default function LeadNews () {
  const [featuredNews, setFeaturedNews] = useState([]) // Use state to store featured news
  const [loading, setLoading] = useState(true) // Add loading state
  const [error, setError] = useState(null) // Add error state

  useEffect(() => {
    axiosInstance
      .get('/posts?term_type=news&per_page=10&order_by=id:desc&is_featured=Yes')
      .then(response => {
        console.log(response?.data)
        setFeaturedNews(response?.data?.data || []) // Ensure it's always an array
        setLoading(false) // Set loading to false when data is fetched
      })
      .catch(error => {
        setError(error) // Set error state if request fails
        setLoading(false) // Set loading to false in case of error
      })
  }, [])

  if (loading) {
    return (
      <section className='homeBlock pt-[50px] pb-[80px] px-5'>
        <div className='container mx-auto'></div>
      </section>
    )
  }

  if (error) {
    return <p className='text-red-500'>Error: {error.message}</p> // Display error message if there is an error
  }

  return (
    <div className='order-2 grid grid-cols-1 lg:col-span-2 gap-6 items-center'>
      {featuredNews.length > 0 ? (
        featuredNews.map((item, index) => (
          <div key={index}>
            <div className='flex flex-col lg:flex-col gap-6 w-full'>
              <div className='w-full lg:w-full'>
                <Link href={`/news/${item.slug}`}>
                  <Image
                    src={item.featured_image} // Path relative to the public directory
                    alt={item.name}
                    width={800}
                    height={450}
                    className='object-cover w-full h-auto'
                    unoptimized // Optional: for testing
                  />
                </Link>
              </div>
              <div className='w-full lg:w-full items-start'>
                <h2 className='text-2xl font-bold'>
                  <Link
                    href={`/news/${item.slug}`}
                    className='hover:text-blue-500'
                  >
                    {item.name}
                  </Link>
                </h2>
                <p className='text-gray-600 mt-2'>
                  <Link href={`/news/${item.slug}`} className=''>
                    {truncate(item.description, 240)}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-500'>No news available</p>
      )}
    </div>
  )
}
