import Image from 'next/image'
import Link from 'next/link'
import { getNewsByCat } from '@/helpers/actions'

async function EightCats() {
  const politicsNews = await getNewsByCat("politics", 5)
  const nationalNews = await getNewsByCat("national", 5)
  const internationalNews = await getNewsByCat("international", 5)
  const sports = await getNewsByCat("sports", 5)
  const economyNews = await getNewsByCat("economy", 5)

  return (
    <div className='container pt-10 overflow-hidden'>
      <div className='flex flex-wrap -mx-4'>

        {/* জাতীয় */}
        <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-6'>
          <div className='mb-10'>
            <div className='title-heading-wrapper'>
              <div className='title-heading'>
                জাতীয়
                <span className='absolute top-0 right-0 w-3 h-full clip-triangle'></span>
              </div>
              <a href='/' className='text-blue-600 flex items-start title-right-link'>
                আরও সংবাদ <span className='ml-1'>→</span>
              </a>
            </div>
            <div className=''>
              {nationalNews?.map((news, idx) => (
                <div key={idx} className='grid grid-cols-2 gap-2 items-start w-full mb-2'>
                  <div className='w-full h-[100px] overflow-hidden rounded-md border-2 border-gray-100'>
                    <Image
                      src={news?.featured_image}
                      alt={news?.name}
                      width={150}
                      height={100}
                      className='w-full h-full object-cover'
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

        {/* রাজনীতি */}
        <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-6'>
          <div className='mb-10'>
            <div className='title-heading-wrapper'>
              <div className='title-heading'>
                রাজনীতি
                <span className='absolute top-0 right-0 w-3 h-full clip-triangle'></span>
              </div>
              <a href='/' className='text-blue-600 flex items-start title-right-link'>
                আরও সংবাদ <span className='ml-1'>→</span>
              </a>
            </div>
            <div>
              {politicsNews?.map((news, idx) => (
                <div key={idx} className='grid grid-cols-2 gap-2 items-start w-full mb-2'>
                  <div className='w-full h-[100px] overflow-hidden rounded-md border-2 border-gray-100'>
                    <Image
                      src={news?.featured_image}
                      alt={news?.name}
                      width={150}
                      height={100}
                      className='w-full h-full object-cover'
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

        {/* খেলাধুলা */}
        <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-6'>
          <div className='mb-10'>
            <div className='title-heading-wrapper'>
              <div className='title-heading'>
                খেলাধুলা
                <span className='absolute top-0 right-0 w-3 h-full clip-triangle'></span>
              </div>
              <a href='/' className='text-blue-600 flex items-start title-right-link'>
                আরও সংবাদ <span className='ml-1'>→</span>
              </a>
            </div>
            <div>
              {sports?.map((news, idx) => (
                <div key={idx} className='grid grid-cols-2 gap-2 items-start w-full mb-2'>
                  <div className='w-full h-[100px] overflow-hidden rounded-md border-2 border-gray-100'>
                    <Image
                      src={news?.featured_image}
                      alt={news?.name}
                      width={150}
                      height={100}
                      className='w-full h-full object-cover'
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

        {/* অর্থনীতি */}
        {/* <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-6'>
          <div className='mb-10'>
            <div className='title-heading-wrapper'>
              <div className='title-heading'>
                অর্থনীতি
                <span className='absolute top-0 right-0 w-3 h-full clip-triangle'></span>
              </div>
              <a href='/' className='text-blue-600 flex items-start title-right-link'>
                আরও সংবাদ <span className='ml-1'>→</span>
              </a>
            </div>
            <div>
              {economyNews?.map((news, idx) => (
                <div key={idx} className='grid grid-cols-2 gap-4 items-start w-full mb-2'>
                  <div className='w-full h-[100px] overflow-hidden rounded-md border-2 border-gray-100'>
                    <Image
                      src={news?.featured_image}
                      alt={news?.name}
                      width={150}
                      height={100}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='text-gray-800'>
                    <Link href={'/news/' + news.slug}>{news?.name}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default EightCats
