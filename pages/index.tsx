import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const features = [
  {
    name: "General Dentistry",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Family Dentistry",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Dental Crowns",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Dental Bridges",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Vaneers",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Teeth Whitening",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Cosmetic Dentistry",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    name: "Sleep Dentistry",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
];
const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Companies",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "25K+",
    emphasis: "Countries around the globe",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Customer satisfaction",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "Issues resolved",
    rest: "lacus nibh integer quis.",
  },
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],

};

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="./dental_tools_hero.jpg"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">It is time to get back on track with your oral health</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                Dental Arts of Erie, is built on ethics and principles that allow patients to understand and make informed decisions about their dental treatment.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Meet Dr. Theisen
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                     Schedule an appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 ">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>

                  <div className="mt-6">
                    <p className="mt-4 text-xl  text-gray-500">
                    <span className="font-semibold text-2xl">Dental Arts of Erie</span> is a state of the art dental practice located at 4330 Peach Street. Dr. Timothy Theisen offers a unique dental experience for patients. He is dedicated to providing comprehensive dental care at an affordable cost. Our office offers a comfortable, modern atmosphere and a welcoming staff dedicated to providing the best quality care to our patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Comprehensive Dental Services
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis
              in.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
