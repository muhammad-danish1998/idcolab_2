import React from "react";
import SectionOne from "./components/Hero";
import Featured from "./components/Featured";
import Choose from "./components/Choose";
import Question from "./components/Questions";
import Newslater from "./components/Newslater";

const page = () => {
  return (
    <div>
      <SectionOne />
      <Featured />
      <Choose />
      <Question />
      <Newslater />
    </div>
  );
};

export default page;
