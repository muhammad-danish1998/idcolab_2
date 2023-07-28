"use client";
import React from "react";
import SectionOne from "./components/Hero";
import Featured from "./components/Featured";
import Choose from "./components/Choose";
import Question from "./components/Questions";
import Newslater from "./components/Newslater";
import Pricing from "./components/Price";
import MangmentTool from "./components/MangmentTool";
import OnePhase from "./components/OnePhase";
import Header from "./components/Header";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      
      <Header />
      <SectionOne />
      <Featured />
      <OnePhase />
      <Choose />
      <Pricing />
      <Question />
      <MangmentTool />
      <Newslater />
      <Footer />
    </div>
  );
};

export default page;
