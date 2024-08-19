import Navbar from './Navbar';
import HeroImage from '../assets/HeroImage.png';
import Vector1 from '../assets/Vector1.png';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { RiInstagramFill, RiDiscordFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import Group15 from '../assets/Group15.svg';
import Group24 from '../assets/Group24.svg';
import Group25 from '../assets/Group25.svg';
import unsplashWNoLnJo from '../assets/unsplash_WNoLnJo.png';

export default function Hero() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 pt-16 pb-10 sm:pb-0">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-6xl text-white font-medium traking-tight leading-[50px] sm:leading-[90px]">
            There is{' '}
            <span className="relative">
              always{' '}
              <img
                className="absolute top-10 sm:top-20 left-0"
                src={Vector1}
                alt="vector"
              />
            </span>
            something new for us to learn
          </h1>
          <p className="pt-6 text-gray-300 text-sm leading-7 sm:text-lg sm:leading-9">
            we have created more than 100+ materials on various things that will
            help your career, with mentors who are experienced in their fields.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 items-center mt-10">
            <button className="group text-white text-lg font-bold bg-secondary px-5 py-2 sm:px-6 sm:py-3 gap-2 flex justify-center items-center">
              Start Journey
              <ArrowUpRightIcon className="text-white w-4 h-4 transform transition-transform duration-300 group-hover:rotate-45 ease-in-out" />
            </button>

            <div className="flex gap-4">
              <RiInstagramFill className="w-6 sm:w-8 h-6 sm:h-8 text-white cursor-pointer hover:text-gray-300 duration-150 ease-in-out" />
              <FaTwitter className="w-6 sm:w-8 h-6 sm:h-8 text-white cursor-pointer hover:text-gray-300 duration-150 ease-in-out" />
              <RiDiscordFill className="w-6 sm:w-8 h-6 sm:h-8 text-white cursor-pointer hover:text-gray-300 duration-150 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-end relative pr-14">
            <img src={HeroImage} alt="hero-image" />
            <div>
              <img
                className="absolute left-0 top-14 2xl:left-28"
                src={Group25}
                alt="group-image"
              />
              <img
                className="absolute top-40 right-10 2xl:right-24"
                src={Group15}
                alt="group-image"
              />
              <img
                className="absolute right-8 2xl:right-16 bottom-10"
                src={Group24}
                alt="group-image"
              />
            </div>
            <div className="absolute top-60 -left-20 2xl:left-0 flex bg-white/80 p-4 gap-4 rounded-xl">
              <img
                className="w-10 h-10"
                src={unsplashWNoLnJo}
                alt="unsplash_WNoLnJo"
              />
              <div className="">
                <div className="">
                  <h1 className="text-xs font-semibold">
                    Learn basic ui ux design
                  </h1>
                  <p className="text-xs text-gray-600">Today at 12 PM</p>
                </div>

                <button className="mt-4 px-4 py-1.5 text-white font-semibold text-xs bg-pink-500 hover:bg-pink-400 rounded-md">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
