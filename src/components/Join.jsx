import Intersect from "../assets/IntersectLeft.png";
import Group575 from "../assets/Group575.png";

export default function Join() {
  return (
    <>
      <div className="relative mx-8 mb-20 max-w-7xl rounded-xl bg-extra p-20 lg:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="text-center text-xl font-semibold leading-8 tracking-tight sm:text-left sm:text-4xl sm:leading-[50px]">
              <span className="text-secondary">Improve</span> your skills, and
              reach your career as soon as possible
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-8 space-y-4 sm:mt-0 sm:space-x-4 sm:space-y-0">
              <button className="mx-auto rounded bg-secondary px-5 py-2.5 text-white duration-200 ease-in-out hover:bg-orange-400/80 max-md:block sm:mx-0 sm:px-7 sm:py-3.5">
                Join Now
              </button>
              <button className="mx-auto rounded bg-primary px-5 py-2.5 text-white duration-200 ease-in-out hover:bg-green-700 max-md:block sm:mx-0 sm:px-7 sm:py-3.5">
                Subscribe Course
              </button>
            </div>
          </div>

          <div>
            <img
              className="absolute left-0 top-0"
              src={Intersect}
              alt="intersect"
            />
            <img
              className="absolute -right-4 max-md:top-36 sm:-bottom-5 sm:right-[35rem]"
              src={Group575}
              alt="group-577"
            />
          </div>
        </div>
      </div>
    </>
  );
}
