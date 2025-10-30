import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Win95Button } from "../Form/Button/Button";

const menuItems = [
  {
    url: "#",
    text: "Dashboard",
    active: false,
  },
  {
    url: "#",
    text: "Team",
    active: true,
  },
  {
    url: "#",
    text: "Projects",
    active: false,
  },
  {
    url: "#",
    text: "Calendar",
    active: false,
  },
];

const sharedClasses = "block py-2 pr-4 pl-3 text-base font-medium";

const classes = {
  active: `${sharedClasses} bg-bevel-light text-dark`,
  inactive: `${sharedClasses} border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`,
};

export function Navbar() {
  return (
    <Disclosure as="nav" className="win-bevel-raised shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-bevel-dark focus:outline-hidden focus:ring-inset">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-6 items-center">
              {menuItems.map((item) => (
                <a
                  href={item.url}
                  className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-900 border-2 border-transparent hover:border-t-bevel-light hover:border-l-bevel-light hover:border-r-bevel-dark hover:border-b-bevel-dark"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:ml-6 sm:pr-0">
            <Win95Button>Join us!</Win95Button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-4">
          {menuItems.map((item) => (
            <DisclosureButton
              as="a"
              href={item.url}
              className={item.active ? classes.active : classes.inactive}
            >
              {item.text}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
