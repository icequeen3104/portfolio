import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Server, PenTool as Tool, Palette } from 'lucide-react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: <Monitor className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
    { key: 'backend', label: 'AI & Backend', icon: <Server className="w-6 h-6" />, color: 'from-green-500 to-green-600' },
    { key: 'tools', label: 'Tools', icon: <Tool className="w-6 h-6" />, color: 'from-purple-500 to-purple-600' },
    { key: 'design', label: 'Design', icon: <Palette className="w-6 h-6" />, color: 'from-pink-500 to-pink-600' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here's an overview of my technical skills and proficiency levels across different domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => {
              const categorySkills = getSkillsByCategory(category.key);
              if (categorySkills.length === 0) return null;

              return (
                <div
                  key={category.key}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{category.label}</h3>
                  </div>

                  <div className="space-y-6">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;