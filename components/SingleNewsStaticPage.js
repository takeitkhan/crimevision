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
import SmallCardWithImage from '@/app/homepage_sections/SmallCardWithImage';

export default function SingleNewsStaticPage({ slug, news, similarNews }) {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const shareUrl = `${origin}/news/${slug}`;

// console.log("shareurl", shareUrl)
console.log("slug", news)

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
                        className='print-button flex items-center  gap-[6px] bg-green-800 text-white rounded-md p-2'
                      >
                        <ClipboardIcon className='w-5 h-5 ' />
                        <span>Copy Link</span>
                      </button>

                    </div>
                  </div>
                </div>

                <h1 className='text-xl lg:text-2xl leading-[40px]
                 lg:leading-[50px] font-semibold mb-2'>{news.name}</h1>
                <div className='flex' id='printableDiv'>
                  <div
                    className='lg:basis-[100%] flex flex-col gap-10'
                    dangerouslySetInnerHTML={{
                      __html: news.description || '<p>No content available.</p>'
                    }}
                  ></div>
                </div>
              </div>

              <div className='basis-[30%] mt-4 md:mt-0'>
                <div className='lg:flex lg:flex-col lg:gap-4  flex flex-col gap-5'>
                  <h3 className='text-xl'>সর্বশেষ সংবাদ</h3>
                  {similarNews?.length > 0 ? (
                    similarNews.slice(0,14).map((item, idx) => (
                      <SmallCardWithImage news={item} idx={idx}/>
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
