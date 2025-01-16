"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axiosInstance from "@/helpers/axiosInstance";
import Image from "next/image";
import truncate from "@/helpers/truncate";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug;
  const baseUrl = process.env.BASE_URL;

  const [news, setNews] = useState([]); // Use state to store news items
  const [meta, setMeta] = useState([]); // Use state to store meta information
  const [category, setCategory] = useState([]); // State to store categories
  const [page, setPage] = useState(1); // State to track the current page number
  const [loading, setLoading] = useState(true); // Add loading state
  const [loadingMore, setLoadingMore] = useState(false); // State for loading more news
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch initial news items
    var url =
      slug == "latests"
        ? "/posts?term_type=news&per_page=13&order_by=desc&page=1"
        : `posts?term_type=news&per_page=10&category_slug=${slug}&page=1`;

    axiosInstance
      .get(url)
      .then((response) => {
        setNews(response.data.data); // Update state with API data
        setMeta(response.data.meta); // Update meta information
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError(error); // Set error state if request fails
        setLoading(false); // Set loading to false in case of error
      });
  }, [slug]);

  useEffect(() => {
    // Fetch category data
    axiosInstance
      .get(`category?slug=${slug}`)
      .then((response) => {
        setCategory(response.data.data); // Update state with category data
      })
      .catch((error) => {
        setError(error); // Set error state if request fails
      });
  }, [slug]);

  // Function to load more news items
  const loadMoreNews = () => {
    setLoadingMore(true);
    var url =
      slug == "latests"
        ? `/posts?term_type=news&per_page=13&order_by=desc&page=${page + 1}`
        : `posts?term_type=news&per_page=10&category_slug=${slug}&page=${
            page + 1
          }`;

    axiosInstance
      .get(url)
      .then((response) => {
        const newNews = response.data.data;
        if (newNews.length > 0) {
          setNews((prevNews) => [...prevNews, ...newNews]);
          setPage((prevPage) => prevPage + 1);
        } else {
          setMeta({ ...meta, hasMore: false });
        }
        setLoadingMore(false);
      })
      .catch((error) => {
        setError(error);
        setLoadingMore(false);
      });
  };

  if (loading) {
    return (
      <section className="homeBlock pt-[50px] pb-[80px] px-5">
        <div className="container mx-auto">Loading...</div>
      </section>
    );
  }
  if (error) {
    return (
      <p>Somthing went wrong! Please reload the page or try again later.</p>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto text-black px-3">
        {/* === Title and category List === */}
        <div>
          <h1 className="text-3xl md:text-4xl text-orange-500">
            {slug == "latests" ? "সর্বশেষ" : category.name}
          </h1>
          <ul className="flex items-center gap-4 md:gap-4 flex-wrap text-[17px]">
            {category.hasOwnProperty("child") && category.child.length > 0 ? (
              category.child.slice(0, 5).map((item, index) => (
                <li key={index}>
                  <Link href={`${baseUrl}/${item.slug}`}>{item.name}</Link>
                </li>
              ))
            ) : (
              <p> </p>
            )}
          </ul>
        </div>

        {/* === Featured news === */}
        {news.length > 0 ? (
          <Link
            href={"/news/" + news[0].slug}
            className="grid md:grid-cols-3 gap-5 py-10 hover:normal-case group overflow-hidden"
          >
            <Image
              src={news[0].featured_image}
              layout="responsive"
              className="w-full rounded-md"
              width={200}
              height={200}
              alt="sport"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">{news[0].name}</h1>
              <p className="group-hover:text-black group-hover:font-medium text-[16px]">
                {truncate(news[0].description, 100)}
              </p>
              {/* <span className='text-sm group-hover:text-black group-hover:font-medium'>আপডেটঃ ১৮ আগস্ট ২০২৪ | ২০:৪৫</span> */}
            </div>
            <div></div>
          </Link>
        ) : (
          <p>No news available</p>
        )}

        {/* === Secondary Content === */}
        {news.length > 1 ? (
          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6 md:flex-row md:flex-wrap">
            {news.slice(1, 5).map((item, index) => (
              <Link
                key={index}
                href={"/news/" + item.slug}
                className="flex flex-col gap-1 bg-gray-100 p-2 rounded-md group"
              >
                <Image
                  src={item.featured_image}
                  layout="responsive"
                  className="w-full rounded-md"
                  width={200}
                  height={200}
                  alt="sports"
                />
                <h1 className="text-xl">{item.name}</h1>
              </Link>
            ))}
          </div>
        ) : (
          <p> </p>
        )}

        {/* === Load More news === */}
        {news.length > 5 && (
          <div className="py-10 md:w-2/3 mx-auto flex flex-col gap-5">
            {news.slice(5).map((item, index) => (
              <div key={index} className="flex flex-row gap-10">
                <div className="basis-1/2">
                  <Link
                    href={"/news/" + item.slug}
                    className="flex flex-col md:flex-row md:items-center gap-4 group"
                  >
                    <h1 className="text-2xl">{item.name}</h1>
                  </Link>
                  <p className="text-[16px] group-hover:text-black group-hover:font-medium">
                    <Link
                      href={"/news/" + item.slug}
                      className="flex flex-col md:flex-row md:items-center gap-4 group"
                    >
                      {truncate(item.description, 100)}
                    </Link>
                  </p>
                </div>
                <div className="basis-1/2">
                  <Link
                    href={"/news/" + item.slug}
                    className="flex flex-col md:flex-row md:items-center gap-4 group"
                  >
                    <Image
                      src={item.featured_image}
                      className="w-full rounded-md"
                      width={300}
                      height={300}
                      alt={item.name}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="py-10 md:w-2/3 mx-auto flex flex-col gap-5">
          {meta.links.next && (
            <button
              className="p-1 bg-orange-400 rounded-sm w-fit mx-auto text-white px-4"
              onClick={loadMoreNews}
              disabled={loadingMore}
            >
              {loadingMore ? "Loading..." : "আরও"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
