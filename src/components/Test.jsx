import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/300x200.png?text=Image+1',
  'https://via.placeholder.com/300x200.png?text=Image+2',
  'https://via.placeholder.com/300x200.png?text=Image+3',
];

const ThreeDCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <div className="relative w-96 h-64 perspective-1000">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 transform-gpu ${
                isActive
                  ? 'opacity-100 z-20 rotate-y-0 scale-100'
                  : isPrev
                  ? 'opacity-50 z-10 rotate-y-45 scale-75 -translate-x-1/2'
                  : isNext
                  ? 'opacity-50 z-10 rotate-y--45 scale-75 translate-x-1/2'
                  : 'opacity-0 scale-50'
              }`}
              style={{
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src={image}
                alt={`carousel-img-${index}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full z-30"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full z-30"
      >
        &gt;
      </button>
    </div>
  );
};

export default ThreeDCarousel;
