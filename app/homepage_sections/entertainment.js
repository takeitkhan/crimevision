
import axiosInstance from '@/helpers/axiosInstance'
import Image from 'next/image'
import Link from 'next/link'
import truncate from '@/helpers/truncate'
import { getNewsByCat } from '@/helpers/actions'

export default async function Entertainment () {
const entertainmentNews = await getNewsByCat("entertainment", 8)


 

  return (
    <div>
      <div className='container mt-10 bg-green-600 p-4'>
        <div className='text-center mb-5 '>
          <div className='border-b border-custom '>
            <Image
              src={'/img/binodon.jpg'}
              alt={'binodon'}
              width={600}
              height={400}
              className='object-cover w-full h-full'
              layout='responsive'
            />
          </div>
        </div>
        <div className=''>
          <div className='lg:grid lg:grid-cols-2 lg:grid-flow-col lg:gap-4 gap-4'>
            <div>
              <div className='grid grid-cols-3 grid-rows-2 gap-2'>
                {entertainmentNews.length > 0 ? (
                  entertainmentNews.slice(1, 7).map((item, index) => (
                    <div
                      key={index}
                      className='border border-gray-300 overflow-hidden bg-white'
                    >
                      <Link href={'/news/' + item.slug}>
                        <div className='w-full h-40 md:h-48 lg:h-32 overflow-hidden'>
                          <Image
                            src={item.featured_image}
                            alt={item.name}
                            width={600}
                            height={400}
                            className='object-cover w-full h-full'
                            layout='responsive'
                          />
                        </div>
                      </Link>
                      <p className='p-2'>
                        <Link href={'/news/' + item.slug}>{item.name}</Link>
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No news available</p>
                )}
              </div>
            </div>

            {entertainmentNews.length > 0 ? (
              <div className='border border-gray-300 overflow-hidden bg-white'>
                <div className='w-full h-40 md:h-48 lg:h-72 overflow-hidden '>
                  <Link href={'/news/' + entertainmentNews[0].slug}>
                    <Image
                      src={entertainmentNews[0].featured_image}
                      alt={entertainmentNews[0].name}
                      width={600} // Specify width
                      height={400} // Specify height
                      layout='responsive' // Makes the image responsive
                      className='object-cover w-full h-full' // Ensures the image covers and overflows are hidden
                    />
                  </Link>
                </div>
                {/* Title Section */}
                <h2 className='p-2 text-xl lg:text-2xl font-bold'>
                  <Link href={'/news/' + entertainmentNews[0].slug}>
                    {entertainmentNews[0].name}
                  </Link>
                </h2>

                {/* Description Section */}
                <p className='p-2 text-gray-700'>
                  {truncate(entertainmentNews[0].description, 150)}
                </p>
              </div>
            ) : (
              <p>No news available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
