import React from "react";

const Choose = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-2lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="choose.svg"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              why you should choose IDCOLAB?
            </h1>
            <p class="mb-8 leading-relaxed">
              so how does it work? Let's check our Getting Started tutorial
              pre-made templates.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-black border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                learn more
              </button>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
