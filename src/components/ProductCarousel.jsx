import { useEffect, useState } from 'react';
import Programer_image_1 from '../assets/programer_img_1.png';
import Programer_image_2 from '../assets/programer_img_2.png';
import Programer_image_3 from '../assets/programer_img_3.png';
import Video_img_1 from '../assets/Video-img-1.png';
import Video_img_2 from '../assets/Video-img-2.png';
import Video_img_3 from '../assets/Video-img-3.png';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import ProductCard from './ProductCard';
import clsx from 'clsx';

const data = [
  {
    id: 1,
    image: Programer_image_1,
    title: 'Basics of learning team management',
    name: 'Jone Owel',
    job_title: 'IT Engineer',
    Participant: 120,
    video_url: '2M23skx2TK8',
    video_img: Video_img_1,
    course_price: 120,
    video_items: 25,
  },

  {
    id: 2,
    image: Programer_image_2,
    title: 'Learn basic database structure',
    name: 'Roynaldo Jr',
    job_title: 'Data Science',
    Participant: 55,
    video_url: '2M23skx2TK8',
    video_img: Video_img_2,
    course_price: 180,
    video_items: 20,
  },

  {
    id: 3,
    image: Programer_image_3,
    title: 'Create dynamic website with basic php',
    name: 'Markus Low',
    job_title: 'Programer',
    Participant: 98,
    video_url: 'PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&index=2',
    video_img: Video_img_3,
    course_price: 135,
    video_items: 20,
  },

  {
    id: 4,
    image: Programer_image_1,
    title: 'Create dynamic website with basic php',
    name: 'Markus Low',
    job_title: 'Programer',
    Participant: 98,
    video_url: '5r25Y9Vg2P4',
    video_img: Video_img_1,
    course_price: 135,
    video_items: 20,
  },

  {
    id: 5,
    image: Programer_image_2,
    title: 'Create dynamic website with basic php',
    name: 'Markus Low',
    job_title: 'Programer',
    Participant: 98,
    video_url: 'PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&index=2',
    video_img: Video_img_2,
    course_price: 135,
    video_items: 20,
  },

  {
    id: 6,
    image: Programer_image_3,
    title: 'Create dynamic website with basic php',
    name: 'Markus Low',
    job_title: 'Programer',
    Participant: 98,
    video_url: '5r25Y9Vg2P4',
    video_img: Video_img_3,
    course_price: 135,
    video_items: 25,
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="relative w-full h-[357px] sm:h-[527px] flex justify-center mt-12">
      <div
        className={clsx('relative w-[25.5rem] h-64 perspective-1000', {
          'w-72 h-64': isMobile,
        })}
      >
        {data.map((item, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + data.length) % data.length;
          const isNext = index === (currentIndex + 1) % data.length;

          return (
            <div
              key={index}
              className={clsx(
                'absolute w-full transition-all duration-700 transform-gpu overflow-hidden',
                isActive
                  ? 'opacity-100 z-20 rotate-y-0 scale-100'
                  : isPrev
                  ? isMobile
                    ? 'opacity-50 z-10 rotate-y-45 -translate-x-[110%]'
                    : 'z-10 rotate-y-45 -translate-x-[106%]'
                  : isNext
                  ? isMobile
                    ? 'opacity-50 z-10 rotate-y--45 translate-x-[110%]'
                    : 'rotate-y--45 translate-x-[106%]'
                  : 'opacity-0 scale-50'
              )}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <ProductCard {...item} />
            </div>
          );
        })}
      </div>

      <button
        onClick={prevImage}
        className={clsx(
          'absolute -left-5 sm:-left-6 top-1/2 transform -translate-y-1/2 p-2.5 sm:p-3.5 border-4 border-white rounded-full z-30',
          currentIndex === 0
            ? 'bg-white text-black border-4 border-gray-200'
            : 'bg-primary text-white/90'
        )}
        disabled={currentIndex === 0}
      >
        <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={nextImage}
        className={clsx(
          'absolute -right-5 sm:-right-6 top-1/2 transform -translate-y-1/2 p-2.5 sm:p-3.5  rounded-full z-30',
          currentIndex === data.length - 1
            ? 'bg-white text-black border-4 border-gray-200'
            : 'bg-primary text-white/90 border-4 border-white'
        )}
        disabled={currentIndex === data.length - 1}
      >
        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default ProductCarousel;
