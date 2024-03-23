import ZoomAnimation from '@/animation/ZoomAnimation'
import React from 'react'

export default function Sekilas() {
    return (
        <div className='md:h-[80vh] w-screen bg-slate-100 flex justify-center items-center md:px-[20vw] px-4 overflow-x-hidden'>
            <ZoomAnimation duration={2000} triggerOnce={true} >
                <div className='shadow-xl my-20 p-8 md:w-[60vw] rounded-xl'>
                    <h1 className='font-extrabold text-4xl text-slate-800 font-sans'>Tujuan Abu Hurairah Mataram</h1>
                    <p className='mt-8 text-xl text-gray-500'>Berangkat dari kesadaran yang utuh dan landasan yang kokoh tentang pentingnya menuntut ilmu syar&apos;i (ilmu agama yang bersandarkan pada Al-Qur&apos;an dan Sunnah dan dipahami sesuai dengan pemahaman para sahabat Rasulullah Sallallahu &apos;Alaihi Wasallam) dan keutamaan yang diperoleh oleh orang-orang yang menuntut ilmu syar&apos;i serta mengamalkannya. Maka, Yayasan Al-Hunafa&apos; melalui bidang pendidikan mendirikan lembaga pendidikan formal yang berorientasi keagamaan.</p>
                    <p className='mt-8 text-xl text-gray-500'>Alhamdulillah di Pondok Abu Hurairah Mataram, tersedia lembaga  pendidikan tingkat dasar sampai dengan lembaga pendidikan lanjutan dan Kurikulum yang diterapkan pada setiap lembaga merupakan integrasi dari kurikulum pemerintah dengan kurikulum PAH Mataram.</p>
                </div>
            </ZoomAnimation>
        </div>

    )
}
