import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { TasksListTodo } from "../../../api/ProjectsFunction";
import { isAuthenticated } from "../../../helpers/auth";
import InformationProjectEmployer from "./projects/InformationProjectEmployer";

const TableProjectEmployer = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    TasksListTodo({ userId: isAuthenticated().data.id })
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="col-span-12">
        <div className="overflow-auto lg:overflow-visible ">
          <table className="table border-separate space-y-6 rounded-md text-sm text-gray-400">
            <thead className="bg-gray-800 text-gray-500">
              <tr>
                <th className="rounded-md p-3">Brand</th>
                <th className="rounded-md p-3 text-left">Category</th>
                <th className="rounded-md p-3 text-left">Status</th>
                <th className="rounded-md p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <InformationProjectEmployer TasksList={projects} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableProjectEmployer;
