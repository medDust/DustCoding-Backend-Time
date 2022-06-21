import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProjectListEmp = ({ projectList }) => {
  return (
    <>
      {projectList.map((TasksList) => (
        <tr className="w-full text-gray-700" key={TasksList._id}>
          <td className="px-4 py-3">
            <Link
              className="w-full"
              to={`/Employer/Projects/${TasksList.projectId}`}
            >
              <div className="flex items-center text-sm">
                <div>
                  <p className="font-semibold">{TasksList.projectName}</p>
                </div>
              </div>
            </Link>
          </td>
          <td className="px-4 py-3">
            <Link
              className="w-full"
              to={`/Employer/Projects/${TasksList.projectId}/Tasks/${TasksList._id}`}
            >
              <div className="flex items-center text-sm">
                <div>
                  <p className="font-semibold">{TasksList.name}</p>
                </div>
              </div>
            </Link>
          </td>
          <td className="px-4 py-3">
            <Link
              className="w-full"
              to={`/Employer/Projects/${TasksList.projectId}/Tasks/${TasksList._id}`}
            >
              <div className="flex items-center text-sm">
                <div>
                  <p className="font-semibold">{TasksList.position}</p>
                </div>
              </div>
            </Link>
          </td>

          <td className="px-4 py-3">
            <div className="flex items-center space-x-3 text-xl">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 p-5 text-center text-white shadow-sm hover:bg-green-800">
                <Link
                  to={`/Employer/Projects/${TasksList.projectId}/Tasks/${TasksList._id}`}
                >
                  <AiFillCheckSquare />
                </Link>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProjectListEmp;
