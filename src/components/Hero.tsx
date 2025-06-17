import React from 'react';
import { ArrowDown, MapPin, Phone, Mail } from 'lucide-react';
import { PersonalInfo, SocialLink } from '../types';
import SocialLinks from './SocialLinks';

interface HeroProps {
  personal: PersonalInfo;
  socialLinks: SocialLink[];
}

const Hero: React.FC<HeroProps> = ({ personal, socialLinks }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                    {personal.name}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
                  {personal.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {personal.subtitle}
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  {personal.bio}
                </p>
              </div>

              {/* Contact Info */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                  <MapPin size={20} className="text-blue-600" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                  <Phone size={20} className="text-blue-600" />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                  <Mail size={20} className="text-blue-600" />
                  <span>{personal.email}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <SocialLinks socialLinks={socialLinks} />
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Learn More About Me</span>
                <ArrowDown size={20} />
              </button>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-blue-100 to-teal-100">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-teal-600/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;