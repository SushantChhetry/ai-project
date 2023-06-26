"use client"

import React from 'react'
import Result from './Result'
import { useState } from 'react'

export default function Search() {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`change: ${event.target.name}`);
        setValue(event.target.name)
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        //send the submit value to open AI API and async await get the value
        setValue('text')
        //after we get the value from open AI we need to send this to the result component
    }


  return (
    <div>
        
        <form onSubmit={handleSubmit} className='container flex flex-col justify-center align-middle'>
            <input type='text' placeholder='enter your leet code problem' onChange={handleChange}   className="py-4 mt-2 border border-gray-300 rounded-md px-7 focus:outline-none focus:border-green-500 "
/>
            <br />
            
            <br/>
            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600 max-w-xs:" type='submit'>
                Search
            </button>
        </form>
        {value ? <Result searchText={'Hello I am search text'}/> : ''}
        
    </div>
  )
}
