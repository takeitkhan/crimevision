
import { getFeaturedNews, getLeadNews } from '@/helpers/actions'
import Featured from './featured'
import LeadNews from './lead_news'
import NewsTabs from './news_tabs'

export default async function LatestNews() {

  const featuredNews = await getFeaturedNews();
  const leadNews = await getLeadNews();

  // console.log("leadNews", featuredNews)

  return (
    <div>
      <div className='container pt-10 flex flex-col lg:flex-row gap-2'>
        {/* <div className='w-full lg:w-1/4 '>
          <LeadNews leadNews={leadNews} />
        </div> */}
        <div className='w-full lg:w-4/6 '>
          <Featured featuredNews={featuredNews} />
        </div>
        <div className='w-full lg:w-2/6'>
          <NewsTabs />
        </div>

      </div>
    </div>
  )
}
