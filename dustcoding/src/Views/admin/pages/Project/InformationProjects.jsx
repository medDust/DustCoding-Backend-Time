import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { deleteProjectsById } from "../../../../api/ContentsFunctions";

const InformationProjects = ({ Projects }) => {
  const deleteHandler = (idProject) => {
    deleteProjectsById(idProject).then((res) => {
      window.location.reload(false);
    });
  };
  return Projects.map((project) => (
    <tr className="w-full text-gray-700" key={project._id}>
      <td className="px-4 py-3">
        <Link className="w-full" to={`/Admin/Projects/${project._id}`}>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{project.title}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className="px-4 py-3">
        <Link className="w-full" to={`/Admin/Projects/${project._id}`}>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{project.fullName}</p>
            </div>
          </div>
        </Link>
      </td>

      <td className="px-4 py-3">
        <Link className="w-full" to={`/Admin/Projects/${project._id}`}>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{project.dateBeguin}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className="px-4 py-3">
        <Link className="w-full" to={`/Admin/Projects/${project._id}`}>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{project.dateEnd}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className="px-4 py-3">
        <Link className="w-full" to={`/Admin/Projects/${project._id}`}>
          <div className="flex items-center text-sm">
            {project.state === 0 && (
              <div className="rounded-2xl bg-gray-400 p-2">
                <p className=" font-semibold">waiting to start</p>
              </div>
            )}
            {project.state === 1 && (
              <div className="rounded-2xl bg-blue-400 p-2">
                <p className="font-semibold">started</p>
              </div>
            )}
            {project.state === 2 && (
              <div className="rounded-2xl bg-orange-400 p-2">
                <p className="font-semibold">in testing</p>
              </div>
            )}
            {project.state === 3 && (
              <div className="rounded-2xl bg-green-400 p-2">
                <p className="font-semibold">done</p>
              </div>
            )}
          </div>
        </Link>
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
};

export default InformationProjects;
