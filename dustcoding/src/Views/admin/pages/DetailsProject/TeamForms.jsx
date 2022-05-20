import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GetAllUsers } from "../../../../api/UserFunction.jsx";



const TeamForms = () => {
  const [User, setUser] = useState([]);

  useEffect(() => {
    GetAllUsers()
      .then((response) => {
        const User = response.data;
        setUser(User);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = () => {};
  return (
    <div className="m-5 flex">
      <div className="m-2 grid items-center justify-center">
        <form action="">
          <label
            htmlFor="countries"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select the team work
          </label>
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            {User.filter((user) => user.role !== 0).map((user) => (
              <option key={user.id}>{user.username}</option>
            ))}
          </select>
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="rounded-full bg-blue-500 p-2 text-xl text-white shadow-lg hover:bg-blue-900"
          >
            <IoMdAddCircleOutline />
          </button>
        </form>
      </div>
      <div>
        <ul className="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <li className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
            Profile
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamForms;
