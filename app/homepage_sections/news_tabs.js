'use client'
import { useState, useEffect } from 'react'
import axiosInstance from '@/helpers/axiosInstance'
import Link from 'next/link'
import truncate from '@/helpers/truncate'
import Image from 'next/image'
import SmallCardWithImage from './SmallCardWithImage'

export default function NewsTabs () {
  const [activeTab, setActiveTab] = useState('latest') // Default tab
  const [newsData, setNewsData] = useState([]) // Store news data
  const [loading, setLoading] = useState(false) // Loading state
  const [error, setError] = useState(null) // Error state

  useEffect(() => {
    setLoading(true)
    setError(null)

    let query =
      activeTab === 'latest'
        ? '/posts?term_type=news&per_page=5&order_by=id:desc'
        : '/posts?term_type=news&per_page=5&order_by=visitor:desc'

    axiosInstance
      .get(query)
      .then(response => {
        setNewsData(response?.data?.data || [])
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [activeTab]) // Refetch when activeTab changes

  return (
    <div className=' w-full max-w-3xl mx-auto'>
      <div className='flex border-b border-b-green-800'>
        <button
          className={`px-4 text-lg font-semibold focus:outline-none ${
            activeTab === 'latest'
              ? 'py-2'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('latest')}
        >
          সর্বশেষ সংবাদ
        </button>
        {/* <button
          className={`px-4 font-semibold focus:outline-none ${
            activeTab === 'most-read'
              ? 'bg-green-800 text-white py-2'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('most-read')}
        >
          সর্বাধিক পঠিত
        </button> */}
      </div>

      <div className='mt-4 w-full'>
        {loading ? (
          <p className='text-gray-500 text-center'>Loading...</p>
        ) : error ? (
          <p className='text-red-500 text-center'>Error: {error.message}</p>
        ) : newsData.length > 0 ? (
          newsData.map((item, idx) => (
            <SmallCardWithImage news={item} idx={idx}/>
            // <div key={index} className='flex gap-4 mb-4'>
            //   <div className='w-[150px] h-[100px] flex-shrink-0 overflow-hidden'>
            //     <Link href={`/news/${item.slug}`}>
            //       <Image
            //         src={item.featured_image}
            //         alt={item.name}
            //         width={150}
            //         height={100}
            //         className='w-full h-full object-cover'
            //         unoptimized
            //       />
            //     </Link>
            //   </div>
            //   <div className='w-2/3'>
            //     <h2 className='text-md md:text-lg font-bold'>
            //       <Link
            //         href={`/news/${item.slug}`}
            //         className='hover:text-blue-500'
            //       >
            //         {item.name}
            //       </Link>
            //     </h2>
            //   </div>
            // </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>No news available</p>
        )}
      </div>
    </div>
  )
}
