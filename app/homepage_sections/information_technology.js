
import Image from 'next/image';
import Link from 'next/link';
import truncate from '@/helpers/truncate';
import { getNewsByCat } from '@/helpers/actions';

export default async function InformationTechnology() {
    const infoTechNews = await getNewsByCat("information_technology", 9)

    return (
        <div>
            <div className="container py-10">
                <div className="text-center mb-5">
                    <div className="border-b border-custom">
                        <h2 className="text-2xl inline font-extrabold">তথ্যপ্রযুক্তি</h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-4">
                    {infoTechNews.length > 0 ? (
                        <>
                            {/* First news item takes 1/3 width */}
                            <div className="lg:col-span-1 border border-gray-300">
                                <Link href={'/news/' + infoTechNews[0].slug}>
                                    <Image
                                        src={infoTechNews[0].featured_image}
                                        alt={infoTechNews[0].name}
                                        width={828}
                                        height={466}
                                        className="w-full h-auto" // Ensure the image fills the container
                                    />
                                </Link>
                                <h2 className="p-2 text-2xl">
                                    <Link href={'/news/' + infoTechNews[0].slug}>
                                        {infoTechNews[0].name}
                                    </Link>
                                </h2>
                                <p className="p-2">
                                    {truncate(infoTechNews[0].description, 250)}
                                </p>
                            </div>

                            {/* Other news items take 2/3 width */}
                            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {infoTechNews.length > 1 ? (
                                    infoTechNews.slice(1, 9).map((item, index) => (
                                        <div key={index} className="border border-gray-300">
                                            <Link href={'/news/' + item.slug}>
                                                <div className="h-32 overflow-hidden relative"> {/* Fixed height container */}
                                                    <Image
                                                        src={item.featured_image}
                                                        alt={item.name}
                                                        width={400}
                                                        height={300}
                                                        className="w-full h-full object-cover" // Ensure the image fills the container and covers it
                                                    />
                                                </div>
                                            </Link>
                                            <p className="p-2">
                                                <Link href={'/news/' + item.slug}>
                                                    {item.name}
                                                </Link>
                                            </p>
                                        </div>
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
