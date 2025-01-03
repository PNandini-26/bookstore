import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <div>
      <Navbar/><br/><br/><br/><br/>
      </div>
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 bg-white rounded-lg shadow-lg p-6 md:p-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600">
            Welcome to our platform! We are committed to providing the best service with a focus on quality, innovation, and customer satisfaction. Our journey started with a simple idea—to make a positive impact in the world.
          </p>
          <p className="text-gray-600">
            With years of experience and a passionate team, we have grown into a trusted brand, delivering exceptional solutions tailored to your needs. Join us as we continue to strive for excellence and innovation.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition duration-200">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/about-us-symbol-with-3d-businessman_441797-7416.jpg?w=740"
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
