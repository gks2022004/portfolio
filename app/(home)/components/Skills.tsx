"use client";

import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effects';
import { SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiSolidity, SiTailwindcss, SiTypescript } from 'react-icons/si';

function Skills() {

  const skills =[

    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Solidity",
      Icon: SiSolidity,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Nodejs",
      Icon: SiNodedotjs,
    },
  ];

  return (
    <div className='max-w-3xl mx-auto px-8'>
      
      <Title text='Skills 🛠️'
       className='flex flex-col items-center justify-center cursor-pointer' />
      
      <HoverEffect items={skills} />


    </div>
  )
}

export default Skills
