import React from 'react'

const Clientele = () => {
  // Placeholder clients - user will replace with actual logos
  const clients = [
    {
      id: 1,
      name: 'Client 1',
      logo: 'https://via.placeholder.com/200x100/003751/FFFFFF?text=Client+1'
    },
    {
      id: 2,
      name: 'Client 2',
      logo: 'https://via.placeholder.com/200x100/003751/FFFFFF?text=Client+2'
    },
    {
      id: 3,
      name: 'Client 3',
      logo: 'https://via.placeholder.com/200x100/003751/FFFFFF?text=Client+3'
    },
    {
      id: 4,
      name: 'Client 4',
      logo: 'https://via.placeholder.com/200x100/003751/FFFFFF?text=Client+4'
    }
  ]

  return (
    <div className='w-full bg-gray-50 py-16 sm:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <button className='bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 hover:bg-orange-600 transition-colors duration-300'>
            OUR CLIENTELE
          </button>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003751] leading-tight mb-6'>
            Trusted by Industry Leaders<span className='text-orange-500'>.</span>
          </h2>
          <p className='text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed'>
            We proudly serve a diverse portfolio of clients across various industries, delivering excellence in every shipment
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12'>
          {clients.map((client, index) => (
            <div 
              key={client.id}
              className='bg-white rounded-2xl p-8 sm:p-10 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-gray-100 opacity-0 animate-fade-in-up'
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className='w-full h-auto max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100'
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className='mt-16 sm:mt-20 text-center'>
          <p className='text-gray-500 text-base sm:text-lg lg:text-xl mb-8'>
            Join hundreds of satisfied clients who trust us with their logistics needs
          </p>
          <button className='bg-[#003751] hover:bg-orange-500 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg'>
            BECOME A CLIENT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Clientele
