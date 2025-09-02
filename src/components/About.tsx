import React from 'react';
import { Code, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a dedicated Associate Software Engineer with a passion for crafting elegant 
                solutions to complex problems. My journey in software development began with 
                curiosity and has evolved into a deep commitment to writing clean, efficient code.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in full-stack development, with expertise in modern web technologies 
                and a strong foundation in computer science principles. I'm always eager to learn 
                new technologies and tackle challenging projects that push my boundaries.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                  <Lightbulb className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 font-medium">Problem Solver</span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
                  <Coffee className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-800 font-medium">Continuous Learner</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Location</span>
                  <span className="font-medium">San Francisco, CA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Experience</span>
                  <span className="font-medium">2+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Education</span>
                  <span className="font-medium">CS Degree</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Availability</span>
                  <span className="font-medium text-emerald-300">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;