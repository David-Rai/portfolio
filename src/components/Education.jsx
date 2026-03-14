import React from "react";
import SchoolLogo from "../assets/schoollogo.jpg";

const Education = () => {
  return (
    <section className="w-full flex flex-col pb-15">
      <h1 className="pb-5">Education</h1>

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
              Shree Bir amarsingh of tehnical school
            </h1>
            <p className="text-xs  md:text-[16px]">Diploma in Computer Engineering</p>
          </div>
        </div>

        <div className="text-xs  md:text-[16px]  h-full">
          <p>2023-2026</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
