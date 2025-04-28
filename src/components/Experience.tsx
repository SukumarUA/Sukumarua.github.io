import React from 'react';
import { experiences, education } from '../data';
import { BriefcaseIcon, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Professional Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <BriefcaseIcon className="mr-3" size={24} />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative pl-8 pb-12 ${
                  index !== experiences.length - 1 ? "border-l-2 border-gray-200 dark:border-gray-700" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-gray-600 dark:text-gray-400 text-sm mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <BriefcaseIcon size={16} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="mr-3" size={24} />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`relative pl-8 pb-12 ${
                  index !== education.length - 1 ? "border-l-2 border-gray-200 dark:border-gray-700" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-gray-600 dark:text-gray-400 text-sm mt-1 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <GraduationCap size={16} className="mr-2" />
                    <span>{edu.institution}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;