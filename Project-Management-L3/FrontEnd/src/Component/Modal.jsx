// Modal.js
import React from "react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-400 p-6 rounded-lg shadow-lg lg:w-[30rem] md:w-[30rem] w-80">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">Add Project</h2>
          <button onClick={onClose} className="text-red-900 font-bold rounded">
            <MdCancel size={29} />
          </button>
        </div>
        <hr />
        <div className="flex flex-col items-center mt-4">
          <input
            type="text"
            className="h-9 rounded-md placeholder:p-1 placeholder:text-gray-700  border-2 mb-5 border-gray-600 lg:w-80 md:w-80"
            placeholder="Enter Project Name"
          ></input>
          <textarea
            name=""
            className="rounded-md placeholder:p-1 placeholder:text-gray-700 border-2 mb-5 border-gray-600 lg:w-80 md:w-80"
            id=""
            cols="22"
            rows="10"
            placeholder="Description"
          ></textarea>
          <Link to="/"  className="border-2 py-3 px-5 font-bold  border-gray-700 rounded-md bg-blue-500 hover:bg-blue-700 hover:scale-105">Add</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
