import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <div>
      <Navbar/><br/><br/><br/><br/>
      </div>
      <div className="min-h-screen  flex items-center justify-center p-2">
      <div className="bg-white shadow-lg rounded-lg p-5 md:p-12 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>
        <p className="text-gray-600 text-center mb-8">
          We’d love to hear from you! Please fill out the form below to reach us.
        </p>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">Or reach us directly at:</p>
          <p className="text-pink-500 font-medium">contact@example.com</p>
          <p className="text-gray-600">+123 456 7890</p>
        </div>
      </div>
    </div>
 
      <Footer/>
    </>
  );
};

export default Contact
