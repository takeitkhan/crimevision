import Bangladesh from './homepage_sections/bangladesh'
import Entertainment from './homepage_sections/entertainment'
import LatestNews from './homepage_sections/latest_news'
import Sports from './homepage_sections/sports'
import InformationTechnology from './homepage_sections/information_technology'
import EightCats from './homepage_sections/eight_cats'

export const metadata = {
  title: 'ক্রাইম ভিশন',
  description: 'সর্বশেষ সংবাদ সবার আগে',
  keywords: 'Daily News, Crime News, Crime Vision, Daily Leading News, সর্বশেষ সংবাদ সবার আগে',
  openGraph: {
    title: 'ক্রাইম ভিশন',
    description: 'সর্বশেষ সংবাদ সবার আগে',
    images: ['/img/default_image.png'], // Ensure the image exists in `/public/img/`
    url: 'https://crimevision.com',
    type: 'website'
  }
}

const HomeTopBlock = () => {
  return (
    <div className='px-1.5'>
      <LatestNews />
      <EightCats />
      <Bangladesh />
      <Sports />
      <Entertainment />
      <InformationTechnology />
    </div>
  )
}

export default HomeTopBlock
