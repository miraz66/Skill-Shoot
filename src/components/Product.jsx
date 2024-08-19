import ProductCarousel from "./ProductCarousel";
import Group575 from "../assets/Group575.png";
import Group577 from "../assets/Group577.png";

export default function Product() {
  return (
    <div className="mt-14 overflow-hidden bg-primary sm:mt-20">
      <div className="relative mx-auto max-w-7xl px-8 py-20 sm:py-20 lg:px-0">
        <div className="mx-auto max-w-xl text-center sm:px-5">
          <h3 className="text-lg font-semibold text-white sm:text-4xl">
            Popular courses of the week
          </h3>
          <p className="mx-auto mt-5 max-w-sm text-xs leading-7 text-white/70 sm:text-base sm:leading-9">
            List of the most popular lists that are often studied by our members
          </p>
        </div>

        <ProductCarousel />

        <div>
          <img
            className="absolute left-6 top-8 w-10 sm:left-36 sm:top-40 sm:w-12"
            src={Group575}
            alt="group-575"
          />
          <img
            className="absolute right-8 top-16 w-5 sm:right-36 sm:top-36 sm:w-8"
            src={Group577}
            alt="group-577"
          />
        </div>
      </div>
    </div>
  );
}
