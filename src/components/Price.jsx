import { CheckIcon } from "@heroicons/react/24/solid";

const features = [
  "Access all videos",
  "Get Certificate",
  "Chat support",
  "Update Notification",
  "Download material",
];

export default function Price() {
  return (
    <>
      <div className="mx-auto mb-20 max-w-5xl px-14 sm:mb-32 sm:pt-10 lg:px-10">
        <div className="mx-auto max-w-xl text-center sm:px-5">
          <h3 className="text-lg font-semibold tracking-tight sm:text-4xl">
            <span className="text-secondary">Subscribe</span> with us now
          </h3>
          <p className="mt-5 text-xs leading-7 text-muted sm:text-base sm:leading-9">
            by subscribing now you will be able to access the material easily
            and cheaply, so you will be very efficient and benefit
          </p>
        </div>

        <div className="mt-40 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="px-8 sm:px-0 sm:pr-6">
            <h5 className="text-4xl font-bold">
              $50{" "}
              <span className="text-sm font-medium text-muted">/ 1 month</span>
            </h5>
            <p className="mt-1 text-2xl font-semibold">Base</p>
            <p className="mt-2 text-sm leading-7 text-muted sm:text-base sm:leading-9">
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
                    <CheckIcon className="h-4 w-4 rounded-full bg-gray-200 p-0.5 text-gray-700" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 w-full rounded-full bg-[#FED1BA] py-2 text-sm text-white duration-200 ease-in-out hover:bg-secondary">
              Choose Plan
            </button>
          </div>

          <div className="relative -mt-24 rounded-2xl bg-primary p-6 pt-20 shadow-xl shadow-green-700/50 max-md:order-first">
            <p className="absolute right-5 top-5 rounded-full bg-secondary px-4 py-1 text-xs uppercase text-white">
              Most Popular
            </p>
            <h5 className="text-4xl font-bold text-white">
              $100{" "}
              <span className="text-sm font-medium text-gray-200">
                / 6 month
              </span>
            </h5>
            <p className="mt-1 text-2xl font-semibold text-white">Pro</p>
            <p className="mt-2 text-sm leading-7 text-gray-200 sm:text-base sm:leading-9">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div>
              <ul className="mt-4 space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <CheckIcon className="h-4 w-4 rounded-full bg-gray-200 p-0.5 text-gray-700" />
                    <p className="font-light text-gray-200">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 w-full rounded-full bg-secondary py-2 text-sm text-white duration-200 ease-in-out hover:bg-[#FED1BA]">
              Choose Plan
            </button>
          </div>

          <div className="px-8 sm:px-0 sm:pr-6">
            <h5 className="text-4xl font-bold">
              $200{" "}
              <span className="text-sm font-medium text-muted">/ 1 month</span>
            </h5>
            <p className="mt-1 text-2xl font-semibold">Enterprise</p>
            <p className="mt-2 text-sm leading-7 text-muted sm:text-base sm:leading-9">
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
                    <CheckIcon className="h-4 w-4 rounded-full bg-gray-200 p-0.5 text-gray-700" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-8 w-full rounded-full bg-[#FED1BA] py-2 text-sm text-white duration-200 ease-in-out hover:bg-secondary">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
