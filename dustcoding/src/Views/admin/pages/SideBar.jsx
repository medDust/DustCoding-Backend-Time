import React from "react";

import {
  RiCustomerService2Fill,
  RiArticleLine,
  RiMailSendLine,
} from "react-icons/ri";
import { HiOutlineDesktopComputer, HiOutlineUser } from "react-icons/hi";
import { FaUsers, FaProjectDiagram, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logowhite.png";
import { AiOutlineSetting } from "react-icons/ai";

let routes = [
  {
    path: "/Admin/Dashboard",
    icon: <HiOutlineDesktopComputer />,
    name: "Dashboard",
  },
  {
    path: "/Admin/Articles",
    icon: <RiArticleLine />,
    name: "Articles",
  },
  {
    path: "/Admin/Service",
    icon: <RiCustomerService2Fill />,
    name: "Service",
  },
  {
    path: "/Admin/Employers",
    icon: <FaUsers />,
    name: "Employers",
  },
  {
    path: "/Admin/Mailing",
    icon: <RiMailSendLine />,
    name: "Mails",
  },
  {
    path: "/Admin/Partners",
    icon: <FaHandshake />,
    name: "Partners",
  },
  {
    path: "/Admin/Projects",
    icon: <FaProjectDiagram />,
    name: "Projects",
  },
];

const SideBar = () => {
  return (
    <div className="sidebar fixed top-14 left-0 z-10 flex h-full w-64 flex-col border-none bg-dustDark text-white sm:w-64">
      <div className="flex flex-grow flex-col justify-between overflow-y-auto overflow-x-hidden">
        <ul className="flex flex-col space-y-1 py-4">
          <li className=" px-5 md:block">
            <div className="flex h-8 flex-row items-center">
              <div className="text-sm font-light uppercase tracking-wide text-white">
                <span>Main</span>
              </div>
            </div>
          </li>
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                to={route.path}
                className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 text-white hover:translate-x-7 hover:border-dustLight hover:bg-dustM hover:text-white hover:duration-300 hover:ease-linear focus:outline-none "
              >
                <span className="ml-4 inline-flex items-center justify-center">
                  {route.icon}
                </span>
                <span className="ml-2 truncate text-sm tracking-wide">
                  {route.name}
                </span>
              </Link>
            </li>
          ))}

          <li className="px-5 sm:hidden md:block">
            <div className="mt-5 flex h-8 flex-row items-center">
              <div className="text-sm font-light uppercase tracking-wide text-white">
                Settings
              </div>
            </div>
          </li>
          <li>
            <Link
              to="#"
              className="relative flex h-11 flex-row items-center  border-l-4 border-transparent pr-6 text-white hover:translate-x-7 hover:border-dustLight hover:bg-dustM hover:text-white hover:duration-150 hover:ease-linear focus:outline-none "
            >
              <span className="ml-4 inline-flex items-center justify-center">
                <HiOutlineUser />
              </span>
              <span className="ml-2 truncate text-sm tracking-wide">
                Profile
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 text-white hover:translate-x-7 hover:border-dustLight hover:bg-dustM hover:text-white hover:duration-150 hover:ease-linear  focus:outline-none "
            >
              <span className="ml-4 inline-flex items-center justify-center">
                <AiOutlineSetting />
              </span>
              <span className="ml-2 truncate text-sm tracking-wide">
                Settings
              </span>
            </Link>
          </li>
          <li>
            <p className="mx-auto my-auto hidden items-center justify-center px-5 py-3 text-center text-xs md:flex">
              <img className=" w-1/2" src={logo} alt="logo" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
