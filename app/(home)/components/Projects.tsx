import React from 'react'
import Title from './Title'
import { SiCss3, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

function Projects() {
    const projects =[
        {
          title: "EzzeSwap",
          tech: [SiReact, SiNodedotjs, SiCss3],
          Link: "",
          cover: "/project-2.png",
          background: "bg-indigo-500",

        },
        {
          title: "Eth-transfer-Dapp",
          tech: [SiNextdotjs,SiTailwindcss],
          Link: "",
          cover: "/project-2.png",
          background: "bg-green-500",

        },
        {
          title: "Weather-app",
          tech: [SiJavascript,SiCss3],
          Link: "",
          cover: "/project-2.png",
          background: "bg-green-500",

        },
        {
          title: "Hay hay hay ",
          tech: [SiJavascript,SiCss3],
          Link: "",
          cover: "/project-2.png",
          background: "bg-indigo-500",

        } 
    ];

  return (
   
    <div className='py-10 p-5 sm:p-0'>
      
      <Title text='Projects 👨🏻‍💻'
       className='flex flex-col items-center justify-center cursor-pointer' />
    
     <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
      {projects.map((project,index) => {
        return <Link href={project.Link} key={index}>

          <div className={cn("p-1 rounded-md", project.background)}>

            <DirectionAwareHover
            imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
            
             <div className='space-y-5' >
              <h1 className='text-2xl font-bold'>{project.title}</h1>

              <div className='flex items-center gap-5'>
                {project.tech.map((Icon,index) => {
                  return <Icon className='w-6 h-6' key={index}/>
                })}
              </div>
              </div>


            </DirectionAwareHover>

          </div>
        </Link>
      })}

     </div>

    </div>
  )
}

export default Projects
