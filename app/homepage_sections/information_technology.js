
import Image from 'next/image';
import Link from 'next/link';
import truncate from '@/helpers/truncate';
import { getNewsByCat } from '@/helpers/actions';
import CardWithTopImage from '@/components/CardWithTopImage';
import BigCardWithImage from './BigCardWithImage';

export default async function InformationTechnology() {
    const infoTechNews = await getNewsByCat("information_technology", 9)

    return (
        <div>
            <div className="container py-5 ">
                <div className="text-center mb-5">
                    <div className="border-b border-custom">
                        <h2 className="text-2xl inline font-extrabold">তথ্যপ্রযুক্তি</h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-4">
                    {infoTechNews.length > 0 ? (
                        <>
                        <BigCardWithImage news={infoTechNews[0]} />
                            {/* First news item takes 1/3 width */}
                            {/* <div className="lg:col-span-1 border border-gray-300 py-2 ">
                                <Link href={'/news/' + infoTechNews[0].slug}>
                                    <Image
                                        src={infoTechNews[0].featured_image}
                                        alt={infoTechNews[0].name}
                                        width={828}
                                        height={466}
                                        className="w-full h-auto"
                                    />
                                </Link>

                                <div className='p-2'>
                                    <h2 className="text-lg mb-2 md:text-2xl font-bold leading-[32px] md:leading-[40px] lg:leading-[45px]">
                                        <Link href={'/news/' + infoTechNews[0].slug}>
                                            {infoTechNews[0].name}
                                        </Link>
                                    </h2>
                                    <p className="">
                                        {truncate(infoTechNews[0].description, 250)}
                                    </p>
                                </div>


                            </div> */}

                            {/* Other news items take 2/3 width */}
                            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {infoTechNews.length > 1 ? (
                                    infoTechNews.slice(1, 9).map((item, index) => (
                                        <CardWithTopImage key={index} item={item} />
                                    ))
                                ) : (
                                    <p>No additional infoTech news available.</p>
                                )}
                            </div>


                        </>
                    ) : (
                        <p>No infoTech news available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
