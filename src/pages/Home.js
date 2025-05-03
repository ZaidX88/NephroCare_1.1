import React from 'react';
import { useNavigate } from 'react-router-dom';
import homepic from '../img/homepic.png';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signin'); // Navigate to the Sign-In page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <main className="flex flex-col items-center text-center py-20 px-4">
        <h2 className="text-4xl font-semibold text-blue-600 mb-4">Welcome to Our Patient Health Care System</h2>
        <p className="text-lg max-w-xl text-gray-700 mb-6">
          Empowering healthcare professionals and patients through efficient management of records, appointments, and services.
        </p>
        <button
          onClick={handleGetStarted}
          className="mt-8 bg-blue-400 hover:bg-blue-500 text-white py-2 px-6 rounded-xl transition shadow-lg"
        >
          Get Started
        </button>
        <img
          src={homepic}
          alt="Healthcare Illustration"
          className="mt-10 rounded-lg "
        />
      </main>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">About Us</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            NephroCare is dedicated to providing top-notch healthcare solutions for patients and professionals. Our platform simplifies the management of medical records, appointments, and services, ensuring a seamless experience for everyone.
          </p>
        </div>
      </section>

      <section id="services" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-500 mb-2">Appointment Scheduling</h4>
              <p className="text-gray-700">Easily book and manage appointments with healthcare professionals.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-500 mb-2">Medical Records</h4>
              <p className="text-gray-700">Access and manage patient records securely and efficiently.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-500 mb-2">Patient Support</h4>
              <p className="text-gray-700">Provide personalized support to patients with our intuitive tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Have questions or need assistance? Reach out to our support team, and we'll be happy to help.
          </p>
          <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-6 rounded-xl transition shadow-lg" onClick={() => navigate('/contactus')}>
            Contact Support
          </button>
        </div>
      </section>

      <footer className="bg-blue-600 text-white text-center text-sm py-4 mt-auto">
        © 2025 NephroCare. Brainstorm compition project.
      </footer>
    </div>
  );
}

export default Home;