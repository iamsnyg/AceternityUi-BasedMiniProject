import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div
    className='h-auto w-full  md:h-[40rem] rounded-md flex items-center justify-center mx-auto overflow-hidden relative py-10 md:py-0'
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div
        className='relative p-4 z-10 w-full text-center'
        >
            <h1
            className='mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
            >Master the art of Music</h1>
            <p
            className='font-normal mt-4 text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
            >Music is the universal language that speaks to the soul, weaving emotions into melodies and turning silence into stories. It transcends barriers, ignites passion, and soothes the heart. Like a faithful companion, it celebrates joy, comforts sorrow, and inspires dreams, proving that in every rhythm and note, there’s magic waiting to be discovered and shared.</p>
            
            <div className='mt-4'>
                <Link href={'/courses'}
                
                >
                    <Button 
                    borderRadius="2rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-cyan-600 hover:text-white"
                    >
                        Explore Courses
                    </Button>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default HeroSection