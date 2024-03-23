'use client'
import SlideMobile from '@/components/SlideMobile'
import SlideWeb from '@/components/SlideWeb'
import React from 'react'

export default function Galeri() {
    return (
        <div className='md:h-[100vh] h-[50vh] overflow-x-hidden'>
            <div className='my-10 flex justify-center'>
                <h1 className='text-6xl font-extrabold'>Galeri</h1>
            </div>
            <div className='flex flex-wrap justify-center gap-10 mb-20 md:hidden'>
                <SlideMobile/>
            </div>
            <div className='flex flex-wrap justify-center gap-10 mb-20 md:block'>
                <SlideWeb/>
            </div>
        </div>
    )
}
