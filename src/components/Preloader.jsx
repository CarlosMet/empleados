import React from 'react'

export default function Preloader() {
  return (
    <section className='w-full mt-6'>
        <div className=' rounded-xl border border-gray-400 p-10 w-80 m-auto'>
            <div className='flex gap-3 items-center'>
                <div className='rounded-full h-12 w-12 bg-gray-400 preloader'>

                </div>
                <div>
                    <div className='w-40 h-3 bg-gray-400 mb-2 preloader'></div>
                    <div className='w-40 h-3 bg-gray-300 preloader'></div>
                </div>
            </div>
            <div className='w-full bg-gray-300 h-3 mt-4 preloader'>

            </div>
            <div className='w-28 h-28 rounded-xl bg-gray-300 m-auto mt-3 preloader'>

            </div>
            <div className='w-full bg-gray-300 h-3 mt-4 preloader'></div>
        </div>
    </section>
  )
}
