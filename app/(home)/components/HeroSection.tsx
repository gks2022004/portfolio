import React from 'react';
import { MovingBorderBtn } from '../../../components/ui/moving-border';
import Title from './Title';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const resumeUrl = "https://drive.google.com/file/d/12YEC-BAOZII42BfUuxd604OMKsVaEy2t/view?usp=drive_link";

  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7xl font-bold'>
          Nice to meet you! 😊
          <br /> 
          <span className='underline underline-offset-8 decoration-green-500'>{"I'm Gaurav."}</span>
        </h1>
        <p className='md:w-96 text-lg text-gray-300'>
          {"Based in India, I'm a FullStack developer and a blockchain developer exploring the wonders of web3 and building a modern web application that users love."}
        </p>

        <Link href="mailto:imgauravkumar7@gmail.com">
          <div className="inline-block group p-3">
            <Title text="Contact Me 📫" />
          </div>
        </Link>
      </div>

      <div className='relative'>
        <div className='w-72 h-72 space-y-3 relative group'>
          {/* Glowing border container */}
          <div className='relative rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105'>
            {/* Animated glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-75 animate-pulse'></div>
            
            {/* Border glow */}
            <div className='absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
            
            {/* Image container */}
            <div className='relative rounded-xl overflow-hidden border-2 border-gray-800'>
              <Image 
                src="/cryptomafia.jpg" 
                alt='cryptomafia' 
                width={400} 
                height={400}
                className='object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110'
              />
            </div>
          </div>

          {/* Glow orb effect */}
          <div className='absolute top-1/2 right-1/2 -z-10 w-48 h-48 bg-green-500/20 rounded-full blur-3xl'></div>
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
  );
};

export default HeroSection;