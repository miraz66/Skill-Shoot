import React, { useState } from 'react';

const Carousel = () => {
  const [flag, setFlag] = useState(0);

  const nextSlide = () => {
    setFlag((prevFlag) => (prevFlag === 2 ? 0 : prevFlag + 1));
  };

  const prevSlide = () => {
    setFlag((prevFlag) => (prevFlag === 0 ? 2 : prevFlag - 1));
  };

  return (
    <div className="relative bg-[#6bd6c6] h-screen flex items-center justify-center">
      <div className="container relative flex justify-center items-center">
        <img
          src="https://raw.githubusercontent.com/DaftCreation/Card-Slider/master/NEW%20YORK.jpg"
          alt="New York"
          className={`absolute w-[150px] h-[250px] border-2 border-gray-500 transition-transform duration-500 ease-in-out ${
            flag === 0
              ? 'transform translate-x-0 scale-150 z-50'
              : 'transform translate-x-[-100px] scale-100 z-10'
          }`}
        />
        <img
          src="https://raw.githubusercontent.com/DaftCreation/Card-Slider/master/PARIS.jpg"
          alt="Paris"
          className={`absolute w-[150px] h-[250px] border-2 border-gray-500 transition-transform duration-500 ease-in-out ${
            flag === 1
              ? 'transform translate-x-0 scale-150 z-50'
              : 'transform translate-x-[100px] scale-100 z-10'
          }`}
        />
        <img
          src="https://raw.githubusercontent.com/DaftCreation/Card-Slider/master/AGRA.jpg"
          alt="Agra"
          className={`absolute w-[150px] h-[250px] border-2 border-gray-500 transition-transform duration-500 ease-in-out ${
            flag === 2
              ? 'transform translate-x-0 scale-150 z-50'
              : 'transform translate-x-[100px] scale-100 z-10'
          }`}
        />
      </div>

      <div
        className="prev absolute left-[20%] top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-500 border-2 border-gray-500 w-[100px] h-[30px] flex items-center justify-center cursor-pointer hover:bg-[#5cb4ac]"
        onClick={prevSlide}
      >
        Previous
      </div>

      <div
        className="next absolute right-[20%] top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-500 border-2 border-gray-500 w-[100px] h-[30px] flex items-center justify-center cursor-pointer hover:bg-[#5cb4ac]"
        onClick={nextSlide}
      >
        Next
      </div>
    </div>
  );
};

export default Carousel;
