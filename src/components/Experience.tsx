import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Experience } from '../types';

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Associate Software Engineer',
      company: 'Tech Innovations Inc.',
      duration: '2023 - Present',
      description: 'Developing and maintaining web applications using React, TypeScript, and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions that serve thousands of users.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      id: '2',
      title: 'Junior Frontend Developer',
      company: 'StartupXYZ',
      duration: '2022 - 2023',
      description: 'Built responsive web interfaces and improved user experience across multiple products. Worked closely with design teams to implement pixel-perfect UI components and optimize application performance.',
      technologies: ['JavaScript', 'Vue.js', 'CSS3', 'Figma', 'Git']
    },
    {
      id: '3',
      title: 'Software Development Intern',
      company: 'CodeCraft Solutions',
      duration: '2022 (Summer)',
      description: 'Contributed to open-source projects and internal tools. Gained hands-on experience with modern development workflows, testing practices, and agile methodologies.',
      technologies: ['Python', 'Django', 'Jest', 'Docker', 'CI/CD']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Professional Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-lg font-medium text-blue-600">
                      {exp.company}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;