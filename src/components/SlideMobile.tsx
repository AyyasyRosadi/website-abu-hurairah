'use client'
import React from 'react'
import poto1 from "../assets/photos/photo1.jpg"
import poto2 from "../assets/photos/photo2.jpg"
import poto3 from "../assets/photos/photo3.jpg"
import poto4 from "../assets/photos/photo11.jpg"
import poto5 from "../assets/photos/photo5.jpg"
import poto6 from "../assets/photos/photo12.jpg"
import poto7 from "../assets/photos/photo7.jpg"
import poto8 from "../assets/photos/photo8.jpg"
import poto9 from "../assets/photos/photo13.jpg"
import Image from 'next/image'
import Slide from '@/components/slide'

function SlideMobile() {
    return (
        <Slide web={"md:hidden block"}>
            <div className='flex flex-row gap-5 w-screen justify-center'>
                <Image loading='lazy' placeholder='blur' src={poto1} alt="" className='md:w-[30%] w-[95%] mx-auto md:h-[400px] h-[90%]' />
            </div>
            <div className='flex flex-row gap-5 w-screen justify-center'>
                <Image loading='lazy' placeholder='blur' src={poto2} alt="" className='md:w-[30%] w-[95%] mx-auto md:h-[400px] h-[90%]' />
            </div>
            <div className='flex flex-row gap-5 w-screen justify-center'>
                <Image loading='lazy' placeholder='blur' src={poto3} alt="" className='md:w-[30%] w-[95%] mx-auto md:h-[400px] h-[90%]' />
            </div>
            <div className='flex flex-row gap-5 w-screen justify-center'>
                <Image loading='lazy' placeholder='blur' src={poto7} alt="" className='md:w-[30%] w-[95%] mx-auto md:h-[400px] h-[90%]' />
            </div>
            <div className='flex flex-row gap-5 w-screen justify-center'>
                <Image loading='lazy' placeholder='blur' src={poto5} alt="" className='md:w-[30%] w-[95%] mx-auto md:h-[400px] h-[90%]' />
            </div>
            <div className='flex flex-row gap-5 w-screen justify-center'>
                <Image loading='lazy' placeholder='blur' src={poto6} alt="" className='md:w-[30%] w-[95%] mx-auto md:h-[400px] h-[90%]' />
            </div>
            <div className='flex flex-row gap-5 w-screen justify-center'>
                <Image loading='lazy' placeholder='blur' src={poto4} alt="" className='md:w-[30%] w-[95%] mx-auto md:h-[400px] h-[90%]' />
            </div>
            <div className='flex flex-row gap-5 w-screen justify-center'>
                <Image loading='lazy' placeholder='blur' src={poto8} alt="" className='md:w-[30%] w-[95%] mx-auto md:h-[400px] h-[90%]' />
            </div>
            <div className='overflow-x-hidden flex flex-row gap-5 w-screen justify-center'>
                <Image loading='lazy' placeholder='blur' src={poto9} alt="" className='md:w-[30%] w-[90%] mx-auto md:h-[400px] h-[50% mx-auto]' />
            </div>
        </Slide >
    )
}

export default SlideMobile