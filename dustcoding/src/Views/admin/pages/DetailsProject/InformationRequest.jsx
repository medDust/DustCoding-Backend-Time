import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const InformationRequest = ({ Requests }) => {
  return Requests.map((request) => (
    <tr className="w-full text-gray-700" key={request._id}>
      <td className="px-4 py-3">
        <Link className="w-full" to={`/Admin/Requests/${request._id}`}>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{request.title}</p>
            </div>
          </div>
        </Link>
      </td>

      <td className="px-4 py-3">
        <Link className="w-full" to={`/Admin/Requests/${request._id}`}>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{request.ClientName}</p>
            </div>
          </div>
        </Link>
      </td>

      <td className="px-4 py-3">
        <Link className="w-full" to={`/Admin/Requests/${request._id}`}>
          <div className="flex items-center text-sm">
            {request.status === 0 && (
              <div className="rounded-2xl bg-gray-400 p-2 uppercase  text-white">
                <p className=" font-semibold">waiting</p>
              </div>
            )}
            {request.status === 1 && (
              <div className="rounded-2xl bg-teal-600 p-2 uppercase text-white">
                <p className="font-semibold">accepted</p>
              </div>
            )}
            {request.status === 2 && (
              <div className="rounded-2xl bg-red-600 p-2 uppercase text-white">
                <p className="font-semibold">refused</p>
              </div>
            )}
          </div>
        </Link>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-3 text-xl">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 p-5 text-center text-white shadow-sm hover:bg-green-800">
            <Link to={`/Admin/Requests/${request._id}`}>
              <FiCheckSquare />
            </Link>
          </div>
        </div>
      </td>
    </tr>
  ));
};

export default InformationRequest;
