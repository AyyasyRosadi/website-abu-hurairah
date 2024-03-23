import ZoomAnimation from '@/animation/ZoomAnimation'
import React from 'react'

function TextHumas() {
    return (
        <div className='md:p-10 flex justify-center overflow-x-hidden'>
            <ZoomAnimation duration={2000} triggerOnce={true} className='md:w-[80%] w-[100%] shadow-xl rounded-lg p-5'>
                <div className=''>
                    <h1 className='text-3xl font-semibold md:text-left text-center md:mb-0 m-4'>Humas</h1>
                    <div className='my-4 mx-4'>
                        <p className='text-xl my-2'>
                            Humas dan Personalia adalah suatu bagian kerja untuk mengorganisir berbagai aktivitas yang berkaitan dengan bidang administratif serta pengelolaan Sumber Daya Manusia (SDM) dan mengkoordinir segala hal yang berkaitan dengan hubungan masyarakat dan informasi di lingkungan PAH Mataram.
                        </p>
                    </div>
                </div>
            </ZoomAnimation>
        </div>
)
}

export default TextHumas