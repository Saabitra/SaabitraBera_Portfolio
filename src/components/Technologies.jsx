import React from 'react'
import { RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
// import { SiJavascript } from 'react-icons/si'
// import { SiHtml5 } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
// import { SiNodeDotJs } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Techologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Fill className='text-7xl text-red-600' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Fill className='text-7xl text-blue-400' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className='text-7xl text-yellow-400' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-blue-600' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-700' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-400' />
            </div>
        </div>
    </div>
  )
}

export default Technologies