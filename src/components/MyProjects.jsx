import React from "react";
import { Globe, Github } from "lucide-react";
import { projectList } from "../constants/projects";

const MyProjects = () => {
  return (
    <section className="w-full pt-16">
      {/* Top bar */}
      <header className="flex items-center justify-center flex-col pb-10">
        <h1 className="bg-text text-bg py-1 px-3 rounded-md mb-2 text-[14px] font-normal">
          My Projects
        </h1>
        <h1 className="text-5xl">Check Out my latest work</h1>
        <h2 className="text-text-secondary text-[20px]">
          Some of my projects which sloved micro problems
        </h2>
        <h2 className="text-text-secondary text-[20px]">
          and had high user engagement.
        </h2>
      </header>

      {/* All the projects Cards */}
      <div className="flex flex-wrap items-center justify-between gap-5">
        {projectList.map((p, i) => (
          <ProjectChild p={p} key={i} />
        ))}
      </div>
    </section>
  );
};

const ProjectChild = ({ p }) => {
  const { name, details, techStacks, links } = p;

  return (
    <div className="border border-border rounded-md w-[48%] min-h-45 p-2">
      <h1 className="text-text text-[16px]">{name}</h1>
      <p className="text-xs">{details}</p>

      {/* Tech stacks list */}
      <div className="flex py-2 gap-1 flex-wrap">
        {techStacks.length > 0 &&
          techStacks.map((t, i) => {
            return (
              <div
                key={i}
                className="text-text text-[10px] py-1 px-2 rounded-md font-semibold capitalize bg-border"
              >
                {t}
              </div>
            );
          })}
      </div>

      {/* Links */}
      <div className="flex gap-2">
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

export default MyProjects;
