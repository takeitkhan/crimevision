'use client'
import Featured from './featured'
import LeadNews from './lead_news'
import NewsTabs from './news_tabs'

export default function LatestNews () {
  return (
    <div>
      <div className='container pt-10'>
        <div className='grid grid-flow-row lg:grid-cols-8 lg:gap-4'>
          <div className='lg:col-span-2'>
            <LeadNews />
          </div>
          <div className='lg:col-span-4'>
            <Featured />
          </div>
          <div className='lg:col-span-2'>
            <NewsTabs />
          </div>
        </div>
      </div>
    </div>
  )
}
