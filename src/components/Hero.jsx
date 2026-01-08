import React from 'react';
import { Sparkles, Rocket, Mail, Github, Linkedin } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div data-replay="animate-scale-fade" className="animate-scale-fade delay-200 mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 mb-8 ">
          <Sparkles size={16} className="text-blue-400" />
          <span className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Available for New Projects</span>
        </div>

        <h1 data-replay="animate-slide-up" className={`animate-slide-up delay-300 text-5xl sm:text-6xl lg:text-8xl font-black mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Frontend
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {" "}Developer
          </span>
        </h1>

        <p data-replay="animate-fade-in" className={`animate-fade-in delay-400 text-xl sm:text-2xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Crafting beautiful, responsive web experiences with React & Next.js
        </p>

        <div data-replay="animate-pop-up" className="animate-pop-up delay-500 flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2"
          >
            <Rocket size={20} className="group-hover:animate-bounce" />
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : ' hover:bg-gray-200 bg-gray-100! text-gray-900!'}`}
          >
            <Mail size={20} />
            Hire Me
          </button>
        </div>

        <div className="animate-slide-in-bottom delay-600 flex justify-center gap-6">
          <a href="https://github.com/sayantanpandey" target="_blank" rel="noopener noreferrer"
            className={`p-4 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/sayantan-pandey" target="_blank" rel="noopener noreferrer"
            className={`p-4 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Linkedin size={24} />
          </a>
          <a href="mailto:sayantanpandey060@gmail.com"
            className={`p-4 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Mail size={24} />
          </a>
        </div>

        <div className={`animate-float mt-16 inline-block px-6 py-3 rounded-full border ${darkMode ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-white/50'} backdrop-blur-sm`}>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-gray-900 flex items-center justify-center text-xs font-bold text-white">R</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-gray-900 flex items-center justify-center text-xs font-bold text-white">N</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-gray-900 flex items-center justify-center text-xs font-bold text-white">T</div>
            </div>
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>React • Next.js • Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;