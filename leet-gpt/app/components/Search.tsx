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

        //after we get the value from open AI we need to send this to the result component
    }


  return (
    <div>
        Search
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter the problem text' onChange={handleChange}/>
            <br />
            <button type='submit'>Search</button>
        </form>
        <Result searchText={'Hello I am search text'}/>
    </div>
  )
}
