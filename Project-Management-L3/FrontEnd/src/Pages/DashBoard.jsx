import React, { useState } from "react";
import Modal from "../Component/Modal";
import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
import ProjectCard from "../Component/ProjectCard";
import TaskCard from "../Component/TaskCard";
function DashBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-300">
      <div className="p-6">
        <h1 className="text-3xl mb-4 font-bold font-serif">Add Project</h1>
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-7 rounded"
        >
          <GrAdd />
        </button>
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </div>
      <div className="bg-slate-400 mx-5 mb-10 rounded-lg min-h-80">
        <h1 className="text-3xl mb-4 font-bold font-serif text-center pt-2">
          Your Projects
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
          <ProjectCard></ProjectCard>
        </div>
      </div>
      <div className="bg-slate-400  mx-5 rounded-lg min-h-80">
        <h1 className="text-3xl mb-4 font-bold font-serif text-center pt-2">
          Your Tasks
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
          <TaskCard></TaskCard>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
