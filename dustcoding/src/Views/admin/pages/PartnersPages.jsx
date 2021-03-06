import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { DeleteUser, GetUsers } from "../../../api/AuthFunction";

const ClientsPage = () => {
  const [client, setClient] = useState([]);
  useEffect(() => {
    GetUsers()
      .then((response) => {
        const user = response.data;
        setClient(user);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    DeleteUser(id).then((res) => {
      window.location.reload(false);
    });
  };

  const clientsList = client
    .filter((client) => client.role === 0)
    .map((client) => (
      <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
        <td className="px-4 py-3">
          <div className="flex items-center text-sm">
            <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
              <img
                className="h-full w-full rounded-full object-cover"
                src={client.image}
                alt=""
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <p className="font-semibold">{client.fullName}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {client.username} - {client.email}
              </p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-sm">$855.85</td>
        <td className="px-4 py-3 text-xs">
          <span className="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100">
            Approved
          </span>
        </td>
        <td className="px-4 py-3 text-sm">
          {" "}
          <button
            onClick={() => {
              handleDelete(client._id);
            }}
            className="flex w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800   md:w-auto"
          >
            Delete Client
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <div className=" ml-14 mt-5   mb-10 grid h-full md:ml-64 ">
        <div className="my-5 flex items-center justify-between p-2 ">
          <span className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            Client List
          </span>
        </div>

        <div className="shadow-xs w-full overflow-hidden rounded-lg px-5">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Amount project</th>
                  <th className="px-4 py-3">projects</th>
                  <th className="px-4 py-3">control</th>
                </tr>
              </thead>
              <tbody className="divide-y bg-white dark:divide-gray-700 dark:bg-gray-800">
                {clientsList}
              </tbody>
            </table>
          </div>
          <div className="mx-auto grid place-content-center justify-center border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:grid-cols-9">
            {/* <!-- Pagination --> */}
            <span className="col-span-4 mx-auto mt-2 flex items-center justify-center">
              <nav aria-label="Table navigation ">
                <ul className="inline-flex items-center text-sm">
                  <li>
                    <button
                      className="focus:shadow-outline-purple rounded-md  rounded-l-lg px-3 py-1 transition-colors duration-150  hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none"
                      aria-label="Previous"
                    >
                      <FiChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline-purple  rounded-md px-3 py-1 transition-colors duration-150  hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline-purple rounded-md px-3 py-1  transition-colors duration-150 hover:border-purple-600 hover:bg-purple-600 hover:text-white  focus:outline-none">
                      2
                    </button>
                  </li>

                  <li>
                    <button
                      className="focus:shadow-outline-purple  rounded-md rounded-r-lg px-3 py-1 transition-colors  duration-150 hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none"
                      aria-label="Next"
                    >
                      <FiChevronRight />
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
