'use client'

import Link from 'next/link'
import truncate from '@/helpers/truncate'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Featured({ featuredNews }) {
  return (
    <div className='w-full'>
      {featuredNews.length > 0 ? (
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className='mySwiper'
        >
          {featuredNews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col gap-4 w-full px-2'>
                <div className='w-full h-[450px]  rounded-md'>
                  <Link href={`/news/${item.slug}`}>
                    <Image
                      src={item.featured_image}
                      alt={item.name}
                      width={800}
                      height={450}
                      className='w-full h-full object-cover'
                      unoptimized
                    />
                  </Link>
                </div>
                <div className='w-full'>
                  <h2 className='text-2xl font-bold'>
                    <Link href={`/news/${item.slug}`} className='hover:text-blue-500'>
                      {item.name}
                    </Link>
                  </h2>
                  <p className='text-gray-600 mt-2'>
                    <Link href={`/news/${item.slug}`}>
                      {truncate(item.description, 240)}
                    </Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className='text-center text-gray-500'>No news available</p>
      )}
    </div>
  )
}
