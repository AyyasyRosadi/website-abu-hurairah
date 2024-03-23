import ZoomAnimation from '@/animation/ZoomAnimation'
import React from 'react'

export default function VisiMisi() {
    return (
        <div className='md:p-10 flex justify-center overflow-x-hidden'>
            <ZoomAnimation duration={2000} triggerOnce={true} className='md:w-[80%] w-[100%] shadow-xl rounded-lg p-5'>
                <div>
                    <h1 className='text-3xl font-semibold md:text-left text-center md:mb-0 mb-5'>Visi Misi</h1>
                    <div className='mt-5 px-5'>
                        <h1 className='text-xl font-semibold'>Visi :</h1>
                        <p className='text-lg pl-5'>Menjadi salah satu Pondok Pesantren Islam terbaik di Indonesia, yang bermanhaj Salaf ahlussunnah wal jama’ah.</p>
                    </div>
                    <div className='mt-5 px-5'>
                        <h1 className='text-xl font-semibold'>Misi :</h1>
                        <ul className='list-decimal ml-10 mb-2'>
                            <li className='text-lg'>Menyelenggarakan pengajaran dan pengasuhan untuk melahirkan santri yang beraqidah dan bermanhaj salaf ahlussunnah wal jama&apos;ah, mengamalkan ilmu, dan berakhlaq mulia. (Mutu lulusan).</li>
                            <li className='text-lg'>Menyelenggarakan pengajaran dan pengasuhan untuk melahirkan santri yang menghafal, memahami, dan mengamalkan Al-Qur&apos;an. (Mutu lulusan).</li>
                            <li className='text-lg'>Menyelenggarakan pengajaran dan pengasuhan untuk melahirkan santri yang menguasai bidang sains, teknologi informatika, bahasa Arab, dan bahasa Inggris. (Mutu lulusan).</li>
                            <li className='text-lg'>Menyelenggarakan pengajaran dan pengasuhan untuk melahirkan santri yang mampu melanjutkan pendidikan ke jenjang perguruan tinggi dalam dan luar negeri. (Mutu lulusan).</li>
                            <li className='text-lg'>Melaksanakan pembelajaran yang aktif, kreatif, efektif, dan menyenangkan. (Proses pembelajaran).</li>
                            <li className='text-lg'>Melaksanakan pembelajaran dengan standar mu’adalah dari Universitas Islam Madinah. (Proses pembelajaran).</li>
                            <li className='text-lg'>Meningkatkan profesionalisme pendidik dan tenaga kependidikan. (Mutu SDM).</li>
                            <li className='text-lg'>Manajemen dengan standar SPM, SNP, dan ISO 21001. (Manajemen PAH Mataram).</li>
                            <li className='text-lg'>Meningkatkan kerjasama dan kemitraan dengan pihak luar atau stakeholder. (Manajemen PAH Mataram).</li>
                        </ul>
                    </div>
                    <div className='mt-5 px-5'>
                        <h1 className='text-xl font-semibold'>Motto :</h1>
                        <p className='text-lg pl-5'>Berkarakter dengan Ilmu, Amal, dan Adab.</p>
                    </div>
                </div>
            </ZoomAnimation>
        </div>
    )
}
