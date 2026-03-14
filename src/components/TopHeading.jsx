import React from "react";
import {Mail} from 'lucide-react'
import mainImage from "../assets/hero.png";

const TopHeading = () => {
  return (
    <div className="w-full pt-[100px] flex items-center justify-between pb-10">
      <div className="left w-full">
        <h1 className="text-6xl font-semibold">Hi,I`m David</h1>
        <h2 className="text-xl text-text-secondary">Building FullStack Applications that engage</h2>
        <h3 className="text-md hover:underline cursor-pointer text-text">
          <Mail />
          davidkhaling123@gmail.com</h3>
      </div>
      <div className="right h-full w-[20%]">
        <img src={mainImage} />
      </div>
    </div>
  );
};

export default TopHeading;
