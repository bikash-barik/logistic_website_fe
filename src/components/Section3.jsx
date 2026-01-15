import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Section3 = () => {
  const services = [
    {
      id: 1,
      number: '01',
      title: 'Air Freight',
      description: 'Expedited air cargo services with global coverage, ensuring timely delivery of time-sensitive shipments worldwide.',
      image: 'https://images.unsplash.com/photo-1566594799893-f0ae1717019d?w=1200&q=80'
    },
    {
      id: 2,
      number: '02',
      title: 'Sea Freight',
      description: 'Comprehensive ocean freight solutions including FCL and LCL services for cost-effective international shipping.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80'
    },
    {
      id: 3,
      number: '03',
      title: 'Customs Clearance',
      description: 'Expert customs brokerage services ensuring smooth clearance and compliance with international regulations.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80'
    },
    {
      id: 4,
      number: '04',
      title: 'Warehousing',
      description: 'Secure storage facilities with inventory management and distribution services tailored to your needs.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80'
    },
    {
      id: 5,
      number: '05',
      title: 'Integrated Logistics',
      description: 'Swift solutions for the movement of raw materials to the final consumer.',
      image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=1200&q=80'
    },
    {
      id: 6,
      number: '06',
      title: 'Consultancy',
      description: `First Time Import / Export Registration, Advance Authorization License
Application, Certificate of Origin`,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  return (
    <div className='w-full bg-gray-50 py-16 sm:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <button className='bg-orange-500 text-white px-6 py-2 rounded-full font-medium mb-6 hover:bg-orange-600 transition-colors duration-300'>
            OUR SERVICES
          </button>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003751] mb-4'>
            Comprehensive Logistics Solutions
          </h2>
          <p className='text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto'>
            Professional freight forwarding and supply chain management services tailored to your business needs
          </p>
        </div>

        {/* Services Grid - 3 Columns */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className='group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up'
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Image Container */}
              <div className='relative h-64 sm:h-72 lg:h-80 overflow-hidden'>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#003751] via-[#003751]/50 to-transparent opacity-80'></div>
                
                {/* Number Badge */}
                <div className='absolute top-6 right-6 bg-orange-500 text-white text-2xl sm:text-3xl font-bold w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                  {service.number}
                </div>

                {/* Title on Image */}
                <div className='absolute bottom-6 left-6 right-6'>
                  <h3 className='text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300'>
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content Card */}
              <div className='p-6 sm:p-8'>
                <p className='text-gray-600 text-sm sm:text-base leading-relaxed mb-6'>
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <a 
                  href="#" 
                  className='inline-flex items-center gap-2 text-[#003751] font-semibold text-sm sm:text-base hover:text-orange-500 transition-colors duration-300 group/link'
                >
                  Learn More 
                  <FaArrowRight className='group-hover/link:translate-x-2 transition-transform duration-300' />
                </a>
              </div>

              {/* Hover Border Effect */}
              <div className='absolute inset-0 border-4 border-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-12 sm:mt-16'>
          <button className='bg-[#003751] hover:bg-orange-500 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg'>
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section3
