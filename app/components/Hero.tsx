import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import hero from '../../public/images/hero.gif';
import { HiArrowDown, HiArrowRight } from 'react-icons/hi2';

const Hero = () => {
  return (
    <section className="flex h-[80vh] flex-col justify-center  gap-12 relative">
      {/* Video Background */}
      <Image src={hero} alt="Woman sitting on couch filling out weekly planner page." className="absolute top-0 left-0 w-full h-full object-cover"/>
      {/* <video
        autoPlay
        loop
        muted
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={"/videos/hero-vid.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <p className="absolute top-0 left-0 p-2 bg-white flex flex-wrap items-center gap-1 z-10 w-full text-center">
        Enter code FKFYB26Q98QR <Suspense><ClickToCopy/></Suspense>at checkout for 15% off your
        purchase!
      </p> */}
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

      <div className="z-10 text-white flex flex-col justify-center max-w-[1400px] w-[90vw] mx-auto mt-12">
        <h1 className="text-8xl flex flex-col gap-1 font-extralight">
          <span className="flex gap-2">Imagine</span>
          <HiArrowDown className="text-[#B76E79] my-2 text-4xl"/>
          <span className="flex gap-2">Plan</span>
          <HiArrowDown className="text-[#B76E79] my-2 text-4xl"/>
          <span className="flex gap-2">Execute</span>
        </h1>
        <Link
          href="/products"
          className="animate-bounce py-3 px-4 bg-[#B76E79] text-white text-center mt-20 self-center rounded-md hover:bg-[#8a525a]"
        >
          Shop WHATS NXT
        </Link>
      </div>
    </section>
  )
}

export default Hero