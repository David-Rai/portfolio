import React from "react";
import {projectList} from '../constants/projects'

const MyProjects = () => {
  return (
    <section className="w-full pt-16">
      {/* Top bar */}
      <div className="flex items-center justify-center flex-col">
        <h1>My Projects</h1>
        <h2 className="text-text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          Ducimus voluptas sed similique nobis libero natus aut quaerat non
          sint.
        </h2>
      </div>

      {/* All the projects Cards */}
      <div className="flex flex-wrap">
        {
          projectList.map((p,i)=> <ProjectChild p={p} key={i}/>)
        }
      </div>
    </section>
  );
};

const ProjectChild=({p})=>{
const {name}=p

return (
  <div className="bg-red-200 w-[40%] h-[200px]">
    <h1>{name}</h1>
  </div>
)

}

export default MyProjects;
