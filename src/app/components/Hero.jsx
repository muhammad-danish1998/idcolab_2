import React from "react";

const SectionOne = () => {
  return (
    <div>
      <section className="text-gray-600 mt-14 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2   lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-14 font-medium text-gray-900">
              "Revolutionizing Client Collaboration: IDCOLAB for Interior
              Designers"
              <span>
                <img src="/headerLine.svg" />
              </span>
            </h1>
            <p className="mb-8 text-sm leading-relaxed w-3/4 text-center">
              our cloud-based Collaboration tool streamlines the design process
              for interior designers. collaborate seamlessly with clients, share
              ideas, and make decisions in real-time
            </p>
           
            <form className="mt-10 lg:w-5/6">
              <div className="flex ">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0  flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-black flex-none rounded-md  px-3.5 lg:py-5 text-sm lg:text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Collaboration
                </button>
              </div>
            </form>
            <p className="text-sm mt-2 text-gray-500 mb-4 w-full">
              For teams & individuals-web,mobile
            </p>
            <p className="text-sm  text-gray-500 mb-8 w-full">
              *Try our forever free plan.No credit card required
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover  object-center "
              alt="hero"
              src="/header image.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
