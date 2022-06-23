import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu, MdApartment } from "react-icons/md";
import { FaBookReader, FaUserAlt } from "react-icons/fa";
import NavBarMobile from "./NavBarMobile";
import logo from "../../assets/images/dust.png";
import { AiFillHome } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiGooglesearchconsole } from "react-icons/si";
import { isAuthenticated, logout } from "../../helpers/auth";
import { FaRegUserCircle } from "react-icons/fa";
const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(() => {
      navigate("/");
    });
  };
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed z-10000 flex h-16 w-full items-center justify-between bg-white px-3 lg:flex ">
      <div className="block px-3">
        <img className="w-52" src={logo} alt="logo" />
      </div>
      <nav className="hidden lg:flex">
        <ul className="gap- flex list-none text-base font-medium uppercase">
          {!isAuthenticated() && (
            <>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <AiFillHome />
                  </span>
                  <span className="hidden lg:block">Home</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/About"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <MdApartment />
                  </span>
                  <span className="hidden lg:block">About</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Service"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <SiGooglesearchconsole />
                  </span>
                  <span className="hidden lg:block">Service</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Article"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <FaBookReader />
                  </span>
                  <span className="hidden lg:block">Article</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Contact"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <RiCustomerService2Fill />
                  </span>
                  <span className="hidden lg:block">Contact</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="LogIn"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <FaUserAlt />
                  </span>
                  <span className="hidden lg:block">Login</span>
                </Link>
              </li>
            </>
          )}
          {isAuthenticated() && isAuthenticated().data.role === 2 && (
            <>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <AiFillHome />
                  </span>
                  <span className="hidden lg:block">Home</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/About"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <MdApartment />
                  </span>
                  <span className="hidden lg:block">About</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Service"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <SiGooglesearchconsole />
                  </span>
                  <span className="hidden lg:block">Service</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Article"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <FaBookReader />
                  </span>
                  <span className="hidden lg:block">Article</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Contact"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <RiCustomerService2Fill />
                  </span>
                  <span className="hidden lg:block">Contact</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <button
                  type="button"
                  className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={isAuthenticated().data.image}
                    alt="img"
                  />
                </button>

                <div
                  className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                  id="dropdown"
                >
                  <div className="py-3 px-4">
                    <span className="block text-sm text-dustCool dark:text-white">
                      {isAuthenticated().data.fullName}
                    </span>
                    <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                      {isAuthenticated().data.email}
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                      <Link
                        to={"/Admin/Dashboard"}
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Admin/setting"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>

                    <li>
                      <button
                        //        onClick={handleLogout}
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
                {/* <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight"></li> */}
              </li>
            </>
          )}
          {isAuthenticated() && isAuthenticated().data.role === 1 && (
            <>
              <li className="py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <AiFillHome />
                  </span>
                  <span className="hidden lg:block">Home</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/About"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <MdApartment />
                  </span>
                  <span className="hidden lg:block">About</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Service"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <SiGooglesearchconsole />
                  </span>
                  <span className="hidden lg:block">Service</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Article"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <FaBookReader />
                  </span>
                  <span className="hidden lg:block">Article</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Contact"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <RiCustomerService2Fill />
                  </span>
                  <span className="hidden lg:block">Contact</span>
                </Link>
              </li>
              <li
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
                className=" flex py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className=" h-8 w-8 rounded-full "
                  src={`${isAuthenticated().data.image}`}
                  alt="img"
                />
                <span className="hidden lg:block">
                  {isAuthenticated().data.fullName}
                </span>

                <div
                  className="z-50 hidden list-none divide-y divide-gray-200 rounded bg-white text-base lowercase shadow "
                  id="dropdown"
                >
                  <div className="truncate py-3 px-4 text-sm font-medium lowercase text-gray-500">
                    <span className=" ">{isAuthenticated().data.userName}</span>
                    <span
                      to="/LogIn"
                      className="block truncate text-sm font-medium text-gray-500 "
                    >
                      {isAuthenticated().data.email}
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                      <Link
                        to="/Employer/Projects"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Employer/Profile/"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Employer/update"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={handleLogout}
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          )}
          {isAuthenticated() && isAuthenticated().data.role === 0 && (
            <>
              <li className="py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <AiFillHome />
                  </span>
                  <span className="hidden lg:block">Home</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/About"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <MdApartment />
                  </span>
                  <span className="hidden lg:block">About</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Service"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <SiGooglesearchconsole />
                  </span>
                  <span className="hidden lg:block">Service</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Article"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <FaBookReader />
                  </span>
                  <span className="hidden lg:block">Article</span>
                </Link>
              </li>
              <li className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight">
                <Link
                  className="flex flex-row items-center gap-2 text-center"
                  to="/Contact"
                >
                  <span className="hidden w-6 text-xl lg:block">
                    <RiCustomerService2Fill />
                  </span>
                  <span className="hidden lg:block">Contact</span>
                </Link>
              </li>
              <li
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
                className=" flex items-center space-x-2 py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight"
              >
                <span className="sr-only">Open user menu</span>
                <span className="top-5 flex justify-center text-center align-middle text-xl">
                  <FaRegUserCircle />
                </span>
                <span className="hidden lg:block">
                  {isAuthenticated().data.fullName}
                </span>

                <div
                  className="z-50 hidden list-none divide-y divide-gray-200 rounded bg-white text-base lowercase shadow "
                  id="dropdown"
                >
                  <div className="truncate py-3 px-4 text-sm font-medium lowercase text-gray-500">
                    <span className=" ">{isAuthenticated().data.userName}</span>
                    <span
                      to="/LogIn"
                      className="block truncate text-sm font-medium text-gray-500 "
                    >
                      {isAuthenticated().data.email}
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                      <Link
                        to="/Client/Projects"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Client/Profile/"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Client/setting"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={handleLogout}
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          )}
        </ul>
      </nav>
      <NavBarMobile showMenu={showMenu} active={active} />
      <div className="scale-150 lg:hidden">
        <MdMenu
          onClick={showMenu}
          className={active ? "hidden" : "cursor-pointer text-base font-medium"}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
