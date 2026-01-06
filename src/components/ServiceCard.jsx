import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ number, title, description, image, isCenter = true }) => {
  return (
    <>
    <div className='h-auto'>
      <div className='relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500'>
        {/* Background Image */}
        <img 
          src={image} 
          alt={title} 
          className='absolute inset-0 w-full h-full object-cover'
        />
        
        {/* Content Card - Only show when centered */}
        {isCenter && (
          <div className='absolute top-12 sm:top-16 lg:top-20 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 right-auto sm:right-6 lg:right-10 bg-white rounded-xl lg:rounded-2xl shadow-xl w-[90%] sm:w-96 lg:w-120 p-6 sm:p-8 lg:p-12 transition-all duration-500'>
            {/* Orange Badge */}
            <div className='absolute -top-4 sm:-top-5 lg:-top-6 right-8 sm:right-10 lg:right-12 bg-orange-500 text-white text-3xl sm:text-4xl lg:text-5xl font-bold w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg'>
              {number}
            </div>
            
            {/* Content */}
            <div className='mt-6 sm:mt-7 lg:mt-8'>
              <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-[#003751] mb-4 sm:mb-5 lg:mb-6'>
                {title}
              </h2>
              
              <p className='text-gray-600 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-7 lg:mb-8'>
                {description}
              </p>
              
              {/* Learn More Link */}
              <a 
                href="#" 
                className='inline-flex items-center gap-2 sm:gap-3 text-[#003751] font-semibold text-base sm:text-lg hover:text-orange-500 transition-colors duration-300 group'
              >
                Learn More 
                <FaArrowRight className='group-hover:translate-x-2 transition-transform duration-300' />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default ServiceCard
