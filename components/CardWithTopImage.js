import Image from "next/image"
import Link from "next/link"


const CardWithTopImage = ({ item,height=32 }) => {
    return (
        <div className="border border-gray-300">
            <Link href={'/news/' + item?.slug}>
                <div className={`h-${height} overflow-hidden relative`}> {/* Fixed height container */}
                    <Image
                        src={item?.featured_image}
                        alt={item?.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover" // Ensure the image fills the container and covers it
                    />
                </div>
            </Link>
            <p className="p-2 leading-[28px]">
                <Link href={'/news/' + item?.slug}>
                    {item?.name}
                </Link>
            </p>
        </div>
    )
}

export default CardWithTopImage
