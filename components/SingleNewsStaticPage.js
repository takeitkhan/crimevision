'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axiosInstance from '@/helpers/axiosInstance'
import Image from 'next/image'
import {
  handleShare,
  handleCopyLink,
  handlePrint
} from '@/helpers/commonHelper'
import { ShareIcon, PrinterIcon } from '@heroicons/react/24/solid'

export default function SingleNewsStaticPage ({ slug }) {
  const [news, setNews] = useState([]) // Use state to store news items
  const [similarNews, setSimilarNews] = useState([])
  const [loading, setLoading] = useState(true) // Add loading state
  const [error, setError] = useState(null) // Add error state

  useEffect(() => {
    axiosInstance
      .get(`/post?term_type=news&order_by=desc&slug=${slug}`)
      .then(response => {
        setNews(response.data.data) // Update state with API data
        setLoading(false) // Set loading to false when data is fetched
      })
      .catch(error => {
        setError(error) // Set error state if request fails
        setLoading(false) // Set loading to false in case of error
      })
  }, [slug])

  useEffect(() => {
    // Fetch similar news based on the first category's slug
    const fetchSimilarNews = async () => {
      if (news?.categories?.length > 0) {
        const cat_slug = news.categories[0].slug // Get the first category slug

        try {
          const response = await axiosInstance.get(
            `/posts?term_type=news&per_page=8&order_by=desc&category_slug=${cat_slug}`
          )
          console.log(response)
          setSimilarNews(response.data.data) // Update similarNews state
        } catch (error) {
          console.error('Error fetching similar news:', error)
        }
      }
    }

    if (news) {
      fetchSimilarNews() // Fetch similar news when `news` is available
    }
  }, [news])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <section className='py-10'>
      <div className='container mx-auto px-5'>
        {news ? (
          <>
            <div className='md:flex md:justify-between gap-10'>            
              <div className='basis-[70%]'>
                <Image
                  className='w-full'
                  src={news?.featured_image || '/img/logo.jpg'} // Fallback to a placeholder image if featured_image is not available
                  alt={news.name || 'Single Crime Vision News'}
                  width={600}
                  height={400}
                />
                <div className='flex flex-col md:flex-row items-center justify-between border-b-2 border-b-gray-300 mb-2 bg-blue-50 p-2'>
                  <div className='py-2'>
                    <span>ক্রাইম ভিশন</span>
                    <p>
                      প্রকাশ: {news.post_date} | {news.post_time} | আপডেট:{' '}
                      {news.update_post_date} | {news.update_post_time}
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    <button
                      onClick={handleShare}
                      className='share-button flex items-center space-x-2 bg-green-800 text-white rounded-md p-2'
                    >
                      <ShareIcon className='w-5 h-5' />
                      <span>Share News</span>
                    </button>

                    <button
                      onClick={() =>
                        handlePrint(
                          'printableDiv',
                          news.name,
                          '/img/logo.jpg',
                          window.location.href
                        )
                      }
                      className='print-button flex items-center space-x-2 bg-green-800 text-white rounded-md p-2'
                    >
                      <PrinterIcon className='w-5 h-5' />
                      <span>Print News</span>
                    </button>

                    <button
                      onClick={() => handleCopyLink(news?.slug)} // Use an anonymous function to call handleCopyLink
                      className='print-button flex items-center space-x-2 bg-green-800 text-white rounded-md p-2'
                    >
                      <PrinterIcon className='w-5 h-5' />
                      <span>Copy News Link</span>
                    </button>
                  </div>
                </div>

                <h1 className='text-4xl d-block font-medium'>{news.name}</h1>

                <div>
                  <div className='flex' id='printableDiv'>
                    <div
                      className='lg:basis-[100%] flex flex-col gap-10'
                      dangerouslySetInnerHTML={{ __html: news.description }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className='basis-[30%] lg:mt-0'>
                <div className='lg:flex lg:flex-col lg:gap-4 text-xl flex flex-col gap-5'>
                  <h3>অন্যান্য সংবাদ</h3>
                  {similarNews?.length > 0 ? (
                    similarNews.map((item, index) => (
                      <div key={index} className='flex justify-between gap-4'>
                        <div className='basis-1/3'>
                          <Image
                            className=''
                            src={item.featured_image}
                            alt={item.name}
                            width={800} // Set the width
                            height={500} // Set the height to maintain the aspect ratio
                          />
                        </div>
                        <div className='basis-2/3'>
                          <Link
                            className='inline-block'
                            href={`/news/${item.slug}`}
                          >
                            <h2 className='basis-1/2 hover:text-yellow-600 w-fit'>
                              {item.name.slice(0, 55)}...
                            </h2>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No similar news available</p>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  )
}
