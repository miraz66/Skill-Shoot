import Intersect from '../assets/Intersect.png';
import Group_575 from '../assets/Group 575.png';

export default function Join() {
  return (
    <>
      <div className="max-w-7xl bg-extra p-16 mx-8 lg:mx-auto mb-20 rounded-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="text-xl sm:text-4xl text-center sm:text-left font-semibold tracking-tight leading-8 sm:leading-[50px]">
              <span className="text-secondary">Improve</span> your skills, and
              reach your career as soon as possible
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="space-y-4 sm:space-x-4 mt-8 sm:mt-0">
              <button className="mx-auto max-md:block sm:mx-0 bg-secondary hover:bg-orange-400/80 ease-in-out duration-200 text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded">
                Join Now
              </button>
              <button className="mx-auto max-md:block sm:mx-0 bg-primary hover:bg-green-700 ease-in-out duration-200 text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded">
                Subscribe Course
              </button>
            </div>
          </div>

          <div>
            <img
              className="absolute top-0 left-0"
              src={Intersect}
              alt="intersect"
            />
            <img
              className="absolute top-36 -right-4 sm:-bottom-5 sm:right-[35rem]"
              src={Group_575}
              alt="group-577"
            />
          </div>
        </div>
      </div>
    </>
  );
}
