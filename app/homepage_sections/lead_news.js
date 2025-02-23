"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/helpers/axiosInstance";
import Link from "next/link";
import truncate from "@/helpers/truncate";

export default function Featured() {
  const [featuredNews, setFeaturedNews] = useState([]); // Use state to store featured news
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    axiosInstance      
      .get("posts?term_type=news&per_page=10&order_by_id:desc&category_slug=lead-news")
      .then((response) => {      
        setFeaturedNews(response.data.data); // Update state with filtered data
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
    <div className="order-1">
      <h3 className="border border-green-800 py-1 text-center text-2xl bg-green-800 text-white rounded-t-md">
        আলোচিত সংবাদ
      </h3>
      <ul className="p-2 border border-green-800 bg-slate-50">
        {featuredNews.length > 0 ? (
          featuredNews.map((item, index) => (
            <li key={index} className="border-b border-gray-300 py-1">
              <Link href={"/news/" + item.slug}>{truncate(item.name, 40)}</Link>          
            </li>
          ))          
        ) : (
          <li>No featured news available</li>
        )}
      </ul>
    </div>
  );
}
