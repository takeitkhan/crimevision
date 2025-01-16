import { BASE_URL } from "@/helpers/baseUrl";
import truncate from "@/helpers/truncate";
import Image from "next/image";
import Link from "next/link";
// import { FaCopy, FaPrint, FaThumbsUp, FaShareSquare } from "react-icons/fa";

export default async function SingleNews({ slug }) {
  let news;
  let similarNews;
  //   const url = "http://mathmozocms.test/api/v1";
  try {
    const response = await fetch(
      `${BASE_URL}/api/v1/post?term_type=news&order_by=desc&slug=${slug}`,
      {
        next: { revalidate: 30 }, // Enable ISR
      }
    );
    const json = await response.json(); // Parse response as JSON
    news = json.data; // Access the `data` property
  } catch (error) {
    console.error("Error fetching news:", error.message);
    return (
      <div>Something Went wrong! Please Reload page or try again later.</div>
    );
  }

  const categories = news?.categories;

  //   console.log("cat;", categories);
  if (categories?.length > 0) {
    const cat_slug = categories[0].slug; // Get the first category slug

    //   fetch similarNews
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/posts?term_type=news&per_page=8&order_by=desc&category_slug=${cat_slug}`,
        {
          next: { revalidate: 30 }, // Enable ISR
        }
      );
      const json = await response.json(); // Parse response as JSON
      similarNews = json.data; // Access the `data` property
    } catch (error) {}
  }

  // console.log("nmews", news);
  //   // Button handlers (add meaningful implementations)
  //   const handleCopyLink = () => {
  //     navigator.clipboard.writeText(window.location.href);
  //     alert("Link copied to clipboard!");
  //   };

  //   const handlePrint = () => {
  //     window.print();
  //   };

  //   const handleLike = () => {
  //     console.log("Liked!");
  //     alert("You liked this post!");
  //   };

  //   const handleShare = () => {
  //     alert("Share functionality is not implemented yet!");
  //   };

  return (
    <section className="py-10">
      <div className="container mx-auto px-5">
        {news ? (
          <>
            <h1 className="text-4xl font-medium">{news.name}</h1>

            <div className="md:flex md:justify-between gap-10">
              {/* Main Content */}
              <div className="basis-[70%]">
                <Image
                  className="w-full"
                  src={news?.featured_image}
                  alt={news.name}
                  width={600}
                  height={400}
                />
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="pt-4 pb-10">
                    <span>ক্রাইম ভিশন</span>
                    <p>
                      প্রকাশ: {news.post_date} | {news.post_time} | আপডেট:{" "}
                      {news.update_post_date} | {news.update_post_time}
                    </p>
                  </div>

                  {/* share, copy and download section */}
                  {/* <div className="flex items-center justify-center gap-6">
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
                  </div> */}
                </div>

                {/* Description */}
                <div>
                  <div className="flex" id="printableDiv">
                    <div
                      className="lg:basis-[100%] flex flex-col gap-10"
                      dangerouslySetInnerHTML={{ __html: news.description }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Sidebar (Similar News ) */}
              <div className="basis-[30%] mt-10 lg:mt-0">
                <div className="lg:flex lg:flex-col lg:gap-4 text-xl flex flex-col gap-5">
                  {similarNews?.length > 0 ? (
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
                              {/* {truncate(item.name, 10)} */}
                              {item.name.slice(0, 55)}...
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
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
}
