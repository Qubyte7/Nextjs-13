// import Link from 'next/link'
// import ProductCart from './components/ProductCart'
// import { getServerSession } from 'next-auth'
// import { authOptions } from './api/auth/[...nextauth]/route'
// import SendEmail from './components/SendEmail'
// export default async function Home() {
// const session = await getServerSession(authOptions)
//   return (
//     <main>
      
//       <h1>hello {session && <span>{session.user!.name?.split(" ")[0]}</span>}</h1>
//       {/* Link is a better way to specify links because it does not require the reload of all data on our website it simply change the UI to the link of the page linked to */}
//       <Link href="/users">users</Link>
//       <ProductCart />
//       <SendEmail />

//       </main>
//   )
// }

'use client'
import React, { useState } from 'react'
import Image  from 'next/image'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const HeavyComponents  = dynamic (()=> import('./components/HeavyComponents'))
export default async function Home() {
  const [isVisible,setIsVisible] = useState(false)
  const [buttonVisility,setButtonVisility] = useState(true)
  return (
  // <main className='relative h-screen'>
  // <Image src="https://bit.ly/react-cover" alt="Image" fill className='object-cover' sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw' quality={100} priority/>
  // </main>
  <div className='font-caveat'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate deserunt asperiores in ea commodi, consequatur impedit eveniet, ex fugiat, placeat illo vero magnam aliquam sequi sapiente eos iure corrupti obcaecati?
  <h1>INNOCENT</h1>
  {buttonVisility ? <button onClick={() =>{ setIsVisible(true), setButtonVisility(false)}}  className='bg-blue-600 text-white m-2 p-5 rounded-sm'>Show More</button>
  :<button onClick={() => setIsVisible(false)} className='bg-blue-600 text-white m-2 p-5 rounded-sm'>Show less</button>}
  {isVisible && <HeavyComponents/>}
  </div>
  )
}
// export const metadata : Metadata ={
//   title:'Shami',
//   description:'selling goods'
// }

 