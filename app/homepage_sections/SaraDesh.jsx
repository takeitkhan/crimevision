

import { getNewsByCat } from '@/helpers/actions';
import CardWithTopImage from '@/components/CardWithTopImage';
import BigCardWithImage from './BigCardWithImage';

export default async function SaraDesh() {
    const saraDeshNews = await getNewsByCat("town_village", 9)

    return (
        <div>
            <div className="container py-5 ">
                <div className="text-center mb-5">
                    <div className="border-b border-custom">
                        <h2 className="text-2xl inline font-extrabold">সারাদেশ</h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-4">
                    {saraDeshNews.length > 0 ? (
                        <>
                        <BigCardWithImage news={saraDeshNews[0]} />
                        

                            {/* Other news items take 2/3 width */}
                            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {saraDeshNews.length > 1 ? (
                                    saraDeshNews.slice(1, 9).map((item, index) => (
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
