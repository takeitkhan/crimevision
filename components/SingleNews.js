"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axiosInstance from "@/helpers/axiosInstance";
import { debounce } from "lodash";
import { FaCopy, FaPrint, FaThumbsUp, FaShareSquare } from "react-icons/fa";

export default function SingleNews({ slug }) {
  const [news, setNews] = useState(null);
  const [similarNews, setSimilarNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);

  const countVisitor = async () => {
    const response = await axiosInstance.get(`/post/visitor?slug=${slug}`);
    console.log("visitor res", response);
  };

  // Retry mechanism with exponential backoff to handle 429 errors
  const fetchNewsData = async () => {
    try {
      const response = await axiosInstance.get(
        `/post?term_type=news&order_by=desc&slug=${slug}`
      );
      setNews(response.data.data);
      // setCategories(response.data.data.categories);
      const categories = response.data.data.categories;
      if (categories.length > 0) {
        const cat_id = categories[0].slug; // Get the first category slug
        const response = await axiosInstance.get(
          `/posts?term_type=news&per_page=8&order_by=desc&category_slug=${cat_id}`
        );
        setSimilarNews(response.data.data);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // Fetch similar news based on category
  // const fetchSimilarNews = async () => {
  //   console.log("cat:", categories);
  //   try {
  //     if (categories.length > 0) {
  //       const cat_id = categories[0].slug; // Get the first category slug
  //       const response = await axiosInstance.get(
  //         `/posts?term_type=news&per_page=8&order_by=desc&category_slug=${cat_id}`
  //       );
  //       setSimilarNews(response.data.data);
  //     }
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  useEffect(() => {
    countVisitor();
    fetchNewsData();
    // fetchSimilarNews();
  }, [slug]);

  // console.log("news", news);

  //   // Set the document title and meta description dynamically
  //   //   document.title = news.name || "Crime Vision"; // Fallback title
  //   // Update meta description
  //   const metaDescription = document.querySelector(
  //     'meta[name="description"]'
  //   );
  //   if (metaDescription) {
  //     metaDescription.content = news.description || "Crime Vision"; // Fallback description
  //   }
  //   const metaTwitterTitle = document.querySelector(
  //     'meta[name="twitter:title"]'
  //   );
  //   if (metaTwitterTitle) {
  //     metaTwitterTitle.content = news.name || "Crime Vision"; // Fallback description
  //   }
  //   const metaTwitterDescription = document.querySelector(
  //     'meta[name="twitter:description"]'
  //   );
  //   if (metaTwitterDescription) {
  //     metaTwitterDescription.content = news.description || "Crime Vision"; // Fallback description
  //   }
  //   // Helper function to update or create meta tag
  //   const updateOrCreateMetaTag = (property, content) => {
  //     let tag = document.querySelector(`meta[property="${property}"]`);
  //     if (tag) {
  //       tag.content = content;
  //     } else {
  //       tag = document.createElement("meta");
  //       tag.setAttribute("property", property);
  //       tag.content = content;
  //       document.head.appendChild(tag);
  //     }
  //   };
  //   // Update or create Open Graph meta tags
  //   updateOrCreateMetaTag("og:title", news.name || "Crime Vision");
  //   updateOrCreateMetaTag(
  //     "og:description",
  //     news.description || "Crime Vision"
  //   );
  //   updateOrCreateMetaTag(
  //     "og:image",
  //     news.featured_image || "/default-image.jpg"
  //   ); // Use a default image if needed
  //   updateOrCreateMetaTag("og:url", window.location.href); // Use the current page URL
  //   updateOrCreateMetaTag("og:type", "article"); // Assuming it's an article
  //   updateOrCreateMetaTag("og:site_name", "Crime Vision"); // Customize with your site's name
  // Refetch similar news when categories change
  //   if (categories.length > 0) {
  //     fetchSimilarNews();
  //   }
  //     }
  //   }, [news, categories]); // Only depend on news and categories

  // Copy link to clipboard
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handlePrint = () => {
    const printContent = document.getElementById("printableDiv");
    const windowPrint = window.open("", "", "width=900,height=650");

    // Define the logo URL
    const logoUrl = "/img/logo.jpg";

    // Create a new image to ensure it loads
    const img = new window.Image(); // Use window.Image to access the native constructor
    img.src = logoUrl;

    img.onload = () => {
      // Writing the content for the new print window
      windowPrint.document.write(`
                <html>
                    <head>
                        <title>ক্রাইম ভিশন</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 20px;
                                padding: 20px;
                            }
                            img {
                                max-width: 100%;
                            }
                            .container {
                                margin: 0;
                            }
                            .logo {
                                text-align: center;
                                margin-bottom: 20px;
                            }
                            .title {
                                font-size: 24px; /* Adjust title size as needed */
                                margin: 20px 0;
                                text-align: center;
                                font-weight: bold;
                            }
                        </style>
                    </head>
                    <body>
                        <div className="logo">
                            <img src="${logoUrl}" alt="Logo" width="200" />
                        </div>
                        <div className="title">${news.name}</div>  <!-- Include the news title here -->
                        ${printContent.innerHTML}
                    </body>
                </html>
            `);

      windowPrint.document.close(); // Close the document to finish loading
      windowPrint.focus(); // Focus on the new window

      // Trigger print and close the window after printing
      windowPrint.print();
      windowPrint.onafterprint = () => windowPrint.close();
    };

    img.onerror = () => {
      console.error("Failed to load the logo image.");
    };
  };

  // Handle "Like" action
  const handleLike = () => {
    setLikes(likes + 1);
    // Optionally, send the like data to the server
    // axiosInstance.post('/like', { likes: likes + 1 });
  };

  // Share current page (web share API)
  const handleShare = () => {
    const url = window.location.href;
    const title = document.title;

    const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;

    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: fbShareLink + url,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      alert("Share feature is not supported in this browser.");
    }
  };

  // Display loading message if data is still being fetched
  if (loading) {
    return (
      <section className="homeBlock pt-[50px] pb-[80px] px-5">
        <div className="container mx-auto">Loading...</div>
      </section>
    );
  }

  // Display error message if there's an error
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-5">
          {news && (
            <>
              <h1 className="text-4xl font-medium">{news.name}</h1>

              <div className="md:flex md:justify-between gap-10">
                {/* news details */}
                <div className="basis-[70%]">
                  <Image
                    className="w-full"
                    src={news.featured_image}
                    alt={news.name}
                    width={600}
                    height={400}
                    layout="responsive"
                  />
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="pt-4 pb-10">
                      <span>ক্রাইম ভিশন</span>
                      <p>
                        প্রকাশ: {news.post_date} | {news.post_time} | আপডেট:{" "}
                        {news.update_post_date} | {news.update_post_time}
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                      <button
                        className="bg-gray-200 p-1 px-3 rounded-md flex items-center justify-center gap-1"
                        onClick={handleCopyLink}
                      >
                        <FaCopy className="text-red-700" />
                      </button>

                      <button
                        className="bg-gray-200 p-1 px-3 rounded-md flex items-center justify-center gap-1"
                        onClick={handlePrint}
                      >
                        <FaPrint className="text-red-700" />
                      </button>

                      <button
                        className="bg-[#2176FF] text-white p-1 px-3 rounded-md flex items-center justify-center gap-1"
                        onClick={handleLike}
                      >
                        <FaThumbsUp />
                      </button>

                      <button
                        className="bg-[#2176FF] text-white p-1 px-3 rounded-md flex items-center justify-center gap-1"
                        onClick={handleShare}
                      >
                        <FaShareSquare />
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex" id="printableDiv">
                      <div
                        className="lg:basis-[100%] flex flex-col gap-10"
                        dangerouslySetInnerHTML={{ __html: news.description }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* similar news */}
                <div className="basis-[30%] mt-10 lg:mt-0">
                  <div className="lg:flex lg:flex-col lg:gap-4 text-xl flex flex-col gap-5">
                    {similarNews.length > 0 ? (
                      similarNews.map((item, index) => (
                        <div key={index} className="flex justify-between gap-4">
                          <div className="basis-1/2">
                            <Image
                              className="basis-1/2 block w-10 h-2/6 rounded-md"
                              src={item.featured_image}
                              alt={item.name}
                              width={140}
                              height={50}
                              layout="responsive"
                            />
                          </div>
                          <div className="basis-1/2">
                            <Link
                              className="basis-1/2 inline-block"
                              href={`/news/${item.slug}`}
                            >
                              <h2 className="basis-1/2 hover:text-yellow-600 w-fit">
                                {item.name}
                              </h2>
                            </Link>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No similar news available</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
