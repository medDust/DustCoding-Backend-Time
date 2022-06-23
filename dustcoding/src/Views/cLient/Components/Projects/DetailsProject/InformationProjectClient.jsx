import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
const InformationProjectClient = ({ Projects, id }) => {
  return Projects.filter((project) => project.userId === id).map((project) => (
    <tr className="w-full text-gray-700" key={project._id}>
      <td className="px-4 py-3">
        <Link className="w-full" to={`/Client/Projects/${project._id}`}>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{project.title}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className="px-4 py-3">
        <Link className="w-full" to={`/Client/Projects/${project._id}`}>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{project.dateBeguin}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className="px-4 py-3">
        <Link className="w-full" to={`/Client/Projects/${project._id}`}>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{project.dateEnd}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className="px-4 py-3">
        <Link className="w-full" to={`/Client/Projects/${project._id}`}>
          <div className="flex items-center text-sm">
            <div>
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
          </div>
        </Link>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-3 text-xl">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 p-5 text-center text-white shadow-sm hover:bg-green-800">
            <Link to={`/Client/Projects/${project._id}`}>
              <FiCheckSquare />
            </Link>
          </div>
        </div>
      </td>
    </tr>
  ));
};

export default InformationProjectClient;
