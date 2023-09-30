import React from 'react'
import Image from 'next/image'
import location from '@/data/location'

export default function Results() {
  return (
    <div className='mt-[250px]'>
        <h2 className='text-[20px] font-bold ml-[80px]'>Search Results</h2>
        <div className='grid grid-cols-4 mx-[80px] mt-[20px] mb-[20px] gap-[30px]'>
            {location.map((item,index)=>(
                    <div className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='w-fit '>
                    <Image className="rounded-t-lg max-h-[150px]" src={item.image} alt={item.name} width={300} height={300} />
                    </div>
                    <div className="p-5">
                        
                            <h2 className="text-[16px] font-semibold ">{item.city}</h2>
                            <div className='flex gap-2 mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p className='ml-1'>{item.address}</p>
                            </div>
    
                            <div className='flex gap-2 mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
    
                            <p>3.2/4.0</p>
                            </div>
                        
                        
                    </div>
                </div>
            ))}
            

        </div>
    </div>
  )
}
