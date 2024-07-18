import React from "react";
import { Link } from "react-router-dom";
function ProjectCard() {
  return (
    <>
      <div className="bg-slate-300 border-2 flex flex-col items-center border-gray-700 rounded-md mx-4 py-3 mb-7">
        <h1 className="text-xl font-bold">Project Name</h1>
        <p className="mx-4 my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          delectus magni repudiandae eveniet esse voluptatum praesentium
          accusantium sed, aspernatur fugiat recusandae laborum, nam, asperiores
          nesciunt rerum ex dolorem. Adipisci, a. Repellendus ut laborum sequi
          fugiat itaque unde ullam expedita, excepturi iste culpa reprehenderit
          voluptates harum q.
        </p>
        <div className="my-5">
          <Link
            to="/"
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
      <div className="bg-slate-300 border-2 flex flex-col items-center border-gray-700 rounded-md mx-4 py-3 mb-7">
        <h1 className="text-xl font-bold">Project Name</h1>
        <p className="mx-4 my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          delectus magni repudiandae eveniet esse voluptatum praesentium
          accusantium sed, aspernatur fugiat recusandae laborum, nam, asperiores
          nesciunt rerum ex dolorem. Adipisci, a. Repellendus ut laborum sequi
          fugiat itaque unde ullam expedita, excepturi iste culpa reprehenderit
          voluptates harum q.
        </p>
        <div className="my-5">
          <Link
            to="/"
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
