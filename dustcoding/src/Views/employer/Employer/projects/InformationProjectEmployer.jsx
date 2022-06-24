import React from "react";
import { Link } from "react-router-dom";
const InformationProjectEmployer = ({ TasksList }) => {
  return (
    <>
      {TasksList.map((TasksList) => (
        <tr className="rounded-md bg-dustLight/30">
          <td className="p-3">
            <div className="align-items-center flex">
              <div className="ml-3">
                <div className="">{TasksList.projectName}</div>
              </div>
            </div>
          </td>
          <td className="p-3">{TasksList.name}</td>

          <td className="p-3">
            {TasksList.position === 0 && (
              <span className="rounded-full bg-gray-400 px-2 py-1 font-semibold leading-tight text-white ">
                To do
              </span>
            )}
            {TasksList.position === 1 && (
              <span className="rounded-full bg-blue-400 px-2 py-1 font-semibold leading-tight text-white ">
                progress
              </span>
            )}
            {TasksList.position === 2 && (
              <span className="rounded-full bg-orange-400 px-2 py-1 font-semibold leading-tight text-white ">
                Testing
              </span>
            )}
            {TasksList.position === 3 && (
              <span className="rounded-full bg-green-400 px-2 py-1 font-semibold leading-tight text-white ">
                done
              </span>
            )}
          </td>
          <td className="p-3 ">
            <Link
              to={`/Employer/Projects/${TasksList.projectId}`}
              className="mr-2 text-gray-400 hover:text-gray-100"
            >
              <i className="material-icons-outlined text-base">visibility</i>
            </Link>
            <Link
              to={`/Employer/Projects/${TasksList.projectId}/Tasks/${TasksList._id}`}
              className="mx-2 text-gray-400  hover:text-gray-100"
            >
              <i className="material-icons-outlined text-base">edit</i>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default InformationProjectEmployer;
