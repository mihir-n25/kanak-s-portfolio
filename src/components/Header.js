'use client'

import React from "react";
import {animateWithGsap} from './animation'
import { useGSAP } from "@gsap/react";

const navLinks = [
  {
    title: "About",
  },
  {
    title: "Work",
  },
  {
    title: "Contact",
  },
];

const Header = () => {

  useGSAP(() => {
    animateWithGsap('.features_title', { y:0, opacity:1})
  })


  return (
    <div  className="p-10 flex items-center justify-between opacity-0 features_title">
      <div className=" font-bold text-[25px] ml-5 cursor-pointer">Kanak&apos;s Portfolio</div>
      <div className="hidden sm:flex">
        <ul className="flex gap-12 text-[22px] leading-15">
          {navLinks.map((navItems, i) => (
            <li key={i} className="text-blue-200 hover:text-white cursor-pointer font-medium">
                <a>{navItems.title}</a>
            </li>
          ))}
          <li />
        </ul>
      </div>
    </div>
  );
};

export default Header;
