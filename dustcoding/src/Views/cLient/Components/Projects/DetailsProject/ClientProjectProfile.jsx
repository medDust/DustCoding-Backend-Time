import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { isAuthenticated } from "../../../../../helpers/auth";
import { GetProjects } from "../../../../../api/ContentsFunctions";
import InformationProjectClient from "./InformationProjectClient";
import Pagination from "../../../../admin/pages/Project/Pagination";
const ClientProjectProfile = () => {
  const [Projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectPerPage] = useState(5);
  const id = isAuthenticated().data.id;
  useEffect(() => {
    GetProjects()
      .then((response) => {
        const Projects = response.data;
        setProjects(Projects);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProject = Projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const projectNumber = Projects.filter(
    (project) => project.userId === id
  ).length;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      {isAuthenticated() && isAuthenticated().data.id === id && (
        <div className="top-16 mx-auto grid items-center justify-center">
          <Link
            to="/Client/Projects/"
            className="group flex items-center justify-between rounded-md border-b-4 border-blue-600 bg-blue-500 p-3 font-medium text-white shadow-lg "
          >
            <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
              <AiOutlineFundProjectionScreen className="stroke-current transform text-2xl text-blue-800 transition-transform duration-500 ease-in-out " />
            </div>
            <div className="text-right">
              <p className="text-2xl">{projectNumber}</p>
              <p>Projects</p>
            </div>
          </Link>
          <div className="top-16 mt-16 flex flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
            <table className="whitespace-no-wrap w-full">
              <thead>
                <tr className="border-b-2 bg-gray-50 text-left text-xs font-semibold uppercase text-gray-500 ">
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Date Begin</th>
                  <th className="px-4 py-3">Date End</th>
                  <th className="px-4 py-3">state</th>
                  <th className="px-4 py-3">control</th>
                </tr>
              </thead>
              <tbody className="divide-y bg-white ">
                <InformationProjectClient id={id} Projects={currentProject} />
              </tbody>
            </table>
            <Pagination
              projectPerPage={projectsPerPage}
              totalProjects={Projects.length}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientProjectProfile;
