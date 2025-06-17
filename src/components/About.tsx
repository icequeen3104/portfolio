import React from 'react';
import { Brain, Code, Database, Zap } from 'lucide-react';
import { PersonalInfo } from '../types';

interface AboutProps {
  personal: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personal }) => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Specializing in computer vision, object detection, and data analysis using cutting-edge AI technologies."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building responsive web applications with modern frameworks and best practices."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Extracting insights from complex datasets using statistical analysis and visualization."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Passionate about solving real-world problems through innovative technology solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm passionate about leveraging artificial intelligence to create innovative solutions 
              that make a real difference in people's lives and businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {personal.bio}
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a strong foundation in Python and machine learning libraries, I specialize in 
                developing computer vision applications, data analysis systems, and AI-powered solutions. 
                My experience ranges from object detection models to comprehensive data visualization projects.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI and Technology"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-blue-600 mb-4 group-hover:text-teal-600 transition-colors duration-200">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;