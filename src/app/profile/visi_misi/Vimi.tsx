import ImageHeader from '@/components/ImageHeader'
import React, { Suspense } from 'react'
import visiMisiImage from "../../../assets/photos/visi_misi.jpg"
import VisiMisi from '@/templates/VisiMisi'
import Loading from '@/app/Loading'

export default function Vimi() {
    return (
        <div className='md:mt-[10.5rem] mt-[7.5rem] w-ful bg-yellow-400l'>
            <div className='bg-black bg-opacity-40 w-[100%] h-[60vh] absolute left-0 md:top-[10.5rem] top-[7.5rem] z-10 overflow-x-hidden'></div>
            <Suspense fallback={<Loading />}>
            <ImageHeader img={visiMisiImage} title="Visi Misi" />
            </Suspense>
            <VisiMisi />
        </div>
    )
}
