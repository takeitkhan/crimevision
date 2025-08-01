import React from 'react'
import ShironamSwipper from './ShironamSwipper'
import { getNewsByCat } from '@/helpers/actions'

export default async function Shironam() {
 const shironamNews = await getNewsByCat("information_technology", 19)

  return (
    <div>
        <ShironamSwipper shironamNews={shironamNews}/>
    </div>
  )
}
