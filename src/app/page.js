"use client";
import React from "react";
import SectionOne from "./components/Hero";
import Featured from "./components/Featured";
import Choose from "./components/Choose";
import Pricing from "./components/Price";
import MangmentTool from "./components/AppStore";
import OnePhase from "./components/OnePhase";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PreSignup from "./components/PreSignup";
import Faq from "./components/Faq";

const page = () => {
  return (
    <div>
      <Header />
      <SectionOne />
      <Featured />
      <OnePhase />
      <Choose />
      <Pricing />
      <Faq />
      <MangmentTool />
      <PreSignup />
      <Footer />
    </div>
  );
};

export default page;
