import { useState } from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Jason_Bay_image from '../assets/Jason-Bay.png';
import Nany_Brugman_image from '../assets/Nany-Brugman.png';
import Alexa_Nowan_image from '../assets/Alexa-Nowan.png';
import CardSlider from './CardSlider';
import ThreeDCarousel from './Test';

const cards = [
  {
    id: 1,
    title: 'Jason Bay',
    image: Jason_Bay_image,
    content:
      'I am quite satisfied, because the skills I want or dream of can really be mastered',
  },
  {
    id: 2,
    title: 'Nany Brugman',
    image: Nany_Brugman_image,
    content:
      'I am quite satisfied, because the skills I want or dream of can really be mastered',
  },
  {
    id: 3,
    title: 'Alexa Nowan',
    image: Alexa_Nowan_image,
    content:
      'I am quite satisfied, because the skills I want or dream of can really be mastered',
  },
  {
    id: 4,
    title: 'Jason Bay',
    image: Jason_Bay_image,
    content:
      'I am quite satisfied, because the skills I want or dream of can really be mastered',
  },
  {
    id: 5,
    title: 'Nany Brugman',
    image: Nany_Brugman_image,
    content:
      'I am quite satisfied, because the skills I want or dream of can really be mastered',
  },
  {
    id: 6,
    title: 'Alexa Nowan',
    image: Alexa_Nowan_image,
    content:
      'I am quite satisfied, because the skills I want or dream of can really be mastered',
  },
];

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cards.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cards.length - 1 ? prevIndex + 1 : 1
    );
  };

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-8 lg:px-10 py-28">
        <div className="max-w-xl mx-auto sm:px-5 text-center">
          <h3 className="text-lg sm:text-4xl text-white font-semibold">
            Popular courses of the week
          </h3>
          <p className="mt-5 max-w-sm mx-auto text-white/70 text-xs sm:text-base leading-7 sm:leading-9">
            List of the most popular lists that are often studied by our members
          </p>
        </div>

        <div className="relative flex justify-center items-center overflow-hidden">
          <CardSlider
            cards={cards}
            currentIndex={currentIndex}
            setIsMobile={setIsMobile}
            isMobile={isMobile}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={clsx(
                  'flex-shrink-0 px-2 transition-transform duration-300 ease-in-out',
                  isMobile ? 'w-full' : 'w-1/3',
                  index !== currentIndex && 'pointer-events-none'
                )}
              >
                <div
                  className={clsx(
                    'pt-10 rounded-xl',
                    index === currentIndex && 'bg-white drop-shadow'
                  )}
                >
                  <img
                    className="w-16 h-16 rounded-full mx-auto"
                    src={card.image}
                    alt="unsplash_WNoLnJo"
                  />
                  <div className="mt-4 flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className="w-4 h-4 text-orange-400"
                      />
                    ))}
                  </div>
                  <div className="pt-4 max-w-xs mx-auto text-center">
                    <h3 className="text-2xl mt-4 text-current">{card.title}</h3>
                    <p className="mt-2 text-muted sm:text-base leading-7 sm:leading-9">
                      {card.content}
                    </p>
                  </div>
                  {index === currentIndex && (
                    <div className="h-2 bg-primary rounded-xl mt-10"></div>
                  )}
                </div>
              </div>
            ))}
          </CardSlider>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePrevClick}
            className={clsx(
              'p-4 rounded-full drop-shadow-md',
              currentIndex === 0
                ? 'bg-white text-black'
                : 'bg-secondary text-white'
            )}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextClick}
            className={clsx(
              'p-4 rounded-full drop-shadow-md',
              currentIndex === cards.length - 1
                ? 'bg-white text-black'
                : 'bg-secondary text-white'
            )}
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        <ThreeDCarousel />
      </div>
    </div>
  );
}
