import React, { useState, useEffect, useRef } from 'react'

const Growth = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredBar, setHoveredBar] = useState(null)
  const sectionRef = useRef(null)

  // Growth data - Number of Shipments per year
  const growthData = [
    { year: '2018', value: 45, shipments: 45 },
    { year: '2019', value: 78, shipments: 78 },
    { year: '2020', value: 225, shipments: 225 },
    { year: '2021', value: 310, shipments: 310 },
    { year: '2022', value: 485, shipments: 485 },
    { year: '2023', value: 560, shipments: 560 },
    { year: '2024', value: 640, shipments: 640 },
    { year: '2025', value: 750, shipments: 750 },
  ]

  const maxValue = 800 // Maximum value for scale

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className='w-full bg-white py-16 sm:py-20 lg:py-28 xl:py-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
        {/* Section Header */}
        <div className='mb-12 sm:mb-16'>
          <button className='bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 hover:bg-orange-600 transition-colors duration-300'>
            OUR GROWTH
          </button>
          <div className='flex items-start gap-8'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#003751] leading-tight'>
              Growth
            </h2>
            {/* Vyuh Logo Placeholder */}
            <div className='hidden sm:block ml-auto'>
              <div className='w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#003751] to-[#0066CC] rounded-2xl flex items-center justify-center shadow-lg'>
                <div className='text-white text-4xl lg:text-5xl font-bold'>V</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className='bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100'>
          {/* Chart Container */}
          <div className='relative'>
            {/* Y-Axis Labels */}
            <div className='absolute left-0 top-0 bottom-16 flex flex-col justify-between text-gray-600 font-semibold text-sm sm:text-base lg:text-lg w-12 sm:w-16'>
              <div>750</div>
              <div>675</div>
              <div>600</div>
              <div>525</div>
              <div>450</div>
              <div>375</div>
              <div>300</div>
              <div>225</div>
              <div>150</div>
              <div>75</div>
              <div>0</div>
            </div>

            {/* Grid Lines */}
            <div className='ml-12 sm:ml-16 relative'>
              <div className='absolute inset-0 flex flex-col justify-between pointer-events-none'>
                {[...Array(11)].map((_, index) => (
                  <div key={index} className='border-t border-gray-300 opacity-50'></div>
                ))}
              </div>

              {/* Bars Container */}
              <div className='relative pt-4 pb-4' style={{ minHeight: '400px', height: '50vh', maxHeight: '600px' }}>
                <div className='flex items-end justify-around h-full gap-2 sm:gap-4 lg:gap-6'>
                  {growthData.map((data, index) => {
                    const heightPercentage = (data.value / maxValue) * 100
                    const isHovered = hoveredBar === index

                    return (
                      <div 
                        key={data.year}
                        className='flex-1 flex flex-col items-center group cursor-pointer'
                        style={{ height: '100%', justifyContent: 'flex-end' }}
                        onMouseEnter={() => setHoveredBar(index)}
                        onMouseLeave={() => setHoveredBar(null)}
                      >
                        {/* Spacer to push bar to bottom */}
                        <div style={{ flex: `0 0 ${100 - heightPercentage}%` }}></div>
                        
                        {/* Tooltip on Hover */}
                        {isHovered && (
                          <div 
                            className='absolute bg-[#003751] text-white px-3 sm:px-4 py-2 rounded-lg shadow-xl transition-all duration-300 whitespace-nowrap z-10 -translate-y-2'
                          >
                            <div className='text-xs sm:text-sm font-semibold'>{data.shipments} Shipments</div>
                            <div className='absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-[#003751] transform rotate-45'></div>
                          </div>
                        )}

                        {/* Bar */}
                        <div 
                          className={`w-full relative transition-all duration-700 ease-out rounded-t-lg overflow-hidden group-hover:shadow-2xl ${
                            isHovered ? 'bg-gradient-to-t from-orange-600 to-orange-400' : 'bg-gradient-to-t from-[#003751] to-[#0066CC]'
                          }`}
                          style={{ 
                            height: isVisible ? `${heightPercentage}%` : '0%',
                            transitionDelay: `${index * 10}ms`,
                            transform: isHovered ? 'scaleY(1.15)' : 'scaleY(1)',
                            transformOrigin: 'bottom'
                          }}
                        >
                          {/* Shine Effect on Hover */}
                          <div className='absolute inset-0 bg-gradient-to-t from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                          
                          {/* Animated Gradient Overlay */}
                          <div className='absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-pulse opacity-50'></div>
                        </div>

                        {/* Year Label */}
                        <div className='mt-3 sm:mt-4 text-[#003751] font-bold text-xs sm:text-sm lg:text-base group-hover:text-orange-500 transition-colors duration-300 shrink-0'>
                          {data.year}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* X-Axis Label */}
              <div className='text-center mt-4 sm:mt-6'>
                <span className='text-gray-600 font-semibold text-sm sm:text-base lg:text-lg'>
                  No. of Shipments
                </span>
              </div>
            </div>
          </div>

          {/* Stats Below Chart */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16'>
            <div className='text-center p-4 sm:p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105'>
              <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003751] mb-2'>750+</div>
              <div className='text-gray-600 text-xs sm:text-sm lg:text-base'>Shipments in 2025</div>
            </div>
            <div className='text-center p-4 sm:p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105'>
              <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>1500%</div>
              <div className='text-gray-600 text-xs sm:text-sm lg:text-base'>Growth Rate</div>
            </div>
            <div className='text-center p-4 sm:p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105'>
              <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003751] mb-2'>8</div>
              <div className='text-gray-600 text-xs sm:text-sm lg:text-base'>Years of Excellence</div>
            </div>
            <div className='text-center p-4 sm:p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105'>
              <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>100%</div>
              <div className='text-gray-600 text-xs sm:text-sm lg:text-base'>Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className='mt-12 sm:mt-16 text-center max-w-4xl mx-auto'>
          <p className='text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed'>
            Our exponential growth reflects our commitment to excellence and innovation in logistics. From humble beginnings in 2018, we've scaled to become a trusted partner for hundreds of businesses worldwide, consistently delivering exceptional freight forwarding solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Growth
