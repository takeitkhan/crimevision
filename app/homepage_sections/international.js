"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/helpers/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import truncate from "@/helpers/truncate";

export default function International() {
  const [internationalNews, setInternationalNews] = useState([]); // Use state to store categories
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    axiosInstance
      .get(
        "/posts?term_type=news&category_slug=international&order_by=desc&per_page=20"
      )
      .then((response) => {
        setInternationalNews(response.data.data); // Update state with API data
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
        <div className="container mx-auto">Loading...</div>
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
              আন্তর্জাতিক
            </h2>
          </div>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-2 lg:grid-flow-col gap-4">
            {internationalNews.length > 0 ? (
              <div className="border border-gray-300 overflow-hidden">
                <div className="w-full h-40 md:h-48 lg:h-72 overflow-hidden">
                  <Link href={"/news/" + internationalNews[0].slug}>
                    <Image
                      src={internationalNews[0].featured_image}
                      alt={internationalNews[0].name}
                      width={600} // Specify width
                      height={400} // Specify height
                      layout="responsive" // Makes the image responsive
                    />
                  </Link>
                </div>
                <h2 className="text-2xl">
                  <h2 className="p-2 text-xl lg:text-2xl font-bold">
                    <Link href={"/news/" + internationalNews[0].slug}>
                      {internationalNews[0].name}
                    </Link>
                  </h2>
                </h2>

                <p className="p-2">
                  {truncate(internationalNews[0].description, 240)}
                </p>
              </div>
            ) : (
              <p> No international news available </p>
            )}

            <div>
              <div className="grid grid-cols-3 gap-4">
                {internationalNews.length > 1 ? (
                  internationalNews.slice(1, 7).map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 p-2 overflow-hidden"
                    >
                      {" "}
                      {/* Add overflow-hidden */}
                      <div className="w-full h-32 md:h-32 lg:h-32 overflow-hidden">
                        {" "}
                        {/* Set height and overflow-hidden */}
                        <Image
                          src={item.featured_image}
                          alt={item.name}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                          layout="responsive"
                        />
                      </div>
                      <p className="p-2">
                        <Link href={"/news/" + item.slug}>{item.name}</Link>
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No international news available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
