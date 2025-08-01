import { getNewsByCat } from '@/helpers/actions'
import CardWithTopImage from '@/components/CardWithTopImage'
import BigCardWithImage from './BigCardWithImage'

export default async function Entertainment() {
  const entertainmentNews = await getNewsByCat("entertainment", 8)

  return (
    <div>
      <div className='container mt-5 '>
        <div className='text-center mb-5 '>
          <div className='border-b  '>
            {/* <Image
              src={'/img/binodon.jpg'}
              alt={'binodon'}
              width={600}
              height={400}
              className='object-cover w-full h-full'
              layout='responsive'
            /> */}
            <h2 className=" text-2xl inline font-extrabold">
              বিনোদন
            </h2>
          </div>
        </div>
        <div className=''>
          <div className='lg:grid lg:grid-cols-2 lg:grid-flow-col lg:gap-4 gap-4'>
            <div>
              <div className='grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-2'>
                {entertainmentNews.length > 0 ? (
                  entertainmentNews.slice(1, 7).map((item, index) => (
                    <CardWithTopImage key={index} item={item} />
                  ))
                ) : (
                  <p>No news available</p>
                )}
              </div>
            </div>

            {entertainmentNews.length > 0 ? (
             <BigCardWithImage news={entertainmentNews[0]} />
            ) : (
              <p>No news available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
