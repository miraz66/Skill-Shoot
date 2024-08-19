import Logo from '../assets/Logo.svg';
import Vector15 from '../assets/Vector15.svg';
import GroupImage from '../assets/Group162.svg';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Course', href: '#', current: false },
  { name: 'Subscribe', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Testimoni', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="relative max-w-7xl mx-auto px-8 lg:px-10 pt-24 lg:pt-32 pb-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="max-md:max-w-64 mx-auto sm:mx-0 text-center sm:text-left text-white/90 text-lg sm:text-4xl tracking-tight font-medium">
            Subscribe to get notified about update
          </h1>
          <p className="max-md:max-w-72 mx-auto sm:mx-0 text-white/70 mt-4 sm:mt-1 text-xs sm:text-base font-light text-center leading-7">
            By subscribing with your mail, you will accept our privacy policy
          </p>

          <div className="max-w-xl mx-auto pt-8 sm:pt-12  flex justify-center">
            <div className="space-y-4 sm:space-x-4">
              <input
                className="bg-white/10 text-white max-md:max-w-72 py-3 pl-6 sm:py-4 sm:pl-8 outline-none rounded"
                placeholder="Enter your email"
                type="text"
              />
              <button className="bg-secondary max-md:block mx-auto text-sm sm:text-base text-white py-3 px-5 sm:py-4 sm:px-6 rounded">
                Subscribe us
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center flex-col sm:flex-row pt-10 sm:pt-28 lg:pt-40">
          <div>
            <img className="pt-10 sm:pt-0" src={Logo} alt="company logo" />
          </div>
          <div className="flex sm:space-x-4 flex-col sm:flex-row order-first sm:order-last">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white',
                  'rounded-md px-3 py-2 text-sm text-center sm:text-left font-medium ease-in-out duration-200'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <img
            className="absolute max-md:w-14 bottom-44 left-14 sm:bottom-32 sm:12 lg:bottom-56 lg:left-24"
            src={Vector15}
            alt="vector logo"
          />
          <img
            className="absolute max-md:w-14 bottom-72 right-10 sm:top-10 sm:right-12 lg:top-52 lg:right-24"
            src={GroupImage}
            alt="vector logo"
          />
        </div>
      </div>
    </div>
  );
}
