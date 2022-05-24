import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { deleteProjectsById } from "../../../../api/ContentsFunctions";

const InformationProjects = ({ Projects }) => {
  const navigate = useNavigate();
  const deleteHandler = (idProject) => {
    deleteProjectsById(idProject).then((res) => {
      navigate("/Admin/Projects/");
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
            <div>
              <p className="font-semibold">{project._state}</p>
            </div>
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
