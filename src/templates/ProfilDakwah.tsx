import ZoomAnimation from '@/animation/ZoomAnimation'
import React from 'react'

function ProfilDakwah() {
    return (
        <div className='md:p-10 flex justify-center'>
            <ZoomAnimation duration={2000} triggerOnce={true} className='md:w-[80%] w-[100%] shadow-xl rounded-lg p-5'>
                <div className=''>
                    <h1 className='text-3xl font-semibold md:text-left text-center md:mb-0 m-4'>Dakwah & Sosial</h1>
                    <div className='my-4 mx-4'>
                        <p className='text-xl my-2'>
                            Ditengah-tengah kesibukan mengajar, mendidik dan mengasuh santri, para asaatidzah juga menyempatkan diri mereka untuk mengabdi kepada masyarakat. Yaitu penyebaran dakwah kedaerah-daerah binaan. Ada yang dijadwalkan kajian rutin setiap hari seperti ke Lombok Utara, ada juga setiap pekan seperti ke Lombok Timur dan ada juga setiap bulan seperti ke Sumabawa Besar, bahkan ada yang pertriwulan atau persemester ke Dompu dan Bima
                        </p>
                    </div>
                </div>
            </ZoomAnimation>
        </div>)
}

export default ProfilDakwah