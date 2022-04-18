import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
const tabs = [
  { id: 1, path: "/Home", name: "Home" },
  { id: 2, path: "/About", name: "About" },
  { id: 3, path: "/Service", name: "Service" },
  { id: 4, path: "/Article", name: "Article" },
  { id: 5, path: "/Contact", name: "Contact" },
   { id: 5, path: "/LogIn", name: "SignIn" },
];
const NavBarMobile = ({ active, showMenu }) => {
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
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className="p-3 hover:border-b-4 hover:border-dustLight active:border-b-4 active:border-dustLight"
        >
          <Link to={tab.path}>{tab.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBarMobile;
