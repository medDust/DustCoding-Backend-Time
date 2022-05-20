import React from "react";
import ActiveComponent from "../DashBoardComponents/ActiveComponent.jsx";

const EditTasks = () => {
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
      <div className=" ml-14 mt-5   mb-10 h-full md:ml-64">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default EditTasks;
