import React, { useEffect, useState } from "react";

import { GetProjects } from "../../../../api/ContentsFunctions";
import Formulaire from "./Formulaire";
import Pagination from "./Pagination";
import InformationProjects from "./InformationProjects";

const ProjectsPages = () => {
  const [Projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectPerPage] = useState(5);
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <div className=" ml-14 mt-5   mb-10 h-full gap-6 tracking-wide md:ml-64 ">
        <div>
          <Formulaire name="Project" />
        </div>
        <table className="whitespace-no-wrap w-full">
          <thead>
            <tr className="border-b-2 bg-gray-50 text-left text-xs font-semibold uppercase text-gray-500 ">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Date Begin</th>
              <th className="px-4 py-3">Date End</th>
              <th className="px-4 py-3">state</th>
              <th className="px-4 py-3">control</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-white ">
            <InformationProjects Projects={currentProject} />
          </tbody>
        </table>
        <Pagination
          projectPerPage={projectsPerPage}
          totalProjects={Projects.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ProjectsPages;
