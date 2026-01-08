// ============================================
// FILE: src/components/Projects.js
// ============================================
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const Projects = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);
  useReveal();
  const projects = [
    {
      name: 'Macro Frames',
      tagline: 'Photography Portfolio',
      description: 'A stunning portfolio website for macro photography showcasing intricate nature details. Features elegant galleries, smooth animations, and responsive design for optimal viewing experience.',
      tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'Cloudinary', 'Netlify',],
      gradient: 'from-green-500 to-emerald-500',
      image: '/projects/smartshoot.png',
      live: 'https://smartshoot.netlify.app/',
      github: 'https://github.com/sayantanpandey/smart-shoot',
      period: 'Sept 2025 - Oct 2025',
      highlights: ['Next.js 13 App Router architecture',
        'Firebase-powered image & data management',
        'Responsive photography galleries',
        'Admin-controlled photo uploads']
    },
     {
      name: 'StudyNotion',
      tagline: 'EdTech Learning Platform',
      description: 'A comprehensive e-learning platform that bridges the gap between students and instructors. Features include course management, video lectures, progress tracking, and interactive learning modules.',
      tech: ['MERN', 'Redux Toolkit', 'Tailwind CSS', 'Razorpay', 'Cloudinary'],
      gradient: 'from-violet-500 to-purple-500',
      image: '/projects/studynotion.png',
      live: 'https://studynotion-s18.vercel.app/',
      github: 'https://github.com/sayantanpandey/StudyNotion',
      period: 'Sep 2024 - Dec 2024',
      highlights: ['Full-stack MERN application', 'JWT-based authentication & role management', 'Instructor & student dashboards', 'Cloudinary-powered media uploads']
    },
    {
      name: 'FoodyBuddy',
      tagline: 'Food Delivery Platform',
      description: 'A dynamic food ordering platform featuring real-time menu browsing, smart cart management, and seamless checkout. Optimized for performance across all devices.',
      tech: [
        'MERN',
        'Axios',
        'CSS',
        'Stripe',
        'Cloudinary'
      ],
      gradient: 'from-orange-500 to-red-500',
      image: '/projects/foodybuddy.png',
      live: 'https://foodybuddy-s18.vercel.app/',
      github: 'https://github.com/sayantanpandey/FoodyBuddy-FrontEnd',
      period: 'Jun 2024 - Aug 2024',
      highlights: ['JWT-based authentication', 'Stripe payment integration', 'Dynamic cart & checkout system', 'REST API integration']
    },

    {
      name: 'AlgoDesk',
      tagline: 'Spreadsheet & Data Management Application',
      description:
        'A spreadsheet-style web application for managing structured data with support for formulas, dependency tracking, and multi-sheet handling, built with a focus on performance and data integrity.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Material Icons'],
      gradient: 'from-cyan-500 to-blue-500',
      image: '/projects/algodesk.png',
      live: 'https://algodesk-s18.netlify.app/',
      github: 'https://github.com/sayantanpandey/AlgoDesk',
      period: 'Aug 2023 - Oct 2023',
      highlights: ['Spreadsheet-like data management system',
        'DFS-based dependency graph & cycle detection',
        'Formula binding and path tracking',
        'File upload and data persistence']
    },

    {
      name: 'QuickStay',
      tagline: 'Hotel Booking Platform',
      description: 'A modern hotel booking application that simplifies the reservation process. Features include property search, room availability, booking management, and user reviews.',
      tech: ['React', 'Tailwind CSS', 'Clerk Auth',],
      gradient: 'from-purple-500 to-pink-500',
      image: '/projects/quickstay.png',
      live: 'https://quickstay-s18.netlify.app/',
      github: 'https://github.com/sayantanpandey/QuickStay',
      period: 'Jan 2024 - Mar 2024',
      highlights: ['Modern SPA architecture', 'Search & filter system', 'Booking management', 'Responsive design']
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    // if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Drag functionality
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);

  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 100) {
      goToPrev();
    } else if (translateX < -100) {
      goToNext();
    }
    setTranslateX(0);
  };

  const currentProject = projects[currentIndex];
  const isEven = currentIndex % 2 === 0;

  return (
    <section id="projects" className={`py-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden ${darkMode ? 'bg-gray-900/30' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal reveal-up">
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of my recent work - from full-stack applications to creative web experiences
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Project Display */}
          <div
            ref={carouselRef}
            className="cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
              style={{
                transform: `translateX(${translateX}px)`,
                opacity: isDragging ? 0.7 : 1
              }}
            >
              {/* Project Image */}
              <div className={`${!isEven ? 'lg:order-2' : ''} relative group flex justify-center `}>
                <div className="relative group">
                  {/* IMAGE CARD */}

                  <div className="relative overflow-hidden rounded-2xl aspect-video">
                    <img
                      src={currentProject.image}
                      alt={currentProject.name}
                      className="
        w-full h-full object-cover
        transition-transform duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:scale-[1.06]
        group-hover:rotate-[0.3deg]
      "
                    />

                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* decorative glow */}
                  <div
                    className={`
      pointer-events-none absolute -inset-4
      bg-gradient-to-br ${currentProject.gradient}
      opacity-0 group-hover:opacity-20
      blur-2xl transition-opacity
      -z-10
    `}
                  />

                  {/* META + ACTIONS */}
                  <div className="hidden md:flex flex-wrap items-center justify-between gap-4 pt-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>{currentProject.period}</span>
                    </div>

                    <div className="flex gap-5">
                      <a
                        href={currentProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2
                        bg-gradient-to-r ${currentProject.gradient}
                        text-white! hover:shadow-xl transition-all`}
                      >
                        <ExternalLink size={18} />
                        View Live
                      </a>

                      <a
                        href={currentProject.github}
                        className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all
                         ${darkMode
                            ? 'bg-gray-800 text-white hover:bg-gray-700'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                          }`}
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>


              </div>

              {/* Project Details */}
              <div className={`${!isEven ? 'lg:order-1' : ''} space-y-6 max-w-xl `}>
                {/* Project Number */}

                {/* Title & Tagline */}
                <div>
                  <h3 className={`text-3xl sm:text-4xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {currentProject.name}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${currentProject.gradient} bg-clip-text text-transparent`}>
                    {currentProject.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {currentProject.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {currentProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentProject.gradient}`} />
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <p className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-200'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Period & Links */}
                <div className=" md:hidden flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>{currentProject.period}</span>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 bg-gradient-to-r ${currentProject.gradient} text-white! hover:shadow-xl`}
                    >
                      <ExternalLink size={18} />
                      View Live
                    </a>
                    <a
                      href={currentProject.github}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className={`absolute left-0 top-[45%] -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-transparent! hover:bg-gray-700 text-white' : 'bg-transparent! hover:bg-gray-100 text-gray-900'
              } shadow-xl`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className={`absolute right-0 top-[45%] -translate-y-1/2 translate-x-4 lg:translate-x-12 p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-transparent! hover:bg-gray-700 text-white' : 'bg-transparent! hover:bg-gray-100 text-gray-900'
              } shadow-xl`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? `w-[1px] h-[1px] bg-gradient-to-r ${projects[index].gradient}`
                    : `w-[1px] h-[1px] ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300! hover:bg-gray-400'}`
                }`}
              />
            ))}
          </div> */}


        </div>


      </div>
    </section>
  );
};

export default Projects;