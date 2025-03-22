import { projects } from "@/data";
import React from "react";
import { ThreeDCardDemo } from "./ui/Card";

export const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple"> recent projects </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-2 gap-12 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center p-4 justify-center">
            <ThreeDCardDemo id = {id} title={title} des={des} img={img} iconLists = {iconLists} link={link}/>
            </div>
        ))}
      </div>
    </div>
  );
};
