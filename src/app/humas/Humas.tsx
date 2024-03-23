import React, { Suspense } from 'react'
import Loading from '../Loading'
import ImageHeader from '@/components/ImageHeader'
import HeadPhoto from "@/assets/photos/photo6.jpg"
import TextHumas from '@/templates/TextHumas'

function Humas() {
    return (
        <div className='md:mt-[10.5rem] mt-[7.5rem] w-ful bg-yellow-400l'>
            <div className='bg-black bg-opacity-40 w-[100%] h-[60vh] absolute left-0 md:top-[10.5rem] top-[7.5rem] z-10 overflow-x-hidden'></div>
            <Suspense fallback={<Loading />}>
                <ImageHeader img={HeadPhoto} title="Humas" />
            </Suspense>
            <TextHumas />
        </div>
    )
}

export default Humas