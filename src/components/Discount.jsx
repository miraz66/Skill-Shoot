import PexelsKaterinaHolmes from '../assets/pexels-katerina-holmes.png';
import IntersectLeft from '../assets/IntersectLeft.png';
import IntersectRight from '../assets/IntersectRight.png';
import Group1 from '../assets/Group574.png';
import Group2 from '../assets/Group575.png';
import Group3 from '../assets/Group576.png';
import Group4 from '../assets/Group577.png';

export default function Discount() {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-10 lg:mt-48 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-extra rounded-lg relative">
        <div className="p-14 pt-20">
          <h1 className="lg:max-w-xl text-lg md:text-4xl text-center lg:text-left font-semibold tracking-tight">
            Happy <span className="text-secondary">Chinese New Year</span>, 20%
            discount for you today
          </h1>
          <button className="mx-auto lg:mx-0 block mt-4 text-sm md:mt-10 bg-primary text-white px-5 lg:px-5 py-3 lg:py-2.5 tracking-tight rounded-md font-semibold">
            Subscribe Course
          </button>
        </div>
        <div className="flex justify-center relative">
          <img
            className="-mt-32 lg:block hidden"
            src={PexelsKaterinaHolmes}
            alt="man-with-book"
          />
          <div>
            <img
              className="lg:block hidden absolute top-20 left-14 2xl:left-32"
              src={Group1}
              alt="group-1"
            />
            <img
              className="lg:block hidden absolute top-20 right-10 2xl:right-24"
              src={Group2}
              alt="group-2"
            />
            <img
              className="lg:block hidden absolute bottom-8 right-20 2xl:right-36"
              src={Group3}
              alt="group-3"
            />
            <img
              className="absolute left-10 bottom-6 2xl:left-48 md:bottom-10"
              src={Group4}
              alt="group-4"
            />
          </div>
        </div>

        <div>
          <img
            className="absolute top-0 left-0"
            src={IntersectLeft}
            alt="intersect"
          />
          <img
            className="absolute bottom-0 right-0"
            src={IntersectRight}
            alt="intersect"
          />
        </div>
      </div>
    </div>
  );
}
