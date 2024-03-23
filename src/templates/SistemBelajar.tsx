import ZoomAnimation from '@/animation/ZoomAnimation'
import React from 'react'

export default function SistemBelajar() {
    return (
        <div className='md:h-[50vh] w-screen bg-slate-100 flex justify-center items-center md:px-[20vw] px-4 overflow-x-hidden'>
            <ZoomAnimation duration={2000} triggerOnce={true} >
                <div className='shadow-xl my-20 p-8 md:w-[60vw] rounded-xl'>
                    <h1 className='font-extrabold text-4xl text-slate-800 font-sans'>Sistem belajar</h1>
                    <p className='mt-8 text-xl text-gray-500'>Kurikulum yang diterapkan di Pondok Pesantren Abu Hurairah Mataram adalah integrasi kurikulum pemerintah dengan kurikulum PAH Mataram, Kurikulum Pemerintah semuanya terafiliasi dengan Dinas Pendidikan kecuali MA Plus dan PPS Wustho dan Ulya berafiliasi dengan Kementrian Agama.</p>
                </div>
            </ZoomAnimation>
        </div>

    )
}
