import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My journey in the tech industry and the valuable experiences that have shaped my career.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 hidden md:block"></div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  <div className="md:ml-16">
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-xl font-semibold text-blue-600 mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.duration}</span>
                          {exp.current && (
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action for more experience */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Looking for More Experience?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm actively seeking new opportunities to apply my AI and data science skills in challenging projects. 
                Let's discuss how I can contribute to your team's success.
              </p>
              <a
                href="mailto:saujanya.310104@gmail.com"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 font-medium shadow-lg hover:shadow-xl"
              >
                <span>Get In Touch</span>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;