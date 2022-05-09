import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  DeleteTaskById,
  GetAllTaskByProject,
  GetProjectbyId,
} from "../../../../api/ProjectsFunction";
import HeaderComponent from "../DashBoardComponents/HeaderComponent";
import TaskForm from "./TaskForm";
import TeamForms from "./TeamForms";

const ProjectPage = () => {
  const [Tasks, setTasks] = useState([]);
  const [Title, setTitle] = useState("");
  const [IdProject, setIdProject] = useState("");
  const [TaskName, setTaskName] = useState();
  let { id } = useParams();

  useEffect(() => {
    GetAllTaskByProject({ projectId: id })
      .then((res) => {
        const Tasks = res.data;
        setTaskName(res.data.name);
        setTasks(Tasks);
      })
      .catch((err) => {
        console.log({ err: err.message });
      });
    GetProjectbyId({ projectId: id })
      .then((res) => {
        const Title = res.data.title;
        const IdProject = res.data._id;
        setIdProject(IdProject);
        setTitle(Title);
      })
      .catch((err) => {
        return console.log({ msg: err.message });
      });
  }, [id]);
  const deleteHandler = (id) => {
    DeleteTaskById(id)
      .then((res) => {
        window.location.reload(false);
        res.send({ msg: "delete success" });
      })
      .catch((err) => {
        return err.message;
      });
  };
  // const UpdateTask = () => {};
  const TasksList = Tasks.map((tasks) => (
    <tr
      key={tasks._id}
      className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
      >
        {tasks.name}
      </th>
      <td className="px-6 py-4">Sliver</td>
      <td className="px-6 py-4">Laptop</td>
      <td className="px-6 py-4">$2999</td>
      <td className="flex  justify-evenly px-6 py-4 ">
        <Link
          to={`/Admin/Projects/${IdProject}/Task/${tasks._id}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          show
        </Link>
        <Link
          to={`/Admin/Projects/${IdProject}/Task/${tasks._id}/Edit`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </Link>
        <button
          type="submit"
          onClick={() => deleteHandler(tasks._id)}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 grid h-full md:ml-64 ">
        <div className="h-9">
          <h1 className="mx-4 gap-4 text-xl font-bold uppercase"> {Title}</h1>
          <h1 className="mx-4 gap-4 text-xl font-bold uppercase">{TaskName}</h1>
          <TaskForm name="Task" />
          <TeamForms />
        </div>

        <div className="relative w-11/12 shadow-md sm:rounded-lg">
          <table className="mx-auto w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>{TasksList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
