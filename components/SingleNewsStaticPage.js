'use client'
import Link from 'next/link'
import Image from 'next/image'
import {
  handleShare,
  handleCopyLink,
  handlePrint
} from '@/helpers/commonHelper'
import { ShareIcon, PrinterIcon, ClipboardIcon } from '@heroicons/react/24/solid'

export default async function SingleNewsStaticPage({ slug, news, similarNews }) {
  return (
    <section className='py-10'>
      <div className='container mx-auto px-5 '>
        {news ? (
          <>
            <div className='md:flex md:justify-between gap-10 '>
              <div className='basis-[70%] '>
                <Image
                  className='w-full'
                  src={news?.featured_image || '/img/logo.jpg'}
                  alt={news.name || 'Single Crime Vision News'}
                  width={600}
                  height={400}
                />

                <div className='flex flex-col md:flex-row items-center
                 justify-between border-b-2 border-b-gray-300 mb-2 bg-blue-50 p-2'>
                  <div className='py-2'>
                    <span>ক্রাইম ভিশন</span>
                    <p>
                      প্রকাশ: {news.post_date} | {news.post_time} | আপডেট: {news.update_post_date} | {news.update_post_time}
                    </p>
                  </div>

                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleShare(news?.slug, news?.name)}
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
                      onClick={() => handleCopyLink(news?.slug)}
                      className='print-button flex items-center space-x-2 bg-green-800 text-white rounded-md p-2'
                    >
                      <ClipboardIcon className='w-5 h-5' />
                      <span>Copy News Link</span>
                    </button>
                  </div>
                </div>

                <h1 className='text-4xl d-block font-medium'>{news.name}</h1>

                <div className='flex ' id='printableDiv'>
                  <div
                    className='lg:basis-[100%] flex flex-col gap-10'
                    dangerouslySetInnerHTML={{
                      __html: news.description || '<p>No content available.</p>'
                    }}
                  ></div>
                </div>
              </div>

              <div className='basis-[30%] lg:mt-0'>
                <div className='lg:flex lg:flex-col lg:gap-4 text-xl flex flex-col gap-5'>
                  <h3>অন্যান্য সংবাদ</h3>
                  {similarNews?.length > 0 ? (
                    similarNews.map((item, index) => (
                      <div key={`similar-${index}`} className='flex justify-between gap-4'>
                        <div className='basis-1/3'>
                          <Image
                            src={item.featured_image}
                            alt={item.name || 'Thumbnail'}
                            width={800}
                            height={500}
                          />
                        </div>
                        <div className='basis-2/3'>
                          <Link
                            className='inline-block'
                            href={`/news/${item.slug}`}
                          >
                            <h2 className='basis-1/2 hover:text-yellow-600 w-fit'>
                              {item?.name?.slice(0, 55) || 'No title'}...
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
          <div className='text-center text-gray-500'>News not found.</div>
        )}
      </div>
    </section>
  )
}
