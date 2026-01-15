import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaUser } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
  }

  return (
    <footer className='w-full bg-[#1e3a4a]'>
      {/* Top Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-14 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16'>
          {/* About */}
          <div>
            <h3 className='text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6'>About Vyuh Logistics</h3>
            <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8'>
              Leading freight forwarder providing comprehensive logistics solutions worldwide. Your trusted partner in global trade.
            </p>
            
            {/* Social Media Icons */}
            <div className='flex gap-3 sm:gap-4'>
              <a 
                href='#' 
                className='w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-orange-500 flex items-center justify-center text-[#1e3a4a] hover:text-white transition-all duration-300'
              >
                <FaFacebookF className='text-base sm:text-xl' />
              </a>
              <a 
                href='#' 
                className='w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-orange-500 flex items-center justify-center text-[#1e3a4a] hover:text-white transition-all duration-300'
              >
                <FaTwitter className='text-base sm:text-xl' />
              </a>
              <a 
                href='#' 
                className='w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-orange-500 flex items-center justify-center text-[#1e3a4a] hover:text-white transition-all duration-300'
              >
                <FaLinkedinIn className='text-base sm:text-xl' />
              </a>
              <a 
                href='#' 
                className='w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-orange-500 flex items-center justify-center text-[#1e3a4a] hover:text-white transition-all duration-300'
              >
                <FaInstagram className='text-base sm:text-xl' />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className='text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6'>Contact Us</h3>
            <div className='space-y-3 sm:space-y-4 text-gray-300 text-base sm:text-lg'>
              <div>
                <span className='font-semibold text-white'>ADDRESS:</span>
                <span className='ml-2'>Mumbai, Maharashtra, India</span>
              </div>
              <div>
                <span className='font-semibold text-white'>MAIL:</span>
                <span className='ml-2'>info@vyuhlogistics.com</span>
              </div>
              <div>
                <span className='font-semibold text-white'>PHONE:</span>
                <span className='ml-2'>+91 (123) 456 7890</span>
              </div>
              <div>
                <span className='font-semibold text-white'>SUPPORT:</span>
                <span className='ml-2'>24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Our Newsletter */}
          <div>
            <h3 className='text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6'>Our Newsletter</h3>
            <form onSubmit={handleSubscribe} className='space-y-3 sm:space-y-4'>
              {/* Email Input */}
              <div className='relative'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Subscribe with us'
                  className='w-full px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none pr-12 sm:pr-14 text-sm sm:text-base'
                  required
                />
                <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                  <FaUser className='text-gray-400 text-lg sm:text-xl' />
                </div>
              </div>

              {/* Subscribe Button */}
              <button
                type='submit'
                className='w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base sm:text-lg py-3 sm:py-4 rounded-full transition-colors duration-300 uppercase tracking-wide'
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-600'></div>

      {/* Bottom Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0'>
          {/* Logo */}
          <div className='flex items-center gap-3 sm:gap-4'>
            <div className='flex items-center gap-3'>
              {/* Logo Text */}
              <div className='relative'>
                <div className='text-white text-2xl sm:text-3xl lg:text-4xl font-bold'>
                    <span className='text-orange-500'>V</span>YUH
                </div>
              </div>
              <div className='text-white text-xs sm:text-sm font-medium'>
                  LOGISTICS
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12'>
            <a href='#about' className='text-white text-base sm:text-lg font-medium hover:text-orange-500 transition-colors duration-300'>
              About Us
            </a>
            <a href='#services' className='text-white text-base sm:text-lg font-medium hover:text-orange-500 transition-colors duration-300'>
              Services
            </a>
            <a href='#contact' className='text-white text-base sm:text-lg font-medium hover:text-orange-500 transition-colors duration-300'>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
