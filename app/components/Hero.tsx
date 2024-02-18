import React from 'react';
import Link from 'next/link';

const Hero = ({heading, message}:any) => {
  return (
    <div id='home' className='flex items-center justify-center  h-screen  bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 mt-3 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
       <a  href="#event"> <button className='px-8 py-2 border hover:bg-white hover:text-black rounded-full'>Explore</button></a>
       
        
      </div>
    </div>
  );
};

export default Hero;
