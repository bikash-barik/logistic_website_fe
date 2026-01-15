import React, { useState, useEffect } from 'react'

const CountriesServed = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null)

  // Key locations with coordinates (relative to the map container)
  const locations = [
    // North America
    { id: 1, name: 'USA', x: 18, y: 35, region: 'North America' },
    { id: 2, name: 'Canada', x: 16, y: 28, region: 'North America' },
    { id: 3, name: 'Mexico', x: 15, y: 42, region: 'North America' },
    
    // South America
    { id: 4, name: 'Brazil', x: 35, y: 62, region: 'South America' },
    { id: 5, name: 'Argentina', x: 32, y: 72, region: 'South America' },
    { id: 6, name: 'Chile', x: 28, y: 70, region: 'South America' },
    
    // Europe
    { id: 7, name: 'UK', x: 48, y: 30, region: 'Europe' },
    { id: 8, name: 'Germany', x: 51, y: 32, region: 'Europe' },
    { id: 9, name: 'France', x: 49, y: 35, region: 'Europe' },
    { id: 10, name: 'Netherlands', x: 50, y: 31, region: 'Europe' },
    { id: 11, name: 'Spain', x: 48, y: 38, region: 'Europe' },
    { id: 12, name: 'Italy', x: 52, y: 37, region: 'Europe' },
    
    // Middle East
    { id: 13, name: 'UAE', x: 60, y: 45, region: 'Middle East' },
    { id: 14, name: 'Saudi Arabia', x: 58, y: 47, region: 'Middle East' },
    { id: 15, name: 'Turkey', x: 55, y: 38, region: 'Middle East' },
    
    // Africa
    { id: 16, name: 'South Africa', x: 54, y: 70, region: 'Africa' },
    { id: 17, name: 'Egypt', x: 54, y: 44, region: 'Africa' },
    { id: 18, name: 'Kenya', x: 57, y: 52, region: 'Africa' },
    
    // Asia
    { id: 19, name: 'India', x: 68, y: 46, region: 'Asia' },
    { id: 20, name: 'China', x: 75, y: 38, region: 'Asia' },
    { id: 21, name: 'Japan', x: 82, y: 38, region: 'Asia' },
    { id: 22, name: 'Singapore', x: 76, y: 52, region: 'Asia' },
    { id: 23, name: 'Thailand', x: 74, y: 48, region: 'Asia' },
    { id: 24, name: 'Vietnam', x: 76, y: 48, region: 'Asia' },
    { id: 25, name: 'South Korea', x: 80, y: 38, region: 'Asia' },
    { id: 26, name: 'Hong Kong', x: 77, y: 45, region: 'Asia' },
    
    // Oceania
    { id: 27, name: 'Australia', x: 83, y: 68, region: 'Oceania' },
    { id: 28, name: 'New Zealand', x: 90, y: 74, region: 'Oceania' },
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
        <div className='relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-[#002340] rounded-3xl shadow-2xl overflow-hidden border border-blue-900/30'>
          {/* Grid Lines - Subtle */}
          <svg className='absolute inset-0 w-full h-full opacity-10'>
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* World Map SVG - Simple continents outline */}
          <svg className='absolute inset-0 w-full h-full opacity-20' viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
            {/* Simplified world map paths */}
            <path d="M 150 150 Q 200 120 280 140 L 350 160 L 380 180 Q 400 200 380 230 L 350 250 Q 320 270 280 260 L 200 240 Q 160 220 150 150 Z" 
                  fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <path d="M 420 150 Q 480 130 550 150 L 620 170 L 680 160 Q 720 150 750 170 L 780 200 Q 800 240 780 280 L 750 310 L 700 330 Q 650 350 600 340 L 550 320 L 500 300 Q 450 280 430 250 L 420 200 Q 410 170 420 150 Z" 
                  fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <path d="M 650 260 Q 700 250 750 260 L 800 280 L 820 310 Q 830 340 810 370 L 780 390 Q 740 410 700 400 L 660 380 Q 630 360 650 320 Z" 
                  fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <path d="M 280 270 Q 320 260 360 280 L 380 320 Q 390 360 370 390 L 340 410 Q 300 430 260 420 L 230 400 Q 210 380 220 350 L 240 310 Q 260 280 280 270 Z" 
                  fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <path d="M 800 340 Q 850 330 880 350 L 900 380 Q 910 410 890 430 L 860 445 Q 820 455 800 440 Q 780 420 800 380 Z" 
                  fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          </svg>

          {/* Location Dots */}
          {locations.map((location) => (
            <div
              key={location.id}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group'
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              onMouseEnter={() => setHoveredLocation(location)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Pulsing Ring Animation */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-8 h-8 bg-orange-500 rounded-full opacity-30 animate-ping'></div>
              </div>
              
              {/* Dot */}
              <div className='relative z-10 w-4 h-4 bg-[#0066CC] rounded-full border-2 border-white shadow-lg group-hover:scale-150 group-hover:bg-orange-500 transition-all duration-300'>
                <div className='absolute inset-0 bg-[#0066CC] rounded-full animate-pulse'></div>
              </div>

              {/* Tooltip on Hover - Don't show country name as requested */}
              {hoveredLocation?.id === location.id && (
                <div className='absolute left-1/2 -translate-x-1/2 -top-16 bg-white text-[#003751] px-4 py-2 rounded-lg shadow-xl whitespace-nowrap z-20 animate-fade-in'>
                  <div className='font-bold text-sm'>{location.region}</div>
                  <div className='absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-white transform rotate-45'></div>
                </div>
              )}
            </div>
          ))}

          {/* Connection Lines (Optional - Subtle) */}
          <svg className='absolute inset-0 w-full h-full pointer-events-none opacity-20'>
            {locations.slice(0, -1).map((loc, index) => {
              const nextLoc = locations[index + 1]
              return (
                <line
                  key={`line-${loc.id}`}
                  x1={`${loc.x}%`}
                  y1={`${loc.y}%`}
                  x2={`${nextLoc.x}%`}
                  y2={`${nextLoc.y}%`}
                  stroke="#0066CC"
                  strokeWidth="0.5"
                  strokeDasharray="4,4"
                  className='animate-pulse'
                />
              )
            })}
          </svg>
        </div>

        {/* Stats Below Map */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16'>
          <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>50+</div>
            <div className='text-blue-100 text-sm sm:text-base lg:text-lg'>Countries</div>
          </div>
          <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>100+</div>
            <div className='text-blue-100 text-sm sm:text-base lg:text-lg'>Cities</div>
          </div>
          <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>24/7</div>
            <div className='text-blue-100 text-sm sm:text-base lg:text-lg'>Support</div>
          </div>
          <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>500+</div>
            <div className='text-blue-100 text-sm sm:text-base lg:text-lg'>Partners</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountriesServed
