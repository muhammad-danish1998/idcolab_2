import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div>
      <section class="text-gray-600 body-font ">
        <div class="container px-5   mx-auto">
          <div class="flex flex-wrap w-full  flex-col items-center text-center">
            <h1 class="font-heading title-font  sm:text-5xl text-3xl mb-14 font-medium text-gray-900">
              Featured we <br /> Provide for you
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 max-w-7xl mx-auto ">
            <div class="xl:w-1/3 md:w-1/2 p-4   ">
              <div class="border border-gray-200   rounded-xl bg-white p-4 shadow-xl">
                <div class="w-10 h-10 inline-flex items-center justify-center  rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Image
                    src="/images/landing/feature/dash.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-xl  text-gray-900 font-heading font-medium title-font mb-2">
                Dashboard
                </h2>
                <p class="leading-relaxed font-para text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4 ">
              <div class="border border-gray-200  rounded-lg bg-white p-4 shadow-xl">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/images/landing/feature/statistics.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-xl font-heading text-gray-900 font-medium title-font mb-2">
                Statistics
                </h2>
                <p class="leading-relaxed font-para text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200  rounded-lg bg-white p-4 shadow-xl">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/images/landing/feature/easy.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-xl font-heading text-gray-900 font-medium title-font mb-2">
                Easy Access
                </h2>
                <p class="leading-relaxed text-base font-para">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-4 shadow-xl rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/images/landing/feature/collaboration.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-xl font-heading text-gray-900 font-medium title-font mb-2">
                Collaboration
                </h2>
                <p class="leading-relaxed text-base font-para">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-4 shadow-xl rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/images/landing/feature/total control.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-xl font-heading text-gray-900 font-medium title-font mb-2">
                Total Control
                </h2>
                <p class="leading-relaxed text-base font-para">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-4 shadow-xl rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/images/landing/feature/easy.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-xl font-heading text-gray-900 font-medium title-font mb-2">
                  Neptune
                </h2>
                <p class="leading-relaxed text-base font-para">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
