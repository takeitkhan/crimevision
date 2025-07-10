import Image from 'next/image'
import Link from 'next/link'
import { getNewsByCat } from '@/helpers/actions'

async function EightCats() {
  const politicsNews =await getNewsByCat("politics",5)
  const nationalNews =await getNewsByCat("national",5)
  const internationalNews =await getNewsByCat("international",5)
  const economyNews =await getNewsByCat("economy",5)

 
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
              {politicsNews?.map((news, idx) => (
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
              {nationalNews?.map((news, idx) => (
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
              {internationalNews?.map((news, idx) => (
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
              {economyNews?.map((news, idx) => (
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
