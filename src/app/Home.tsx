import PhotoSlider from '../templates/PhotoSlider'
import React from 'react'
import Sekilas from '@/templates/Sekilas'
import Galeri from '@/templates/Galeri'
import Rekap from '@/templates/Rekap'
import SistemBelajar from '@/templates/SistemBelajar'
import TableAkreditasi from '@/templates/TableAkreditasi'
import YoutubeSection from '@/templates/YoutubeSection'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
        <PhotoSlider/>
        <Sekilas/>
        <Rekap/>
        <SistemBelajar/>
        <Galeri/>
        <TableAkreditasi/>
        <YoutubeSection/>
    </div>
  )
}
