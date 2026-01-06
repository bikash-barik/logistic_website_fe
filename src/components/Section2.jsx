import React from 'react'

const Section2 = () => {
    return (
        <div className='w-full bg-white py-16 sm:py-20 lg:py-28 xl:py-32'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-12 xl:gap-16'>
                    {/* Image */}
                    <div className='w-full lg:w-1/2 flex-shrink-0'>
                        <img 
                            src="https://frexuswp.websitelayout.net/wp-content/uploads/2025/09/about-03.jpg" 
                            alt="About Frexus" 
                            className='rounded-2xl w-full h-75 sm:h-100 lg:h-auto object-cover shadow-xl' 
                        />
                    </div>

                    {/* Content */}
                    <div className='w-full lg:w-1/2 flex flex-col justify-start items-start gap-6 sm:gap-8'>
                        {/* Button */}
                        <div>
                            <button className='bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors duration-300'>
                                ABOUT
                            </button>
                        </div>

                        {/* Heading */}
                        <div>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003751] leading-tight'>
                                Reliable transport smart logistics solutions.
                            </h2>
                        </div>

                        {/* Features List */}
                        <div className='flex flex-col justify-between items-start gap-6 sm:gap-8 w-full'>
                            <div className='flex gap-4 sm:gap-5 items-start'>
                                <div className='bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-bold text-lg sm:text-xl shrink-0'>
                                    01
                                </div>
                                <div>
                                    <h3 className='font-bold text-xl sm:text-2xl lg:text-3xl text-[#003751] mb-2 sm:mb-3'>
                                        Real-Time Tracking
                                    </h3>
                                    <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
                                        Real-time tracking is a technology used in transport and logistics to monitor the location and status of goods vehicles.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 sm:gap-5 items-start'>
                                <div className='bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-bold text-lg sm:text-xl shrink-0'>
                                    02
                                </div>
                                <div>
                                    <h3 className='font-bold text-xl sm:text-2xl lg:text-3xl text-[#003751] mb-2 sm:mb-3'>
                                        Efficient Delivery
                                    </h3>
                                    <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
                                        Real-time tracking is a technology used in transport and logistics to monitor the location and status of goods vehicles.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 sm:gap-5 items-start'>
                                <div className='bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-bold text-lg sm:text-xl shrink-0'>
                                    03
                                </div>
                                <div>
                                    <h3 className='font-bold text-xl sm:text-2xl lg:text-3xl text-[#003751] mb-2 sm:mb-3'>
                                        Secure Storage
                                    </h3>
                                    <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
                                        Real-time tracking is a technology used in transport and logistics to monitor the location and status of goods vehicles.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2