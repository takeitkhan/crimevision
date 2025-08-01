'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import './shironam-swiper.css'; // Import custom styles
import { NotepadText } from 'lucide-react';

const ShironamSwipper = ({ shironamNews }) => {
  return (
    <div className="overflow-hidden flex container mx-auto px-2">
      <div className='overflow-hidden bg-white py-2 flex-1'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={7000}
          loop={true}
          className="linear-autoplay-swiper"
          allowTouchMove={false}
        >
          {shironamNews?.map((news) => (
            <SwiperSlide
              key={news.id}
              style={{ width: 'auto' }}
              className="!w-auto px-1 flex items-center"
            >
              <Link 
                href={`/news/${news?.slug}`}
                className="flex items-center gap-1 font-medium text-gray-800 whitespace-nowrap"
              >
                <NotepadText className='w-5 h-4' />
                <span className='text-md'>
                    {news?.name}
                </span>
               
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='bg-[#0D542B] text-white py-2 px-3 text-md'>
        <span> শিরোনাম</span>
      </div>
    </div>
  );
};

export default ShironamSwipper;
