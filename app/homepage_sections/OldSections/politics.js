"use client";
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosInstance';
import Image from 'next/image';
import Link from 'next/link';
import truncate from '@/helpers/truncate';

export default function Politics() {
    const [politicsNews, setPoliticsNews] = useState([]);  // Use state to store categories
    const [maxVisitedNews, setMaxVisitedNews] = useState([]);  // Use state to store categories
    const [loading, setLoading] = useState(true);       // Add loading state
    const [error, setError] = useState(null);           // Add error state

    useEffect(() => {
        // Set loading true before starting both requests
        setLoading(true);

        const fetchPoliticsNews = axiosInstance.get('/posts?term_type=news&category_slug=politics&order_by=desc&per_page=11');
        const fetchMaxVisitedNews = axiosInstance.get('/posts?term_type=news&category_slug=politics&order_by=visitor_count:desc&per_page=9');

        Promise.all([fetchPoliticsNews, fetchMaxVisitedNews])
            .then(([politicsResponse, maxVisitedResponse]) => {
                setPoliticsNews(politicsResponse.data.data);  // Update state with politics news
                setMaxVisitedNews(maxVisitedResponse.data.data);  // Update state with max visited news
                setLoading(false);  // Set loading to false once both requests are resolved
            })
            .catch(error => {
                setError(error);  // Set error state in case of any failure
                setLoading(false);  // Set loading to false if there's an error
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

        <section className="homeBlock pt-[20px] pb-[20px] px-5">
            <div className="container mx-auto">
                <div className="lg:grid lg:grid-flow-col lg:grid-cols-4 gap-4">
                    <div className="col-span-3 border-b border-custom">
                        <div className="border-b border-custom">
                            <h2 className="border-b-2 border-black-400 text-2xl inline pr-5 font-extrabold">রাজনীতি</h2>
                        </div>
                        <div className="grid lg:grid-flow-col lg:grid-cols-5 gap-4 py-5">
                            {politicsNews.length > 0 ? (
                                <div className="col-span-3">
                                    <Image
                                        src={politicsNews[0].featured_image}
                                        alt={politicsNews[0].name}
                                        width={600}  // Specify width
                                        height={400} // Specify height
                                        layout="responsive" // Makes the image responsive
                                    />
                                    <h2 className="text-2xl">
                                        <Link href={'/news/' + politicsNews[0].slug}>{politicsNews[0].name}</Link>
                                    </h2>
                                    <p>{truncate(politicsNews[0].description, 120)}</p>
                                </div>
                            ) : (
                                <p>No post found!</p>
                            )}


                            <div className="border-r border-custom pr-5">
                                {politicsNews.length > 1 ? (
                                    politicsNews.slice(1, 4).map((item, index) => (
                                        <div key={index}>
                                            <Image
                                                src={item.featured_image}
                                                alt={item.name}
                                                width={600}
                                                height={400}
                                                layout="responsive"
                                            />
                                            <h2>
                                                <Link href={'/news/' + item.slug}>
                                                    {item.name}
                                                </Link>
                                            </h2>
                                        </div>
                                    ))
                                ) : (
                                    <p>No news found</p>
                                )}


                            </div>

                            <div>
                                <ul>
                                    {politicsNews.length > 4 ? (
                                        politicsNews.slice(4, 11).map((item, index) => (
                                            <li key={index} className="py-1 border-b border-custom">
                                                <Link href={'/news/' + item.slug}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))
                                    ) : (
                                        <li> No news available </li>
                                    )}


                                </ul>
                            </div>


                        </div>
                    </div>
                    <div className="block">
                        <div>
                            <div className="border-b border-custom">
                                <h2 className="border-b-2 border-black-400 text-2xl inline pr-5 font-extrabold">
                                    সর্বাধিক পঠিত
                                </h2>
                            </div>

                            <div className="mt-2">
                                <ul>
                                    {maxVisitedNews.length > 0 ? (
                                        maxVisitedNews.map((item, index) => (
                                            <li key={index} className="border-b border-gray-300 py-2">
                                                <Link href={'/news/' + item.slug}> {item.name} </Link>
                                            </li>
                                        ))

                                    ) : (
                                        <li></li>
                                    )}



                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}