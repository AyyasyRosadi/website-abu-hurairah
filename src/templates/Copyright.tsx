import React from 'react'

export default function Copyright() {
    const tahun = new Date().getFullYear()
    return (
        <footer className='bg-gray-800 text-center text-white py-3'>
            <h1>Copyright &#169; Abu Hurairah Mataram {tahun}</h1>
        </footer>
    )
}
