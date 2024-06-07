import React from 'react'
import { MovingBorderBtn } from '../../../components/ui/moving-border'
import Title from './Title'
import Link from 'next/link'




function HeroSection() {
    
  const resumeUrl="https://drive.google.com/file/d/12YEC-BAOZII42BfUuxd604OMKsVaEy2t/view?usp=drive_link";

  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
      
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7xl font-bold'>Nice to meet you! 😊
            <br/> <span className='underline underline-offset-8 decoration-green-500'>{"I'm Gaurav."}</span>
        </h1>
        <p className='md:w-96 text-lg text-gray-300'>
           {" Based in India, I'm a FullStack developer and a blockchain developer exploring the wonders of web3 and building a modern web application that users love."}
        </p>



        <Link href="mailto:imgauravkumar7@gmail.com">
            <div className="inline-block group p-3">
              <Title text="Contact Me 📫" />
            </div>
  </Link> 
   
      {/* <Link href ={"mailto:imgauravkumar7@gmail.com"} className='inline-block group p-3'>
            <div>
              <h1 className='text-3xl font-bold group-hover:text-green-400 transition-all'>Contact me 📫</h1>
              <div className='w-40 h-2 bg-green-500 rounded-full'></div>
              <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
            </div>
        </Link>
  */}
      

      </div>
     

      <div className='relative'>

        <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>

            <div className='flex gap-3 translate-x-8'>
            <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
            <div className='w-32 h-32 rounded-full bg-indigo-500'></div>

            

            </div>
            <div className='flex gap-3 -translate-x-8'>
            <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
            <div className='w-32 h-32 rounded-full bg-indigo-500'></div>

            </div>
            <div className='glow absolute top-[40%] right-1/2 -z-10'></div>

        </div>

        <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
    
       <Link href={resumeUrl} target='blank'>
        <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
            <p>My Resume 📢</p>
        </MovingBorderBtn>
        </Link>

        </div>
      </div>
    </div>
  )
}

export default HeroSection
