import React from "react";
import ActiveComponent from "./DashBoardComponents/ActiveComponent";
import CardComponent from "./DashBoardComponents/CardComponent";
import CardsComponent from "./DashBoardComponents/CardsComponent";
import HeaderComponent from "./DashBoardComponents/HeaderComponent";
import TableauEmployerComponent from "./DashBoardComponents/TableauEmployerComponent";
import TasksComponents from "./DashBoardComponents/TasksComponents";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 h-full md:ml-64">
        <CardsComponent />
        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
          <CardComponent />
          <ActiveComponent />
        </div>
        <TasksComponents />
        <TableauEmployerComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
