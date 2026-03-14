import React from "react";
import { Globe, Github } from "lucide-react";
import { hackathonList } from "../constants/hackathons";

const Hackathons = () => {
  return (
    <section className="w-full py-16 relative">
      {/* Center line */}
      {/* <div className="h-full w-2 bg-border absolute left-1/2 -translate-x-1/2 rounded-full"></div> */}

      {/* Top bar */}
      <header className="flex items-center justify-center flex-col pb-10">
        <h1 className="bg-text text-bg py-1 px-3 rounded-md mb-5 text-[14px] font-normal">
          Hackathons
        </h1>
        <h1 className="text-5xl">Build to slove</h1>
        <h2 className="text-text-secondary text-[20px] ">
          Participated in many hackathons for sloving realworld problems
        </h2>
        <h2 className="text-text-secondary text-[20px] ">
          also i wanted to work under pressure.
        </h2>
      </header>

      {/* All the projects Cards */}
      <div className="flex flex-wrap items-center justify-between gap-5">
        {hackathonList.map((p, i) => (
          <HackathonChild p={p} key={i} index={i + 1} />
        ))}
      </div>
    </section>
  );
};

const HackathonChild = ({ p, index }) => {
  const { name, details, country, links, image } = p;
  const position = index % 2 === 0 ? "right" : "left";
  console.log(position);

  return (
    <div className="border border-border rounded-md w-[48%] min-h-[350px] p-2">
      {/* Top Image banner */}
      <div className="h-[60%] w-full">
        <img
          src={image}
          alt="image"
          className="h-full w-full object-cover rounded-md"
        />
      </div>

      <h1 className="text-text text-[16px pt-2">{name}</h1>
      <h2 className="text-text-secondary text-[14px] font-medium ">{country}</h2>
      <p className="text-xs">{details}</p>

      {/* Links */}
      <div className="flex gap-2 pt-3">
        {links.length > 0 &&
          links.map((l, i) => {
            return (
              <a
                key={i}
                href={l.src}
                className="text-bg bg-text flex text-[10px] items-center
                             py-1 px-2 gap-1 hover:bg-text/60
                              justify-center rounded-md font-medium"
                target="_blank"
              >
                {l.type === "website" ? (
                  <Globe size={12} />
                ) : (
                  <Github size={12} />
                )}
                {l.type}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Hackathons;
