import React from 'react';
import { Skill } from '../types';

const Skills = () => {
  const skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js', 'Vue.js']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase', 'Supabase', 'Jest', 'Cypress']
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Team Collaboration', 'Agile Methodology', 'Code Review', 'Documentation']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => (
              <div
                key={skillCategory.category}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {skillCategory.category}
                </h3>
                <div className="space-y-3">
                  {skillCategory.items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 rounded-lg text-sm font-medium text-blue-800 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;