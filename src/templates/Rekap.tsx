import Image from 'next/image'
import React from 'react'
import { HiUserGroup } from 'react-icons/hi2'
import building from "../assets/photos/building.jpg"
import { IoMdSchool } from 'react-icons/io'
import Count from '@/components/Count'

export default function Rekap() {
    return (
        <div className='flex justify-center items-center relative overflow-y-hidden md:h-[80vh] overflow-x-hidden'>
            <div className='bg-black bg-opacity-50 absolute top-0 w-[100vw] h-full z-10'></div>
            <Image loading='lazy' placeholder='blur' src={building} alt="" className="absolute top-0 w-[100vw] md:-mt-[40vh] md:h-auto h-full z-0 object-cover" />
            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-20 gap-10 md:my-0 my-10 z-20'>

                <div className='p-12 flex flex-col bg-white bg-opacity-70 rounded-full'>
                    <div><HiUserGroup loading="lazy" placeholder="blur" className="mx-auto w-16 h-16 fill-slate-800" /></div>
                    <div className='flex flex-col justify-center items-center '>
                        <h1 className='text-center text-2xl font-extrabold text-slate-800'>
                            <Count end={1560} />
                        </h1>
                        <h1 className='text-center text-2xl font-extrabold text-slate-800'>Santri Putra</h1>
                    </div>
                </div>
                <div className='p-12 flex flex-col bg-white bg-opacity-70 rounded-full'>
                    <div><HiUserGroup loading="lazy" placeholder="blur" className="mx-auto w-16 h-16 fill-slate-800" /></div>
                    <div className='flex flex-col justify-center items-center '>
                        <h1 className='text-center text-2xl font-extrabold text-slate-800'>
                            <Count end={1489} />
                        </h1>
                        <h1 className='text-center text-2xl font-extrabold text-slate-800'>Santri Putri</h1>
                    </div>
                </div>
                <div className='p-12 flex flex-col bg-white bg-opacity-70 rounded-full'>
                    <div><IoMdSchool loading="lazy" placeholder="blur" className="mx-auto w-16 h-16 fill-slate-800" /></div>
                    <div className='flex flex-col justify-center items-center '>
                        <h1 className='text-center text-2xl font-extrabold text-slate-800'>
                            <Count end={11} />
                        </h1>
                        <h1 className='text-center text-2xl font-extrabold text-slate-800'>Lembaga</h1>
                    </div>
                </div>
                <div className='p-12 flex flex-col bg-white bg-opacity-70 rounded-full'>
                    <div><HiUserGroup loading="lazy" placeholder="blur" className="mx-auto w-16 h-16 fill-slate-800" /></div>
                    <div className='flex flex-col justify-center items-center '>
                        <h1 className='text-center text-2xl font-extrabold text-slate-800'>
                            <Count end={493} />
                        </h1>
                        <h1 className='text-center text-2xl font-extrabold text-slate-800'>Pegawai</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
