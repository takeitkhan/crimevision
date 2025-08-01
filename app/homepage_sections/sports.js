import { getNewsByCat } from '@/helpers/actions'
import CardWithTopImage from '@/components/CardWithTopImage'
import BigCardWithImage from './BigCardWithImage'

export default async function Sports() {
    const sportsNews = await getNewsByCat("sports", 20)

    //  console.log("sportsNews",sportsNews)
    return (
        <div>
            <div className='container '>
                <div className='text-center mb-5'>
                    <div className='border-b '>
                        {/* <Image
              src={'/img/sports.png'}
              alt={'Sports'}
              width={600} // Specify width
              height={400} // Specify height
              layout='responsive' // Makes the image responsive
            /> */}
                        <h2 className=" text-2xl inline font-extrabold">
                            খেলাধুলা
                        </h2>
                    </div>
                </div>
                <div className=''>
                    <div className='grid lg:grid-cols-2 lg:grid-flow-col gap-4 '>
                        {sportsNews?.length > 0 ? (

                            <BigCardWithImage news={sportsNews[0]} />

                        ) : (
                            <p> No sports news available </p>
                        )}

                        <div>
                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                                {sportsNews?.length > 1 ? (
                                    sportsNews?.slice(1, 7).map((item, index) => (
                                        <CardWithTopImage key={index} item={item} />
                                    ))
                                ) : (
                                    <p>No sports news available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
