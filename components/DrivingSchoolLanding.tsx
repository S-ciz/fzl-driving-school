'use client';

import { useState } from 'react';
import { Heart, Users, Award, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

import Image from 'next/image';
export default function DrivingSchoolLanding() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
    

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
          width={400}
          height={400}
            src="https://images.pexels.com/photos/9518019/pexels-photo-9518019.jpeg"
            alt="Modern car dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Learn to Drive with Confidence
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-100 font-light">
            Modern driving school for beginners and advanced learners
          </p>
          <button
            onClick={() => scrollToSection('pricing')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            Book a Lesson
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
              width={400}
              height={400}
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop"
                alt="Professional driving instructor"
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About DriveFlow</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                With over 15 years of experience, DriveFlow is committed to making you a confident and safe driver. Our certified instructors use modern teaching methods combined with real-world driving experience to prepare you for any road condition. Whether you are a complete beginner or looking to improve your advanced driving skills, we have a program tailored just for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Award className="text-blue-600" size={24} />
                  <span className="text-gray-700">Certified professional instructors</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="text-blue-600" size={24} />
                  <span className="text-gray-700">Small class sizes for personalized attention</span>
                </div>
                <div className="flex items-center gap-4">
                  <Heart className="text-blue-600" size={24} />
                  <span className="text-gray-700">Modern fleet of well-maintained vehicles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the package that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner Package */}
            <div
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                hoveredCard === 0 ? 'transform -translate-y-2 shadow-2xl' : ''
              }`}
            >
              <div className="h-2 bg-linear-to-r from-blue-400 to-blue-600"></div>
              <div className="p-8">
                <Image
                width={400}
                height={500}
                  src="https://images.pexels.com/photos/248539/pexels-photo-248539.jpeg"
                  alt="Beginner course"
                  className="w-full h-40 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Beginner</h3>
                <p className="text-gray-600 mb-6">Perfect for first-time drivers</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-1">R599</p>
                  <p className="text-gray-600">8 hours of instruction</p>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Basic vehicle controls
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Road rules and safety
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Urban driving practice
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:shadow-lg">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Standard Package */}
            <div
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border-2 border-blue-600 ${
                hoveredCard === 1 ? 'transform -translate-y-2 shadow-2xl' : ''
              }`}
            >
              <div className="absolute -top-0 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
              </div>
              <div className="h-2 bg-linear-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-8">
                <Image
                width={400}
                height={400}
                  src="https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg"
                  alt="Standard course"
                  className="w-full h-40 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                <p className="text-gray-600 mb-6">Most popular choice</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-1">R999</p>
                  <p className="text-gray-600">16 hours of instruction</p>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Everything in Beginner
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Highway driving
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Parking techniques
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:shadow-lg">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Advanced Package */}
            <div
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                hoveredCard === 2 ? 'transform -translate-y-2 shadow-2xl' : ''
              }`}
            >
              <div className="h-2 bg-linear-to-r from-indigo-600 to-purple-600"></div>
              <div className="p-8">
                <Image
                width={400}
                height={400}
                  src="https://images.pexels.com/photos/34857196/pexels-photo-34857196.jpeg"
                  alt="Advanced course"
                  className="w-full h-40 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Advanced</h3>
                <p className="text-gray-600 mb-6">For experienced drivers</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-1">R1,499</p>
                  <p className="text-gray-600">24 hours of instruction</p>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Everything in Standard
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Defensive driving tactics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Advanced maneuvers
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:shadow-lg">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2000+</div>
              <p className="text-blue-100">Students Trained</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Pass Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Certified Instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <MapPin className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">123 Main Street, City, ST 12345</p>
            </div>
            <div className="text-center">
              <Phone className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@driveflow.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">DriveFlow</h3>
              <p className="text-gray-400">Teaching confident drivers since 2009</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              &copy; 2024 DriveFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}