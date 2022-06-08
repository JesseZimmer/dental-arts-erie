/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
    {
      name: "Options",
      about: [{ name: "Meet Dr Theisen", href: "#" }],
      services: [
        { name: "General Dentistry", href: "#" },
        { name: "Family Dentistry", href: "#" },
        { name: "Dental Crowns", href: "#" },
        { name: "Dental Bridges", href: "#" },
        { name: "Veneers", href: "#" },
        { name: "Teeth Whitening", href: "#" },
        { name: "Cosmetic Dentistry", href: "#" },
        { name: "Sleep Dentistry", href: "#" },
      ],
    },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      <nav aria-label="Top">
        <div className="bg-white mt-2 mb-4 mx-8">
          {/* Mobile menu */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-40 " onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>

              <div className="fixed inset-0 flex z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                    <div className="px-4 pt-5 pb-2 flex">
                      <button
                        type="button"
                        className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Links */}
                    <Tab.Group as="div" className="mt-2">
                      <Tab.Panels as={Fragment}>
                        {navigation.categories.map((category, categoryIdx) => (
                          <Tab.Panel
                            key={category.name}
                            className="px-4 pt-10 pb-6 space-y-12"
                          >
                            <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                              <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                <div>
                                  <p
                                    id={`mobile-featured-heading-${categoryIdx}`}
                                    className="font-medium text-gray-900"
                                  >
                                    About
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                                    className="mt-6 space-y-6"
                                  >
                                    {category.about.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={item.href}
                                          className="text-gray-500"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="mobile-categories-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Services
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="mobile-categories-heading"
                                    className="mt-6 space-y-6"
                                  >
                                    {category.services.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={item.href}
                                          className="text-gray-500"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/*   <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="h-16 flex items-center justify-between">
                  <div className="hidden h-full lg:flex">

                    <Popover.Group className="ml-8">
                      <div className="h-full flex justify-center space-x-8">
                        {navigation.categories.map((category, categoryIdx) => (
                          <Popover key={category.name} className="hidden ">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "border-indigo-600 text-indigo-600"
                                        : "border-transparent text-gray-700 hover:text-gray-800",
                                      "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">

                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white">
                                      <div className="max-w-7xl mx-auto px-8">
                                        <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                            <div>
                                              <p
                                                id={`desktop-featured-heading-${categoryIdx}`}
                                                className="font-medium text-gray-900"
                                              >
                                                About
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {category.about.map((item) => (
                                                  <li
                                                    key={item.name}
                                                    className="flex"
                                                  >
                                                    <a
                                                      href={item.href}
                                                      className="hover:text-gray-800"
                                                    >
                                                      {item.name}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                            <div>
                                              <p
                                                id="desktop-categories-heading"
                                                className="font-medium text-gray-900"
                                              >
                                                Services
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby="desktop-categories-heading"
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {category.services.map(
                                                  (item) => (
                                                    <li
                                                      key={item.name}
                                                      className="flex"
                                                    >
                                                      <a
                                                        href={item.href}
                                                        className="hover:text-gray-800"
                                                      >
                                                        {item.name}
                                                      </a>
                                                    </li>
                                                  )
                                                )}
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>


                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-row items-center">
          <div className="flex-1 flex  items-center">
            <button
              type="button"
              className="-ml-2 bg-white p-2 rounded-md text-gray-400"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <a href="#" className="ml-2 p-2 ">
              <span className="sr-only">Logo</span>
              <span>Dental Arts of Erie</span>
            </a>
          </div>

          <div className="flex flex-row">
            <PhoneIcon className="h-6 w-6 mr-2" />
            <a href="tel:8145556789">
              <p>814-555-6789</p>
            </a>
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
