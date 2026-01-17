import React from 'react'

const Section2 = () => {
    return (
        <div className='w-full bg-white py-12 sm:py-16 lg:py-28 xl:py-32'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
                <div className='flex flex-col justify-center items-center lg:items-start gap-8 sm:gap-10 lg:gap-12 xl:gap-16'>
                    {/* Top Section - Image and Content */}
                    <div className='flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-20 w-full'>
                        {/* Image */}
                        <div className='w-full md:w-1/2 shrink-0'>
                            <img
                                src="https://frexuswp.websitelayout.net/wp-content/uploads/2025/09/about-03.jpg"
                                alt="About Frexus"
                                className='rounded-2xl w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover shadow-xl'
                            />
                        </div>

                        {/* Content */}
                        <div className='w-full md:w-1/2 flex flex-col justify-start items-start gap-4 sm:gap-6 lg:gap-8'>
                            {/* Button */}
                            <div>
                                <button className='bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg'>
                                    ABOUT
                                </button>
                            </div>

                            {/* Heading */}
                            <div>
                                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003751] leading-tight'>
                                    Leading Freight Forwarder & Logistics Provider
                                </h2>
                            </div>

                            {/* Description */}
                            <div>
                                <p className='text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed'>
                                    Vyuh Logistics is a premier freight forwarding and logistics company offering comprehensive supply chain solutions. With a global network and years of expertise, we specialize in seamless cargo movement across air, sea, and land.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className='flex flex-col justify-between items-start gap-6 sm:gap-8 w-full'>
                        <div className='flex gap-4 sm:gap-5 items-start group hover:translate-x-2 transition-transform duration-300 w-full'>
                            <div className='bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-bold text-lg sm:text-xl shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md'>
                                01
                            </div>
                            <div className='flex-1'>
                                <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#003751] mb-2 sm:mb-3'>
                                    Global Network
                                </h3>
                                <p className='text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed'>
                                    Extensive worldwide presence with strategic partnerships ensuring reliable service delivery across continents.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-4 sm:gap-5 items-start group hover:translate-x-2 transition-transform duration-300 w-full'>
                            <div className='bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-bold text-lg sm:text-xl shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md'>
                                02
                            </div>
                            <div className='flex-1'>
                                <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#003751] mb-2 sm:mb-3'>
                                    Expertise & Experience
                                </h3>
                                <p className='text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed'>
                                    Decades of industry experience with specialized knowledge in handling diverse cargo requirements efficiently.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-4 sm:gap-5 items-start group hover:translate-x-2 transition-transform duration-300 w-full'>
                            <div className='bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-bold text-lg sm:text-xl shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md'>
                                03
                            </div>
                            <div className='flex-1'>
                                <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#003751] mb-2 sm:mb-3'>
                                    Technology Driven
                                </h3>
                                <p className='text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed'>
                                    Advanced tracking systems and digital platforms providing real-time visibility and seamless communication.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section2