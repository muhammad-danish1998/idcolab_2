"use client"
import React from "react";
import SectionOne from "./components/Hero";
import Featured from "./components/Featured";
import Choose from "./components/Choose";
import Question from "./components/Questions";
import Newslater from "./components/Newslater";
import Pricing from "./components/Price";
import MangmentTool from "./components/MangmentTool";
import OnePhase from "./components/OnePhase";


const page = () => {
  return (
    <div>
      <SectionOne />
      <Featured />
     <OnePhase />
      <Choose />
      <Pricing />
      <Question />
      <MangmentTool />
      <Newslater />
    </div>
  );
};

export default page;
