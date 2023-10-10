import Link from 'next/link'
import ProductCart from './components/ProductCart'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
const session = await getServerSession(authOptions)
const name = session!.user!.name!.split(" ");
const firstName = name[0];
  return (
    <main>
      
      <h1>hello {session && <span>{firstName}</span>}</h1>
      {/* Link is a better way to specify links because it does not require the reload of all data on our website it simply change the UI to the link of the page linked to */}
      <Link href="/users">users</Link>
      <ProductCart />
      </main>
  )
}
