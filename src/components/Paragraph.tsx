import React from 'react'

type Paragraph = {
    text:string
}

function Paragraph({text}:Paragraph) {
  return (
    <p className='text-slate-800 ml-3 my-[3px]'>{text}</p>
  )
}

export default Paragraph