import Navbar from "./Navbar";
import HeroImage from "../assets/HeroImage.png";
import Vector1 from "../assets/Vector1.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { RiInstagramFill, RiDiscordFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import Group15 from "../assets/Group15.svg";
import Group24 from "../assets/Group24.svg";
import Group25 from "../assets/Group25.svg";
import unsplashWNoLnJo from "../assets/unsplash_WNoLnJo.png";

export default function Hero() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-20 px-4 pb-10 pt-16 sm:px-6 sm:pb-0 lg:grid-cols-2 lg:px-8">
        <div className="text-center sm:text-left">
          <h1 className="traking-tight text-3xl font-medium leading-[50px] text-white sm:text-6xl sm:leading-[90px]">
            There is{" "}
            <span className="relative">
              always{" "}
              <img
                className="absolute left-0 top-10 sm:top-20"
                src={Vector1}
                alt="vector"
              />
            </span>
            something new for us to learn
          </h1>
          <p className="pt-6 text-sm leading-7 text-gray-300 sm:text-lg sm:leading-9">
            we have created more than 100+ materials on various things that will
            help your career, with mentors who are experienced in their fields.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 lg:flex-row">
            <button className="group flex items-center justify-center gap-2 bg-secondary px-5 py-3 text-lg font-bold text-white max-md:rounded sm:px-6 sm:py-3">
              Start Journey
              <ArrowUpRightIcon className="h-4 w-4 transform text-white transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </button>

            <div className="mt-4 flex gap-4 sm:mt-0">
              <RiInstagramFill className="h-6 w-6 cursor-pointer text-white duration-150 ease-in-out hover:text-gray-300 sm:h-8 sm:w-8" />
              <FaTwitter className="h-6 w-6 cursor-pointer text-white duration-150 ease-in-out hover:text-gray-300 sm:h-8 sm:w-8" />
              <RiDiscordFill className="h-6 w-6 cursor-pointer text-white duration-150 ease-in-out hover:text-gray-300 sm:h-8 sm:w-8" />
            </div>
          </div>

          <div className="block sm:hidden">
            <img
              className="absolute left-6 top-10 z-10 w-10"
              src={Group25}
              alt="group-image"
            />
            <img
              className="absolute bottom-10 right-5 w-10"
              src={Group15}
              alt="group-image"
            />
            <img
              className="absolute bottom-24 left-8 w-10"
              src={Group24}
              alt="group-image"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative flex justify-end pr-14">
            <img src={HeroImage} alt="hero-image" />
            <div>
              <img
                className="absolute left-0 top-14 2xl:left-28"
                src={Group25}
                alt="group-image"
              />
              <img
                className="absolute right-10 top-40 2xl:right-24"
                src={Group15}
                alt="group-image"
              />
              <img
                className="absolute bottom-10 right-8 2xl:right-16"
                src={Group24}
                alt="group-image"
              />
            </div>
            <div className="absolute -left-20 top-60 flex gap-4 rounded-xl bg-white/80 p-4 2xl:left-0">
              <img
                className="h-10 w-10"
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

                <button className="mt-4 rounded-md bg-pink-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-pink-400">
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
