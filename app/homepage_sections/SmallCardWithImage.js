import Image from "next/image"
import Link from "next/link"


const SmallCardWithImage = ({ news }) => {
    return (
        <div  className='flex gap-2 items-start w-full mb-2'>
                  <div className='w-[40%] h-[100px] overflow-hidden rounded-md border-2 border-gray-100'>
                    <Image
                      src={news?.featured_image}
                      alt={news?.name}
                      width={120}
                      height={100}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='text-gray-800 w-[60%] leading-[30px]'>
                    <Link href={'/news/' + news.slug}>
                    {news?.name.slice(0,50)}
                    <span className="text-blue-400 flex">বিস্তারিত দেখুন</span>
                    </Link>
                  </div>
                </div>
    )
}

export default SmallCardWithImage
