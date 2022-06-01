import React, { useEffect, useState } from "react";
import { GetUsers } from "../../../../api/AuthFunction";
import { UpdateTasks } from "../../../../api/ProjectsFunction";
import { useParams, useNavigate } from "react-router-dom";
const UpdateTasksForm = () => {
  const { id, TaskId } = useParams();
  const navigate = useNavigate();
  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    GetUsers()
      .then((response) => {
        const user = response.data;
        setEmployers(user);
      })
      .catch((err) => console.log(err));
  }, []);
  const [url, setUrl] = useState();
  const [name, setName] = useState();
  const [position, setPosition] = useState();
  const [userId, setUserId] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = { name, url, position, userId };
    console.log(data);
    UpdateTasks({ tasksId: TaskId }, data).then((res) => {
      console.log("Updated");
      navigate(`/Admin/Projects/${id}/`);
    });
  };

  return (
    <div className="relative top-20 mx-auto flex w-3/4 min-w-0 flex-col items-center justify-center break-words rounded bg-gray-50 p-5 shadow-lg ">
      <form>
        <div className="mx-auto grid  xl:grid-cols-2 xl:gap-6 ">
          <div className="group relative z-0 mb-6  w-full ">
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_first_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 "
            >
              Task name
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <select
              name={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option>select CLient</option>
              {employers
                .filter((user) => user.role !== 0)
                .map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.username}
                  </option>
                ))}
            </select>
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
          <div className="group relative z-0 mb-6 flex w-full items-center justify-evenly">
            <div className="flex flex-wrap">
              <div className="mr-4 flex items-center">
                <input
                  type="radio"
                  value="To do"
                  onChange={(e) => setPosition(e.target.value)}
                  name="position"
                  checked={position === "To do"}
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
                  value="In progress"
                  name="position"
                  onChange={(e) => setPosition(e.target.value)}
                  checked={position === "In progress"}
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
                  value="Testing"
                  onChange={(e) => setPosition(e.target.value)}
                  checked={position === "Testing"}
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
                  value="Done"
                  onChange={(e) => setPosition(e.target.value)}
                  checked={position === "Done"}
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
        </div>
        <button
          onClick={onSubmit}
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateTasksForm;
