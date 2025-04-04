import React from 'react'

const Contact = () => {
  return (
    <div className='p-10 max-w-md mx-auto h-[80vh]'>
        <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
        <form className='space-y-4 max-w-md mx-auto'>
            <input className='w-full p-2 border rounded' placeholder='Name'/>
            <input className='w-full p-2 border rounded' placeholder='Email' />
            <textarea className='w-full p-2 border rounded' placeholder="Your Message"></textarea>
            <button className='bg-blue-600 text-white px-4 py-2 rounded'>Submit</button>
        </form>
    </div>
  )
}

export default Contact