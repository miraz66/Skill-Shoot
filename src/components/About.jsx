import pexelsMaxFischer from "../assets/pexels-max-fischer.png";
import Vector1 from "../assets/Vector1.png";
import userIcon from "../assets/bx-play-circle.svg";
import playCircleIcon from "../assets/bx-play-circle.svg";
import userCheckIcon from "../assets/bx-user-check.svg";
import videoRecordingIcon from "../assets/bx-video-recording.svg";
import Group15 from "../assets/Group15.svg";
import Group24 from "../assets/Group24.svg";
import Group25 from "../assets/Group25.svg";
import unsplashWNoLnJo from "../assets/unsplash_WNoLnJo.png";

export default function About() {
  return (
    <div className="mx-auto my-20 max-w-7xl px-8 lg:px-10">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        <div className="relative hidden bg-[url('./assets/Rectangle.svg')] bg-bottom bg-no-repeat sm:block">
          <img className="mx-auto" src={pexelsMaxFischer} alt="man image" />
          <div>
            <img
              className="absolute right-24 top-36"
              src={Group25}
              alt="group-image"
            />
            <img
              className="absolute left-24 top-24"
              src={Group15}
              alt="group-image"
            />
            <img
              className="absolute bottom-48 left-14"
              src={Group24}
              alt="group-image"
            />
          </div>
          <div className="absolute bottom-10 right-24 flex gap-4 rounded-xl bg-white/80 px-6 py-4">
            <img
              className="sm:h-10 sm:w-10"
              src={unsplashWNoLnJo}
              alt="unsplash_WNoLnJo"
            />
            <div>
              <div>
                <h1 className="text-xs font-semibold">How to build a team</h1>
                <p className="text-xs text-gray-600">Today at 12 PM</p>
              </div>

              <button className="mt-4 rounded-md bg-pink-500 px-5 py-1.5 text-xs font-semibold text-white hover:bg-pink-400">
                Join Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <h1 className="relative max-w-xs text-xl font-bold text-current sm:text-4xl">
              Let us <span className="text-primary">Skill Shoot</span>
              <img
                className="absolute left-16 w-28 sm:left-28 sm:right-4 sm:top-9 sm:w-48"
                src={Vector1}
                alt="vector"
              />
            </h1>
            <p className="pt-10 text-xs font-normal leading-7 text-muted sm:text-base sm:leading-9">
              We are a company engaged in education with the aim of improving
              the skills of many people and so that younger people can reach the
              career paths they want.
            </p>
            <p className="pt-4 text-xs font-normal leading-7 text-muted sm:text-base sm:leading-9">
              we have been around since 2019 with currently 100+ updated
              materials and 15K members who have joined.
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-6 pt-10 sm:pt-14">
            <div className="flex items-center gap-4">
              <img
                className="h-8 w-8 rounded-full bg-extra p-2 sm:h-10 sm:w-10"
                src={userIcon}
                alt="user icon"
              />
              <p className="text-xs font-semibold tracking-tight text-current sm:text-base">
                15K People Join
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="h-8 w-8 rounded-full bg-extra p-2 sm:h-10 sm:w-10"
                src={userCheckIcon}
                alt="user check icon"
              />
              <p className="text-xs font-semibold text-current sm:text-base">
                Trusted Mentor
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="h-8 w-8 rounded-full bg-extra p-2 sm:h-10 sm:w-10"
                src={videoRecordingIcon}
                alt="video recording icon"
              />
              <p className="text-xs font-semibold text-current sm:text-base">
                30+ Free Videos
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="h-8 w-8 rounded-full bg-extra p-2 sm:h-10 sm:w-10"
                src={playCircleIcon}
                alt="play circle icon"
              />
              <p className="text-xs font-semibold text-current sm:text-base">
                100+ Premium Videos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
