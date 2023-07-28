import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MangmentTool() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="relative  ">
        <div className="mx-auto max-w-8xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* <polygon points="0,0 90,0 50,100 0,100" /> */}
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:pr-0 bg-black">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl ">
               
                <h1 className="font-heading title-font  sm:text-5xl text-3xl mb-14 font-medium text-white">
                  Build your solid team with the perfect time management tool.
                </h1>
                <p className="mt-6 text-lg leading-8 text-white ">
                *Try free for 14 days.No credit card required
                </p>
                <div className="mt-10 flex items-center gap-x-6 ">
                  <a
                    href="#"
                    className="rounded-md bg-gray-600 lg:px-12  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                   Your Email
                  </a>
                  <a
                    href="#"
                    className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Start Tracking Your Time 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-black">
          <img
            className="aspect-[3/2]  lg:aspect-auto lg:h-full lg:w-full"
            src="mobile.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
