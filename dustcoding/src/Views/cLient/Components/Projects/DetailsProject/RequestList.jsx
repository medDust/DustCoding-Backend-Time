import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRequestByCLientId } from "../../../../../api/ProjectsFunction";
import { isAuthenticated } from "../../../../../helpers/auth";

const RequestList = () => {
  const id = isAuthenticated().data.id;
  const [request, setRequest] = useState([]);
  useEffect(() => {
    getRequestByCLientId(id)
      .then((res) => setRequest(res.data))
      .catch((err) => console.log({ err: err.message }));
  }, [id]);

  return (
    <div className="top-16 mx-auto flex h-screen w-full flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Request List</h1>
      <ul className="w-3/4 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        {request.map((requests) => (
          <Link to={`/Client/Requests/${requests._id}`}>
            <li
              key={requests._id}
              className="flex w-full justify-evenly rounded-t-lg border-b border-gray-200 px-4 py-2 text-center dark:border-gray-600"
            >
              <div className="w-1/3">{requests.title}</div>
              <div className="">
                <div>
                  {requests.status === 0 && (
                    <div className="rounded-2xl bg-gray-400 p-2 uppercase  text-white">
                      <p className=" font-semibold">waiting</p>
                    </div>
                  )}
                  {requests.status === 1 && (
                    <div className="rounded-2xl bg-teal-600 p-2 uppercase text-white">
                      <p className="font-semibold">accepted</p>
                    </div>
                  )}
                  {requests.status === 2 && (
                    <div className="rounded-2xl bg-red-600 p-2 uppercase text-white">
                      <p className="font-semibold">refused</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-1/3">{requests.title}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
