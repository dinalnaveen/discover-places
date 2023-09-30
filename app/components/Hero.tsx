import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='text-center'>
        <div>
            <Image src='/bg.png' alt='hero-image'
            width={800} height={200} className='w-full absolute mt-[-110px ]'/>
            <div className='mt-[70px]'>
                <h2 className='text-[55px] text-red-500 font-semibold tracking-widest'>DISCOVER</h2>
                <h2 className='text-[25px]'>Your Amazing City</h2>
                <div className='pt-4 flex justify-center gap-3 '>
                      <input type="text" id="search" name="search" placeholder='Search Anything' className='z-10 p-3 bg-white border-[1px] rounded-full shadow-sm px-5 pr-[400px] w=[36%] '></input>
                      <button className='bg-red-600 rounded-full p-3 hover:scale-105 z-10 shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                      </button>
                </div>
            </div>
        </div>
    </div>
  )
}
