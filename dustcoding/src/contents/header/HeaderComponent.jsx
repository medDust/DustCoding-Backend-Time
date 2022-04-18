import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdApartment } from "react-icons/md";
import { FaBookReader, FaUserAlt } from "react-icons/fa";
import NavBarMobile from "./NavBarMobile";
import logo from "../../assets/images/dust.png";
import { AiFillHome } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiGooglesearchconsole } from "react-icons/si";
const tabs = [
  { id: 1, path: "/", name: "Home", icon: <AiFillHome /> },
  { id: 2, path: "/About", name: "About", icon: <MdApartment /> },
  { id: 3, path: "/Service", name: "Service", icon: <SiGooglesearchconsole /> },
  { id: 4, path: "/Article", name: "Article", icon: <FaBookReader /> },
  {
    id: 5,
    path: "/Contact",
    name: "Contact",
    icon: <RiCustomerService2Fill />,
  },
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
              className=" py-5 px-5 hover:border-dustLight hover:bg-dustDark hover:text-dustLight active:border-dustLight"
            >
              <Link
                className="flex flex-row items-center gap-2 text-center"
                to={tab.path}
              >
                <span className="hidden w-6 text-xl lg:block"> {tab.icon}</span>
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
