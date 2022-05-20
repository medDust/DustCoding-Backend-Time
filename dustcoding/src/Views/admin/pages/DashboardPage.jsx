import React from "react";
import ActiveComponent from "./DashBoardComponents/ActiveComponent";
import CardComponent from "./DashBoardComponents/CardComponent";
import CardsComponent from "./DashBoardComponents/CardsComponent";

import TableauEmployerComponent from "./DashBoardComponents/TableauEmployerComponent";
// import TasksComponents from "./DashBoardComponents/TasksComponents";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen w-3/4 flex-auto flex-shrink-0 flex-col bg-white text-black antialiased ">
      <div className=" ml-14 mt-5 mb-10 h-full gap-6 tracking-wide md:ml-64 ">
        <CardsComponent />
        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
          <CardComponent />
          <ActiveComponent />
        </div>
        {/* <TasksComponents /> */}
        <TableauEmployerComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
