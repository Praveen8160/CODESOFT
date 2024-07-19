import React from "react";
import { Link } from "react-router-dom";
function ProjectCard({ project }) {
  return (
    <>
      <div className="bg-slate-300 border-2 flex flex-col items-center border-gray-700 rounded-md mx-4 py-3 mb-7">
        <h1 className="text-xl font-bold">{project.name}</h1>
        <p className="mx-4 my-2">{project.description}</p>
        <div className="my-5">
          <Link
            to={`/project/${project._id}`}
            className="border-2 py-3 px-5 mx-3 font-bold border-gray-700 rounded-md bg-blue-500 hover:bg-blue-700 hover:scale-105"
          >
            Visit
          </Link>
          <Link
            to="/"
            className="border-2 py-3 px-5 font-bold border-gray-700 rounded-md bg-red-500 hover:bg-red-700 hover:scale-105"
          >
            Delete
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
