// ============================================
// FILE: src/components/About.js
// ============================================
import React from 'react';
import { Code2, Rocket, Award, Users, Coffee, Lightbulb } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const About = ({ darkMode }) => {
   useReveal();
    const highlights = [
        {
            icon: Code2,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable code with best practices',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Rocket,
            title: 'Fast Delivery',
            description: 'Meeting deadlines without compromising quality',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Award,
            title: 'Star Performer',
            description: 'Awarded for outstanding contributions at Anotech',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Users,
            title: 'Team Player',
            description: 'Collaborative mindset with excellent communication',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    const stats = [
        { number: '8+', label: 'Themes Built' },
        { number: '15%', label: 'Client Engagement' },
        { number: '$20K', label: 'Revenue Growth' },
        { number: '100%', label: 'Dedication' }
    ];

    return (
        <section id="about"  className={`py-32 px-4 sm:px-6 lg:px-8 relative z-10 ${darkMode ? 'bg-gray-900/30' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="reveal reveal-up text-center mb-16 ">
                    <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        About Me
                    </h2>
                    <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Get to know more about my journey and what drives me
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-18 mb-16">
                    {/* Left: Photo & Quick Info */}
                    <div className="space-y-8">
                        {/* Photo */}
                        <div className="relative reveal reveal-left">
                            <div className={`relative overflow-hidden rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
                                {/* Placeholder for photo - Replace with actual image */}
                                <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                                    {/* Replace this div with your actual image: */}
                                    <img src="/sayan.jpeg" alt="Sayantan Pandey" className="w-full h-full object-cover" />
                                </div>

                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
                        </div>

                        {/* Quick Stats */}
                        {/* <div className={`grid grid-cols-2 gap-4 p-6 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
                    </div>

                    {/* Right: About Text */}
                    <div className="space-y-6 reveal reveal-right">
                        <div>
                            <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Frontend Developer with a Passion for Excellence
                            </h3>
                            <div className={`space-y-4 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <p>
                                    Hey there! 👋 I'm Sayantan, a passionate Frontend Developer from India. I specialize in building beautiful, responsive web applications that deliver exceptional user experiences.
                                </p>
                                <p>
                                    My journey in web development started with a curiosity about how websites work, and it has evolved into a career where I get to bring creative ideas to life using modern technologies like <span className="text-blue-500 font-semibold">React, Next.js, and Tailwind CSS</span>.
                                </p>
                                {/* <p>
                  At <span className="text-purple-500 font-semibold">Anotech India Solutions</span>, I've had the opportunity to work on diverse projects - from building a comprehensive LMS platform to creating engaging gaming interfaces. My work has contributed to a <span className="text-green-500 font-semibold">15% increase in client engagement</span> and supported revenue growth of approximately <span className="text-green-500 font-semibold">$20K</span>.
                </p> */}
                                <p>
                                    What sets me apart is my commitment to writing clean, maintainable code and my ability to transform complex requirements into intuitive user interfaces. I believe in continuous learning and staying updated with the latest web technologies.
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className={`p-6 reveal reveal-scale rounded-xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                    <Lightbulb className="text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Bachelor's in Computer Application
                                    </h4>
                                    <p className="text-blue-500 font-semibold mb-1">Asansol Engineering College</p>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        2021 - 2024 • CGPA: 8.20
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights Grid */}
                <div>
                    <h3 className={`text-2xl reveal reveal-up font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        What I Bring to the Table
                    </h3>
                    <div className="reveal reveal-up grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className={` flex  gap-2 group p-4 rounded-xl transition-all hover:scale-105 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}
                            >
                                <div className={`w-15 h-15 sm:h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform`}>
                                    <item.icon className="text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {item.title}
                                    </h4>
                                    <p className={`text-[0.9rem] ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {item.description}
                                    </p></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fun Fact */}
                <div className={`mt-12 reveal reveal-scale p-8 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'} text-center`}>
                    <Coffee className={`mx-auto mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} size={48} />
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        When I'm not coding...
                    </h4>
                    <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        You'll find me exploring new web technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming the next big idea! ☕
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;