import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/dust.png";
import { BiMenu } from "react-icons/bi";
import { logout } from "../../../../helpers/auth";
const links = [
  { url: "/Client/profile", name: "Profile" },
  { url: "/Client/messaging", name: "Message" },
  { url: "/Client/meeting", name: "Meeting" },
];
const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    logout(() => {
      navigate("/home");
    });
  };

  return (
    <nav className=" rounded border-dustCool bg-white px-2 py-2.5 dark:bg-dustDark sm:px-4">
      <div className="container  mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="DUSTcoding Logo" />
        </Link>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={logo} alt="img" />
          </button>

          <div
            className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
            id="dropdown"
          >
            <div className="py-3 px-4">
              <span className="block text-sm text-dustCool dark:text-white">
                Bonnie Green
              </span>
              <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-1" aria-labelledby="dropdown">
              <li>
                <Link
                  to={"#"}
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
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
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="ml-1 inline-flex items-center rounded-lg p-2 text-xl text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <BiMenu />
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-2"
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {links.map((link) => (
              <li>
                <Link
                  to={link.url}
                  className="block rounded bg-white py-2 pr-4 pl-3 text-dustDark dark:text-dustLight md:bg-transparent md:p-0 md:text-dustM"
                  aria-current="page"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
