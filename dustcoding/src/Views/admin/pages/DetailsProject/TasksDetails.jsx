import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const TasksDetails = () => {
  const { id } = useParams();
  useEffect(() => {}, [id]);

  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <div className=" ml-14 mt-5   mb-10 grid h-full md:ml-64 ">
        <div className="h-9">task details</div>
      </div>
    </div>
  );
};

export default TasksDetails;
