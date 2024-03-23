'use client'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import React, { useEffect, useRef, useState } from 'react'
import { BiLogoGmail, BiSolidPhone } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import abuhur from "../assets/icons/abuhur.png"
import { listLembaga } from '@/components/ListLembaga'
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"
import useClickOutside from '@/hooks/useClickOutside'
import Link from 'next/link'

export default function Header() {
    const [scrolTo, setScrolTo] = useState<boolean>(false)
    const [isShowProfileDropdown, setIsShowProfileDropdown] = useState<boolean>(false)
    const [isShowLembagaDropdown, setIsShowLembagaDropdown] = useState<boolean>(false)
    const [isShowProfileMobile, setIsShowProfileMobile] = useState<boolean>(false)
    const [isShowLembagaMobile, setIsShowLembagaMobile] = useState<boolean>(false)
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const profileDropdownRef = useRef<any>()
    const lembagaDropdownRef = useRef<any>()
    const location = usePathname()

    useClickOutside(profileDropdownRef, () => setIsShowProfileDropdown(false));
    useClickOutside(lembagaDropdownRef, () => setIsShowLembagaDropdown(false))

    useEffect(() => {
        const move = () => {
            if (window.scrollY > 150) {
                setScrolTo(true)
            }
            else {
                setScrolTo(false)
            }
        }
        window.addEventListener("scroll", move)
        return () => window.addEventListener("scroll", move)
    }, [])
    return (
        <div className='fixed top-0 w-screen z-50'>
            <header className={`bg-[#c8a75a] flex justify-between md:px-10 px-2 w-full ${scrolTo ? "hidden" : "block"}`}>
                <div className='flex m-3 gap-5 '>
                    <div className='flex items-center'>
                        <BiLogoGmail loading="lazy" placeholder="blur" className="w-6 h-6 mr-1" />
                        <h1 className='md:text-md text-sm'>info@ponpesabuhurairah.id</h1>
                    </div>
                    <div className='flex items-center'>
                        <BiSolidPhone loading="lazy" placeholder="blur" className="w-6 h-6 mr-1" />
                        <h1 className='md:text-md text-sm'>{`(0370) 639259`}</h1>
                    </div>
                </div>
                <div className='md:flex hidden m-3 md:gap-5 gap-2'>
                    <h1 className='text-lg cursor-pointer'>Ina</h1>
                    <h1 className='text-lg cursor-pointer'>Eng</h1>
                    <h1 className='text-lg cursor-pointer'>Ar</h1>
                </div>
            </header>
            <div className={`flex relative md:justify-between justify-center md:px-[10vw] px-4 py-3 transition-colors ease-in-out duration-500 ${scrolTo || location !== "/" ? "bg-white shadow-xl text-black fill-black" : "bg-transparent text-white fill-white"}`}>
                <div className={`absolute left-3 ${scrolTo || location !== "/" ? "top-5" : "top-3"}`}>
                    <GiHamburgerMenu loading="lazy" placeholder="blur" className={`w-8 h-8 md:hidden block ${scrolTo || location !== "/" ? "fill-black" : "fill-white"}`} onClick={() => setOpenMenu(true)} />
                </div>
                <div className={``}>
                    <Image loading='lazy' placeholder='blur' src={abuhur} alt="" className={`md:w-20 md:h-20 w-12 h-12 ${scrolTo || location !== "/" ? "block" : "hidden"}`} />
                </div>
                <div className={`md:flex hidden items-center gap-10 ${scrolTo ? "py-0" : "py-8"}`}>
                    <Link className='font-light text-xl cursor-pointer hover:text-[#c8a75a] transition-colors ease-in-out duration-300 hover:font-extrabold' href={"/"}>Beranda</Link>
                    <div className='font-light text-xl cursor-pointer  transition-colors ease-in-out duration-300 relative' ref={profileDropdownRef}>
                        <div className='hover:text-[#c8a75a] flex' onClick={() => {
                            setIsShowProfileDropdown(!isShowProfileDropdown)
                            setIsShowLembagaDropdown(false)
                        }}>
                            <h1 className={`hover:font-extrabold ${isShowProfileDropdown ? "font-extrabold text-[#c8a75a]" : "font-light"}`}>Profil</h1>
                            <IoIosArrowDown loading="lazy" placeholder="blur" className={`w-6 h-6 my-auto ml-[2px] hover:fill-[#c8a75a] transition-all ease-in-out duration-300 ${scrolTo || location !== "/" ? "fill-black" : "fill-white"}`} />
                        </div>
                        <div className={`absolute w-56 space-y-3 -left-3 shadow-xl flex flex-col  transition-all ease-in-out duration-300 ${isShowProfileDropdown ? "top-14 visible text-opacity-100 bg-opacity-100 bg-white rounded-lg z-50" : "hidden"}`}>
                            <Link className='text-black font-light p-3 rounded-t-lg' href={"/profile/profil_singkat"} onClick={() => setIsShowProfileDropdown(false)}>Profil Singkat</Link>
                            <Link className='text-black font-light p-3 rounded-lg' href={"/profile/sejarah_pesantren"} onClick={() => setIsShowProfileDropdown(false)}>Sejarah Pesantren</Link>
                            <Link className='text-black font-light p-3 rounded-b-lg' href={"/profile/visi_misi"} onClick={() => setIsShowProfileDropdown(false)}>Visi Misi</Link>
                        </div>
                    </div>
                    <div className='font-light text-xl cursor-pointer hover:text-[#c8a75a] hover:fill-[#c8a75a] transition-colors ease-in-out duration-300 flex relative' ref={lembagaDropdownRef}>
                        <div className='hover:text-[#c8a75a] flex' onClick={() => {
                            setIsShowLembagaDropdown(!isShowLembagaDropdown)
                            setIsShowProfileDropdown(false)
                        }} >
                            <h1 className={`hover:font-extrabold ${isShowLembagaDropdown ? "font-extrabold text-[#c8a75a]" : "font-light"}`}>Pendidikan</h1>
                            <IoIosArrowDown loading="lazy" placeholder="blur" className={`w-6 h-6 my-auto ml-[2px] hover:fill-[#c8a75a] transition-all ease-in-out duration-300 ${scrolTo || location !== "/" ? "fill-black" : "fill-white"}`} />
                        </div>
                        <div className={`absolute w-56 space-y-3  shadow-xl  transition-all ease-in-out duration-300 ${isShowLembagaDropdown ? "top-14 -left-3 visible text-opacity-100 bg-opacity-100 bg-white rounded-lg" : "hidden"}`}>
                            {listLembaga.map((d, id) => (
                                <div key={id} className='text-black font-light p-2 rounded-lg'><a href={d.link}>{d.lembaga}</a></div>
                            ))}
                        </div>

                    </div>
                    <Link href={"/humas"} className='font-light text-xl cursor-pointer hover:text-[#c8a75a] transition-colors ease-in-out duration-300 hover:font-extrabold'>Humas</Link>
                    <Link href={"/dakwah_sosial"} className='font-light text-xl cursor-pointer hover:text-[#c8a75a] transition-colors ease-in-out duration-300 hover:font-extrabold'>Dakwah & Sosial</Link>
                    <div className='font-light text-xl cursor-pointer hover:text-[#c8a75a] transition-colors ease-in-out duration-300 hover:font-extrabold'><a href='https://ppdb.ponpesabuhurairah.id'>PPDB</a></div>
                </div>
            </div>
            <div className={`fixed w-[85vw] h-screen bg-white top-0 md:hidden block overflow-y-auto transition-all ease-in-out duration-300 ${openMenu ? "left-0" : "-left-[85vw]"}`}>
                <div className='flex justify-between p-4'>
                    <h1 className='font-extrabold text-lg'>Menu</h1>
                    <ImCross loading="lazy" placeholder="blur" className="w-4 h-4" onClick={() => setOpenMenu(false)} />
                </div>
                <div className='space-y-4'>
                    <div className='w-full hover:bg-[#c8a75a] p-4'>
                        <Link className='py-4' href={"/"} onClick={() => setOpenMenu(false)} >Beranda</Link>
                    </div>
                    <div className='hover:bg-[#c8a75a] p-4 flex' onClick={() => {
                        setIsShowProfileMobile(!isShowProfileMobile)
                        setIsShowLembagaMobile(false)
                    }}>
                        <h1>Profil</h1>
                        <IoIosArrowDown loading="lazy" placeholder="blur" className="w-3 h-3 my-auto ml-[2px]" />
                    </div>
                    <div className={`w-full space-y-3 transition-all ease-in-out duration-300 flex flex-col ${isShowProfileMobile ? "top-10 visible text-opacity-100 bg-opacity-100 bg-white rounded-lg" : "hidden"}`}>
                        <Link className='text-black font-light hover:bg-[#c8a75a] pl-5 w-[100%] p-3' href={"/profile/profil_singkat"} onClick={() => setOpenMenu(false)}>Profil Singkat</Link>
                        <Link className='text-black font-light hover:bg-[#c8a75a] pl-5 w-[100%] p-3' href={"/profile/sejarah_pesantren"} onClick={() => setOpenMenu(false)}>Sejarah Pesantren</Link>
                        <Link className='text-black font-light hover:bg-[#c8a75a] pl-5 w-[100%] p-3' href={"/profile/visi_misi"} onClick={() => setOpenMenu(false)}>Visi Misi</Link>
                    </div>
                    <div className='hover:bg-[#c8a75a] p-4 flex' onClick={() => {
                        setIsShowProfileMobile(false)
                        setIsShowLembagaMobile(!isShowLembagaMobile)
                    }}>
                        <h1>Pendidikan</h1>
                        <IoIosArrowDown loading="lazy" placeholder="blur" className="w-3 h-3 my-auto ml-[2px]" />
                    </div>
                    <div className={`space-y-3 transition-all ease-in-out duration-300 ${isShowLembagaMobile ? "top-10 visible text-opacity-100 bg-opacity-100 bg-white rounded-lg" : "hidden"}`}>
                        {listLembaga.map((d, id) => (
                            <div key={id} className='text-black font-light pl-5 p-3'><a href={d.link}>{d.lembaga}</a></div>
                        ))}
                    </div>
                    <div className='w-full hover:bg-[#c8a75a] p-4'>
                        <Link href={"/humas"} className='py-4' onClick={() => setOpenMenu(false)}>Humas</Link>
                    </div>
                    <div className='w-full hover:bg-[#c8a75a] p-4'>
                        <Link href={"/dakwah_sosial"} className='py-4' onClick={() => setOpenMenu(false)}>Dakwah & Sosial</Link>
                    </div>
                    <div className='hover:bg-[#c8a75a] p-4'><a href="https://ppdb.ponpesabuhurairah.id">PPDB</a></div>
                </div>
            </div>
        </div>
    )
}
