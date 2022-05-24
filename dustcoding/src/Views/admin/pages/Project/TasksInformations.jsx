import React from "react";
import { FaTheaterMasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DeleteTaskById } from "../../../../api/ProjectsFunction";

const TasksInformations = ({ Tasks, IdProject }) => {
  const deleteHandler = (id) => {
    DeleteTaskById(id)
      .then((res) => {
        window.location.reload(false);
        res.send({ msg: "delete success" });
      })
      .catch((err) => {
        return err.message;
      });
  };
  return Tasks.map((tasks) => (
    <tr
      key={tasks._id}
      className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
      >
        <Link
          to={`/Admin/Projects/${IdProject}/Task/${tasks._id}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          {tasks.name}
        </Link>
      </th>
      <td className="px-6 py-4">
        <Link
          to={`/Admin/Projects/${IdProject}/Task/${tasks._id}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          <span className="rounded-full bg-blue-400 px-2 py-1 font-semibold leading-tight text-white ">
            {tasks.position}
          </span>
        </Link>
      </td>
      <td className="flex  justify-evenly px-6 py-4 ">
        <Link
          to={`/Admin/Projects/${IdProject}/Task/${tasks._id}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          show
        </Link>
        <Link
          to={`/Admin/Projects/${IdProject}/Task/${tasks._id}/Edit`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </Link>
        <button
          type="submit"
          onClick={() => deleteHandler(tasks._id)}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          delete
        </button>
      </td>
    </tr>
  ));
};

export default TasksInformations;
