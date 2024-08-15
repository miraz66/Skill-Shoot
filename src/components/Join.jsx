import Intersect from '../assets/Intersect.png';
import Group_575 from '../assets/Group 575.png';

export default function Join() {
  return (
    <>
      <div className="max-w-7xl bg-extra p-16 mx-auto mb-20 rounded-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight leading-[50px]">
              <span className="text-secondary">Improve</span> your skills, and
              reach your career as soon as possible
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="space-x-4">
              <button className="bg-secondary hover:bg-orange-400/80 ease-in-out duration-200 text-white px-7 py-3.5 rounded">
                Join Now
              </button>
              <button className="bg-primary hover:bg-green-700 ease-in-out duration-200 text-white px-7 py-3.5 rounded">
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
              className="absolute -bottom-5 right-[35rem]"
              src={Group_575}
              alt="group-577"
            />
          </div>
        </div>
      </div>
    </>
  );
}
