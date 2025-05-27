import React, { useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import portfolioimage from '../assets/portfolioimage.jpg'; // Adjust the path as necessary

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`w-full md:w-1/2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src={portfolioimage}
                  alt="Portrait of Pavan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              About <span className="text-primary-500">Me</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm  a passionate creative professional with a knack for turning ideas into reality. When I'm not coding or designing, you'll find me hunting for the perfect meal 🍛 or convincing my cat 😺 that my keyboard is not a bed.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My coding journey started long ago as a curious dreamer with a laptop full of unfinished projects. Since then, I’ve been passionately building apps, experimenting with ideas, and turning countless coffee-fueled nights into working code. Though I haven’t worked at a company yet, I’ve been my own boss—creating digital experiences that solve problems and delight users. Each project brings me closer to becoming a developer who crafts not just software, but meaningful stories.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">What I bring to the table:</h3>
              
              {[
                "Creative problem-solving with a dash of humor",
                "Pixel-perfect design implementation",
                "Fast and responsive web applications",
                "Collaborative approach to projects"
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <CheckCircle size={24} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;