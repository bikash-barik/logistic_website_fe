import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Video Background */}
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

      {/* Enhanced Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-linear-to-b from-[#003751]/85 via-[#003751]/70 to-[#003751]/85 z-10"></div>
      
      {/* Additional vignette effect for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,55,81,0.4)_100%)] z-10"></div>

      {/* Hero Content */}
      <div className='absolute inset-0 flex justify-center items-center z-20 px-4 sm:px-6 lg:px-12'>
        <div className='flex flex-col text-white items-center text-center max-w-7xl w-full pt-20 md:mt-30 sm:pt-0'>
          {/* Main Heading with improved styling */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 sm:mb-8'>
            <span className='block mb-2 sm:mb-3 lg:mb-4 opacity-0 animate-slide-in-1 drop-shadow-2xl'>Global Freight</span> 
            {/* <span className='block mb-2 sm:mb-3 lg:mb-4 opacity-0 animate-slide-in-2 drop-shadow-2xl'></span>  */}
            <span className='block mb-2 sm:mb-3 lg:mb-4 opacity-0 animate-slide-in-3 drop-shadow-2xl'>Solutions</span> 
            <span className='block opacity-0 animate-slide-in-4 bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl'>Excellence.</span> 
          </h1>
          
          {/* Subtitle with better contrast */}
          <p className='text-xl sm:text-2xl md:text-3xl font-light mt-4 max-w-4xl opacity-0 animate-fade-in-delay drop-shadow-lg leading-relaxed'>
            Your trusted partner in international logistics and freight forwarding
          </p>
          
          
        </div>
      </div>
    </div>
  )
}

export default Hero