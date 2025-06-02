// import React, { useRef } from 'react';
// import { useInView } from '../hooks/useInView';

// interface Skill {
//   name: string;
//   level: number;
//   icon: string;
//   color: string;
// }

// const skills: Skill[] = [
//   { name: "HTML/CSS", level: 100, icon: "🎨", color: "from-red-500 to-green-500" },
//   { name: "JavaScript", level: 85, icon: "🚀", color: "from-red-400 to-green-500" },
//   { name: "React", level: 80, icon: "⚛️", color: "from-red-500 to-green-500" },
//   { name: "TypeScript", level: 75, icon: "📘", color: "from-red-600 to-green-600" },
//   { name: "UI/UX Design", level: 70, icon: "🖌️", color: "from-red-500 to-green-500" },
//   { name: "Node.js", level: 65, icon: "🟢", color: "from-green-500 to-emerald-500" },
// ];

// const SkillsSection: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { threshold: 0.1 });
  
//   return (
//     <section 
//       id="skills" 
//       ref={sectionRef}
//       className="py-20 bg-gray-50 dark:bg-gray-800"
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
//             My <span className="text-primary-500">Skills</span>
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300">
//             Here are some technologies and tools I've worked with over the years. 
//             I'm always learning new things and expanding my skillset!
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <div 
//               key={skill.name}
//               className={`bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
//                 isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <div className="flex items-center mb-4">
//                 <span className="text-3xl mr-3">{skill.icon}</span>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
//               </div>
              
//               <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
//                 <div 
//                   className={`h-full rounded-full bg-gradient-to-r ${skill.color} ${isInView ? 'animate-skill-fill' : ''}`}
//                   style={{ 
//                     width: `${skill.level}%`,
//                     animationDelay: `${index * 100 + 300}ms` 
//                   }}
//                 ></div>
//               </div>
              
//               <div className="mt-2 flex justify-between">
//                 <span className="text-sm text-gray-500 dark:text-gray-400">Beginner</span>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">Expert</span>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className={`mt-16 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
//           <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
//             But skills are just tools. What really matters is how we use them to solve problems.
//             Sometimes, the most important skill is knowing when to take a coffee break! ☕
//           </p>
          
//           <a 
//             href="#projects"
//             className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
//           >
//             <span>See my projects</span>
//             <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;




import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 100, icon: "🎨", color: "from-green-700 to-green-800" },
  { name: "JavaScript", level: 85, icon: "⚡", color: "from-green-700 to-green-800" },
  { name: "React", level: 80, icon: "⚛️", color: "from-green-700 to-green-800" },
  { name: "TypeScript", level: 75, icon: "📘", color: "from-green-700 to-green-800" },
  { name: "UI/UX Design", level: 30, icon: "🖌️", color: "from-green-700 to-green-300" },
  { name: "Node.js", level: 65, icon: "🟢", color: "from-green-700 to-green-800" },
  { name: "express.js", level: 100, icon: "🚀", color: "from-green-700 to-green-800" },
  { name: "MongoDB", level: 70, icon: "📦", color: "from-green-700 to-green-800" },
  { name: "Git/GitHub", level: 70, icon: "🐙", color: "from-green-700 to-green-800" },
  { name: "Tailwind CSS", level: 90, icon: "🌊", color: "from-green-700 to-green-800" },
  { name: "Next.js", level: 50, icon: "🔗", color: "from-green-700 to-green-800" },
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
            My <span className="text-primary-500">Skills</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Here are some technologies and tools I've worked with over the years. 
            I'm always learning new things and expanding my skillset!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-default
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
              aria-label={`${skill.name} skill proficiency`}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3" aria-hidden="true">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>

              <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} ${isInView ? 'animate-skill-fill' : ''}`}
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 150 + 300}ms`,
                    transition: 'width 1s ease-out',
                  }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>

              <div className="mt-3 flex justify-between text-sm text-gray-600 dark:text-gray-400 select-none">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </article>
          ))}
        </div>

        <footer
          className={`mt-16 max-w-2xl mx-auto text-center transition-opacity duration-700
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '900ms' }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            But skills are just tools. What really matters is how we use them to solve problems.
            Sometimes, the most important skill is knowing when to take a coffee break! ☕
          </p>

          <a
            href="#projects"
            className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300 group"
            aria-label="See my projects"
          >
            <span>See my projects</span>
            <svg
              className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </footer>
      </div>
    </section>
  );
};

export default SkillsSection;
