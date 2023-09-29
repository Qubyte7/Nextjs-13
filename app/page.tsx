import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main>
      
      <h1>hello Shami</h1>
      {/* Link is a better way to specify links because it does not require the reload of all data on our website it simply change the UI to the link of the page linked to */}
      <Link href="/users">users</Link>
      <ProductCart />
      </main>
  )
}
