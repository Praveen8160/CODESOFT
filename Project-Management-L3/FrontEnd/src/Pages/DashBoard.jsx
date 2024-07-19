import React, { useEffect, useState } from "react";
import Modal from "../Component/Modal";
import { GrAdd } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import ProjectCard from "../Component/ProjectCard";
import TaskCard from "../Component/TaskCard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { MdTry } from "react-icons/md";
function DashBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [projects, setprojects] = useState([]);
  const [task, settask] = useState([]);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const allProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2020/Project/allProject",
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setprojects(response.data.Projects);
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };
  const allTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2020/Task/getAllTask",
        { withCredentials: true }
      );
      // console.log(response.data);
      if (response.status === 200) {
        settask(response.data.tasks);
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };
  useEffect(() => {
    !isAuthenticated ? navigate("/SignIn") : (allProjects(), allTasks());
  }, [isModalOpen]);
  return (
    <div className="min-h-screen bg-slate-400">
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
      <div className="bg-slate-600 mx-5 mb-10 rounded-lg min-h-80">
        <h1 className="text-3xl mb-4 font-bold font-serif text-center pt-2">
          Your Projects
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
          {projects.map((value) => (
            <ProjectCard project={value}></ProjectCard>
          ))}
        </div>
      </div>
      <div className="bg-slate-600  mx-5 rounded-lg min-h-80">
        <h1 className="text-3xl mb-4 font-bold font-serif text-center pt-2">
          Your Tasks
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
          {task.map((item) => (
            <TaskCard task={item}></TaskCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
