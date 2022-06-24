import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  getRequestById,
  UpdateRequestProject,
} from "../../../../api/ProjectsFunction";

const RequestDetails = () => {
  const navigate = useNavigate();
  const { RequestId } = useParams();
  const [titles, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [ClientNames, setClientNames] = useState("");
  const [status, setStatus] = useState("");
  const [position, setPosition] = useState();
  useEffect(() => {
    getRequestById(RequestId)
      .then((res) => {
        setTitle(res.data.title);
        setDescriptions(res.data.description);
        setClientNames(res.data.ClientName);
        setPosition(res.data.status);
        console.log({ titles, descriptions, ClientNames });
      })
      .catch((err) => console.log({ err: err.message }));
  }, [RequestId]);
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = { status };
    UpdateRequestProject({ RequestId: RequestId }, data)
      .then((res) => {
        console.log("updated");
        navigate(`/Admin/Requests/`);
      })
      .catch((err) => console.log({ err: err.message }));
  };
  return (
    <div
      className="grid w-full items-center justify-center gap-5 p-5 text-center text-black "
      key={RequestId}
    >
      <h1 className="text-center text-2xl font-bold">{titles}</h1>
      {position === 0 && (
        <span className="rounded-xl bg-gray-600 p-2 text-lg text-white">
          Waiting
        </span>
      )}
      {position === 1 && (
        <span className="rounded-xl bg-green-600 p-2 text-lg uppercase text-white">
          Accepted
        </span>
      )}
      {position === 2 && (
        <span className="rounded-xl bg-red-600 p-2 text-lg uppercase text-white">
          refused !!
        </span>
      )}
      <h1 className="text-center text-2xl font-bold">{ClientNames}</h1>
      <p> {descriptions}</p>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="group relative z-0 mb-6 flex w-full items-center justify-evenly">
          <div className="flex flex-wrap">
            <div className="mr-4 flex items-center">
              <input
                type="radio"
                value="1"
                onChange={(e) => setStatus(e.target.value)}
                name="position"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-teal-600 focus:ring-2 focus:ring-teal-500 "
              />
              <label
                htmlFor="purple-radio"
                className="ml-2 text-sm font-medium uppercase text-gray-900 "
              >
                Accepted
              </label>
            </div>
            <div className="mr-4 flex items-center">
              <input
                type="radio"
                value="2"
                name="position"
                onChange={(e) => setStatus(e.target.value)}
                className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500 "
              />
              <label
                htmlFor="teal-radio"
                className="ml-2 text-sm font-medium uppercase text-gray-900 "
              >
                refused
              </label>
            </div>
          </div>
        </div>
      </div>
      {status}
      <button
        onClick={onSubmit}
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        reply
      </button>
    </div>
  );
};

export default RequestDetails;
