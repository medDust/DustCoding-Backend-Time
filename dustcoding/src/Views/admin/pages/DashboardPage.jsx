import React, { useEffect, useState } from "react";
import { getService } from "../../../api/AdminControllerFunction";
import { GetUsers } from "../../../api/AuthFunction";
import { GetProjects } from "../../../api/ContentsFunctions";
import CardComponent from "./DashBoardComponents/CardComponent";
import CardsComponent from "./DashBoardComponents/CardsComponent";

import TableauEmployerComponent from "./DashBoardComponents/TableauEmployerComponent";
const DashboardPage = () => {
  const [user, setUser] = useState([]);
  const [employer, setEmployers] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectPerPage, setProjectPerPage] = useState(5);
  const [client, setClient] = useState([]);
  const [project, setProject] = useState([]);
  const [service, setService] = useState([]);
  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProject = pages.slice(indexOfFirstProject, indexOfLastProject);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    GetUsers()
      .then((res) => {
        setUser(res.data);
        setClient(user.filter((user) => user.role === 0));
      })
      .catch((err) => {
        console.log({ err: err.message });
      });
    setEmployers(user.filter((user) => user.role !== 0));
    getService()
      .then((res) => {
        const service = res.data;
        setService(service);
      })
      .catch((err) => console.log(err));
    GetProjects()
      .then((response) => {
        const Projects = response.data;
        setProject(Projects);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="flex min-h-screen w-3/4 flex-auto flex-shrink-0 flex-col bg-white text-black antialiased ">
      <div className=" ml-14 mt-5 mb-10 h-full gap-6 tracking-wide md:ml-64 ">
        <CardsComponent client={client} service={service} teams={employer} project={project} />
        {/* <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
          <CardComponent />
        </div> */}
        <TableauEmployerComponent
          employer={employer}
          EmployerPerPage={projectPerPage}
          totalEmployer={employer.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
