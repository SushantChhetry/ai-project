import React from 'react'
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='text-center bg-gray-700 fot-bold py-7 text-white/70'>
        <div className='container px-4 mx-auto'>
            <p className='text-sm'>© 2023 LeetGPT. All rights reserved.</p>
            <br/>
            <div className='flex items-center justify-center'>
                
               
                <ul className='flex space-x-4'>
                    <li>
                        <Link href="/" className="text-sm hover:text-gray-400"><FaLinkedin size={22}/></Link>
                    </li>
                    <li>
                        <Link href="/" className="text-sm hover:text-gray-400"><FaGithub size={22}/></Link>
                    </li>
                    <li>
                        <Link href="/" className="text-sm hover:text-gray-400"><FaTwitter size={22}/></Link>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
  )
}
