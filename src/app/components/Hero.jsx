import React from "react";

const SectionOne = () => {
  return (
    <div>
      <section className="text-gray-600 mt-14 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-14 font-medium text-gray-900">
              "Revolutionizing Client Collaboration: IDCOLAB for Interior
              Designers"
            </h1>
            <p className="mb-8 leading-relaxed">
              our cloud-based Collaboration tool streamlines the design process
              for interior designers. collaborate seamlessly with clients, share
              ideas, and make decisions in real-time
            </p>
            <div className="flex w-full md:justify-start justify-center items-end mt-14">
              <div className="relative mr-0 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <input
                  placeholder="Your Email"
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 rounded border bg-gray-300 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-4  transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-black border-0 lg:py-4 py-1 px-4 focus:outline-none hover:bg-yellow-400 rounded lg:text-lg">
                Start Collaboration
              </button>
           
            </div>
        
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              For teams & individuals-web,mobile
            </p>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              *Try our forever free plan.No credit card required
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
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
