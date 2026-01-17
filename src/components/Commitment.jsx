import React from 'react'
import { FaBolt, FaCheckCircle, FaCog, FaBullseye, FaLightbulb, FaClock } from 'react-icons/fa'

const Commitment = () => {
  const commitments = [
    {
      id: 1,
      title: 'Agile',
      icon: <FaBolt className='text-4xl sm:text-5xl lg:text-6xl' />,
      description: 'Adaptable and responsive to changing logistics needs'
    },
    {
      id: 2,
      title: 'Consistency',
      icon: <FaCheckCircle className='text-4xl sm:text-5xl lg:text-6xl' />,
      description: 'Reliable and dependable service every single time'
    },
    {
      id: 3,
      title: 'Efficient Services',
      icon: <FaCog className='text-4xl sm:text-5xl lg:text-6xl' />,
      description: 'Optimized operations for maximum productivity'
    },
    {
      id: 4,
      title: 'Precise',
      icon: <FaBullseye className='text-4xl sm:text-5xl lg:text-6xl' />,
      description: 'Accuracy and attention to detail in every shipment'
    },
    {
      id: 5,
      title: 'Simplified Solutions',
      icon: <FaLightbulb className='text-4xl sm:text-5xl lg:text-6xl' />,
      description: 'Complex logistics made simple and straightforward'
    },
    {
      id: 6,
      title: 'Quick Turnaround',
      icon: <FaClock className='text-4xl sm:text-5xl lg:text-6xl' />,
      description: 'Fast processing and delivery without compromise'
    }
  ]

  return (
    <div className='w-full bg-gradient-to-br from-[#003751] via-[#004d6d] to-[#0066CC] py-16 sm:py-20 lg:py-28 xl:py-32 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-full h-full' 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <button className='bg-white text-[#003751] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 hover:bg-blue-50 transition-colors duration-300 shadow-lg'>
            OUR COMMITMENT
          </button>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6'>
            What We Stand For<span className='text-orange-500'>.</span>
          </h2>
          <p className='text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed'>
            Our core values drive everything we do, ensuring excellence in every shipment and partnership
          </p>
        </div>

        {/* Commitment Grid - 2 rows x 3 columns */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0'>
          {commitments.map((commitment, index) => (
            <div
              key={commitment.id}
              className='group relative bg-[#003751]/50 backdrop-blur-sm border border-white/20 p-8 sm:p-10 lg:p-12 hover:bg-[#0066CC]/70 transition-all duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl cursor-pointer opacity-0 animate-fade-in-up'
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Hover Glow Effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              
              {/* Content */}
              <div className='relative z-10 flex flex-col items-center text-center'>
                {/* Icon */}
                <div className='text-white mb-6 sm:mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                  {commitment.icon}
                </div>

                {/* Title */}
                <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-orange-500 transition-colors duration-300'>
                  {commitment.title}
                </h3>

                {/* Description */}
                <p className='text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors duration-300'>
                  {commitment.description}
                </p>

                {/* Bottom Accent Line */}
                <div className='w-0 h-1 bg-orange-500 mt-6 group-hover:w-full transition-all duration-500 rounded-full'></div>
              </div>

              {/* Corner Decoration */}
              <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-12 sm:mt-16 lg:mt-20'>
          <p className='text-white text-base sm:text-lg lg:text-xl mb-6 sm:mb-8'>
            Experience the difference our commitment makes in your logistics operations
          </p>
          <button className='bg-orange-500 hover:bg-white text-white hover:text-[#003751] font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl'>
            PARTNER WITH US
          </button>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className='absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse'></div>
      <div className='absolute bottom-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse' style={{ animationDelay: '1s' }}></div>
    </div>
  )
}

export default Commitment
