import React, { Suspense } from 'react'
import profil from "../../../assets/photos/profil_singkat.jpg"
import ImageHeader from '@/components/ImageHeader'
import MaknaLogo from '@/templates/MaknaLogo'
import Loading from '@/app/Loading'

export default function ProfilSIngkat() {
    return (
        <div className='md:mt-[10.5rem] mt-[7.5rem] w-ful bg-yellow-400l'>
            <div className='bg-black bg-opacity-40 w-[100%] h-[60vh] absolute left-0 md:top-[10.5rem] top-[7.5rem] z-10 overflow-x-hidden'></div>
             <Suspense fallback={<Loading />}>
                <ImageHeader img={profil} title="Profil Singkat" />
            </Suspense>
            <MaknaLogo />
        </div>
    )
}
