import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-md'>
        <div className='flex gap-3 items-center'>
            <Image src='/logo.png' alt='logo'
            width={50} height={50}/>
            <h2 className='text-[25px] text-red-500 tracking-wider font-semibold'>DISCOVER</h2>
        </div>
        <ul className='flex gap-8'>
            <li className='text-[18px] hover:text-red-500 cursor-pointer'>Home</li>
            <li className='text-[18px] hover:text-red-500 cursor-pointer'>About</li>
            <li className='text-[18px] hover:text-red-500 cursor-pointer'>Contact Us</li>
        </ul>
    </div>
  )
}

export default Header