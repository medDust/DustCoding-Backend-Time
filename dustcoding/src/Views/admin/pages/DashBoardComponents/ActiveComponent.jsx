import React, { useEffect, useState } from "react";
import { GetUsers } from "../../../../api/AuthFunction";

const ActiveComponent = () => {
  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    GetUsers()
      .then((response) => {
        const user = response.data;
        setEmployers(user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative top-20 mx-auto flex w-3/4 min-w-0 flex-col items-center justify-center break-words rounded bg-gray-50 p-5 shadow-lg ">
      <form>
        <div className="mx-auto grid  xl:grid-cols-2 xl:gap-6 ">
          <div className="group relative z-0 mb-6  w-full ">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 "
            >
              Task name
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <select
              id="countries"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              {employers
                .filter((user) => user.role !== 0)
                .map((user) => (
                  <option key={user.id}>{user.username}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Phone number (+216-456-7890)
            </label>
          </div>
          <div className="group relative z-0 mb-6 flex w-full items-center justify-evenly">
            <div className="flex flex-wrap">
              <div className="mr-4 flex items-center">
                <input
                  id="red-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500"
                />
                <label
                  for="red-radio"
                  className="ml-2 text-sm font-medium uppercase text-gray-900"
                >
                  backlog
                </label>
              </div>

              <div className="mr-4 flex items-center">
                <input
                  id="purple-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-purple-600 focus:ring-2 focus:ring-purple-500 "
                />
                <label
                  for="purple-radio"
                  className="ml-2 text-sm font-medium uppercase text-gray-900 "
                >
                  To do
                </label>
              </div>
              <div className="mr-4 flex items-center">
                <input
                  id="teal-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-teal-600 focus:ring-2 focus:ring-teal-500 "
                />
                <label
                  for="teal-radio"
                  className="ml-2 text-sm font-medium uppercase text-gray-900 "
                >
                  In progress
                </label>
              </div>
              <div className="mr-4 flex items-center">
                <input
                  id="yellow-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-yellow-400 focus:ring-2 focus:ring-yellow-500"
                />
                <label
                  for="yellow-radio"
                  className="ml-2 text-sm font-medium uppercase text-gray-900 "
                >
                  testing
                </label>
              </div>

              <div className="mr-4 flex items-center">
                <input
                  id="orange-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-orange-500 focus:ring-2 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-orange-600"
                />
                <label
                  for="orange-radio"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Orange
                </label>
              </div>
              <div className="mr-4 flex items-center">
                <input
                  id="green-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-green-600 focus:ring-2 focus:ring-green-500 "
                />
                <label
                  for="green-radio"
                  className="ml-2 text-sm font-medium uppercase text-gray-900 "
                >
                  done
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ActiveComponent;
