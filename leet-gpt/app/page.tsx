import Image from 'next/image'

import Search from './components/Search'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <h1 className='text-4xl font-semibold'> <span className='font-mono '>Leet</span> GPT</h1>
      <Search/>
      
    </main>
  )
}
