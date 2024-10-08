import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Logo.svg";
import Vector from "../assets/Vector.svg";

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

export default function Navbar() {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-4 pt-1 sm:px-6 sm:pt-3 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <img
                src={Vector}
                alt="vector"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block w-auto sm:h-6"
                src={Logo}
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 lg:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-gray-300 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium duration-200 ease-in-out",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 lg:block">
              <div className="flex gap-8 max-xl:mr-10">
                <button className="text-sm text-white hover:text-gray-300">
                  Login
                </button>
                <button className="rounded-md bg-secondary px-8 py-3 text-sm font-medium text-white duration-200 ease-in-out hover:bg-orange-400/70">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <div className="px-3 lg:hidden">
            <div className="flex gap-4">
              <button className="rounded-md bg-white/10 px-8 py-1.5 text-sm text-white hover:text-gray-300">
                Login
              </button>
              <button className="rounded-md bg-secondary px-8 py-1.5 text-sm font-medium text-white duration-200 ease-in-out hover:bg-orange-400/70">
                Register
              </button>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
