import { CheckIcon } from '@heroicons/react/24/solid';

const features = [
  'Access all videos',
  'Get Certificate',
  'Chat support',
  'Update Notification',
  'Download material',
];

export default function Price() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-14 lg:px-10 mb-20 sm:mb-32 sm:pt-10">
        <div className="max-w-xl mx-auto sm:px-5 text-center">
          <h3 className="text-lg sm:text-4xl font-semibold tracking-tight">
            <span className="text-secondary">Subscribe</span> with us now
          </h3>
          <p className="mt-5 text-muted text-xs leading-7 sm:text-base sm:leading-9">
            by subscribing now you will be able to access the material easily
            and cheaply, so you will be very efficient and benefit
          </p>
        </div>

        <div className="mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="px-8 sm:px-0 sm:pr-6">
            <h5 className="text-4xl font-bold">
              $50{' '}
              <span className="text-sm text-muted font-medium">/ 1 month</span>
            </h5>
            <p className="mt-1 text-2xl font-semibold">Base</p>
            <p className="mt-2 text-muted text-sm sm:text-base leading-7 sm:leading-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div>
              <ul className="mt-6 space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <CheckIcon className="text-gray-700 w-4 h-4 bg-gray-200 p-0.5 rounded-full" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-amber-700/30 hover:bg-secondary ease-in-out duration-200 text-sm text-white w-full py-2 rounded-full mt-6">
              Choose Plan
            </button>
          </div>

          <div className="relative max-md:order-first bg-primary p-6 pt-20 -mt-24 rounded-2xl shadow-xl shadow-green-700/50 ">
            <p className="absolute bg-secondary px-4 py-1 top-5 right-5 text-white text-xs uppercase rounded-full">
              Most Popular
            </p>
            <h5 className="text-white text-4xl font-bold">
              $100{' '}
              <span className="text-gray-200 text-sm font-medium">
                / 6 month
              </span>
            </h5>
            <p className="mt-1 text-white text-2xl font-semibold">Pro</p>
            <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-9 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div>
              <ul className="mt-4 space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <CheckIcon className="text-gray-700 w-4 h-4 bg-gray-200 p-0.5 rounded-full" />
                    <p className="text-gray-200 font-light">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-secondary hover:bg-amber-700/70 ease-in-out duration-200 text-sm text-white w-full py-2 rounded-full mt-8">
              Choose Plan
            </button>
          </div>

          <div className="px-8 sm:px-0 sm:pr-6">
            <h5 className="text-4xl font-bold">
              $200{' '}
              <span className="text-sm text-muted font-medium">/ 1 month</span>
            </h5>
            <p className="mt-1 text-2xl font-semibold">Enterprise</p>
            <p className="mt-2 text-muted text-sm sm:text-base leading-7 sm:leading-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div>
              <ul className="mt-4 space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <CheckIcon className="text-gray-700 w-4 h-4 bg-gray-200 p-0.5 rounded-full" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-amber-700/30 hover:bg-secondary ease-in-out duration-200 text-sm text-white w-full py-2 rounded-full mt-8">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
