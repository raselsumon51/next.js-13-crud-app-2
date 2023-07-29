'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function addTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 

  const handleSubmit = async (e)=> {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      console.log(res);
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='w-full'>
      <div className='bg-white p-20'>
        <h1 className="text-center text-4xl py-6">Fill Up The Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <label htmlFor="title" className="text-xl block mt-8 mb-8">Enter Title</label>
            <input
              type='text'
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder='Topic Title'
              className="w-full shadow border rounded p-3"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="text-xl block mt-8 mb-8">Enter Description</label>
            <input
              type='text'
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder='Topic Description'
              className="w-full shadow border rounded p-3"
            />
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
