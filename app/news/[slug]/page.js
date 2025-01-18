import React from "react";
import { headers } from "next/headers";
import { BASE_URL } from "@/helpers/baseUrl";
import SingleNewsStaticPage from "@/components/SingleNewsStaticPage";
import SingleNewsClientPage from "@/components/SingleNewsClientPage";

export async function generateMetadata({ params, request }) {
  const slug = params.slug;

  // Fetch data for meta title
  const news = await fetch(
    `${BASE_URL}/api/v1/post?term_type=news&order_by=desc&slug=${slug}`
  ).then((res) => res.json());

  // Get the origin from headers
  const headersList = headers();
  const origin = headersList.get("origin") || "https://crimevision.news";

  // Construct the full URL
  const currentUrl = `${origin}/news/${slug}`;

  return {
    title: news?.data?.name,
    description: news?.data?.description,
    openGraph: {
      title: news?.data?.name,
      description: news?.data?.description,
      url: currentUrl, // Dynamically constructed URL
      siteName: "Crime Vision",
      images: [
        {
          url: news?.data?.featured_image,
          width: 1200,
          height: 630,
          alt: news?.data?.name,
        },
      ],
      type: "article",
      publishedTime: news?.data?.created_at,
      authors: ["Mathmozo IT"],
    },
  };
}

export default function Page({ params }) {
  const slug = params.slug; // Use the slug from the params passed into the component

  return (
    <div>
      <SingleNewsStaticPage slug={slug}></SingleNewsStaticPage>
      {/* <SingleNewsClientPage slug={slug}></SingleNewsClientPage> */}
    </div>
  );
}
