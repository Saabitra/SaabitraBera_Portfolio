import React from 'react'
import { RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.2 }}
            className='my-20 text-center text-4xl'>Techologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.2 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiHtml5Fill className='text-7xl text-red-600' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiCss3Fill className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className='text-7xl text-blue-600' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className='text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-7xl text-green-700' />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-7xl text-green-400' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies