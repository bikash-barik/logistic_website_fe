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
              Ready to move faster? Contact us today<span className='text-orange-500'>.</span>
            </h2>

            {/* Description */}
            <p className='text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-12 sm:mb-14 lg:mb-16'>
              Reach out to us for support, collaborations, or to learn more about our profession.
            </p>

            {/* Contact Information Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10 lg:gap-y-12'>
              {/* Main Phone Number */}
              <div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3'>
                  Main Phone Number
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  (+44) 123 456 789
                </p>
              </div>

              {/* Training for Success */}
              <div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3'>
                  Training for Success
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  Please visit the training section
                </p>
              </div>

              {/* For Support Related */}
              <div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3'>
                  For Support Related
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  Please visit the our faq's
                </p>
              </div>

              {/* For Website Related */}
              <div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3'>
                  For Website Related
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  www.example.com
                </p>
              </div>

              {/* Email Address */}
              <div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3'>
                  Email Address
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  info@example.com
                </p>
              </div>

              {/* Find our Locations */}
              <div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#003751] mb-2 sm:mb-3'>
                  Find our Locations
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  Search on the map
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
