"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axiosInstance from '@/helpers/axiosInstance';
import Image from 'next/image'
import truncate from '@/helpers/truncate';


export default function CategoryPage() {
    const params = useParams();
    const slug = params.slug;
    const baseUrl = process.env.BASE_URL;

    const [News, setNews] = useState([]);  // Use state to store categories
    const [Meta, setMeta] = useState([]);  // Use state to store categories
    const [Category, setCategory] = useState([]); // State to store categories
    const [page, setPage] = useState(1); 
    
    const [loading, setLoading] = useState(true);       // Add loading state
    const [error, setError] = useState(null);           // Add error state

    useEffect(() => {
        axiosInstance.get('posts?term_type=news&per_page=10&category_slug=' + slug)
            .then(response => {
                setNews(response.data.data);  // Update state with API data
                setMeta(response.data.meta);
                setLoading(false);              // Set loading to false when data is fetched
            })
            .catch(error => {
                setError(error);                // Set error state if request fails
                setLoading(false);              // Set loading to false in case of error
            });
    }, [slug]);

    useEffect(() => {

        // Fetch similar news when categories are available
        axiosInstance.get('category?&slug=' + slug)
        .then(response => {
            setCategory(response.data.data);  // Update similar news state with API data
        })
        .catch(error => {
            setError(error);                      // Set error state if request fails
        });

    }, [slug]);  // This will run whenever Categories is updated


    if (loading) {
        return <p>Loading...</p>;  // Display loading state
    }

    if (error) {
        return <p>Error: {error.message}</p>;  // Display error message if there is an error
    }


    return (
        <section className='py-10'>
                <div className='container mx-auto text-black px-3'>
                    {/* === title ==  */}
                    <div>
                        <h1 className='text-3xl md:text-4xl text-orange-500'>{Category['name']}</h1>
                        
                        <ul className='flex items-center gap-4 md:gap-4 flex-wrap text-[17px]'>
                            {Category.hasOwnProperty('child') && Category['child'].length > 0 ? (
                                Category.child.slice(0, 5).map((item, index) => (
                                    <li key={index}>
                                        <Link href={baseUrl +'/' + slug}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                                
                            ):(
                                <p> </p>
                            )}
                            
                        </ul>
                    </div>

                    

                    {News.length > 0 ? (
                            <Link href={'/news/' + News[0].slug} className='grid md:grid-cols-3 gap-5 py-10 hover:normal-case group overflow-hidden'>
                                <Image src={News[0].featured_image} layout='responsive' className='w-full rounded-md ' width={200} height={200} alt='sport' />
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-2xl'>{News[0].name}</h1>
                                    <p className='group-hover:text-black group-hover:font-medium text-[16px]'>
                                        {truncate(News[0].description, 100)}
                                    </p>
                                    <span className='text-sm group-hover:text-black group-hover:font-medium'>আপডেটঃ ১৮ আগস্ট ২০২৪ | ২০:৪৫</span>
                                </div>
                                <div></div>
                            </Link>
                        ):(
                            <p> No news available </p>
                        )
                    }
                    


                    {/* === secondary content ==  */}
                    {News.length > 1 ? (
                            <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-6 md:flex-row md:flex-wrap'>
                                {News.slice(1, 5).map((item, index) =>(        
                                    <Link key={index} href={'/news/' + item.slug } className='flex flex-col gap-1 bg-gray-100 p-2 rounded-md group'>
                                        <Image src={item.featured_image} layout='responsive' className='w-full rounded-md' width={200} height={200} alt='sports' />
                                        <h1 className='text-xl'> {item.name} </h1>
                                        {/* <span className='text-sm group-hover:text-black group-hover:font-normal'> {item.sport_date} </span> */}
                                    </Link>
                                ))}
                            </div>
                        
                    ):(
                        <p> </p>
                    )}
                    


                    {/* === content ===  */}
                    {News.length > 5 ? (
                        <div className='py-10 md:w-2/3 mx-auto flex flex-col gap-5'>
                            {News.slice(5, 10).map((item, index) => (
                                <div key={index}>
                                    <div>
                                        <Link href={'/news/' + item.slug} className='flex flex-col md:flex-row md:items-center gap-4 group'>
                                            <div>
                                                <h1 className='text-2xl'> {item.name} </h1>
                                                <p className='text-[16px] group-hover:text-black group-hover:font-medium'> {truncate(item.description, 100)} </p>
                                                {/* <span className='text-sm group-hover:text-black group-hover:font-medium'> {item.sport_date} </span> */}
                                            </div>
                                            <Image src={item.featured_image} className='w-full rounded-md' width={100} height={100} alt='sports' />
                                        </Link>
                                    </div>
                                </div>

                            ))}

                            <button className='p-1 bg-orange-400 rounded-sm w-fit mx-auto text-white px-4'>আরও</button>
                        </div>
                    ):(
                        <p></p>
                    )}





                </div>
            </section>
    );
}
