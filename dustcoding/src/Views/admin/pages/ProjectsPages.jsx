import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiCheckSquare } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  deleteProjectsById,
  GetProjects,
} from "../../../api/ContentsFunctions";
import HeaderComponent from "./DashBoardComponents/HeaderComponent";
import Formulaire from "./DetailsProject/Formulaire";

const ProjectsPages = () => {
  const [Projects, setProjects] = useState([]);
  useEffect(() => {
    GetProjects()
      .then((response) => {
        const Projects = response.data;
        setProjects(Projects);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (idProject) => {
    deleteProjectsById(idProject).then((res) => {
      window.location.reload(false);
      res.send({ msg: "delete success" });
    });
  };

  const ProjectList = Projects.map((project, index) => (
    <tr className="text-gray-700 " key={project._id}>
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
            <p className="font-semibold">{project.title}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold">{project.state}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-3 text-xl">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 p-5 text-center text-white shadow-sm hover:bg-green-800">
            <Link to={`/Admin/Projects/${project._id}`}>
              <FiCheckSquare />
            </Link>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-5 text-center text-white shadow-sm hover:bg-red-800">
            <button
              type="submit"
              onClick={() => {
                deleteHandler(project._id);
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
        <div>
          <Formulaire name="Project" />
        </div>
        <table className="whitespace-no-wrap w-1/2">
          <thead>
            <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 ">
              <th className="px-4 py-3">id</th>

              <th className="px-4 py-3">Title</th>

              <th className="px-4 py-3">state</th>
              <th className="px-4 py-3">option</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-white ">{ProjectList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPages;
