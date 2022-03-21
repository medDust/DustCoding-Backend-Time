import React from "react";
import { Link } from "react-router-dom";
const EmployersPage = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <Link to="/Admin/Employers/ListEmployers">List Employer</Link>
          </th>
          <th>
            <Link to="/Admin/Employers/AddNewEmployers">Create Employer</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        <th>
          <div className="-mx-4  overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
            <div className="mx-9 inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider text-gray-600">
                      User
                    </th>

                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider text-gray-600">
                      mail
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider text-gray-600">
                      Password
                    </th>

                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider text-gray-600">
                      Role
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider text-gray-600">
                      Created at
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider text-gray-600">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-md border-b border-gray-200 bg-white px-5 py-5">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap text-gray-900">
                            Vera Carpenter
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-md border-b border-gray-200 bg-white px-5 py-5">
                      <p className="whitespace-no-wrap text text-gray-900">
                        vera@gmail.com
                      </p>
                    </td>
                    <td className="text-md border-b border-gray-200 bg-white px-5 py-5">
                      <p className="whitespace-no-wrap text text-gray-900">
                        vera123
                      </p>
                    </td>

                    <td className="text-md border-b border-gray-200 bg-white px-5 py-5">
                      <p className="whitespace-no-wrap text-gray-900">Admin</p>
                    </td>
                    <td className="text-md border-b border-gray-200 bg-white px-5 py-5">
                      <p className="whitespace-no-wrap text-gray-900">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="text-md border-b border-gray-200 bg-white px-5 py-5">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden
                          className="bg-green absolute inset-0 rounded-full opacity-50"
                        ></span>
                        <span className="relative">Active</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5          ">
                <span className="xs:text-md text-xl text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="xs:mt-0 mt-2 inline-flex">
                  <button className="hover:bg-dustM text-md rounded-l bg-gray-300 py-2 px-4 font-semibold text-gray-800">
                    Prev
                  </button>
                  <button className="hover:bg-dustM text-md rounded-r bg-gray-300 py-2 px-4 font-semibold text-gray-800">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </th>
      </tbody>
    </table>
  );
};

export default EmployersPage;
