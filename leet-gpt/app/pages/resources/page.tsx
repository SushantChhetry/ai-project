import BackHome from "@/app/components/BackHome"
import Link from "next/link"

export default function Page() {
  return (
    <div className='flex flex-col items-center min-h-screen p-24'><div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Top Resources to Prepare for a Technical Interview</h1>

      <div className="my-4">
        <h2 className="mb-2 text-xl font-bold">Books:</h2>
        <ul className="pl-6 list-disc">
          <li className="text-lg hover:text-green-600 hover:underline">
            <Link href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850" target="_blank" rel="noopener noreferrer">Cracking the Coding Interview</Link> by Gayle Laakmann McDowell
          </li>
          <li className="text-lg hover:text-green-600 hover:underline">
            <Link href="https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844" target="_blank" rel="noopener noreferrer">Introduction to Algorithms</Link> by Thomas H. Cormen et al.
          </li>
        </ul>
      </div>

      <div className="my-4">
        <h2 className="mb-2 text-xl font-bold">Online Platforms:</h2>
        <ul className="pl-6 list-disc">
          <li className="text-lg ">
            <Link href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline">LeetCode</Link>: Provides a wide range of coding problems and a platform to practice solving them.
          </li>
          <li className="text-lg">
            <Link href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline">HackerRank</Link>: Offers coding challenges and interview preparation resources.
          </li>
        </ul>
      </div>

      <div className="my-4">
        <h2 className="mb-2 text-xl font-bold">Online Courses:</h2>
        <ul className="pl-6 list-disc">
          <li className="text-lg ">
            <Link href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline">Coursera</Link>: Offers courses on algorithms, data structures, and system design.
          </li>
          <li className="text-lg">
            <Link href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline">Udemy</Link>: Provides a variety of courses on interview preparation and specific programming languages.
          </li>
        </ul>
      </div>

      <div className="my-4">
        <h2 className="mb-2 text-xl font-bold">Coding Practice:</h2>
        <ul className="pl-6 list-disc">
          <li className="text-lg">
            <Link href="https://projecteuler.net/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline">Project Euler</Link>: Presents challenging mathematical and computational problems to improve problem-solving skills.
          </li>
          <li className="text-lg">
            <Link href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline">CodeWars</Link>: Offers coding challenges categorized by difficulty level.
          </li>
        </ul>
      </div>
      </div>

    <BackHome/>
    </div>
  )
}
