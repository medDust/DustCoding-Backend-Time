import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GetAllTaskByProject } from "../../../api/ProjectsFunction";
import InformationProjectEmployer from "./projects/InformationProjectEmployer";

const TasksEmpComponent = () => {
  const { ProjectId } = useParams();
  const [project, setProject] = useState([]);
  useEffect(() => {
    GetAllTaskByProject({ projectId: ProjectId })
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => console.log({ err: err.message }));
  }, [ProjectId]);

  return (
    <div class="relative top-16 flex w-full items-center justify-center overflow-x-auto shadow-md sm:rounded-lg">
      <table class=" w-full items-center justify-center text-left text-sm text-gray-500">
        <thead class="bg-gray-50 text-xs uppercase text-gray-700 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Task name
            </th>

            <th scope="col" class="px-6 py-3">
              responsible
            </th>

            <th scope="col" class="px-6 py-3">
              Status
            </th>

            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {project.map((task) => (
            <tr class="border-b bg-white " key={task._id}>
              <th
                scope="row"
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
              >
                {task.name}
              </th>

              <td class="px-6 py-4">{task.EmployerName}</td>
              <td class="px-6 py-4">
                {" "}
                <Link
                  to={`/Employer/Projects/${ProjectId}/Task/${task._id}`}
                  className="font-medium text-blue-600 hover:underline "
                >
                  {task.position === 0 && (
                    <span className="rounded-full bg-gray-400 px-2 py-1 font-semibold leading-tight text-white ">
                      To do
                    </span>
                  )}
                  {task.position === 1 && (
                    <span className="rounded-full bg-blue-400 px-2 py-1 font-semibold leading-tight text-white ">
                      progress
                    </span>
                  )}
                  {task.position === 2 && (
                    <span className="rounded-full bg-orange-400 px-2 py-1 font-semibold leading-tight text-white ">
                      Testing
                    </span>
                  )}
                  {task.position === 3 && (
                    <span className="rounded-full bg-green-400 px-2 py-1 font-semibold leading-tight text-white ">
                      done
                    </span>
                  )}
                </Link>
              </td>

              <td class="px-6 py-4 text-right">
                <Link
                  to={`/Employer/Projects/${ProjectId}/Task/${task._id}`}
                  className="font-medium text-blue-600 hover:underline "
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksEmpComponent;
