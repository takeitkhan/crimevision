"use client";
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosInstance';
import Image from 'next/image';
import Link from 'next/link';
import truncate from '@/helpers/truncate';
import Featured from './featured';

export default function LatestNews() {
    const [latestNews, setLatestNews] = useState([]);  // Use state to store categories
    const [loading, setLoading] = useState(true);       // Add loading state
    const [error, setError] = useState(null);           // Add error state

    useEffect(() => {
        axiosInstance.get('/posts?term_type=news&per_page=19&order_by=desc')
            .then(response => {
                setLatestNews(response.data.data);  // Update state with API data
                setLoading(false);              // Set loading to false when data is fetched
            })
            .catch(error => {
                setError(error);                // Set error state if request fails
                setLoading(false);              // Set loading to false in case of error
            });
    }, []);

    if (loading) {
        return (
            <section className="homeBlock pt-[50px] pb-[80px] px-5">
                <div className="container mx-auto">
                    Loading...
                </div>
            </section>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;  // Display error message if there is an error
    }


    return (
        <div>
            <div className="container pt-10">
                <div className="grid grid-flow-row lg:grid-cols-3 lg:grid-flow-col lg:gap-4">
                    <div className="lg:col-span-3">
                        <div className="grid grid-flow-row lg:grid-cols-4 lg:grid-flow-col lg:gap-4">
                            <div className="x-5 lg:col-span-3">
                                <div className="grid grid-flow-row lg:grid-cols-3 lg:grid-flow-col lg:gap-4">
                                    <Featured />
                                    {latestNews.length > 0 ? (
                                        <div className="order-1 lg:col-span-2">
                                            <Link href={'/news/' + latestNews[0].slug}>
                                                <Image
                                                    src={latestNews[0]?.featured_image} // Path relative to the public directory
                                                    alt={latestNews[0]?.name}
                                                    width={800} 
                                                    height={450} 
                                                    className="object-cover" // Adjust the height as needed                                                        
                                                />
                                            </Link>
                                            <div className="pt-2">
                                                <h2 className="text-4xl">
                                                    <Link href={'/news/' + latestNews[0].slug}>
                                                        {latestNews[0].name}
                                                    </Link>
                                                </h2>
                                                <p>
                                                    <Link href={'/news/' + latestNews[0].slug}>
                                                        {truncate(latestNews[0].description, 240)}
                                                    </Link>
                                                </p>
                                            </div>

                                        </div>
                                    ) : (
                                        <p>No post available</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-flow-row xgrid-rows-3 gap-1">
                                {latestNews.length > 1 ? (
                                    latestNews.slice(1, 9).map((item, index) => (
                                        <div key={index} className="border-b-2 border-b-gray-100 pb-2">
                                            <div className="grid lg:grid-cols-3 lg:gap-2">
                                                {/* Image Column - 1/3 Width on Large Screens */}
                                                <div className="lg:col-span-1">
                                                    <Link href={'/news/' + item.slug}>
                                                        <Image
                                                            className="object-cover w-full h-[70px]"  // Set maximum height to 150px
                                                            src={item.featured_image}
                                                            alt={item.name}
                                                            width={150}
                                                            height={70}
                                                        />

                                                    </Link>
                                                </div>
                                                {/* Title Column - 2/3 Width on Large Screens */}
                                                <div className="lg:col-span-2">
                                                    <h2 className="text-lg font-semibold">
                                                        <Link href={'/news/' + item.slug}>
                                                            {truncate(item?.name, 80)}
                                                        </Link>
                                                    </h2>
                                                </div>                                                
                                            </div>
                                        </div>
                                    ))

                                ) : (
                                    <p> No post available </p>
                                )}


                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-10">
                <div className="text-center mb-5">
                    <div className="border-b border-custom">
                        <h2 className="border-b-2 border-black-400 text-2xl inline font-extrabold">
                            সর্বশেষ সংবাদ
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {latestNews.length > 0 ? (
                        latestNews.slice(9, 19).map((item, index) => (
                            <div key={index} className="relative overflow-hidden">
                                <Link href={'/news/' + item.slug}>
                                    {/* Image container with fixed dimensions */}
                                    <div className="h-48 w-full">
                                        <Image
                                            src={item.featured_image} // Ensure this is a valid image path or URL
                                            alt={item.name}
                                            width={828}
                                            height={466} // Adjust as needed
                                            className="object-cover w-full h-full" // Make the image cover the container
                                        />
                                    </div>
                                </Link>
                                <h2 className="font-extrabold pt-2 text-center">
                                    <Link href={'/news/' + item.slug}>
                                        { truncate(item.name, 80) }
                                    </Link>
                                </h2>
                                <p className='text-center'>
                                    {truncate(item.description, 60)}
                                    {/* <ReadMore text={item.description} maxLength={150} /> */}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No latest posts found.</p> // Message if there are no categories
                    )}
                </div>

            </div>
        </div>
    );
}
