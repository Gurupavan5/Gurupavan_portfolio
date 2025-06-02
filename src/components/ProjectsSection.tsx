import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import thumbforproject from '../assets/thumbforproject.webp'; // Adjust the path as necessary
import comp from '../assets/comp.png'; // Adjust the path as necessary for Dev Deck image
import aib1 from '../assets/aib1.png'; // Adjust the path as necessary for Portfolio image
import ab3 from '../assets/ab3.png'; // Adjust the path as necessary for ongoing project image
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Serpant",
    description: "As our final project adventure, I built a clever website that teaches AI to tell venomous snakes from harmless ones—because nobody wants to mistake a sassy snake for a friendly garden hose!",
    image: thumbforproject,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Gurupavan5",
    demo: " https://gurupavan5.github.io/serpant/"
  },
  {
    id: 2,
    title: "Dev Deck",
    description: " Discover a collection of stunning 3D components powered by Web3 technology. Build the future of web interfaces. ",
    image: comp,
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Gurupavan5",
    demo: "https://gurupavan5.github.io/DevDeck/"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects and skills with a unique interactive design.",
    image: aib1,
    tags: ["React", "Three.js", "GSAP"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "ongoing Learn any topic in story format",
    description: "An innovative platform that transforms complex topics into engaging stories, making learning fun and accessible.",
    image: ab3,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#"
  },
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  // Removed unused activeProject state
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one was a unique journey
            with its own challenges and learning opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              // Removed onMouseEnter and onMouseLeave handlers for activeProject
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-800 hover:bg-primary-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-800 hover:bg-primary-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Let's work together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;