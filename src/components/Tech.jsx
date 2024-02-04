import React from "react";

//import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

{
  /* <BallCanvas icon={technology.icon} /> */
}

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <div>
            <img src={technology.icon} alt="icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
