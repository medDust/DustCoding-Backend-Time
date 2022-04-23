import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiCheckSquare } from "react-icons/fi";
import {
  DeleteTaskById,
  GetAllTaskByProject,
  GetProjectbyId,
} from "../../../../api/ProjectsFunction";
import HeaderComponent from "../DashBoardComponents/HeaderComponent";
import TaskForm from "./TaskForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import TeamForms from "./TeamForms";

const ProjectPage = () => {
  const [Tasks, setTasks] = useState([]);
  const [Title, setTitle] = useState("");
  let { id } = useParams();

  useEffect(() => {
    GetAllTaskByProject({ projectId: id })
      .then((res) => {
        const Tasks = res.data;
        setTasks(Tasks);
      })
      .catch((err) => {
        console.log({ err: err.message });
      });
    GetProjectbyId({ projectId: id })
      .then((res) => {
        const Title = res.data.title;
        setTitle(Title);
      })
      .catch((err) => {
        return console.log({ msg: err.message });
      });
  }, [id]);
  const deleteHandler = (idTasks) => {
    DeleteTaskById(idTasks)
      .then((res) => {
        window.location.reload(false);
        res.send({ msg: "delete success" });
      })
      .catch((err) => {
        return err.message;
      });
  };

  const TasksList = Tasks.map((tasks, index) => (
    <tr className="text-gray-700 " key={tasks._id}>
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold">{index + 1}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold">{tasks.name}</p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3">
        <div className="flex items-center space-x-3 text-xl">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 p-5 text-center text-white shadow-sm hover:bg-green-800">
            <Link to={`/Admin/Projects/${tasks._id}`}>
              <FiCheckSquare />
            </Link>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-5 text-center text-white shadow-sm hover:bg-red-800">
            <button
              type="submit"
              onClick={() => {
                deleteHandler(tasks._id);
              }}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </td>
    </tr>
  ));
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 grid h-full md:ml-64 ">
        <div className="h-9">
          <h1 className="mx-4 gap-4 text-xl font-bold uppercase"> {Title}</h1>
          <TaskForm name="Task" />
          <TeamForms />
        </div>
        <table className="whitespace-no-wrap w-full">
          <thead>
            <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
              <th className="px-4 py-3">id</th>

              <th className="px-4 py-3">Title</th>

              <th className="px-4 py-3">state</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-white ">{TasksList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectPage;
