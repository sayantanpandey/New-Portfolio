import React from 'react';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`py-6 px-4 border-t ${darkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'} relative z-10`}>
            <div className="max-w-7xl mx-auto text-center">
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                    © 2025 Sayantan Pandey. Designed & Built with React
                </p>
            </div>
        </footer>
    );
};

export default Footer