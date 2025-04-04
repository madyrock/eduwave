import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
    <nav className='flex bg-blue-600 text-white p-4 justify-between'>
    <h1 className='text-3xl font-bold'>EduWave</h1>
    <div className='space-x-4'>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
    </div>
    </nav>
    </>
  )
}

export default Navbar