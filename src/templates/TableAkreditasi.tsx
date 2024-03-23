import ZoomAnimation from '@/animation/ZoomAnimation'
import Table from '@/components/Table'
import React from 'react'

function TableAkreditasi() {
    const head = ["No", "Nama Lembaga", "Berdiri", "Akreditasi"]
    const body = [
        { lembaga: "MA Plus Abu Hurairah Mataram", tahun: "2002", akreditasi: "A" },
        { lembaga: "SMP IT Putri Mataram", tahun: "2005", akreditasi: "B" },
        { lembaga: "SMA IT Putri Mataram", tahun: "2008", akreditasi: "A" },
        { lembaga: "SMP IT Putra Mataram", tahun: "2010", akreditasi: "A" },
        { lembaga: "I’dad Lughowi/ Muallimat", tahun: "2011", akreditasi: "-" },
        { lembaga: "SMP IT Putra Fullday", tahun: "2012", akreditasi: "B" },
        { lembaga: "SMA IT Putra Abu Hurairah", tahun: "2014", akreditasi: "A" },
        { lembaga: "SD IT Putra Abu Hurairah Mataram", tahun: "2017", akreditasi: "A" },
        { lembaga: "SD IT Putri Abu Hurairah Mataram", tahun: "2017", akreditasi: "A" },
        { lembaga: "PPS Abu Hurairah Wustho", tahun: "2017", akreditasi: "-" },
        { lembaga: "PPS Abu Hurairah Ulya", tahun: "2020", akreditasi: "-" },
        { lembaga: "SD IT Abu Hurairah Sembalun", tahun: "2020", akreditasi: "-" },
    ]
    return (
        <div>
            <div className='md:h-[100vh] w-screen bg-white flex flex-col justify-center items-center md:px-[20vw] px-4 md:mt-20 overflow-x-hidden'>
                <ZoomAnimation duration={2000} triggerOnce={true} >
                    <h1 className='md:text-4xl text-2xl text-slate-900 font-bold text-center mt-3'>Lembaga Pendidikan,tahun berdiri dan akreditasi </h1>
                    <div className='shadow-xl md:my-10 my-3 p-8 w-[95vw] rounded-xl overflow-x-auto'>
                        <Table head={head}>
                            {body.map((d, id) => (
                                <tr className="bg-white border-b hover:bg-gray-100 overflow-y-auto" key={id}>
                                    <td className='px-6 py-3 md:text-lg text-md'>{id + 1}</td>
                                    <td className='px-6 py-3 md:text-lg text-md uppercase'>{d.lembaga}</td>
                                    <td className='px-6 py-3 md:text-lg text-md'>{d.tahun}</td>
                                    <td className='px-6 py-3 md:text-lg text-md uppercase'>{d.akreditasi}</td>
                                </tr>
                            ))}
                        </Table>
                    </div>
                </ZoomAnimation>
            </div>
        </div>
    )
}

export default TableAkreditasi