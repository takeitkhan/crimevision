'use client'
import Link from 'next/link'
import Image from 'next/image'
import {
  handleCopyLink,
  handlePrint,
} from '@/helpers/commonHelper'
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { ShareIcon, PrinterIcon, ClipboardIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';

export default function SingleNewsStaticPage({ slug, news, similarNews }) {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const shareUrl = `${origin}/news/${slug}`;


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
                    <div className='flex flex-wrap gap-2 text-sm mt-4'>
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          shareUrl
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-800 text-white rounded-md p-2 hover:text-white gap-[6px] flex items-center"
                      >
                        <FaFacebookF />
                        <span>Facebook Share </span>
                      </Link>



                      {/* WhatsApp Share */}
                      <Link
                        href={`https://wa.me/?text=${encodeURIComponent(news.name + ' ' + shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-800 text-white rounded-md p-2 hover:text-white gap-[6px] flex items-center"
                      >
                        <FaWhatsapp />
                        <span>WhatsApp</span>
                      </Link>


                      {/* Twitter Share */}
                      <Link
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(news.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-800 text-white rounded-md p-2 hover:text-white gap-[6px] flex items-center"
                      >
                        <FaTwitter />
                        <span>Twitter</span>
                      </Link>


                      <button
                        onClick={() =>
                          handlePrint(
                            'printableDiv',
                            news.name,
                            '/img/logo.jpg',
                            window.location.href
                          )
                        }
                        className='print-button flex items-center gap-[6px] bg-green-800 text-white rounded-md p-2'
                      >
                        <PrinterIcon className='w-5 h-5' />
                        <span>Print</span>
                      </button>

                      <button
                        onClick={() => handleCopyLink(news?.slug)}
                        className='print-button flex items-center flex gap-[6px] bg-green-800 text-white rounded-md p-2'
                      >
                        <ClipboardIcon className='w-5 h-5 ' />
                        <span>Copy Link</span>
                      </button>

                    </div>
                  </div>
                </div>

                <h1 className='text-3xl mb-1   font-medium'>{news.name}</h1>
                <div className='flex' id='printableDiv'>
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
                  <h3>সর্বশেষ সংবাদ</h3>
                  {similarNews?.length > 0 ? (
                    similarNews.map((item, index) => (
                      <div key={`similar-${index}`} className='flex justify-between gap-4'>
                        <div className='basis-1/3'>
                          <div className="w-full h-24 overflow-hidden rounded-md">
                            <Image
                              src={item.featured_image}
                              alt={item.name || 'Thumbnail'}
                              width={800}
                              height={600}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                        <div className='basis-2/3'>
                          <Link
                            className='inline-block'
                            href={`/news/${item.slug}`}
                          >
                            <h2 className='text-[24px] leading-8 basis-1/2 hover:text-yellow-600 w-fit'>
                              {item?.name?.slice(0, 50) || 'No title'}...
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
