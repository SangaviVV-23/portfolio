import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js, featuring user authentication, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      imageUrl: 'https://images.pexels.com/photos/34577/pexels-photo.jpg',
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Responsive Design']
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'React DnD', 'Material-UI'],
      imageUrl: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg',
      demoUrl: 'https://taskmanager.example.com',
      githubUrl: 'https://github.com/username/task-manager',
      features: ['Real-time Collaboration', 'Drag & Drop', 'Team Management', 'Progress Tracking']
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides detailed weather information, forecasts, and interactive maps using external APIs.',
      technologies: ['Vue.js', 'JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
      imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      demoUrl: 'https://weather-dashboard.example.com',
      githubUrl: 'https://github.com/username/weather-dashboard',
      features: ['5-Day Forecast', 'Interactive Maps', 'Location Search', 'Responsive Design']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;