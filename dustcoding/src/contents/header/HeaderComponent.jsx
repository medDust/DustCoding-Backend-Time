import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import NavBarMobile from "./NavBarMobile";
import logo from "../../assets/images/dust.png";
const tabs = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/About", name: "About" },
  { id: 3, path: "/Service", name: "Service" },
  { id: 4, path: "/Article", name: "Article" },
  { id: 5, path: "/Contact", name: "Contact" },
  { id: 6, path: "/LogIn", name: "Login", icon: <FaUserAlt /> },
];

const HeaderComponent = () => {
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
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className=" py-5 px-5 hover:border-b-4 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight"
            >
              <Link
                className="flex flex-row items-center gap-2 text-center"
                to={tab.path}
              >
                <span className="hidden lg:block"> {tab.icon}</span>
                <span className="hidden lg:block"> {tab.name}</span>
              </Link>
            </li>
          ))}
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
