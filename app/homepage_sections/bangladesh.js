import Image from 'next/image'
import Link from 'next/link'
import truncate from '@/helpers/truncate'
import { getMaxViewedNewsByCat, getNewsByCat } from '@/helpers/actions'

export default async function Bangladesh() {
  const bangladeshNews = await getNewsByCat("অপরাধ", 14);
  const maxVisitedNews = await getMaxViewedNewsByCat("অপরাধ", 8);

// console.log("bangladeshNews", bangladeshNews)


  
 
  return (
    <section className='homeBlock  pb-[10px] px-5 '>
      <div className='container mx-auto'>
        <div className='lg:grid lg:grid-flow-col lg:grid-cols-3 gap-4'>
          <div className='col-span-3 border-b border-custom'>
            <div className='border-b border-custom'>
              <h2 className='text-2xl inline pr-5 '>অপরাধ</h2>
            </div>
            <div className='grid lg:grid-flow-col lg:grid-cols-5 gap-4 py-5'>
              {bangladeshNews?.length > 0 ? (
               <div className="col-span-3">
  <div className="relative  w-full h-[150px] sm:h-[300px] lg:h-[350px] overflow-hidden rounded-md">
    <Image
      src={bangladeshNews[0].featured_image}
      alt={bangladeshNews[0].name}
      fill // fills the parent container
      className="object-cover"
    />
  </div>

  <h2 className="text-xl lg:text-2xl font-bold leading-[30px] lg:leading-[38px] mt-4">
    <Link href={'/news/' + bangladeshNews[0].slug}>
      {bangladeshNews[0].name}
    </Link>
  </h2>

  <p>{truncate(bangladeshNews[0].description, 120)}</p>
</div>

              ) : (
                <p>No post found!</p>
              )}

              <div className='border-r border-custom pr-5 space-y-6'>
                {bangladeshNews?.length > 1 ? (
                  bangladeshNews.slice(1, 3).map((item, index) => (
                    <div key={index}>
                      <Image
                        src={item.featured_image}
                        alt={item.name}
                        width={600}
                        height={400}
                        layout='responsive'
                      />
                      <h2 className='mt-2'>
                        <Link href={'/news/' + item.slug}>{item.name}</Link>
                      </h2>
                    </div>
                  ))
                ) : (
                  <p>No news found</p>
                )}
              </div>

              <div>
                <ul className='space-y-2'>
                  {bangladeshNews?.length > 3 ? (
                    bangladeshNews?.slice(3, 9).map((item, index) => (
                      <li key={index} className='py-1 border-b border-custom'>
                        <Link href={'/news/' + item.slug}>{item.name}</Link>
                      </li>
                    ))
                  ) : (
                    <li> No news available </li>
                  )}
                </ul>
              </div>
              
            </div>
          </div>
         

        </div>
      </div>
    </section>
  )
}
