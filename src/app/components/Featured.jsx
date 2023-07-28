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
            <div class="xl:w-1/3 md:w-1/2 p-4  ">
              <div class="border border-gray-200 p-6 rounded-xl bg-white bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Image
                    src="/dash.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-lg  text-gray-900 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed font-para text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4 ">
              <div class="border border-gray-200 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/statistics.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  The Catalyzer
                </h2>
                <p class="leading-relaxed font-para text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/easy.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Neptune
                </h2>
                <p class="leading-relaxed text-base font-para">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/collaboration.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Melanchole
                </h2>
                <p class="leading-relaxed text-base font-para">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/total control.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Bunker
                </h2>
                <p class="leading-relaxed text-base font-para">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image
                    src="/easy.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
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
