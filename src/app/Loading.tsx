import React from 'react'
import { BiLoader } from 'react-icons/bi'

export default function Loading() {
  return (
    <div className='absolute top-0 bg-black bg-opacity-50 h-[60vh] flex justify-center items-center z-50 w-screen'>
      <h1 className=''><BiLoader className="fill-white w-20 h-20 animate-spin" loading="lazy" placeholder="blur" /></h1>
    </div>
  )
}
