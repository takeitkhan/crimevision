"use client";

import Link from 'next/link';
import { IoMdClose } from "react-icons/io";

export default function Menu({ setIsOpen, isOpen, menus }) {
    const baseUrl = process.env.BASE_URL;



    return (
        <div className='overflw-hidden'>
            <menu className="border-b-2 border-t-2 border-gray-100 px-5">
                <div className="container mx-auto text-lg px-5 py-2 flex justify-center items-start font-bold">
                    {menus?.length > 0 ? (
                        <ul id="menu-items" className="hidden md:inline-flex  lg:gap-8 xl:gap-10 px-10 align-middle">
                            <li className="px-2 py-1 items-center">
                                <Link href={`/`}>হোম</Link>
                            </li>
                            {menus?.map((item, index) => (
                                <li key={index} className="px-2 py-1 items-center">
                                    <Link href={`/${item?.link}`}>{item.label}</Link>
                                </li>

                            ))}
                        </ul>
                    ) : (
                        <p>No categories found.</p>
                    )}
                </div>


                {isOpen && (
                    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 z-20'>
                        <div className='absolute right-0 top-0 bg-gray-300 w-1/2 h-screen p-6 z-30'>
                            <div className='absolute left-2 cursor-pointer top-2 text-2xl' onClick={() => setIsOpen(!isOpen)}> <IoMdClose /> </div>
                            {menus?.length > 0 ? (
                                <ul id="menu-items" className=" sm:inline-flex gap-3 px-10 align-middle flex flex-col">
                                    <li className="px-2 py-1 items-center">
                                        <Link href={`/`}>হোম</Link>
                                    </li>

                                    {menus?.map((item, index) => (

                                        <li key={index} className="px-2 py-1 items-center">
                                            {/* {JSON.stringify(item)} */}
                                            <Link href={`/${item?.link}`}>{item.label}</Link>
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