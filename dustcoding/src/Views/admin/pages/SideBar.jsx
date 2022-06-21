import React, { useEffect, useState } from "react";

import {
  RiCustomerService2Fill,
  RiArticleLine,
  RiMailSendLine,
} from "react-icons/ri";
import { HiOutlineDesktopComputer, HiOutlineUser } from "react-icons/hi";
import { FaUsers, FaProjectDiagram, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getLocalStorage } from "../../../helpers/LocalStorage.jsx";
import logo from "../../../assets/images/logowhite.png";
import { logout } from "../../../helpers/auth.jsx";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
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
    name: "Clients",
  },
  {
    path: "/Admin/Projects",
    icon: <FaProjectDiagram />,
    name: "Projects",
  },
];

const SideBar = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const profil = getLocalStorage("user").data;
    setUser(profil);
  }, []);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    logout(() => {
      navigate("/home");
    });
  };
  return (
    <div className="sidebar fixed left-0 z-10 flex h-full w-64 flex-col border-none bg-dustDark text-white sm:w-64">
      <div className="flex flex-grow flex-col justify-evenly overflow-y-auto overflow-x-hidden">
        <ul className="flex flex-col space-y-1 py-4">
          <li className=" flex justify-evenly px-5 md:flex">
            <div>
              <img
                className="mr-2 h-7 w-7 overflow-hidden rounded-md md:h-10 md:w-10"
                src={`${user.image}`}
                alt="logo"
              />
            </div>
            <div>
              <p className="hidden sm:hidden md:block">{user.username}</p>
              <p className="hidden text-sm sm:hidden md:block">{user.email}</p>
            </div>
          </li>
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
              to="/Admin/Profile"
              className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 text-white hover:translate-x-7 hover:border-dustLight hover:bg-dustM hover:text-white hover:duration-150 hover:ease-linear focus:outline-none "
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
              to="/"
              className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 text-white hover:translate-x-7 hover:border-dustLight hover:bg-dustM hover:text-white hover:duration-150 hover:ease-linear focus:outline-none "
            >
              <span className="ml-4 inline-flex items-center justify-center">
                <AiFillHome />
              </span>
              <span className="ml-2 truncate text-sm tracking-wide">Home</span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="relative flex h-11 w-full flex-row items-center  border-l-4 border-transparent pr-6 text-white hover:translate-x-7 hover:border-dustLight hover:bg-dustM hover:text-white hover:duration-150 hover:ease-linear focus:outline-none "
            >
              <span className="ml-4 inline-flex items-center justify-center">
                <IoLogOutOutline />
              </span>
              <span className="ml-2 truncate text-sm tracking-wide">
                Logout
              </span>
            </button>
          </li>

          {/* <li>
            <p className="mx-auto my-auto hidden items-center justify-center px-5 py-3 text-center text-xs md:flex">
              <img className=" w-1/2" src={logo} alt="logo" />
            </p>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
