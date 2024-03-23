import React from 'react'
import Image from 'next/image'
import syaikh from "../assets/photos/syaikh.jpg"
import masjid from "../assets/photos/masjid.jpg"
import kelas from "../assets/photos/kelas.jpg"
import liqo from "../assets/photos/liqo.jpg"
import ZoomAnimation from '@/animation/ZoomAnimation'
import Slide from '@/components/slide'

function SlideImage() {
    return (
        <Slide>
            <Image loading='eager' placeholder='blur' src={syaikh} alt={'syaikh'} className='w-full h-[95vh] object-cover' />
            <Image loading='lazy' placeholder='blur' src={masjid} alt={'masjid'} className='w-full h-[95vh] object-cover' />
            <Image loading='lazy' placeholder='blur' src={kelas} alt={'kelas'} className='w-full h-[95vh] object-cover' />
            <Image loading='lazy' placeholder='blur' src={liqo} alt={'liqo'} className='w-full h-[95vh] object-cover' />
        </Slide>
    )
}

export default function PhotoSlider() {
    return (
        <div className='mt-[5vh] overflow-x-hidden overflow-y-hidden'>
            <div className='bg-black bg-opacity-40 w-full h-[95vh] absolute left-0 top-12 z-10 overflow-x-hidden'></div>
            <SlideImage />
            <ZoomAnimation duration={1000} triggerOnce={true} className='absolute top-14 w-full h-[90vh] flex justify-center items-center z-10'>
                <h1 className='md:text-6xl text-4xl text-white md:font-caprasimo font-serif md:font-bold text-center '>Berkarakter dengan Ilmu, Amal, dan Adab.</h1>
            </ZoomAnimation>
        </div>
    )
}
