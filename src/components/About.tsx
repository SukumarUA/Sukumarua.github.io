import React from 'react';
import { FileText } from 'lucide-react';
import { aboutMe, skills } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {aboutMe.title}
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert prose-indigo max-w-none">
              {aboutMe.description.split('\n\n').map((paragraph, index) => (
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                  {paragraph}
               </p>
              ))}
            </div>
            
            {aboutMe.resumeUrl && (
              <div className="mt-8">
                <a
                  href={aboutMe.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <FileText className="mr-2" size={20} />
                  Download Resume
                </a>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              My Skills
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Frontend Development
                </h4>
                <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => skill.category === 'frontend')
                  .map(skill => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {skill.name}
                    </span>
                  ))
                }
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Backend Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter(skill => skill.category === 'backend')
                    .map(skill => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {skill.name}
                      </span>
                    ))
                  }
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Other Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter(skill => skill.category === 'other')
                    .map(skill => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {skill.name}
                      </span>
                    ))
                  }
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