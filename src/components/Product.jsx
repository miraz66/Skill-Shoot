import ProductCarousel from './ProductCarousel';
import Group575 from '../assets/Group575.png';
import Group577 from '../assets/Group577.png';

export default function Product() {
  return (
    <div className="bg-primary overflow-hidden mt-14 sm:mt-20">
      <div className="relative max-w-7xl mx-auto px-8 lg:px-0 py-20 sm:py-20">
        <div className="max-w-xl mx-auto sm:px-5 text-center">
          <h3 className="text-lg sm:text-4xl text-white font-semibold">
            Popular courses of the week
          </h3>
          <p className="mt-5 max-w-sm mx-auto text-white/70 text-xs sm:text-base leading-7 sm:leading-9">
            List of the most popular lists that are often studied by our members
          </p>
        </div>

        <ProductCarousel />

        <div>
          <img
            className="absolute w-10 sm:w-12 top-8 left-6 sm:top-40 sm:left-36"
            src={Group575}
            alt="group-575"
          />
          <img
            className="absolute w-5 sm:w-8 top-16 right-8 sm:top-36 sm:right-36"
            src={Group577}
            alt="group-577"
          />
        </div>
      </div>
    </div>
  );
}
