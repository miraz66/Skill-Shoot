import Logo from "../assets/Logo.svg";
import Vector15 from "../assets/Vector15.svg";
import GroupImage from "../assets/Group162.svg";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Course", href: "#", current: false },
  { name: "Subscribe", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Testimoni", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="relative mx-auto max-w-7xl px-8 pb-10 pt-24 lg:px-10 lg:pt-32">
        <div className="mx-auto max-w-2xl">
          <h1 className="mx-auto text-center text-lg font-medium tracking-tight text-white/90 max-md:max-w-64 sm:mx-0 sm:text-left sm:text-4xl">
            Subscribe to get notified about update
          </h1>
          <p className="mx-auto mt-4 text-center text-xs font-light leading-7 text-white/70 max-md:max-w-72 sm:mx-0 sm:mt-1 sm:text-base">
            By subscribing with your mail, you will accept our privacy policy
          </p>

          <div className="mx-auto flex max-w-xl justify-center pt-8 sm:pt-12">
            <div className="space-y-4 sm:space-x-4">
              <input
                className="rounded bg-white/10 py-3 pl-6 text-white outline-none max-md:max-w-72 sm:py-4 sm:pl-8"
                placeholder="Enter your email"
                type="text"
              />
              <button className="mx-auto rounded bg-secondary px-5 py-3 text-sm text-white max-md:block sm:px-6 sm:py-4 sm:text-base">
                Subscribe us
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-10 sm:flex-row sm:pt-28 lg:pt-40">
          <div>
            <img className="pt-10 sm:pt-0" src={Logo} alt="company logo" />
          </div>
          <div className="order-first flex flex-col sm:order-last sm:flex-row sm:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "text-white"
                    : "text-gray-300 hover:text-white",
                  "rounded-md px-3 py-2 text-center text-sm font-medium duration-200 ease-in-out sm:text-left",
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <img
            className="sm:12 absolute bottom-44 left-14 max-md:w-14 sm:bottom-32 lg:bottom-56 lg:left-24"
            src={Vector15}
            alt="vector logo"
          />
          <img
            className="absolute bottom-72 right-10 max-md:w-14 sm:right-12 sm:top-10 lg:right-24 lg:top-52"
            src={GroupImage}
            alt="vector logo"
          />
        </div>
      </div>
    </div>
  );
}
