import { useEffect, useState } from "react";
import ProgramerImage1 from "../assets/programer-img-1.png";
import ProgramerImage2 from "../assets/programer-img-2.png";
import ProgramerImage3 from "../assets/programer-img-3.png";
import VideoImg1 from "../assets/Video-img-1.png";
import VideoImg2 from "../assets/Video-img-2.png";
import VideoImg3 from "../assets/Video-img-3.png";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import ProductCard from "./ProductCard";
import clsx from "clsx";

const data = [
  {
    id: 1,
    image: ProgramerImage1,
    title: "Basics of learning team management",
    name: "Jone Owel",
    jobTitle: "IT Engineer",
    Participant: 120,
    videoUrl: "2M23skx2TK8",
    videoImg: VideoImg1,
    coursePrice: 120,
    videoItems: 25,
  },

  {
    id: 2,
    image: ProgramerImage2,
    title: "Learn basic database structure",
    name: "Roynaldo Jr",
    jobTitle: "Data Science",
    Participant: 55,
    videoUrl: "2M23skx2TK8",
    videoImg: VideoImg2,
    coursePrice: 180,
    videoItems: 20,
  },

  {
    id: 3,
    image: ProgramerImage3,
    title: "Create dynamic website with basic php",
    name: "Markus Low",
    jobTitle: "Programer",
    Participant: 98,
    videoUrl: "PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&index=2",
    videoImg: VideoImg3,
    coursePrice: 135,
    videoItems: 20,
  },

  {
    id: 4,
    image: ProgramerImage1,
    title: "Create dynamic website with basic php",
    name: "Markus Low",
    jobTitle: "Programer",
    Participant: 98,
    videoUrl: "5r25Y9Vg2P4",
    videoImg: VideoImg1,
    coursePrice: 135,
    videoItems: 20,
  },

  {
    id: 5,
    image: ProgramerImage2,
    title: "Create dynamic website with basic php",
    name: "Markus Low",
    jobTitle: "Programer",
    Participant: 98,
    videoUrl: "PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&index=2",
    videoImg: VideoImg2,
    coursePrice: 135,
    videoItems: 20,
  },

  {
    id: 6,
    image: ProgramerImage3,
    title: "Create dynamic website with basic php",
    name: "Markus Low",
    jobTitle: "Programer",
    Participant: 98,
    videoUrl: "5r25Y9Vg2P4",
    videoImg: VideoImg3,
    coursePrice: 135,
    videoItems: 25,
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="relative mt-12 flex h-[360px] w-full justify-center sm:h-[527px]">
      <div
        className={clsx("perspective-1000 relative h-64 sm:w-[25.5rem]", {
          "h-64 w-72": isMobile,
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
                "absolute w-full transform-gpu overflow-hidden transition-all duration-700",
                isActive
                  ? "rotate-y-0 z-20 scale-100 opacity-100"
                  : isPrev
                    ? isMobile
                      ? "rotate-y-45 z-10 -translate-x-[108%] opacity-50"
                      : "rotate-y-45 z-10 -translate-x-[106%]"
                    : isNext
                      ? isMobile
                        ? "rotate-y--45 z-10 translate-x-[108%] opacity-50"
                        : "rotate-y--45 translate-x-[106%]"
                      : "scale-50 opacity-0",
              )}
              style={{
                transformStyle: "preserve-3d",
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
          "absolute -left-4 top-1/2 z-30 -translate-y-1/2 transform rounded-full border-4 border-white p-2.5 sm:-left-6 sm:p-3.5",
          currentIndex === 0
            ? "border-4 border-gray-200 bg-white text-black"
            : "bg-primary text-white/90",
        )}
        disabled={currentIndex === 0}
      >
        <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button
        onClick={nextImage}
        className={clsx(
          "absolute -right-4 top-1/2 z-30 -translate-y-1/2 transform rounded-full p-2.5 sm:-right-6 sm:p-3.5",
          currentIndex === data.length - 1
            ? "border-4 border-gray-200 bg-white text-black"
            : "border-4 border-white bg-primary text-white/90",
        )}
        disabled={currentIndex === data.length - 1}
      >
        <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
};

export default ProductCarousel;
