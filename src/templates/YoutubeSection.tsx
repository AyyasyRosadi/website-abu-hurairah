'use client'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'

function YoutubeSection() {
    return (
        <div className='md:p-10 flex justify-center'>
            <Zoom duration={2000} triggerOnce={true} className='md:w-[90%] w-[100%] md:p-5'>
                <div className=''>
                    <h1 className='text-3xl font-semibold md:text-left text-center md:mb-0 m-4'></h1>
                    <div className='md:flex md:flex-row flex-col justify-between gap-7 md:m-0 m-3 '>
                        <iframe className='md:w-[650px] w-[330px] md:h-[360px] h-[280px]' loading='lazy' placeholder='empty' src="https://www.youtube.com/embed/nG_5P1GpNyM?si=1SmiTco9I2zM9w9m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe className='md:w-[650px] w-[330px] md:h-[360px] h-[280px]' loading='lazy' placeholder='empty' src="https://www.youtube.com/embed/Npbw-hupxjY?si=4pQbRweByMio3lhS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </Zoom>
        </div>)
}

export default YoutubeSection