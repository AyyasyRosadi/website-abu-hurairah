import React from 'react'
import ZoomAnimation from '@/animation/ZoomAnimation'

export default function MaknaLogo() {
    return (
        <div className='md:p-10 flex justify-center overflow-x-hidden'>
            <ZoomAnimation duration={2000} triggerOnce={true} className='md:w-[80%] w-[100%] shadow-xl rounded-lg p-5'>
                <div className=''>
                    <h1 className='text-3xl font-semibold md:text-left text-center md:mb-0 m-4'>Profil Singkat</h1>
                    <div className='my-4 mx-4'>
                        <p className='text-xl my-2'>
                            Yayasan Al-Hunafa&apos; melalui bidang pendidikan mendirikan lembaga pendidikan formal yang berorientasi keagamaan. Lembaga pendidikan tersebut diberi nama “PONDOK PESANTREN ABU HURAIRAH MATARAM” yang disingkat dengan “PAH Mataram”. Kurikulum yang diterapkan pada lembaga ini merupakan integrasi dari kurikulum pemerintah dengan kurikulum PAH Mataram.
                        </p>
                        <p className='text-xl my-2'>
                            Pada tahun 2002, Pondok Pesantren Abu Hurairah Mataram membuka jenjang pendidikan setingkat SMA yang diberi nama Madrasah Aliyah Plus (MA Plus) dengan program unggulannya yaitu Madrasah Aliyah Keagamaan (MAK). Acuan yang digunakan dalam penerapan program ini adalah Keputusan Menteri Agama RI No. 371 Tahun 1993 tentang Madrasah Aliyah Keagamaan (MAK) dan juga Keputusan Menteri Agama RI No. 374 Tahun 1993 tentang kurikulum MAK.
                        </p>
                    </div>
                </div>
            </ZoomAnimation>
        </div>
    )
}
