import React from "react";
import { skillList } from "../constants/skills";

const Skills = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="pb-2">Skills</h1>
      {/* //Rendering all the skilss lists */}
      <div className="flex flex-wrap gap-2">
        {skillList.map((s) => {
          return <SkillChild key={s} s={s} />;
        })}
      </div>
    </div>
  );
};

const SkillChild = ({ s }) => {
  return <div className="bg-text rounded-md flex items-center justify-center py-1 px-2">
    <p className="text-bg text-xs font-semibold">{s}</p>
  </div>;
};

export default Skills;
