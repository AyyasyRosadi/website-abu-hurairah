import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

export default function ImageHeader({ img, title }: { img: StaticImport, title: string }) {
    return (
        <div className='relative'>
            <Image loading='lazy' placeholder='blur' src={img} alt="" className='h-[60vh] w-[100%] object-cover' />
            <div className='absolute top-0 w-full flex justify-center items-center h-[60vh] z-10'>
                <h1 className='text-center text-white text-5xl font-caprasimo font-extrabold'>{title}</h1>
            </div>

        </div>
    )
}
