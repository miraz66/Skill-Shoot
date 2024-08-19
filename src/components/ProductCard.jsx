import { PlayIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import PropTypes from "prop-types";

export default function ProductCard({
  id,
  image,
  title,
  name,
  jobTitle,
  Participant,
  videoUrl,
  videoImg,
  coursePrice,
  videoItems,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    if (currentIndex === id) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [currentIndex, id]);

  return (
    <>
      <div className="h-[380px] rounded-2xl bg-white shadow-lg lg:h-full">
        <div className="w-full shadow">
          <div className="relative">
            {isPlaying ? (
              <iframe
                className="h-60 w-full rounded-t-2xl"
                src={`https://www.youtube.com/embed/${videoUrl}?autoplay=${
                  isPlaying ? 1 : 0
                }`}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoPlay="ture"
              />
            ) : (
              <div className="relative">
                <img
                  className="h-full w-full rounded-t-2xl object-cover"
                  src={videoImg}
                  alt="image"
                />

                <div className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/30">
                  <button
                    onClick={() => setCurrentIndex(id)}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white group-hover:bg-primary"
                  >
                    <PlayIcon className="h-8 w-8 text-primary group-hover:text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 sm:p-8">
          <div>
            <h6 className="text-xl font-semibold tracking-tight max-md:max-w-72 sm:text-2xl">
              {title}
            </h6>
            <div className="mt-4 flex justify-between gap-4 sm:pr-8">
              <div className="flex items-center gap-2">
                <img className="h-8 w-8" src={image} alt="Programer mage" />
                <div className="space-y-1">
                  <p className="text-[10px] font-medium sm:text-sm">{name}</p>
                  <p className="text-[7px] text-muted sm:text-[10px]">
                    {jobTitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiUser className="h-8 w-8 text-4xl text-primary" />
                <div>
                  <p className="font-semibold">{Participant}</p>
                  <p className="text-[8px] text-muted sm:text-xs">
                    Participant
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white duration-200 ease-in-out hover:bg-green-800/90 sm:px-5 sm:py-3">
              Buy Now
            </button>
            <p className="text-base font-semibold sm:text-2xl">
              ${coursePrice}{" "}
              <span className="text-[8px] text-muted sm:text-xs">
                / {videoItems} video
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  Participant: PropTypes.number,
  videoUrl: PropTypes.string,
  videoImg: PropTypes.string,
  coursePrice: PropTypes.number,
  videoItems: PropTypes.number,
};
