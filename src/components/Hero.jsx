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
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-fade-in-up'>
            <span className='block mb-2 sm:mb-3 lg:mb-4 opacity-0 animate-slide-in-1'>Global</span> 
            <span className='block mb-2 sm:mb-3 lg:mb-4 opacity-0 animate-slide-in-2'>Freight</span> 
            <span className='block mb-2 sm:mb-3 lg:mb-4 opacity-0 animate-slide-in-3'>Solutions</span> 
            <span className='block opacity-0 animate-slide-in-4'>Excellence.</span> 
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl mt-6 max-w-3xl opacity-0 animate-fade-in-delay'>
            Your trusted partner in international logistics and freight forwarding
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero