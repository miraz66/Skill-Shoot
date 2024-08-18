import { PlayIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import PropTypes from 'prop-types';

export default function ProductCard({
  image,
  title,
  name,
  job_title,
  Participant,
  video_url,
  video_img,
  course_price,
  video_items,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg">
        <div className="w-full shadow">
          <div className="relative">
            {isPlaying ? (
              <iframe
                className="w-full h-60 rounded-t-2xl"
                // src={`https://www.youtube.com/embed/kanHxPcIuQo`}
                src={`https://www.youtube.com/embed/${video_url}?autoplay=${
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
                  src={video_img}
                  alt="image"
                />

                <div className="group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
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
          <div className="">
            <h6 className="text-sm sm:text-2xl font-semibold tracking-tight">
              {title}
            </h6>
            <div className="sm:pr-8 mt-4 flex gap-4 justify-between">
              <div className="flex gap-2 items-center">
                <img className="w-8 h-8" src={image} alt="Programer mage" />
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-sm font-medium">{name}</p>
                  <p className="text-[7px] sm:text-[10px] text-muted">
                    {job_title}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FiUser className="w-8 h-8 text-4xl text-primary" />
                <div className="">
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
              ${course_price}{' '}
              <span className="text-[8px] sm:text-xs text-muted">
                / {video_items} video
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
  job_title: PropTypes.string,
  Participant: PropTypes.number,
  video_url: PropTypes.string,
  video_img: PropTypes.string,
  course_price: PropTypes.number,
  video_items: PropTypes.number,
};
