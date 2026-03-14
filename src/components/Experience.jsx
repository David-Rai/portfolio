import React from "react";
import SchoolLogo from "../assets/pratham.jpg";

const Experience= () => {
  return (
    <section className="w-full flex flex-col pb-15">
      <h1 className="pb-5">Experience</h1>

      {/* College */}
      <div className="flex items-center justify-between gap-2 h-full">
        <div className="flex gap-5">
          {/* logo */}
          <div className="h-15 w-15  rounded-full overflow-hidden">
            <img
              src={SchoolLogo}
              alt="logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-sm md:text-[20px]">
              Pratham IT Solution
            </h1>
            <p className="text-xs  md:text-[16px]">web dev Intern</p>
          </div>
        </div>

        <div className="text-xs  md:text-[16px]  h-full">
          <p>March 2025 - April 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
