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


import React from 'react'
import Image  from 'next/image'

export default async function Home() {
  return (
  <main className='relative h-screen'>
  <Image src="https://bit.ly/react-cover" alt="Image" fill className='object-cover' sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw' quality={100} priority/>
  </main>
  )
}

 