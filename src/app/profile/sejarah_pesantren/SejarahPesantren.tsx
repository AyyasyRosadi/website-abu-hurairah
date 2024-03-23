import ImageHeader from '@/components/ImageHeader'
import React, { Suspense } from 'react'
import sejarah from "../../../assets/photos/sejarah_pondok.jpg"
import SejarahSingkat from '@/templates/SejarahSingkat'
import Loading from '@/app/Loading'

export default function SejarahPesantren() {
  return (
    <div className='md:mt-[10.5rem] mt-[7.5rem] w-ful bg-yellow-400l'>
      <div className='bg-black bg-opacity-40 w-[100%] h-[60vh] absolute left-0 md:top-[10.5rem] top-[7.5rem] z-10 overflow-x-hidden'></div>
      <Suspense fallback={<Loading />}>
        <ImageHeader img={sejarah} title="Sejarah Singkat" />
      </Suspense>
      <SejarahSingkat />
    </div>
  )
}
