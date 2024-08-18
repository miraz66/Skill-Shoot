import ProductCarousel from './ProductCarousel';
import Group_575 from '../assets/Group 575.png';
import Group_577 from '../assets/Group 577.png';

export default function Product() {
  return (
    <div className="bg-primary overflow-hidden mt-20 sm:mt-28">
      <div className="relative max-w-7xl mx-auto px-8 lg:px-10 py-20 sm:py-28">
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
            className="absolute top-48 left-36"
            src={Group_575}
            alt="group-575"
          />
          <img
            className="absolute top-36 right-36"
            src={Group_577}
            alt="group-577"
          />
        </div>
      </div>
    </div>
  );
}
