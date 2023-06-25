import Link from "next/link"

export default function Nav() {
  return (
    <>
    <nav>
         <div className="container px-4 py-6 mx-auto bg-gray-500">
        <div className="flex items-center justify-between text-white/90">
            <h3 className='flex-col text-xl '><Link href="/">LeetGPT</Link></h3>
            <ul className='flex space-x-4'>
                <li><Link href="/pages/about" className="hover:text-white/40">About</Link></li>
                <li><Link href="/pages/guide" className="hover:text-white/40">Guide</Link></li>
                <li><Link href="/pages/study-plan" className="hover:text-white/40">Study Plan</Link> </li>
            </ul>
            </div>
            </div>
    </nav>
    </>
  )
}
