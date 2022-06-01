import React from "react";
import Pagination from "../Project/Pagination";

const TableauEmployerComponent = ({
  employer,
  EmployerPerPage,
  totalEmployer,
  paginate,
}) => {
  return (
    <div className="mx-4 mt-4">
      <div className="shadow-xs w-full overflow-hidden rounded-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                <th className="px-4 py-3">Employer</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y bg-white dark:divide-gray-700 dark:bg-gray-800">
              {employer.map((employer) => (
                <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                        <img
                          className="h-full w-full rounded-full object-cover"
                          src={employer.image}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">{employer.username}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {employer.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{employer.fullName}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100">
                      {employer.department}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{employer.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:grid-cols-9">
          <span className="col-span-4 mt-2 flex sm:mt-auto sm:justify-end">
            <Pagination projectPerPage={EmployerPerPage} totalProjects={totalEmployer} paginate={paginate} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TableauEmployerComponent;
