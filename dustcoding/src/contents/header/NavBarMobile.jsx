import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { isAuthenticated, logout } from "../../helpers/auth";
const tabs = [
  { id: 1, path: "/Home", name: "Home" },
  { id: 2, path: "/About", name: "About" },
  { id: 3, path: "/Service", name: "Service" },
  { id: 4, path: "/Article", name: "Article" },
  { id: 5, path: "/Contact", name: "Contact" },
];
const NavBarMobile = ({ active, showMenu }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(() => {
      navigate("/home");
    });
  };
  return (
    <ul
      className={
        active
          ? "fixed inset-0 left-1/4 top-0 flex-col items-center justify-center gap-14 text-center font-medium text-white backdrop-blur-2xl lg:hidden"
          : "hidden"
      }
    >
      <li className="items-center justify-center p-3">
        <MdClose
          className="cursor-pointer text-2xl font-medium"
          onClick={showMenu}
        />
      </li>
      {!isAuthenticated() && (
        <>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              <Link to={tab.path}>{tab.name}</Link>
            </li>
          ))}
          <li className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight">
            <Link to="/LogIn">SignIn</Link>
          </li>
        </>
      )}
      {isAuthenticated() && isAuthenticated().data.role === 2 && (
        <>
          <li className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight">
            <Link to="/Admin/Dashboard">
              <img
                className="h-8 w-8 rounded-full"
                src={isAuthenticated().data.image}
                alt="img"
              />
              <div className="py-3 px-4">
                <span className="block text-sm ">
                  {isAuthenticated().data.fullName}
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to={"/Admin/Dashboard"}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/Admin/setting"
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Settings
            </Link>
          </li>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              <Link to={tab.path}>{tab.name}</Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Sign out
            </button>
          </li>
        </>
      )}
      {isAuthenticated() && isAuthenticated().data.role === 1 && (
        <>
          <li className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight">
            <Link to="/Employer/Profile/">
              <img
                className="h-8 w-8 rounded-full"
                src={isAuthenticated().data.image}
                alt="img"
              />
              <div className="py-3 px-4">
                <span className="block text-sm ">
                  {isAuthenticated().data.fullName}
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to={"/Employer/Projects"}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Employer/Profile/"
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/Employer/update"
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Settings
            </Link>
          </li>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              <Link to={tab.path}>{tab.name}</Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Sign out
            </button>
          </li>
        </>
      )}
      {isAuthenticated() && isAuthenticated().data.role === 0 && (
        <>
          <li className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight">
            <Link to="/Client/Profile/">
              <img
                className="h-8 w-8 rounded-full"
                src={isAuthenticated().data.image}
                alt="img"
              />
              <div className="py-3 px-4">
                <span className="block text-sm ">
                  {isAuthenticated().data.fullName}
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to={"/Client/Projects"}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Client/Profile/"
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/Client/setting"
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Settings
            </Link>
          </li>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              <Link to={tab.path}>{tab.name}</Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
            >
              Sign out
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavBarMobile;
