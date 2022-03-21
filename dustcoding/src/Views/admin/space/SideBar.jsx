import React from "react";

import {
  RiCustomerService2Fill,
  RiArticleLine,
  RiMailSendLine,
} from "react-icons/ri";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
import {
  FaUsers,
  FaPowerOff,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo_white.png";

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
  {
    path: "/Admin",
    icon: <FaPowerOff />,
    name: "Log Out",
  },
];

const SideBar = () => {
  return (
    <div className="bg-dustM shadow-dustM  w-3/12 py-3 pl-3 text-white shadow-lg">
      <div className="mb-5 flex items-center space-x-4 p-2">
        <img
          className="h-12 rounded-full"
          src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
          alt="James Bhatta"
        />
        <div>
          <h4 className="font-poppins text-lg font-semibold capitalize tracking-wide text-gray-700">
            James Bhatta
          </h4>
          <span className="flex items-center space-x-1 text-sm tracking-wide">
            <BsShieldCheck />
            <span className="text-gray-600">Verified</span>
          </span>
        </div>
      </div>
      <ul className="space-y-2 text-2xl">
        {routes.map((routes) => (
          <li>
            <Link
              to={routes.path}
              className="focus:shadow-outline hover:text-dustDark flex items-center space-x-3 rounded-l-full p-2 px-7 font-medium text-gray-700 hover:bg-white"
            >
              <span className="text-gray-600">{routes.icon}</span>
              <span>{routes.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <img className="mx-auto my-auto w-1/2 " src={logo} alt="logo" />
    </div>
  );
};

export default SideBar;
