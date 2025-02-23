'use client'
import { useEffect, useState } from 'react'
import axiosInstance from '@/helpers/axiosInstance'
import Image from 'next/image'
import Link from 'next/link'
import truncate from '@/helpers/truncate'

function EightCats () {
  const [politicsNews, setPoliticsNews] = useState([]) // Use state to store categories
  const [nationalNews, setNationalNews] = useState([]) // Use state to store categories
  const [internationalNews, setInternationalNews] = useState([]) // Use state to store categories
  const [economyNews, setEconomyNews] = useState([]) // Use state to store categories
  const [loading, setLoading] = useState(true) // Add loading state
  const [error, setError] = useState(null) // Add error state

  useEffect(() => {
    // Set loading true before starting both requests
    setLoading(true)

    const fetchPoliticsNews = axiosInstance.get(
      '/posts?term_type=news&category_slug=politics&order_by=desc&per_page=5'
    )
    const fetchNationalNews = axiosInstance.get(
      '/posts?term_type=news&category_slug=national&order_by=desc&per_page=5'
    )
    const fetchInternationalNews = axiosInstance.get(
      '/posts?term_type=news&category_slug=international&order_by=desc&per_page=5'
    )
    const fetchEconomyNews = axiosInstance.get(
      '/posts?term_type=news&category_slug=economy&order_by=desc&per_page=5'
    )

    Promise.all([
      fetchPoliticsNews,
      fetchNationalNews,
      fetchInternationalNews,
      fetchEconomyNews
    ])
      .then(
        ([
          politicsResponse,
          nationalResponse,
          internationalResponse,
          economyResponse
        ]) => {
          setPoliticsNews(politicsResponse.data.data) // Update state with politics news
          setNationalNews(nationalResponse.data.data) // Update state with national news
          setInternationalNews(internationalResponse.data.data) // Update state with national news
          setEconomyNews(economyResponse.data.data) // Update state with national news
          //setMaxVisitedNews(maxVisitedResponse.data.data) // Update state with max visited news
          setLoading(false) // Set loading to false once both requests are resolved
        }
      )
      .catch(error => {
        setError(error) // Set error state in case of any failure
        setLoading(false) // Set loading to false if there's an error
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
    return <p>Error: {error.message}</p> // Display error message if there is an error
  }

  return (
    <div className='container pt-10'>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-6'>
          <div className='mb-10'>
            <div className='title-heading-wrapper'>
              <div className='title-heading'>
                রাজনীতি
                <span className='absolute top-0 right-0 w-3 h-full clip-triangle'></span>
              </div>
              <a
                href={'/'}
                className='text-blue-600 flex items-start title-right-link'
              >
                আরও সংবাদ <span className='ml-1'>→</span>
              </a>
            </div>
            <div className=''>
              {politicsNews.map((news, idx) => (
                <div
                  key={idx}
                  className='grid grid-cols-2 gap-2 items-start md:flex-row justify-between space-x-3 w-full'
                >
                  <div className='w-20% pb-4'>
                    <Image
                      src={news?.featured_image}
                      alt={news?.name}
                      width={150} // Specify width
                      height={150} // Specify height
                      layout='intrinsic' // Use intrinsic layout for consistent sizing
                      className='object-cover border-gray-100 border-2 w-full h-full rounded-md' // Ensure image covers the box
                    />
                  </div>
                  <div className='text-gray-800'>
                    <Link href={'/news/' + news.slug}>{news?.name}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-6'>
          <div className='mb-10'>
            <div className='title-heading-wrapper'>
              <div className='title-heading'>
                জাতীয়
                <span className='absolute top-0 right-0 w-3 h-full clip-triangle'></span>
              </div>
              <a
                href={'/'}
                className='text-blue-600 flex items-start title-right-link'
              >
                আরও সংবাদ <span className='ml-1'>→</span>
              </a>
            </div>
            <div className=''>
              {nationalNews.map((news, idx) => (
                <div
                  key={idx}
                  className='grid grid-cols-2 gap-2 items-start md:flex-row justify-between space-x-3 w-full'
                >
                  <div className='w-20% pb-4'>
                    <Image
                      src={news?.featured_image}
                      alt={news?.name}
                      width={150} // Specify width
                      height={150} // Specify height
                      layout='intrinsic' // Use intrinsic layout for consistent sizing
                      className='object-cover border-gray-100 border-2 w-full h-full rounded-md' // Ensure image covers the box
                    />
                  </div>
                  <div className='text-gray-800'>
                    <Link href={'/news/' + news.slug}>{news?.name}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-6'>
          <div className='mb-10'>
            <div className='title-heading-wrapper'>
              <div className='title-heading'>
                আন্তর্জাতিক
                <span className='absolute top-0 right-0 w-3 h-full clip-triangle'></span>
              </div>
              <a
                href={'/'}
                className='text-blue-600 flex items-start title-right-link'
              >
                আরও সংবাদ <span className='ml-1'>→</span>
              </a>
            </div>
            <div className=''>
              {internationalNews.map((news, idx) => (
                <div
                  key={idx}
                  className='grid grid-cols-2 gap-2 items-start md:flex-row justify-between space-x-3 w-full'
                >
                  <div className='w-20% pb-4'>
                    <Image
                      src={news?.featured_image}
                      alt={news?.name}
                      width={150} // Specify width
                      height={150} // Specify height
                      layout='intrinsic' // Use intrinsic layout for consistent sizing
                      className='object-cover border-gray-100 border-2 w-full h-full rounded-md' // Ensure image covers the box
                    />
                  </div>
                  <div className='text-gray-800'>
                    <Link href={'/news/' + news.slug}>{news?.name}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-6'>
          <div className='mb-10'>
            <div className='title-heading-wrapper'>
              <div className='title-heading'>
                অর্থনীতি
                <span className='absolute top-0 right-0 w-3 h-full clip-triangle'></span>
              </div>
              <a
                href={'/'}
                className='text-blue-600 flex items-start title-right-link'
              >
                আরও সংবাদ <span className='ml-1'>→</span>
              </a>
            </div>
            <div className=''>
              {economyNews.map((news, idx) => (
                <div
                  key={idx}
                  className='grid grid-cols-2 gap-2 items-start md:flex-row justify-between space-x-3 w-full'
                >
                  <div className='w-20% pb-4'>
                    <Image
                      src={news?.featured_image}
                      alt={news?.name}
                      width={150} // Specify width
                      height={150} // Specify height
                      layout='intrinsic' // Use intrinsic layout for consistent sizing
                      className='object-cover border-gray-100 border-2 w-full h-full rounded-md' // Ensure image covers the box
                    />
                  </div>
                  <div className='text-gray-800'>
                    <Link href={'/news/' + news.slug}>{news?.name}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EightCats
