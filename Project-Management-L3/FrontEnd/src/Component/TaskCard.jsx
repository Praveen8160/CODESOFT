import React from "react";

function TaskCard() {
  return (
    <>
      <div className="bg-slate-300 shadow-md p-4 border-gray-700 rounded-md mx-4 py-3 mb-7">
        <h3 className="text-xl font-semibold mb-2">Titile</h3>
        <p className="text-gray-700 mb-2">description</p>
        <p className="mb-2">
          <strong>Status:</strong> status
        </p>
        <p className="mb-2">
          <strong>Project:</strong> project.name
        </p>
        <p className="">
          <strong>Deadline:</strong> new Date(task.deadline).toLocaleDateString
        </p>
      </div>

      <div className="bg-slate-300 shadow-md p-4 border-gray-700 rounded-md mx-4 py-3 mb-7">
        <h3 className="text-xl font-semibold mb-2">Titile</h3>
        <p className="text-gray-700 mb-2">description skhfdsfjsdhg sdgjkdhgkhf</p>
        <p className="mb-2">
          <strong>Status:</strong> status
        </p>
        <p className="mb-2">
          <strong>Project:</strong> project.name
        </p>
        <p className="">
          <strong>Deadline:</strong> new Date(task.deadline).toLocaleDateString
        </p>
      </div>
      <div className="bg-slate-300 shadow-md p-4 border-gray-700 rounded-md mx-4 py-3 mb-7">
        <h3 className="text-xl font-semibold mb-2">Titile</h3>
        <p className="text-gray-700 mb-2">description</p>
        <p className="mb-2">
          <strong>Status:</strong> status
        </p>
        <p className="mb-2">
          <strong>Project:</strong> project.name
        </p>
        <p className="">
          <strong>Deadline:</strong> new Date(task.deadline).toLocaleDateString
        </p>
      </div>
    </>
  );
}

export default TaskCard;
