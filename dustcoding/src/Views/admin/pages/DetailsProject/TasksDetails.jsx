import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetTaskById } from "../../../../api/ProjectsFunction";
const TasksDetails = () => {
  const { id, TaskId } = useParams();
  const [task, setTask] = useState([]);
  useEffect(() => {
    GetTaskById({ projectId: id, TaskId: TaskId }).then((res) =>
      setTask(res.data)
    );
  }, [id, TaskId]);

  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <div className=" ml-14 mt-5 mb-10 grid h-full space-x-2 md:ml-64">
        <div className="flex h-1/4 items-center justify-evenly ">
          <p className="mx-4 my-2 text-left text-xl font-bold text-black">
            {task.name}
          </p>
          <p className="mx-4 my-2 text-left text-xl font-bold text-gray-600">
            {task.projectName}
          </p>
          <p className="mx-4 my-2 text-left text-xl font-bold text-black"></p>
          <p className="mx-4 my-2 text-left text-xl font-bold text-black">
            {task.url}
          </p>
          {task.position === 0 && (
            <p className="mx-4 my-2 text-left text-xl font-bold text-black">
              To do
            </p>
          )}
          {task.position === 1 && (
            <p className="mx-4 my-2 text-left text-xl font-bold text-black">
              progress
            </p>
          )}
          {task.position === 2 && (
            <p className="mx-4 my-2 text-left text-xl font-bold text-black">
              Testing
            </p>
          )}
          {task.position === 3 && (
            <p className="mx-4 my-2 text-left text-xl font-bold text-black">
              Done
            </p>
          )}
          <div className="items-center">
            <Link
              to={`/Admin/Projects/${id}/Task/${TaskId}/Edit`}
              className="h-9 rounded-md bg-blue-600 p-2 text-center text-white shadow-md hover:bg-blue-500"
            >
              add modification
            </Link>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default TasksDetails;
