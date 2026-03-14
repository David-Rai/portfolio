import React from "react";
import  {Globe,Github} from 'lucide-react'
import { projectList } from "../constants/projects";

const MyProjects = () => {
  return (
    <section className="w-full pt-16">
      {/* Top bar */}
      <header className="flex items-center justify-center flex-col pb-10">
        <h1 className="bg-text text-bg p-2 rounded-md mb-5">My Projects</h1>
        <h2 className="text-text-secondary text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          Ducimus voluptas sed similique nobis libero natus aut quaerat non
          sint.
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
    <div className="border-[1px] border-border rounded-md w-[48%] h-[200px] p-2">
      <h1 className="text-text text-[16px]">{name}</h1>
      <p className="text-xs">{details}</p>

      {/* Tech stacks list */}
      <div className="flex py-2">
        {techStacks.length > 0 &&
          techStacks.map((t, i) => {
            return (
              <div key={i} className="text-text text-xs">
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
                className="text-bg bg-text text-xs p-1 rounded-md font-medium"
                target="_blank"
              >
                {l.type === 'website' ? <Globe/> : <Github />}
                {l.type}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default MyProjects;
