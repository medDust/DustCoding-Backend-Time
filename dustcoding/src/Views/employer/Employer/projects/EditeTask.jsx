import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { UpdateTasks } from "../../../../api/ProjectsFunction";
const EditeTask = () => {
  const { ProjectId, TaskId } = useParams();
  const navigate = useNavigate();

  const [url, setUrl] = useState();
  const [position, setPosition] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { url, position };
    UpdateTasks({ id: TaskId }, data)
      .then((res) => {
        navigate(`/Employer/Projects/${ProjectId}/`);
      })
      .catch((err) => console.log({ err: err.message }));
  };

  return (
    <div className="relative top-20 mx-auto flex w-3/4 min-w-0 flex-col items-center justify-center break-words rounded bg-gray-50 p-5 shadow-lg ">
      <h1 className="my-6 text-center text-xl font-bold uppercase">
        Update Task Page
      </h1>
      <form>
        <div className="group relative z-0 mb-6 flex w-full items-center justify-evenly gap-4">
          <div className="flex flex-wrap">
            <div className="mr-4 flex items-center">
              <input
                type="radio"
                value="0"
                onChange={(e) => setPosition(e.target.value)}
                name="position"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-purple-600 focus:ring-2 focus:ring-purple-500 "
              />
              <label
                htmlFor="purple-radio"
                className="ml-2 text-sm font-medium uppercase text-gray-900 "
              >
                To do
              </label>
            </div>
            <div className="mr-4 flex items-center">
              <input
                type="radio"
                value="1"
                name="position"
                onChange={(e) => setPosition(e.target.value)}
                className="h-4 w-4 border-gray-300 bg-gray-100 text-teal-600 focus:ring-2 focus:ring-teal-500 "
              />
              <label
                htmlFor="teal-radio"
                className="ml-2 text-sm font-medium uppercase text-gray-900 "
              >
                In progress
              </label>
            </div>
            <div className="mr-4 flex items-center">
              <input
                type="radio"
                name="position"
                value="2"
                onChange={(e) => setPosition(e.target.value)}
                className="h-4 w-4 border-gray-300 bg-gray-100 text-yellow-400 focus:ring-2 focus:ring-yellow-500"
              />
              <label
                htmlFor="yellow-radio"
                className="ml-2 text-sm font-medium uppercase text-gray-900 "
              >
                Testing
              </label>
            </div>
            <div className="mr-4 flex items-center">
              <input
                type="radio"
                name="position"
                value="3"
                onChange={(e) => setPosition(e.target.value)}
                className="h-4 w-4 border-gray-300 bg-gray-100 text-green-600 focus:ring-2 focus:ring-green-500 "
              />
              <label
                htmlFor="green-radio"
                className="ml-2 text-sm font-medium uppercase text-gray-900 "
              >
                Done
              </label>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="url"
              id="url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_first_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 "
            >
              url
            </label>
          </div>
        </div>

        <button
          onClick={onSubmit}
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          add new updates
        </button>
      </form>
    </div>
  );
};

export default EditeTask;
