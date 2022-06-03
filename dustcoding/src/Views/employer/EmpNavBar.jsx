import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/dust.png";
import { BiMenu } from "react-icons/bi";
import { getLocalStorage } from "../../helpers/LocalStorage";
import { logout } from "../../helpers/auth";

const links = [
  { url: "/Employer", name: "Profile" },
  { url: "/Employer/project", name: "Project" },
];
const EmpNavBar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    logout(() => {
      navigate("/home");
    });
  };
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(getLocalStorage("user").data);
    console.log(getLocalStorage("user").data);
  }, []);

  return (
    <nav className=" rounded border-dustCool bg-white px-2 py-2.5 dark:bg-dustDark sm:px-4">
      <div className="container  mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo1} className="mr-3 h-6 sm:h-9" alt="DUSTcoding Logo" />
        </Link>
        <div className="flex items-center md:order-2">
          <div className=" px-4 text-right ">
            <span className="block text-sm text-dustCool dark:text-white">
              {user.username}
            </span>
            <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
              {user.email}
            </span>
          </div>
          <button
            type="button"
            className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <img className="h-8 w-8 rounded-full" src={logo1} alt="img" />
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
            <li>
              <button
                onClick={handleLogout}
                className="block rounded bg-white py-2 pr-4 pl-3 text-dustDark dark:text-dustLight md:bg-transparent md:p-0 md:text-dustM"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default EmpNavBar;
