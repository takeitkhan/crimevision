import truncate from "@/helpers/truncate"
import Image from "next/image"
import Link from "next/link"


const BigCardWithImage = ({ news }) => {
    return (
        <div className='border border-gray-300 overflow-hidden bg-white '>
            <div className='w-full h-40  sm:h-72 overflow-hidden'>
                <Link href={'/news/' + news?.slug}>
                    <Image
                        src={news?.featured_image}
                        alt={news.name}
                        width={600} // Specify width
                        height={400} // Specify height
                        layout='responsive' // Makes the image responsive
                    />
                </Link>
            </div>
            <div className='p-2'>
                <h2 className='text-lg mb-2 md:text-2xl font-bold leading-[32px] md:leading-[40px] lg:leading-[45px]'>
                    <Link href={'/news/' + news?.slug}>
                        {news?.name}
                    </Link>
                </h2>

                <p className=''>
                    {truncate(news?.description, 170)}
                </p>
            </div>


        </div>
    )
}

export default BigCardWithImage
