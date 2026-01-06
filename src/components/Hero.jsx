import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b bg-[#003751] z-10 opacity-80"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2025/03/13/264433_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className='absolute inset-0 flex justify-center items-center z-20 px-4 sm:px-6 lg:px-12'>
        <div className='flex flex-col text-white lg:items-center text-center lg:text-left max-w-7xl w-full pt-20 sm:pt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight'>
            <span className='block mb-2 sm:mb-3 lg:mb-4'>Reliable</span> 
            <span className='block mb-2 sm:mb-3 lg:mb-4'>transport</span> 
            <span className='block mb-2 sm:mb-3 lg:mb-4'>streamline</span> 
            <span className='block'>Logistics.</span> 
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero