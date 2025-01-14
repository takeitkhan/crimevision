"use client";
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosInstance';
import Link from 'next/link';


import { IoMdClose } from "react-icons/io";

export default function Menu({isOpen, setIsOpen}) {
    const baseUrl = process.env.BASE_URL;
    const [menus, setMenus] = useState([]);  // Use state to store categories
    const [loading, setLoading] = useState(true);       // Add loading state
    const [error, setError] = useState(null);           // Add error state
    

    useEffect(() => {
        axiosInstance.get('/menus?menu=5')
            .then(response => {
                setMenus(response.data.data.items);  // Update state with API data
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
            <menu className="border-b-2 border-t-2 border-gray-100 px-5">
                <div className="container mx-auto px-5 py-2 flex justify-center items-start font-bold">                    
                    {menus.length > 0 ? (
                        <ul id="menu-items" className="hidden sm:inline-flex gap-10 px-10 align-middle">
                            {menus.map((item, index) => (

                                <li key={index} className="px-2 py-1 items-center">
                                    {/* {JSON.stringify(item)} */}
                                    <Link href={baseUrl +'/'+item.link}>{item.label}</Link>
                                </li>
                                // Adjust according to your data structure
                            ))}
                        </ul>
                    ) : (
                        <p>No categories found.</p>  // Message if there are no categories
                    )}
                </div>


             {isOpen && (
                 <div className='fixed inset-0 bg-gray-800 bg-opacity-50 z-20'>
                 <div className='absolute right-0 top-0 bg-gray-300 w-1/2 h-screen p-6 z-30'>
                 <div className='absolute left-2 cursor-pointer top-2 text-2xl' onClick={() => setIsOpen(!isOpen)}> <IoMdClose/> </div>
                   {menus.length > 0 ? (
                           <ul id="menu-items" className=" sm:inline-flex gap-3 px-10 align-middle flex flex-col">
                               {menus.map((item, index) => (
   
                                   <li key={index} className="px-2 py-1 items-center">
                                       {/* {JSON.stringify(item)} */}
                                       <Link href={baseUrl +'/'+item.link}>{item.label}</Link>
                                   </li>
                                   // Adjust according to your data structure
                               ))}
                           </ul>
                       ) : (
                           <p>No categories found.</p>  // Message if there are no categories
                       )}
                   </div>
                 </div>
             )}
            </menu>


        </div>
    );
}