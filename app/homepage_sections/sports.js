
import Image from 'next/image'
import Link from 'next/link'
import truncate from '@/helpers/truncate'
import { getNewsByCat } from '@/helpers/actions'

export default async function Sports() {
  const sportsNews = await getNewsByCat("sports", 20)

  //  console.log("sportsNews",sportsNews)
  return (
    <div>
      <div className='container p-4 bg-blue-400'>
        <div className='text-center mb-5'>
          <div className='border-b border-custom'>
            <Image
              src={'/img/sports_heading.png'}
              alt={'Sports'}
              width={600} // Specify width
              height={400} // Specify height
              layout='responsive' // Makes the image responsive
            />
            {/* <h2 className="border-b-2 border-black-400 text-2xl inline font-extrabold">
              খেলাধুলা
            </h2> */}
          </div>
        </div>
        <div className=''>
          <div className='grid lg:grid-cols-2 lg:grid-flow-col gap-4 '>
            {sportsNews?.length > 0 ? (
              <div className='border border-gray-300 overflow-hidden bg-white'>
                <div className='w-full h-40 md:h-48 lg:h-72 overflow-hidden'>
                  <Link href={'/news/' + sportsNews[0]?.slug}>
                    <Image
                      src={sportsNews[0]?.featured_image}
                      alt={sportsNews[0]?.name}
                      width={600} // Specify width
                      height={400} // Specify height
                      layout='responsive' // Makes the image responsive
                    />
                  </Link>
                </div>
                <h2 className='text-2xl p-2 lg:text-2xl font-bold'>
                  <Link href={'/news/' + sportsNews[0]?.slug}>
                    {sportsNews[0]?.name}
                  </Link>
                </h2>


                <p className='p-2'>
                  {truncate(sportsNews[0]?.description, 240)}
                </p>
              </div>
            ) : (
              <p> No sports news available </p>
            )}

            <div>
              <div className='grid grid-cols-3 gap-4'>
                {sportsNews?.length > 1 ? (
                  sportsNews?.slice(1, 7).map((item, index) => (
                    <div
                      key={index}
                      className='border border-gray-300 p-2 overflow-hidden bg-white'
                    >
                      {' '}
                      {/* Add overflow-hidden */}
                      <div className='w-full h-32 md:h-32 lg:h-32 overflow-hidden'>
                        {' '}
                        {/* Set height and overflow-hidden */}
                        <Image
                          src={item?.featured_image}
                          alt={item?.name}
                          width={600}
                          height={400}
                          className='object-cover w-full h-full'
                          layout='responsive'
                        />
                      </div>
                      <p className='p-2'>
                        <Link href={'/news/' + item.slug}>{item.name}</Link>
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No sports news available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container py-8">
                <div className="grid lg:grid-flow-col lg:grid-cols-6 gap-4">

                    <div className="col-span-2">
                        {sportsNews.length > 5 ? (
                            <div>
                                <Image
                                    src={sportsNews[5].featured_image}
                                    alt={sportsNews[5].name}
                                    width={600}  // Specify width
                                    height={400} // Specify height
                                    layout="responsive" // Makes the image responsive
                                />

                                <h2 className="text-xl font-semibold">
                                    <Link href={'/news/' + sportsNews[5].slug}>
                                        {sportsNews[5].name}
                                    </Link>
                                </h2>
                            </div>
                        ) : (
                            <p> </p>
                        )}

                        <ul >
                            {sportsNews.length > 6 ? (
                                sportsNews.slice(6, 8).map((item, index) => (
                                    <li key={index} className="py-1">
                                        <Link href={'/news/' + item.slug}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))

                            ) : (
                                <p> </p>
                            )
                            }
                        </ul>

                    </div>

                    <div>
                        {sportsNews.length > 8 ? (
                            <div>
                                <Image
                                    src={sportsNews[8].featured_image}
                                    alt={sportsNews[8].name}
                                    width={600}  // Specify width
                                    height={400} // Specify height
                                    layout="responsive" // Makes the image responsive
                                    className="object-cover h-[350px]"
                                />

                                <h2 className="text-xl font-semibold">
                                    <Link href={'/news/' + sportsNews[8].slug}>
                                        {sportsNews[8].name}
                                    </Link>
                                </h2>
                            </div>
                        ) : (
                            <p> </p>
                        )}


                        <ul >
                            {sportsNews.length > 9 ? (
                                sportsNews.slice(9, 11).map((item, index) => (
                                    <li key={index} className="py-1">
                                        <Link href={'/news/' + item.slug}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <p> </p>
                            )}
                        </ul>
                    </div>

                    <div>
                        {sportsNews.length > 11 ? (
                            <div>
                                <Image
                                    src={sportsNews[11].featured_image}
                                    alt={sportsNews[11].name}
                                    width={600}  // Specify width
                                    height={400} // Specify height
                                    layout="responsive" // Makes the image responsive
                                    className="object-cover h-[350px]"
                                />

                                <h2 className="text-xl font-semibold">
                                    <Link href={'/news/' + sportsNews[11].slug}>
                                        {sportsNews[11].name}
                                    </Link>
                                </h2>
                            </div>
                        ) : (
                            <p> </p>
                        )}


                        <ul >
                            {sportsNews.length > 12 ? (
                                sportsNews.slice(12, 14).map((item, index) => (
                                    <li key={index} className="py-1">
                                        <Link href={'/news/' + item.slug}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <p> </p>
                            )}
                        </ul>
                    </div>

                    <div className="col-span-2">
                        {sportsNews.length > 14 ? (
                            <div>
                                <Image
                                    src={sportsNews[14].featured_image}
                                    alt={sportsNews[14].name}
                                    width={600}  // Specify width
                                    height={400} // Specify height
                                    layout="responsive" // Makes the image responsive
                                />

                                <h2 className="text-xl font-semibold">
                                    <Link href={'/news/' + sportsNews[14].slug}>
                                        {sportsNews[14].name}
                                    </Link>
                                </h2>
                            </div>
                        ) : (
                            <p> </p>
                        )}

                        <ul >
                            {sportsNews.length > 15 ? (
                                sportsNews.slice(15, 17).map((item, index) => (
                                    <li key={index} className="py-4">
                                        <Link href={'/news/' + item.slug}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))

                            ) : (
                                <p> </p>
                            )
                            }
                        </ul>

                    </div>
                </div>
            </div> */}
    </div>
  )
}
