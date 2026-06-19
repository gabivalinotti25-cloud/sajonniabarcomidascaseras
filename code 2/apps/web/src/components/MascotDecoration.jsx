import React from 'react';

function MascotDecoration({ className = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24 sm:w-28 sm:h-28',
    xl: 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`relative inline-block shrink-0 ${selectedSize} ${className}`}>
      <img
        src="https://horizons-cdn.hostinger.com/9d8dce46-d857-4cc1-88f9-223b11875a03/6f7f10ad3a47e14c202de723752bcdc6.png"
        alt="Sajonnia Bar mascot - red bean-shaped character with purple arms and legs, large eyes, and happy expression"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default MascotDecoration;