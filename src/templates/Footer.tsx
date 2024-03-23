'use client'
import React from 'react'
import { BiLogoFacebook, BiLogoGmail, BiLogoInstagramAlt, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'
import { SiGooglemaps } from "react-icons/si"

export default function Footer() {
    return (
        <footer className=' bg-[#c8a75a] py-10 overflow-x-hidden'>
            <div className="flex gap-8 md:flex-row flex-col justify-between md:mx-20 mx-5">
                <div className='my-auto md:w-[15%] w-[90%]'>
                    <h1 className='text-2xl mb-6 font-extrabold'>Lembaga</h1>
                    <ul className='list-disc text-lg space-y-2'>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://sditputra.ponpesabuhurairah.id">SD IT Putra</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://sditputri.ponpesabuhurairah.id">SD IT Putri</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="#">SD IT Sembalun</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://smpitputra.ponpesabuhurairah.id">SMP IT Putra</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://smpitputri.ponpesabuhurairah.id">SMP IT Putri</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://maplus.ponpesabuhurairah.id">MA Plus</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://smaitputri.ponpesabuhurairah.id">SMA IT Putri</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://smaitputraabuhurairah.sch.id">SMP IT Fullday</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://smaitputraabuhurairah.sch.id">SMA IT Putra Fullday</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://diniyyah.ponpesabuhurairah.id">Diniyyah</a></li>
                        <li className='hover:text-white cursor-pointer ml-5 text-xl hover:font-extrabold'><a href="https://idad.ponpesabuhurairah.id">I&apos;Dad</a></li>
                    </ul>
                </div>
                <div className='flex flex-col md:w-[30%] w-[90%] mt-9'>
                    <h1 className='font-extrabold text-2xl md:ml-10 mb-4'>Sosial Media</h1>
                    <div className='grid grid-cols-6 md:mx-10 mx-2 mb-10 w-full'>
                        <div onClick={()=>window.location.replace("https://www.facebook.com/ponpesabuhurairah")} className='rounded-full p-3 border border-slate-900 w-14 hover:bg-white tranisi ease-in-out duration-300 cursor-pointer'><BiLogoFacebook className="w-7 h-7"/></div>
                        <div onClick={()=>window.location.replace("https://www.instagram.com/ponpesabuhurairah/")} className='rounded-full p-3 border border-slate-900 w-14 hover:bg-white tranisi ease-in-out duration-300 cursor-pointer'><BiLogoInstagramAlt className="w-7 h-7"/></div>
                        <div onClick={()=>window.location.replace("https://youtube.com/@abuhurairahtv?si=tc3qDXjs3VaB5zss")} className='rounded-full p-3 border border-slate-900 w-14 hover:bg-white tranisi ease-in-out duration-300 cursor-pointer'><BiLogoYoutube className="w-7 h-7"/></div>
                    </div>
                    <div className='space-y-7 md:ml-10'>
                        <h1 className="font-extrabold text-2xl">Alamat Kami</h1>
                        <div className='flex gap-3 text-xl'>
                            <div>
                                <SiGooglemaps loading="lazy" placeholder="blur" className="w-10 h-10" />
                            </div>
                            <p>Jalan Soromandi No. 1A Lawata, Kelurahan Dasan Agung Baru, Kecamatan Selaparang, KotaMataram. Telp. (0370) 6170501.</p>
                        </div>
                        <div className='flex gap-3 text-xl'>
                            <div>
                                <SiGooglemaps loading="lazy" placeholder="blur" className="w-10 h-10" />
                            </div>
                            <p>Jalan Majapahit No. 54 B Punia, Mataram. Telp. (0370) 639259.</p>
                        </div>
                        <div className='flex gap-3 text-xl'>
                            <div>
                                <SiGooglemaps loading="lazy" placeholder="blur" className="w-10 h-10" />
                            </div>
                            <p>Dusun Berugak Mujur, Desa Sembalun Timba Gading, Kecamatan Sembalun, KabupatenLombok Timur.</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-[35%] w-[100%]'>
                    <iframe loading='lazy' placeholder='empty' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Jalan Majapahit No. 54 B Punia, Mataram&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
            </div>
        </footer>
    )
}
