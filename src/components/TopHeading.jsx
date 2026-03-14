import React from "react";
import { Mail } from "lucide-react";
import mainImage from "../assets/me22.png";

const TopHeading = () => {
  return (
    <div className="w-full pt-25 flex items-center justify-between pb-10">
      <div className="left w-full">
        <h1 className="md:text-6xl font-semibold">Hi,I`m David</h1>
        <h2 className="md:text-xl text-md text-text-secondary py-2">
          Building FullStack Applications that sloves.
        </h2>
        <h3 className="text-md hover:underline cursor-pointer text-text font-medium flex items-center justify-start gap-2">
          <Mail size={16} />
          davidkhaling123@gmail.com
        </h3>
      </div>
      <div className="right h-full w-[30%]">
        <img src={mainImage} className="h-full w-full" />
      </div>
    </div>
  );
};

export default TopHeading;
