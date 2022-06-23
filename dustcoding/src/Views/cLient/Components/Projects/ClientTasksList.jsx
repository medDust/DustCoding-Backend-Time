import React, { useEffect, useState } from "react";
import {
  GetAllTaskByProject,
  GetProjectbyId,
} from "../../../../api/ProjectsFunction";
import { useParams } from "react-router-dom";
import Pagination from "../../../admin/pages/Project/Pagination";

const ClientTasksList = () => {
  let { id } = useParams();
  const [Tasks, setTasks] = useState([]);
  const [Title, setTitle] = useState("");
  const [state, setState] = useState();
  const [IdProject, setIdProject] = useState("");
  const [ClientName, setClientName] = useState("");

  const [TaskName, setTaskName] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [TasksPerPage, setTaskPerPage] = useState(5);

  const indexOfLastTask = currentPage * TasksPerPage;
  const indexOfFirstTask = indexOfLastTask - TasksPerPage;
  const currentTask = Tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    GetProjectbyId({ projectId: id })
      .then((res) => {
        const Title = res.data.title;
        const position = res.data.state;
        const IdProject = res.data._id;
        const ClientName = res.data.fullName;
        setIdProject(IdProject);
        setState(position);
        setTitle(Title);
        setClientName(ClientName);
      })
      .catch((err) => {
        return console.log({ msg: err.message });
      });
    GetAllTaskByProject({ projectId: id })
      .then((res) => {
        const Tasks = res.data;
        setTaskName(res.data.name);
        setTasks(Tasks);
      })
      .catch((err) => {
        console.log({ err: err.message });
      });
  }, []);
  return (
    <div className=" flex h-screen  flex-col items-center justify-center">
      <h1 className="mx-4 gap-4 text-xl font-bold uppercase">{Title}</h1>
      <h1 className="mx-4 gap-4 uppercase text-white">
        {state === 0 && (
          <div className="rounded-2xl bg-gray-400 p-2">
            <p className=" font-semibold">waiting to start</p>
          </div>
        )}
        {state === 1 && (
          <div className="rounded-2xl bg-blue-400 p-2">
            <p className="font-semibold">started</p>
          </div>
        )}
        {state === 2 && (
          <div className="rounded-2xl bg-orange-400 p-2">
            <p className="font-semibold">in testing</p>
          </div>
        )}
        {state === 3 && (
          <div className="rounded-2xl bg-green-400 p-2">
            <p className="font-semibold">done</p>
          </div>
        )}
      </h1>
      <table className="mx-auto w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Responsible
            </th>

            <th scope="col" className="px-6 py-3">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {currentTask.map((tasks) => (
            <>
              <tr className="border-b bg-white ">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                >
                  {tasks.name}
                </th>
                <td className="px-6 py-4">{tasks.EmployerName}</td>
                <td className="px-6 py-4">
                  {tasks.position === 0 && (
                    <span className="rounded-full bg-gray-400 px-2 py-1 font-semibold leading-tight text-white ">
                      To do
                    </span>
                  )}
                  {tasks.position === 1 && (
                    <span className="rounded-full bg-blue-400 px-2 py-1 font-semibold leading-tight text-white ">
                      progress
                    </span>
                  )}
                  {tasks.position === 2 && (
                    <span className="rounded-full bg-orange-400 px-2 py-1 font-semibold leading-tight text-white ">
                      Testing
                    </span>
                  )}
                  {tasks.position === 3 && (
                    <span className="rounded-full bg-green-400 px-2 py-1 font-semibold leading-tight text-white ">
                      done
                    </span>
                  )}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <Pagination
        projectPerPage={TasksPerPage}
        totalProjects={Tasks.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ClientTasksList;
