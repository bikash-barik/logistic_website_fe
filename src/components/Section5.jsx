import React, { useState } from 'react'

const Section5 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className='w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 sm:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* Left Side - Contact Information */}
          <div>
            {/* Orange Button */}
            <button className='bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg mb-6 sm:mb-8'>
              CONTACT US
            </button>

            {/* Main Heading */}
            <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003751] leading-tight mb-6 sm:mb-8'>
              Get in touch with our logistics experts<span className='text-orange-500'>.</span>
            </h2>

            {/* Description */}
            <p className='text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-12 sm:mb-14 lg:mb-16'>
              Have a question or need a quote? Our team is ready to assist you with customized logistics solutions.
            </p>

            {/* Contact Information Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10 lg:gap-y-12'>
              {/* Phone Number */}
              <div className='group hover:translate-x-2 transition-transform duration-300'>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors duration-300'>
                  Phone Number
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  +91 (123) 456 7890
                </p>
              </div>

              {/* Email Address */}
              <div className='group hover:translate-x-2 transition-transform duration-300'>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors duration-300'>
                  Email Address
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  info@vyuhlogistics.com
                </p>
              </div>

              {/* Business Hours */}
              <div className='group hover:translate-x-2 transition-transform duration-300'>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors duration-300'>
                  Business Hours
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  24/7 Support Available
                </p>
              </div>

              {/* Website */}
              <div className='group hover:translate-x-2 transition-transform duration-300'>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors duration-300'>
                  Website
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  www.vyuhlogistics.com
                </p>
              </div>

              {/* Head Office */}
              <div className='group hover:translate-x-2 transition-transform duration-300 sm:col-span-2'>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors duration-300'>
                  Head Office
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className='bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12'>
              {/* Form Heading */}
              <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003751] mb-6 sm:mb-10'>
                How can we help?
              </h3>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                {/* Name and Email Row */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label className='block text-gray-600 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base'>
                      Your Name <span className='text-orange-500'>*</span>
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Your name here'
                      className='w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-gray-600 placeholder:text-gray-300 text-sm sm:text-base'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-gray-600 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base'>
                      Your Email <span className='text-orange-500'>*</span>
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Your email here'
                      className='w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-gray-600 placeholder:text-gray-300 text-sm sm:text-base'
                      required
                    />
                  </div>
                </div>

                {/* Subject and Phone Row */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label className='block text-gray-600 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base'>
                      Your Subject <span className='text-orange-500'>*</span>
                    </label>
                    <input
                      type='text'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder='Your subject here'
                      className='w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-gray-600 placeholder:text-gray-300 text-sm sm:text-base'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-gray-600 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base'>
                      Contact Number
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='Your phone number here'
                      className='w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-gray-600 placeholder:text-gray-300 text-sm sm:text-base'
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className='block text-gray-600 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base'>
                    Message <span className='text-orange-500'>*</span>
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell us a few words'
                    rows='5'
                    className='w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors resize-none text-gray-600 placeholder:text-gray-300 text-sm sm:text-base'
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-xl transition-colors duration-300 uppercase tracking-wide'
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
