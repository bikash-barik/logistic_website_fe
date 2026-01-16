import React, { useState, useEffect } from 'react'

const CountriesServed = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null)

  // Key locations with coordinates (left/top in percentage) - Accurately positioned
  const locations = [
    // North America
    { id: 1, name: 'Canada', left: '27.5%', top: '33%', region: 'North America' },
    { id: 2, name: 'USA', left: '30%', top: '42%', region: 'North America' },
    { id: 3, name: 'Mexico', left: '25%', top: '47%', region: 'North America' },
    
    // South America
    { id: 4, name: 'Peru', left: '32.5%', top: '69%', region: 'South America' },
    { id: 5, name: 'Brazil', left: '39%', top: '67%', region: 'South America' },

    // Europe
    { id: 6, name: 'UK', left: '46.5%', top: '35%', region: 'Europe' },
    { id: 7, name: 'Sweden', left: '56%', top: '31.5%', region: 'Europe' },
    { id: 8, name: 'Poland', left: '60%', top: '36%', region: 'Europe' },
    { id: 9, name: 'Germany', left: '52%', top: '38%', region: 'Europe' },
    { id: 10, name: 'Netherlands', left: '48%', top: '38%', region: 'Europe' },
    { id: 11, name: 'Belgium', left: '47%', top: '40.5%', region: 'Europe' },
    { id: 12, name: 'France', left: '46.5%', top: '42.5%', region: 'Europe' },
    { id: 13, name: 'Switzerland', left: '50.5%', top: '41%', region: 'Europe' },
    { id: 14, name: 'Italy', left: '52%', top: '44%', region: 'Europe' },
    { id: 15, name: 'Spain', left: '45.5%', top: '44%', region: 'Europe' },
    { id: 16, name: 'Malta', left: '49.5%', top: '47%', region: 'Europe' },

    // Africa
    { id: 17, name: 'Ghana', left: '46%', top: '59.5%', region: 'Africa' },
    { id: 18, name: 'Nigeria', left: '48.5%', top: '60%', region: 'Africa' },
    { id: 19, name: 'South Africa', left: '51.5%', top: '77%', region: 'Africa' },
    { id: 20, name: 'Madagascar', left: '56%', top: '72%', region: 'Africa' },

    // Middle East & Eurasia
    { id: 21, name: 'Turkey', left: '54%', top: '46%', region: 'Middle East' },
    { id: 22, name: 'Russia', left: '68%', top: '35%', region: 'Middle East' },
    { id: 23, name: 'Qatar', left: '56%', top: '49%', region: 'Middle East' },
    { id: 24, name: 'UAE', left: '57.5%', top: '51%', region: 'Middle East' },
    { id: 25, name: 'Oman', left: '58.5%', top: '53%', region: 'Middle East' },

    // Asia
    { id: 26, name: 'India', left: '62.5%', top: '50%', region: 'Asia' },
    { id: 27, name: 'Bangladesh', left: '67%', top: '50%', region: 'Asia' },
    { id: 28, name: 'China', left: '70%', top: '46%', region: 'Asia' },
    { id: 29, name: 'South Korea', left: '72%', top: '44%', region: 'Asia' },
    { id: 30, name: 'Japan', left: '74%', top: '45%', region: 'Asia' },
    { id: 31, name: 'Taiwan', left: '71%', top: '58%', region: 'Asia' },
    { id: 32, name: 'Singapore', left: '67%', top: '60%', region: 'Asia' },
    { id: 33, name: 'Malaysia', left: '70%', top: '63%', region: 'Asia' },
    { id: 34, name: 'Indonesia', left: '68%', top: '65%', region: 'Asia' },

    // Oceania
    { id: 35, name: 'Australia', left: '71%', top: '72%', region: 'Oceania' },
    { id: 36, name: 'New Zealand', left: '81%', top: '82.5%', region: 'Oceania' },
  ]

  return (
    <div className='w-full bg-gradient-to-br from-[#003751] to-[#005073] py-16 sm:py-20 lg:py-28 xl:py-32 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <button className='bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 hover:bg-orange-600 transition-colors duration-300'>
            GLOBAL PRESENCE
          </button>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6'>
            Countries We Serve<span className='text-orange-500'>.</span>
          </h2>
          <p className='text-blue-100 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed'>
            With an extensive global network, we provide seamless logistics solutions across all major continents and trade routes
          </p>
        </div>

        {/* World Map with Dots */}
        <div className='relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-[#6BA3D0] rounded-3xl shadow-2xl overflow-hidden border border-blue-900/30'>
          {/* World Map Image */}
          <img 
            src="https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="World Map"
            className='absolute inset-0 w-full h-full object-cover'
          />
          
          {/* Subtle Overlay for better dot visibility */}
          <div className='absolute inset-0 bg-black/5'></div>

          {/* Location Dots */}
          {locations.map((location) => (
            <div
              key={location.id}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20'
              style={{ left: location.left, top: location.top }}
              onMouseEnter={() => setHoveredLocation(location)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Pulsing Ring Animation */}
              <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                <div className='w-6 h-6 bg-[#003751] rounded-full opacity-40 animate-ping'></div>
              </div>
              
              {/* Dot - Dark Blue */}
              <div className='relative z-10 w-3 h-3 bg-[#003751] rounded-full border-2 border-white shadow-xl group-hover:scale-150 group-hover:bg-orange-500 transition-all duration-300'>
                <div className='absolute inset-0 bg-[#003751] rounded-full group-hover:bg-orange-500'></div>
              </div>

              {/* Tooltip on Hover - Only show region, not country name */}
              {hoveredLocation?.id === location.id && (
                <div className='absolute left-1/2 -translate-x-1/2 -top-14 bg-[#003751] text-white px-3 py-1.5 rounded-lg shadow-2xl whitespace-nowrap z-30 animate-fade-in text-xs font-semibold border border-white/20'>
                  <div>{location.region}</div>
                  <div className='absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-[#003751] transform rotate-45 border-r border-b border-white/20'></div>
                </div>
              )}
            </div>
          ))}

          {/* "40+ Countries" Text Overlay */}
          <div className='absolute bottom-8 right-8 text-white/30 text-4xl sm:text-5xl lg:text-6xl font-bold'>
            40+ Countries
          </div>

          {/* Remove Connection Lines */}
        </div>

        {/* Stats Below Map */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16'>
          <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>40+</div>
            <div className='text-blue-100 text-sm sm:text-base lg:text-lg'>Countries</div>
          </div>
          <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>150+</div>
            <div className='text-blue-100 text-sm sm:text-base lg:text-lg'>Cities</div>
          </div>
          <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>24/7</div>
            <div className='text-blue-100 text-sm sm:text-base lg:text-lg'>Support</div>
          </div>
          <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>1000+</div>
            <div className='text-blue-100 text-sm sm:text-base lg:text-lg'>Partners</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountriesServed
