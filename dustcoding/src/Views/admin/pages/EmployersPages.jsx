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
                    <th className="border-gray-200 bg-gray-100 text-gray-600 border-b-2 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider">
                      User
                    </th>

                    <th className="border-gray-200 bg-gray-100 text-gray-600 border-b-2 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider">
                      mail
                    </th>
                    <th className="border-gray-200 bg-gray-100 text-gray-600 border-b-2 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider">
                      Password
                    </th>

                    <th className="border-gray-200 bg-gray-100 text-gray-600 border-b-2 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider">
                      Role
                    </th>
                    <th className="border-gray-200 bg-gray-100 text-gray-600 border-b-2 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider">
                      Created at
                    </th>
                    <th className="border-gray-200 bg-gray-100 text-gray-600 border-b-2 px-5 py-3 text-left text-xl font-semibold uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-md border-gray-200 border-b bg-white px-5 py-5">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap text-dustCool">
                            Vera Carpenter
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-md border-gray-200 border-b bg-white px-5 py-5">
                      <p className="whitespace-no-wrap text text-dustCool">
                        vera@gmail.com
                      </p>
                    </td>
                    <td className="text-md border-gray-200 border-b bg-white px-5 py-5">
                      <p className="whitespace-no-wrap text text-dustCool">
                        vera123
                      </p>
                    </td>

                    <td className="text-md border-gray-200 border-b bg-white px-5 py-5">
                      <p className="whitespace-no-wrap text-dustCool">Admin</p>
                    </td>
                    <td className="text-md border-gray-200 border-b bg-white px-5 py-5">
                      <p className="whitespace-no-wrap text-dustCool">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="text-md border-gray-200 border-b bg-white px-5 py-5">
                      <span className="text-green-900 relative inline-block px-3 py-1 font-semibold leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-green opacity-50"
                        ></span>
                        <span className="relative">Active</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5          ">
                <span className="xs:text-md text-xl text-dustCool">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="xs:mt-0 mt-2 inline-flex">
                  <button className="text-md bg-gray-300 text-gray-800 rounded-l py-2 px-4 font-semibold hover:bg-dustM">
                    Prev
                  </button>
                  <button className="text-md bg-gray-300 text-gray-800 rounded-r py-2 px-4 font-semibold hover:bg-dustM">
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
