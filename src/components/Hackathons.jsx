import React from "react";
import { hackathonList } from "../constants/hackathons";

const Hackathons = () => {
  return (
    <section className="w-full pt-16">
      {/* Top bar */}
      <header className="flex items-center justify-center flex-col pb-10">
        <h1 className="bg-text text-bg p-2 rounded-md mb-5">Hackathons</h1>
        <h2 className="text-text-secondary text-[20px] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          Ducimus voluptas sed similique nobis libero natus aut quaerat non
          sint.
        </h2>
      </header>

      {/* All the projects Cards */}
      <div className="flex flex-wrap items-center justify-between gap-5">
        {hackathonList.map((p, i) => (
          <HackathonChild p={p} key={i} />
        ))}
      </div>
    </section>
  );
};

const HackathonChild = ({ p }) => {
  const { name, details, country, links, image } = p;

  return (
    <div className="border border-border rounded-md w-[48%] min-h-[350px] p-2">
      {/* Top Image banner */}
      <div className="h-[60%] w-full">
        <img src={image} alt="image" className="h-full w-full object-cover rounded-md"/>
      </div>

      <h1 className="text-text text-[16px pt-2">{name}</h1>
      <h2>{country}</h2>
      <p className="text-xs">{details}</p>

      {/* Links */}
      <div className="flex gap-2 pt-3">
        {links.length > 0 &&
          links.map((l, i) => {
            return (
              <a
                key={i}
                href={l.src}
                className="text-bg bg-text text-xs p-1 rounded-md font-medium"
                target="_blank"
              >
                {l.type}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Hackathons;
