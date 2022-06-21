import React, { useState, useEffect } from "react";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TasksListTodo } from "../../../api/ProjectsFunction";
import { isAuthenticated } from "../../../helpers/auth";
import Pagination from "../../admin/pages/Project/Pagination";
import InformationProjectEmployer from "./projects/InformationProjectEmployer.jsx";

const ProjectEmpComponent = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    TasksListTodo({ userId: isAuthenticated().data.id })
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log({ err: err.message }));
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [TasksPerPage, setProjectPerPage] = useState(3);

  const indexOfLastTasks = currentPage * TasksPerPage;
  const indexOfFirstTasks = indexOfLastTasks - TasksPerPage;
  const currentProject = list.slice(indexOfFirstTasks, indexOfLastTasks);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="top-16 mx-auto grid items-center justify-center">
        <Link
          to="/Employer/Projects"
          className="group flex items-center justify-between rounded-md border-b-4 border-blue-600 bg-blue-500 p-3 font-medium text-white shadow-lg "
        >
          <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
            <AiOutlineFundProjectionScreen className="stroke-current transform text-2xl text-blue-800 transition-transform duration-500 ease-in-out " />
          </div>
          <div className="flex items-center gap-3 text-right align-middle text-2xl">
            <p>Tasks </p>
            <p>{list.length}</p>
          </div>
        </Link>
        <div className="top-16 mt-16 flex flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
          <table className="whitespace-no-wrap w-full">
            <thead>
              <tr className="border-b-2 bg-gray-50 text-left text-xs font-semibold uppercase text-gray-500 ">
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Task</th>

                <th className="px-4 py-3">state</th>
                <th className="px-4 py-3">control</th>
              </tr>
            </thead>
            <tbody className="divide-y bg-white ">
              <InformationProjectEmployer TasksList={currentProject} />
            </tbody>
          </table>
          <Pagination
            projectPerPage={TasksPerPage}
            totalProjects={list.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectEmpComponent;
