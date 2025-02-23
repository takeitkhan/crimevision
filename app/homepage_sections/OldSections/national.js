"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/helpers/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import truncate from "@/helpers/truncate";

export default function National() {
  const [nationalNews, setNationalNews] = useState([]); // Use state to store categories
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    axiosInstance
      .get(
        "/posts?term_type=news&category_slug=national&order_by=desc&per_page=8"
      )
      .then((response) => {
        setNationalNews(response.data.data); // Update state with API data
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError(error); // Set error state if request fails
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return (
      <section className="homeBlock pt-[50px] pb-[80px] px-5">
        <div className="container mx-auto"></div>
      </section>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message if there is an error
  }

  return (
    <div>
      <div className="container pt-10">
        <div className="text-center mb-5">
          <div className="border-b border-custom">
            <h2 className="border-b-2 border-black-400 text-2xl inline font-extrabold">
              জাতীয়
            </h2>
          </div>
        </div>
        <div className="">
          <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col lg:gap-4 gap-4">
            <div>
              <div className="grid grid-cols-3 grid-rows-2 gap-2">
                {nationalNews.length > 0 ? (
                  nationalNews.slice(1, 7).map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 overflow-hidden"
                    >
                      <Link href={"/news/" + item.slug}>
                        <div className="w-full h-40 md:h-48 lg:h-32 overflow-hidden">
                          <Image
                            src={item.featured_image}
                            alt={item.name}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                            layout="responsive"
                          />
                        </div>
                      </Link>
                      <p className="p-2">
                        <Link href={"/news/" + item.slug}>{item.name}</Link>
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No news available</p>
                )}
              </div>
            </div>

            {nationalNews.length > 0 ? (
              <div className="border border-gray-300 overflow-hidden">
                <div className="w-full h-40 md:h-48 lg:h-72 overflow-hidden">
                  <Link href={"/news/" + nationalNews[0].slug}>
                    <Image
                      src={nationalNews[0].featured_image}
                      alt={nationalNews[0].name}
                      width={600} // Specify width
                      height={400} // Specify height
                      layout="responsive" // Makes the image responsive
                      className="object-cover w-full h-full" // Ensures the image covers and overflows are hidden
                    />
                  </Link>
                </div>
                {/* Title Section */}
                <h2 className="p-2 text-xl lg:text-2xl font-bold">
                  <Link href={"/news/" + nationalNews[0].slug}>
                    {nationalNews[0].name}
                  </Link>
                </h2>

                {/* Description Section */}
                <p className="p-2 text-gray-700">
                  {truncate(nationalNews[0].description, 150)}
                </p>
              </div>
            ) : (
              <p>No news available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
