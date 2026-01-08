import React from 'react';

const AnimatedBackground = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        style={{ 
          left: `${mousePosition.x / 20}px`, 
          top: `${mousePosition.y / 20}px`,
          transition: 'all 0.5s ease-out'
        }}
      />
      <div 
        className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        style={{ 
          right: `${mousePosition.x / 30}px`, 
          bottom: `${mousePosition.y / 30}px`,
          transition: 'all 0.6s ease-out'
        }}
      />
      <div 
        className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        style={{ 
          left: `${mousePosition.x / 40}px`, 
          bottom: `${mousePosition.y / 40}px`,
          transition: 'all 0.7s ease-out'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;