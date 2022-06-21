import React, { useEffect } from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { TasksListTodo } from "../../../../api/ProjectsFunction";
import { isAuthenticated } from "../../../../helpers/auth.jsx";
const InformationProjectEmployer = ({ TasksList }) => {
  const id = useParams();

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
            <span className="rounded-md bg-green-400 px-2 font-bold uppercase text-gray-50">
              {TasksList.position}
            </span>
          </td>
          <td className="p-3 ">
            <Link
              to={`/Employer/Projects/${TasksList.projectId}`}
              className="mr-2 text-gray-400 hover:text-gray-100"
            >
              <i className="material-icons-outlined text-base">visibility</i>
            </Link>
            <Link to="#" className="mx-2 text-gray-400  hover:text-gray-100">
              <i className="material-icons-outlined text-base">edit</i>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default InformationProjectEmployer;
