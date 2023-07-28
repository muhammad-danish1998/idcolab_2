import React from "react";
import styles from "@/app/styles/onephase.module.css";
import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
const OnePhase = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col">
          <div class="lg:max-w-4xl  lg:w-full  md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div
              className={`${styles.bgimagecontainer} lg:h-[52rem]  bg-no-repeat lg:bg-right-top`}
            >
              <div className="lg:flex">
               <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/like.svg"
            />
             <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/saturday.svg"
            />
            </div>
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/income.svg"
            />

            </div>
           
          </div>
          <div class="lg:flex-grow md:w-1/2     md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-heading title-font sm:text-5xl text-3xl mb-14 font-medium  text-gray-900">
              Everything you <br /> need in one place
            </h1>
            <div className="rounded-md mb-12 bg-red-200 lg:w-full w-5/6 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className={`  text-lg text-gray-800`}>Real-time data</p>
                  <p className="mt-3 text-sm md:ml-6 md:mt-0">
                    <a
                      href="#"
                      className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                    >
                      <span className="font-bold text-lg text-black"  aria-hidden="true"> &rarr;</span> 
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md mb-12 bg-red-200 lg:w-full w-5/6 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className={`  text-lg text-gray-800`}>Real-time data</p>
                  <p className="mt-3 text-sm md:ml-6 md:mt-0">
                    <a
                      href="#"
                      className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                    >
                      <span className="font-bold text-lg text-black" aria-hidden="true"> &rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md mb-12 bg-red-200 lg:w-full w-5/6  p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className={` text-lg text-gray-800`}>Real-time data</p>
                  <p className="mt-3 text-sm md:ml-6 md:mt-0">
                    <a
                      href="#"
                      className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                    >
                      <span className="font-bold text-lg text-black" aria-hidden="true"> &rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md mb-6 bg-red-200 lg:w-full w-5/6 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className={` text-lg text-gray-800`}>Real-time data</p>
                  <p className="mt-3 text-sm md:ml-6 md:mt-0">
                    <a
                      href="#"
                      className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                    >
                      <span className="font-bold text-lg text-black" aria-hidden="true"> &rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnePhase;
