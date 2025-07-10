import React from 'react'
import { headers } from 'next/headers'
import { BASE_URL } from '@/helpers/baseUrl'
import { truncate } from 'lodash'
import SingleNewsStaticPage from '@/components/SingleNewsStaticPage'
import { getNewsByCat, getSingleNews } from '@/helpers/actions'

// Function to strip HTML tags
function stripHtmlTags(input) {
  return input.replace(/<[^>]*>/g, '') // Regular expression to remove HTML tags
}

export async function generateMetadata({ params }) {
  const slug = params.slug
  const news = await fetch(
    `${BASE_URL}/api/v1/post?term_type=news&order_by=desc&slug=${slug}`
  ).then(res => res.json())

  const headersList = headers()
  const origin = headersList.get('origin') || 'https://crimevision.news'
  const currentUrl = `${origin}/news/${slug}`

  // SEO-friendly truncation
  const plainDescription = stripHtmlTags(news?.data?.description || '')

  const seoDescription = truncate(plainDescription, {
    length: 160, // Limit to a typical SEO-friendly length (like meta description length)
    separator: ' ', // Ensure we don't cut off mid-word
    omission: '...' // Add ellipsis for cut-off content
  })

  return {
    title: news?.data?.name,
    description: seoDescription, // Updated description
    openGraph: {
      title: news?.data?.name,
      description: seoDescription,
      url: currentUrl,
      siteName: 'Crime Vision',
      images: [
        {
          url: news?.data?.featured_image,
          width: 1200,
          height: 630,
          alt: news?.data?.name
        }
      ],
      type: 'article',
      publishedTime: news?.data?.created_at,
      authors: ['Mathmozo IT']
    }
  }
}

export default async function Page({ params }) {
  const slug = params.slug

  const singleNews = await getSingleNews(slug)

  // console.log("singleNews",singleNews)

  let cat_slug = ""
  if (singleNews?.categories?.length > 0) {
    cat_slug = singleNews.categories[0].slug // Get the first category slug
  }


  // console.log("singleNews",cat_slug)

  const similarNews = await getNewsByCat(cat_slug, 8)
  //  console.log("similarNews:----",similarNews)


  return (
    <div>
      <SingleNewsStaticPage slug={slug} news={singleNews} similarNews={similarNews} />
    </div>
  )
}
