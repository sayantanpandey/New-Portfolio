// ============================================
// FILE: src/components/WorkExperience.js
// ============================================
import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, Sparkles } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const WorkExperience = ({ darkMode }) => {
  useReveal();
  const experiences = [
    {
      company: 'Anotech India Solutions',
      role: 'Frontend Developer',
      location: 'Asansol, West Bengal',
      period: 'Jan 2025 - Oct 2025',
      duration: '10 months',
      type: 'Full-time',
      description: 'Working on multiple high-impact projects including LMS platforms, gaming interfaces, and investment dashboards. Leading frontend development with modern technologies and best practices.',
      achievements: [
        'Developed 8+ fully responsive themes with modern UI/UX',
        'Built LMS platform with Next.js and Tailwind CSS',
        'Created gaming platform with real-time WebSocket integration',
        'Achieved 15% increase in client engagement',
        'Contributed to $20K revenue growth across projects',
        'Awarded Star Performer for outstanding contributions'
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'Material UI', 'Tailwind CSS', 'Redux Toolkit', 'WebSocket', 'REST API'],
      color: 'from-blue-500 to-purple-600'
    },
    // Add more experiences here as you get them
    // {
    //   company: 'Next Company',
    //   role: 'Senior Frontend Developer',
    //   location: 'Location',
    //   period: 'Future Date - Present',
    //   duration: 'X months',
    //   type: 'Full-time',
    //   description: '...',
    //   achievements: [],
    //   techStack: [],
    //   color: 'from-green-500 to-emerald-600'
    // }
  ];

  return (
    <section id="work" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal reveal-up">
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Work Experience
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My professional journey in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 items-center reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'
                  }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} transform -translate-x-1/2 z-10 ring-4 ${darkMode ? 'ring-gray-950' : 'ring-gray-50'}`}>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-75`} />
                </div>

                {/* Left/Right Content */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  {/* Period Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${exp.color} text-white mb-4 reveal reveal-scale`}>
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                {/* Experience Card */}
                <div className={`${index % 2 === 0 ? 'md:col-start-2 md:pl-12' : 'md:pr-12'} ml-16 md:ml-0`}>
                  <div
                    className={`reveal reveal-scale group relative p-8 rounded-2xl transition-all hover:scale-105 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                      }`}
                  >
                    {/* Gradient Glow on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Company & Role */}
                      <div className="mb-4">
                        <h3 className={`text-2xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {exp.company}
                        </h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                          {exp.role}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                          <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <Briefcase size={14} />
                            <span>{exp.type}</span>
                          </div>
                          <div className={`px-3 py-0.5 rounded-full text-xs font-semibold ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                            {exp.duration}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className={`text-sm font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <TrendingUp size={16} className="text-green-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2 reveal reveal-up">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className={`text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-lg text-xs font-medium ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                                }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Star Performer Award */}
        {/* <div className={`mt-16 p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30' : 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200'}`}>
          <div className="flex items-start gap-4">
            <Sparkles className="text-yellow-500 flex-shrink-0" size={32} />
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Star Performer Award 🏆
              </h3>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Recognized for outstanding contributions and exceptional performance at Anotech India Solutions. This award reflects my dedication to delivering high-quality work and going above and beyond project requirements.
              </p>
            </div>
          </div>
        </div> */}


      </div>
    </section>
  );
};

export default WorkExperience;