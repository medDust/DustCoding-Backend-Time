import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  DelateService,
  getService,
} from "../../../api/AdminControllerFunction";
import HeaderComponent from "./DashBoardComponents/HeaderComponent";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getService()
      .then((res) => {
        const service = res.data;
        setServices(service);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    DelateService(id)
      .then((res) => {
        window.location.reload(false);
        res.send({ msg: "delete success" });
      })
      .catch((err) => {
        return err.message;
      });
  };

  const ServicesList = services.map((service, index) => (
    <tr className="hover:bg-grey-lighter" key={service._id}>
      <td className="border-grey-light border-b py-4 px-6">{index}</td>
      <td className="border-grey-light border-b py-4 px-6">{service.title}</td>
      <td className="border-grey-light items-center border-b py-4 px-6">
        <div className="flex justify-evenly">
          <Link
            to=""
            className="rounded bg-blue-600 py-1 px-3 text-xs font-bold text-white hover:bg-blue-900"
          >
            view
          </Link>
          <Link
            to=""
            className="rounded bg-dustLight py-1 px-3 text-xs font-bold text-white hover:bg-dustM"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              handleDelete(service._id);
            }}
            className="rounded bg-red-600 py-1 px-3 text-xs font-bold text-white hover:bg-red-900"
          >
            delete
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10  h-full  md:ml-64">
        <div className="m-2 flex justify-evenly">
          <span className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            Services List
          </span>
          <Link
            to="/Admin/Service/create"
            className="block w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:w-auto"
          >
            Create New Services
          </Link>
        </div>
        <div className="my-6 rounded bg-white shadow-md">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="bg-grey-lightest text-grey-dark border-grey-light border-b py-4 px-6 text-sm font-bold uppercase">
                  N°
                </th>
                <th className="bg-grey-lightest text-grey-dark border-grey-light border-b py-4 px-6 text-sm font-bold uppercase">
                  title
                </th>
                <th className="bg-grey-lightest text-grey-dark border-grey-light border-b py-4 px-6 text-sm font-bold uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{ServicesList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
