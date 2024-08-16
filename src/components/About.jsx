import pexels_max_fischer from '../assets/pexels-max-fischer-5212321-removebg-preview (1) 1.png';
import Vector_1 from '../assets/Vector 1.png';
import user_icon from '../assets/bx-user (1) 1.svg';
import play_circle_icon from '../assets/bx-play-circle (1) 1.svg';
import user_check_icon from '../assets/bx-user-check 1.svg';
import video_recording_icon from '../assets/bx-video-recording .svg';
import Group_15 from '../assets/Group 15.svg';
import Group_24 from '../assets/Group 24.svg';
import Group_25 from '../assets/Group 25.svg';
import unsplash_WNoLnJo from '../assets/unsplash_WNoLnJo7tS8.png';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-10 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="relative bg-[url('./assets/Rectangle.svg')] bg-no-repeat bg-bottom hidden sm:block">
          <img className="mx-auto" src={pexels_max_fischer} alt="man image" />
          <div>
            <img
              className="absolute top-36 right-24"
              src={Group_25}
              alt="group-image"
            />
            <img
              className="absolute top-24 left-24"
              src={Group_15}
              alt="group-image"
            />
            <img
              className="absolute left-14 bottom-48"
              src={Group_24}
              alt="group-image"
            />
          </div>
          <div className="absolute bottom-10 right-24 flex bg-white/80 px-6 py-4 gap-4 rounded-xl">
            <img
              className="sm:w-10 sm:h-10"
              src={unsplash_WNoLnJo}
              alt="unsplash_WNoLnJo"
            />
            <div>
              <div>
                <h1 className="text-xs font-semibold">How to build a team</h1>
                <p className="text-xs text-gray-600">Today at 12 PM</p>
              </div>

              <button className="mt-4 px-5 py-1.5 text-white font-semibold text-xs bg-pink-500 hover:bg-pink-400 rounded-md">
                Join Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <h1 className="relative max-w-xs text-xl sm:text-4xl text-current font-bold">
              Let us <span className="text-primary">Skill Shoot</span>
              <img
                className="absolute left-16 sm:right-4 sm:top-9 w-28 sm:w-48"
                src={Vector_1}
                alt="vector"
              />
            </h1>
            <p className="pt-10 text-muted text-xs sm:text-base font-normal leading-7 sm:leading-9">
              We are a company engaged in education with the aim of improving
              the skills of many people and so that younger people can reach the
              career paths they want.
            </p>
            <p className="pt-4 text-muted text-xs sm:text-base font-normal leading-7 sm:leading-9">
              we have been around since 2019 with currently 100+ updated
              materials and 15K members who have joined.
            </p>
          </div>

          <div className="pt-10 sm:pt-14 grid grid-cols-2 grid-rows-2 gap-6">
            <div className="flex items-center gap-4">
              <img
                className="p-2 rounded-full bg-extra w-8 h-8 sm:w-10 sm:h-10"
                src={user_icon}
                alt="user icon"
              />
              <p className="text-xs sm:text-base text-current font-semibold tracking-tight">
                15K People Join
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="p-2 rounded-full bg-extra w-8 h-8 sm:w-10 sm:h-10"
                src={user_check_icon}
                alt="user check icon"
              />
              <p className="text-xs sm:text-base text-current font-semibold">
                Trusted Mentor
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="p-2 rounded-full bg-extra w-8 h-8 sm:w-10 sm:h-10"
                src={video_recording_icon}
                alt="video recording icon"
              />
              <p className="text-xs sm:text-base text-current font-semibold">
                30+ Free Videos
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="p-2 rounded-full bg-extra w-8 h-8 sm:w-10 sm:h-10"
                src={play_circle_icon}
                alt="play circle icon"
              />
              <p className="text-xs sm:text-base text-current font-semibold">
                100+ Premium Videos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
