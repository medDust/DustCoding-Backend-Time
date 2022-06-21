import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GetAllTaskByProject,
  GetProjectbyId,
} from "../../../../api/ProjectsFunction.jsx";
import { TaskForm } from "../DetailsProject";
import Pagination from "./Pagination.jsx";
import TasksInformations from "./TasksInformations.jsx";
const ProjectPage = () => {
  const [Tasks, setTasks] = useState([]);
  const [Title, setTitle] = useState("");

  const [IdProject, setIdProject] = useState("");
  const [ClientName, setClientName] = useState("");

  const [TaskName, setTaskName] = useState();
  let { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [TasksPerPage, setTaskPerPage] = useState(5);

  const indexOfLastTask = currentPage * TasksPerPage;
  const indexOfFirstTask = indexOfLastTask - TasksPerPage;
  const currentTask = Tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        const ClientName = res.data.fullName;
        setIdProject(IdProject);
        setTitle(Title);
        setClientName(ClientName);
      })
      .catch((err) => {
        return console.log({ msg: err.message });
      });
  }, [id]);

  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <div className=" ml-14 mt-5 mb-10 grid h-full space-y-10 md:ml-64">
        <div className="w-11/12 shadow-md sm:rounded-lg">
          <div className="grid w-full ">
            <h1 className="mx-4 gap-4 text-xl font-bold uppercase"> {Title}</h1>
            <h1 className="mx-4 gap-4 text-xl font-bold uppercase">
              {TaskName}
            </h1>
            <h1 className="mx-4 my-2 gap-4 text-xl font-bold uppercase opacity-50">
              {ClientName}
            </h1>
            <div className="grid w-full ">
              <TaskForm />
            </div>
          </div>
          <table className="mx-auto w-full text-left text-sm text-gray-500 ">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Employer name
                </th>

                <th scope="col" className="px-6 py-3">
                  state
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <TasksInformations IdProject={IdProject} Tasks={currentTask} />
            </tbody>
          </table>
          <Pagination
            projectPerPage={TasksPerPage}
            totalProjects={Tasks.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
