import React from "react";
import styles from "@/app/styles/hero.module.css";
import Image from "next/image";
const SectionOne = () => {
  return (
    <div>
      <section className="text-gray-600 mt-14 body-font">
        <div className="container  mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className=" lg:flex-grow  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className={`lg:leading-loose font-heading  title-font sm:text-5xl text-3xl mb-8 font-medium  text-gray-800`}
            >
              "Revolutionizing Client Collaboration: IDCOLAB for Interior
              Designers"
              <span>
                <img src="/images/landing/hero/headerLine.svg" />
              </span>
            </h1>
            <p className="mb-4 font-para text-sm leading-relaxed w-3/4 text-center">
              our cloud-based Collaboration tool streamlines the design process
              for interior designers. collaborate seamlessly with clients, share
              ideas, and make decisions in real-time
            </p>

            <form className="mt-10 lg:w-5/6 w-3/4 p-1 bg-gray-300 rounded-lg">
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
                  className="min-w-0  flex-auto outline-none rounded-lg border-0 px-3.5  text-gray-900 shadow-sm   placeholder:text-gray-900  sm:text-sm sm:leading-6 bg-gray-300"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-black flex-none font-heading rounded-lg px-2.5 lg:px-3.5 lg:py-4 text-sm lg:text-lg font-medium text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Collaboration
                </button>
              </div>
            </form>
            <p className="text-sm font-para mt-2 text-gray-500 mb-4 w-full">
              For teams & individuals-web,mobile
            </p>
            <p className="text-sm font-para text-gray-500 mb-8 w-full">
              *Try our forever free plan.No credit card required
            </p>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
            
            <Image
            className="object-cover object-center"
              src="/images/landing/hero/header image.svg"
              width={900}
              height={900}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
