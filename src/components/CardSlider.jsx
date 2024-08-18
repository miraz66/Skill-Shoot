import PropTypes from 'prop-types';
import { useEffect } from 'react';

const CardSlider = ({ currentIndex, isMobile, setIsMobile, children }) => {
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: isMobile
              ? `translateX(-${currentIndex * 100}%)`
              : `translateX(-${(currentIndex - 1) * 33.33}%)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

CardSlider.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
  setIsMobile: PropTypes.func.isRequired,
};

export default CardSlider;
