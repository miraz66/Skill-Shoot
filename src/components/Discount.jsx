import PexelsKaterinaHolmes from "../assets/pexels-katerina-holmes.png";
import IntersectLeft from "../assets/IntersectLeft.png";
import IntersectRight from "../assets/IntersectRight.png";
import Group1 from "../assets/Group574.png";
import Group2 from "../assets/Group575.png";
import Group3 from "../assets/Group576.png";
import Group4 from "../assets/Group577.png";

export default function Discount() {
  return (
    <div className="mx-auto mb-20 max-w-7xl px-8 lg:mt-48 lg:px-10">
      <div className="relative grid grid-cols-1 rounded-lg bg-extra lg:grid-cols-2">
        <div className="p-14 pt-20">
          <h1 className="text-center text-lg font-semibold tracking-tight md:text-4xl lg:max-w-xl lg:text-left">
            Happy <span className="text-secondary">Chinese New Year</span>, 20%
            discount for you today
          </h1>
          <button className="mx-auto mt-4 block rounded-md bg-primary px-5 py-3 text-sm font-semibold tracking-tight text-white md:mt-10 lg:mx-0 lg:px-5 lg:py-2.5">
            Subscribe Course
          </button>
        </div>
        <div className="relative flex justify-center">
          <img
            className="-mt-32 hidden lg:block"
            src={PexelsKaterinaHolmes}
            alt="man-with-book"
          />
          <div>
            <img
              className="absolute left-14 top-20 hidden lg:block 2xl:left-32"
              src={Group1}
              alt="group-1"
            />
            <img
              className="absolute right-10 top-20 hidden lg:block 2xl:right-24"
              src={Group2}
              alt="group-2"
            />
            <img
              className="absolute bottom-8 right-20 hidden lg:block 2xl:right-36"
              src={Group3}
              alt="group-3"
            />
            <img
              className="absolute bottom-6 left-10 md:bottom-10 2xl:left-48"
              src={Group4}
              alt="group-4"
            />
          </div>
        </div>

        <div>
          <img
            className="absolute left-0 top-0"
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
