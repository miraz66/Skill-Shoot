import { useState } from 'react';
import CardSlider from './CardSlider';
import Jason_Bay_image from '../assets/Jason-Bay.png';
import Nany_Brugman_image from '../assets/Nany-Brugman.png';
import Alexa_Nowan_image from '../assets/Alexa-Nowan.png';

import {
  ArrowLeftIcon,
  StarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';

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
    id: 5,
    title: 'Alexa Nowan',
    image: Alexa_Nowan_image,
    content:
      'I am quite satisfied, because the skills I want or dream of can really be mastered',
  },
];

export default function Testimonial() {
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
    <div className="bg-muted">
      <div className="max-w-7xl mx-auto px-8 lg:px-10 py-28">
        <div className="max-w-xl mx-auto text-center pb-20">
          <h1 className="text-3xl sm:text-4xl text-current font-semibold">
            What do they <span className="text-secondary">say?</span>
          </h1>
          <p className="text-muted mt-4">
            This is an honest review from members who have joined us
          </p>
        </div>

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
                    <StarIcon key={star} className="w-4 h-4 text-orange-400" />
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

        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePrevClick}
            className={clsx(
              'p-4 rounded-full drop-shadow-md',
              currentIndex === 1
                ? 'bg-white text-black'
                : 'bg-secondary text-white'
            )}
            disabled={currentIndex === 1}
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
            disabled={currentIndex === cards.length - 1}
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
