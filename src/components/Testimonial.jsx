import { useState } from "react";
import CardSlider from "./CardSlider";
import JasonBayImage from "../assets/Jason-Bay.png";
import NanyBrugmanImage from "../assets/Nany-Brugman.png";
import AlexaNowanImage from "../assets/Alexa-Nowan.png";

import {
  ArrowLeftIcon,
  StarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

const cards = [
  {
    id: 1,
    title: "Jason Bay",
    image: JasonBayImage,
    content:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    id: 2,
    title: "Nany Brugman",
    image: NanyBrugmanImage,
    content:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    id: 3,
    title: "Alexa Nowan",
    image: AlexaNowanImage,
    content:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    id: 4,
    title: "Jason Bay",
    image: JasonBayImage,
    content:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    id: 5,
    title: "Nany Brugman",
    image: NanyBrugmanImage,
    content:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    id: 6,
    title: "Alexa Nowan",
    image: AlexaNowanImage,
    content:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cards.length - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cards.length - 1 ? prevIndex + 1 : 1,
    );
  };

  return (
    <div className="bg-muted">
      <div className="mx-auto max-w-7xl px-8 py-14 sm:py-20 lg:px-0">
        <div className="mx-auto max-w-xl pb-20 text-center">
          <h1 className="text-3xl font-semibold text-current sm:text-4xl">
            What do they <span className="text-secondary">say?</span>
          </h1>
          <p className="mt-4 text-muted">
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
                "flex-shrink-0 px-2 transition-transform duration-300 ease-in-out",
                isMobile ? "w-full" : "w-1/3",
                index !== currentIndex && "pointer-events-none",
              )}
            >
              <div
                className={clsx(
                  "rounded-xl pt-10",
                  index === currentIndex && "bg-white drop-shadow",
                )}
              >
                <img
                  className="mx-auto h-16 w-16 rounded-full"
                  src={card.image}
                  alt="unsplash_WNoLnJo"
                />
                <div className="mt-4 flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="h-4 w-4 text-orange-400" />
                  ))}
                </div>
                <div className="mx-auto max-w-xs pt-4 text-center">
                  <h3 className="mt-4 text-2xl text-current">{card.title}</h3>
                  <p className="mt-2 leading-7 text-muted sm:text-base sm:leading-9">
                    {card.content}
                  </p>
                </div>
                {index === currentIndex && (
                  <div className="mt-10 h-2 rounded-xl bg-primary"></div>
                )}
              </div>
            </div>
          ))}
        </CardSlider>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handlePrevClick}
            className={clsx(
              "rounded-full p-4 drop-shadow-md",
              currentIndex === 1
                ? "bg-white text-black"
                : "bg-secondary text-white",
            )}
            disabled={currentIndex === 1}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={handleNextClick}
            className={clsx(
              "rounded-full p-4 drop-shadow-md",
              currentIndex === cards.length - 1
                ? "bg-white text-black"
                : "bg-secondary text-white",
            )}
            disabled={currentIndex === cards.length - 1}
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
