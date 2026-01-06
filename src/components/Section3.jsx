import React, { useState, useEffect } from 'react'
import ServiceCard from './ServiceCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const services = [
    {
      id: 1,
      number: '01',
      title: 'Air Freight',
      description: 'Fast and reliable air freight services for urgent deliveries worldwide with real-time tracking.',
      image: 'https://images.unsplash.com/photo-1566594799893-f0ae1717019d?w=1200&q=80'
    },
    {
      id: 2,
      number: '02',
      title: 'Sea Freight',
      description: 'Cost-effective sea freight solutions for large shipments with comprehensive logistics support.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80'
    },
    {
      id: 3,
      number: '03',
      title: 'Road Transport',
      description: 'Efficient road transport services with door-to-door delivery and flexible scheduling options.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80'
    },
    {
      id: 4,
      number: '04',
      title: 'Warehousing',
      description: 'Warehousing service provides storage, inventory management, & distribution.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80'
    },
    {
      id: 5,
      number: '05',
      title: 'Supply Chain',
      description: 'End-to-end supply chain management solutions for optimized logistics operations.',
      image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=1200&q=80'
    }
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  const getVisibleCards = () => {
    const prev = currentIndex === 0 ? services.length - 1 : currentIndex - 1
    const next = currentIndex === services.length - 1 ? 0 : currentIndex + 1
    return [prev, currentIndex, next]
  }

  const visibleIndexes = getVisibleCards()

  return (
    <div className='w-full bg-gray-50 py-20'>
      <div className='w-full px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <button className='bg-orange-500 text-white px-6 py-2 rounded-full font-medium mb-6'>
            OUR SERVICES
          </button>
          <h2 className='text-6xl font-bold text-[#003751] mb-4'>
 Logistics Solutions
          </h2>
          <p className='text-gray-600 text-xl max-w-2xl mx-auto'>
            Discover our range of transport and logistics services designed to meet your business needs
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative w-full'>
          <div className='flex items-center justify-center gap-6 overflow-hidden'>
            {/* Left Card (Half Visible) */}
            <div className='hidden md:block w-1/4 opacity-60 transition-all duration-500'>
              <ServiceCard
                {...services[visibleIndexes[0]]}
                isCenter={false}
              />
            </div>

            {/* Center Card (Full Visible) */}
            <div className='w-full md:w-1/2 transition-all duration-500 z-10'>
              <ServiceCard
                {...services[visibleIndexes[1]]}
                isCenter={true}
              />
            </div>

            {/* Right Card (Half Visible) */}
            <div className='hidden md:block w-1/4 opacity-60 transition-all duration-500'>
              <ServiceCard
                {...services[visibleIndexes[2]]}
                isCenter={false}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className='hidden md:flex absolute left-2 sm:left-4 lg:left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-orange-500 text-[#003751] hover:text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full shadow-lg items-center justify-center transition-all duration-300 z-20'
          >
            <FaChevronLeft className='text-lg sm:text-xl lg:text-2xl' />
          </button>

          <button
            onClick={handleNext}
            className='hidden md:flex absolute right-2 sm:right-4 lg:right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-orange-500 text-[#003751] hover:text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full shadow-lg items-center justify-center transition-all duration-300 z-20'
          >
            <FaChevronRight className='text-lg sm:text-xl lg:text-2xl' />
          </button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className='flex md:hidden justify-center gap-6 mt-6'>
          <button
            onClick={handlePrev}
            className='bg-white hover:bg-orange-500 text-[#003751] hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300'
          >
            <FaChevronLeft className='text-lg' />
          </button>
          <button
            onClick={handleNext}
            className='bg-white hover:bg-orange-500 text-[#003751] hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300'
          >
            <FaChevronRight className='text-lg' />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className='flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-10 lg:mt-12'>
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-500 w-6 sm:w-8' : 'bg-gray-300 w-2.5 sm:w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section3
