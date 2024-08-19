import { PlayIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import PropTypes from 'prop-types';

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
      <div className="bg-white rounded-2xl shadow-lg h-[380px] lg:h-full">
        <div className="w-full shadow">
          <div className="relative">
            {isPlaying ? (
              <iframe
                className="w-full h-60 rounded-t-2xl"
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
                  className="w-full h-full object-cover rounded-t-2xl"
                  src={videoImg}
                  alt="image"
                />

                <div className="group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                  <button
                    onClick={() => setCurrentIndex(id)}
                    className="h-14 w-14 bg-white group-hover:bg-primary flex items-center justify-center rounded-full"
                  >
                    <PlayIcon className="w-8 h-8 text-primary group-hover:text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 sm:p-8">
          <div>
            <h6 className="text-xl max-md:max-w-72 sm:text-2xl font-semibold tracking-tight">
              {title}
            </h6>
            <div className="sm:pr-8 mt-4 flex gap-4 justify-between">
              <div className="flex gap-2 items-center">
                <img className="w-8 h-8" src={image} alt="Programer mage" />
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-sm font-medium">{name}</p>
                  <p className="text-[7px] sm:text-[10px] text-muted">
                    {jobTitle}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FiUser className="w-8 h-8 text-4xl text-primary" />
                <div>
                  <p className="font-semibold">{Participant}</p>
                  <p className="text-[8px] sm:text-xs text-muted">
                    Participant
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10 items-center">
            <button className="bg-primary hover:bg-green-800/90 ease-in-out duration-200 text-white text-xs font-medium px-3 sm:px-5 py-1.5 sm:py-3 rounded-lg">
              Buy Now
            </button>
            <p className="text-base sm:text-2xl font-semibold">
              ${coursePrice}{' '}
              <span className="text-[8px] sm:text-xs text-muted">
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
