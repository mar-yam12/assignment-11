import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-16 bg-indigo-200 text-black relative shadow-sm font-mono'>
        <div className='pl-8 font-bold text-xl'>
            <h1 className='text-xl'>Maryam</h1>
        </div>
        <div className='pr-8 md:block hidden'>
            <ul className='flex space-x-8'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'api/external'}><li>API</li></Link>
                <Link href={'/'}><li>Contact</li></Link>
            </ul>       
        </div>
    </div>
  )
}

export default Navbar
