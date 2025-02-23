"use client";
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosInstance';
import Image from 'next/image';
import Link from 'next/link';
import truncate from '@/helpers/truncate';

export default function Economics() {
    const [economicsNews, setEconomicsNews] = useState([]);  // Use state to store categories
    const [loading, setLoading] = useState(true);       // Add loading state
    const [error, setError] = useState(null);           // Add error state

    useEffect(() => {
        axiosInstance.get('/posts?term_type=news&category_slug=economy&order_by=desc&per_page=9')
            .then(response => {
                setEconomicsNews(response.data.data);  // Update state with API data
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
                </div>
            </section>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;  // Display error message if there is an error
    }

    return (
        <div>
            <div className="container py-10">
                <div className="text-center mb-5">
                    <div className="border-b border-custom">
                        <h2 className="border-b-2 border-black-400 text-2xl inline font-extrabold">অর্থনীতি</h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-4">
                    {economicsNews.length > 0 ? (
                        <>
                            {/* First news item takes 1/3 width */}
                            <div className="lg:col-span-1 border border-gray-300">
                                <Link href={'/news/' + economicsNews[0].slug}>
                                    <Image
                                        src={economicsNews[0].featured_image}
                                        alt={economicsNews[0].name}
                                        width={828}
                                        height={466}
                                        className="w-full h-auto" // Ensure the image fills the container
                                    />
                                </Link>
                                <h2 className="p-2 text-2xl">
                                    <Link href={'/news/' + economicsNews[0].slug}>
                                        {economicsNews[0].name}
                                    </Link>
                                </h2>
                                <p className="p-2">
                                    {truncate(economicsNews[0].description, 250)}
                                </p>
                            </div>

                            {/* Other news items take 2/3 width */}
                            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {economicsNews.length > 1 ? (
                                    economicsNews.slice(1, 9).map((item, index) => (
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
                                    <p>No additional economics news available.</p>
                                )}
                            </div>


                        </>
                    ) : (
                        <p>No economics news available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
