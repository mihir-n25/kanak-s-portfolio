'use client';

import React from 'react'
import { useEffect , useRef } from 'react';
import gsap from 'gsap';
import Shapes from './Shapes'

const Home = () => {

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(".name-animation" ,
       {
        x : -100,
        opacity: 0,
        rotate : -12
      },
       {
        x : 0,
        opacity: 1,
        rotate : 0,
        ease : 'elastic.out(1,0.3)',
        duration : 1,
        delay : 0.4,
        transformOrigin : "left top",
        stagger : {
          each : 0.1,
          from : "random"
        }
      },
    )
    .fromTo(
      ".job-title",
      {
        y: 20,
        opacity: 0,
        scale: 1.2,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: "elastic.out(1,0.3)",
      },
    )
    } , component)
  
    return () => ctx.revert();
  }, [])
  

    const renderLetters = (name , key) => {
      if(!name) return;
      return name.split("").map((letter , index) => (
<span key={index} className={`name-animation name-animation-${key} inline-block opacity-0`}>
        {letter}
      </span>
      )
    )      
    }

  return (
    <div className='flex flex-col md:flex-row'>
    <div ref={component} className='flex flex-col mt-20 p-6'>
    <p className="text-[clamp(2rem,14vmin,14rem)] font-extrabold leading-none tracking-tight ml-14 text-slate-300">
      {renderLetters('Kanak' , 'first')}
      </p>
    <p className="text-[clamp(2rem,13vmin,13rem)] font-extrabold leading-none tracking-tight ml-14">
    {renderLetters('Kapoor' , 'second')}
    </p>
    <p className="job-title text-[clamp(1.3rem,10.5vmin,10.5rem)] text-transparent font-extrabold leading-none mt-14 ml-14 block bg-gradient-to-tr from-slate-50 via-slate-500 to-slate-50 bg-clip-text">
    Creative Developer
</p>
</div>
<div className='md:w-[42vw] mt-5 md:m-0'>
  <Shapes/>
  </div>
</div>
  )
}

export default Home