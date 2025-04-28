import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { ArrowDownCircle } from 'lucide-react';
// import { socials } from '../data';
import SocialLinks from './SocialLinks';

const TEXTS = [
  'Engineer of Dreams 🚀✨',
  'Software Developer 🧑‍💻',
  'Java & COBOL Wizard 🧙‍♂️',
  'Tech Enthusiast with a Big Smile 😄💻',
  'From Mainframe to Microservices ⚙️☁️',
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // Change every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <p className="text-indigo-600 dark:text-indigo-400 font-medium animate-fade-in">
                Hello World, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in-delay-1">
                Sukumar Chinthalapudi
              </h1>

              {/* ✨ Rolling Titles Animation */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-indigo-600 dark:text-indigo-400 animate-fade-in-delay-2 transition-all duration-500 ease-in-out">
                <TextTransition springConfig={presets.wobbly}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 animate-fade-in-delay-3">
              Crafting enterprise solutions with Java, COBOL, and modern cloud tech. AWS Certified Solutions Architect passionate about building scalable, high-performance systems.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-delay-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>

            <SocialLinks />
          </div>

          <div className="hidden lg:flex justify-center items-center animate-float">
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden">
              <img 
                src="https://github.com/SukumarUA/Images/blob/main/Sukumar/SukumarHome.jpg?raw=true"
                alt="Sukumar Chinthalapudi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#about" 
            aria-label="Scroll to About section"
            className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
