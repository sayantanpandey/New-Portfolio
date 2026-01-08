import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navigation = ({ darkMode, setDarkMode, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-950/80' : 'bg-white/80'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white transform group-hover:rotate-12 transition-transform">
              S
            </div>
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sayantan Pandey</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About','Skills','Work', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-3 py-1 rounded-md transition-colors font-medium outline-0 bg-transparent! ${activeSection === item.toLowerCase()
                  ? darkMode ? 'text-blue-500 ' : 'text-blue-500 bg-gray-200!'
                  : darkMode
                    ? 'text-gray-400  hover:text-white '
                    : 'text-gray-600 bg-gray-100! hover:text-gray-900 '
                  }`}
              >

                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-blue-500 to-purple-600" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`hidden sm:flex p-2.5 rounded-xl transition-all outline-0 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 ' : 'bg-gray-200!  text-gray-700!'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-all outline-0 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200! text-gray-700! '}`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-950/80' : 'bg-white'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="px-4 py-4 space-y-2">
            {['Home', 'About','Skills','Work', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${activeSection === item.toLowerCase()
                  ? darkMode ? 'text-blue-500 bg-gradient-to-r from-blue-500/20 to-purple-600/20' : 'text-blue-500 bg-gray-200!'
                  : darkMode ? 'text-gray-400 hover:bg-gray-800 bg-transparent!' : 'text-gray-600 bg-transparent! hover:text-gray-900'
                  }`}
              >
                {item}
              </button>
            ))}
            <div className={`my-3 h-px ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all font-medium ${darkMode
                  ? 'bg-gray-800! hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-200! hover:bg-gray-300 text-gray-700'
                }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;