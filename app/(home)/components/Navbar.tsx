import React from 'react';
import Link from 'next/dist/client/link';
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { cn } from '@/lib/utils';

export default function Navbar({className}:{className ?:string}) {

const socials = [

    {
        Link: "https://www.linkedin.com/in/imgauravkumar7/",
        Label: "Linkedin",
        Icon: SiLinkedin,
    },

    {
        Link: "https://github.com/gks2022004",
        Label: "Github",
        Icon: SiGithub,
    },

    {
        Link: "https://twitter.com/i_amgauravkumar",
        Label: "X",
        Icon: SiX,
    },
]

  return (
  <nav className={cn('py-10 flex justify-between items-center animate-move-down',
   className)}>
    
    <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500'>
        Gaurav Kumar🚀
        </h1>

    <div className='flex items-center gap-5'>

        {socials.map((social,index)=>{

            const Icon = social.Icon

            return <Link href={social.Link}
             key={index} 
             aria-label={social.Label}
             >
                <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                

             </Link>
        })}
    </div>

  </nav>
  );
}


