// ============================================
// FILE: src/components/Skills.js
// ============================================
import React from 'react';
import useReveal from '../hooks/useReveal';
const Skills = ({ darkMode }) => {
   useReveal();
  const skills = [
    // Core Frontend
    { name: 'React', icon: '/skills/react-original-wordmark.svg', color: '#61DAFB' },
    { name: 'JavaScript', icon: '/skills/javascript-original.svg', color: '#F7DF1E' },
    { name: 'Redux', icon: '/skills/redux-original.svg', color: '#764ABC' },
    { name: 'Tailwind CSS', icon: '/skills/tailwindcss-icon.svg', color: '#06B6D4' },
    { name: 'Material UI', icon: '/skills/materialui-original.svg', color: '#007FFF' },

    // Backend / APIs
    { name: 'NodeJS', icon: darkMode
        ? '/skills/nodejs-white.svg'
        : '/skills/nodejs-black.svg', color: '#339933' },
    { name: 'Postman', icon: '/skills/getpostman-icon.svg', color: '#FF6C37' },

    // Markup & Styling
    { name: 'HTML', icon: '/skills/html5-original.svg', color: '#E34F26' },
    { name: 'CSS', icon: '/skills/css3-plain.svg', color: '#1572B6' },

    // Version Control
    { name: 'Git', icon: '/skills/git-plain.svg', color: '#F05032' },
    {
      name: 'GitHub', icon: darkMode
        ? '/skills/github-white.svg'
        : '/skills/github-black.svg', color: '#ffffff', mono: true
    },

    // Dev Tools
    { name: 'VS Code', icon: '/skills/vscode-original.svg', color: '#007ACC' },
    { name: 'Jira', icon: '/skills/jira-original.svg', color: '#0052CC' },

    // Deployment / Hosting
    {
      name: 'Vercel', icon: darkMode
        ? '/skills/vercel-white.svg'
        : '/skills/vercel-black.svg', color: '#ffffff', mono: true
    },
    { name: 'Netlify', icon: '/skills/netlify-original.svg', color: '#00C7B7' },
    {
      name: 'Render', icon: darkMode
        ? '/skills/render-white.svg'
        : '/skills/render-black.svg', color: '#ffffff', mono: true
    },
  ];


  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal reveal-up text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Tech Stack
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies & tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="reveal reveal-scale grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 20}ms` }}
              className={`reveal reveal-up group relative p-2 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer ${darkMode
                ? 'bg-gray-900 border border-gray-800 hover:border-gray-700'
                : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
            >
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: skill.color }}
              />

              {/* Icon */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-6 h-6 sm:w-16 sm:h-16 mb-4 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Skill Name */}
                <p className={`text-[12px] sm:text-sm font-semibold text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  {skill.name}
                </p>
              </div>

              {/* Decorative Corner */}
              {/* <div
                className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              /> */}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`reveal reveal-scale mt-16 p-8 rounded-2xl text-center ${darkMode
          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30'
          : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
          }`}>
          <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Always Learning
          </h3>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm constantly exploring new technologies and expanding my skill set to stay ahead in the ever-evolving world of web development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;