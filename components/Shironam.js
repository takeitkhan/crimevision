import React from 'react'
import ShironamSwipper from './ShironamSwipper'
import { getNewsByCat } from '@/helpers/actions'

export default async function Shironam() {
 const shironamNews = await getNewsByCat("শিরোনাম", 10)
console.log("shironam",shironamNews )
  return (
    <div>
        <ShironamSwipper shironamNews={shironamNews}/>
    </div>
  )
}
