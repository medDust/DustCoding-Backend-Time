import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logowhite.png";

const links = [
  { url: "/Client/profile", name: "Profile" },
  { url: "/Client/messaging", name: "Message" },
  { url: "/Client/meeting", name: "Meeting" },
];
const NavBar = () => {
  return (
    <nav className="flex h-16 w-full items-center justify-between bg-dustLight px-10 py-4">
      <img className="h-10" src={logo} alt="logo" />
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          {links.map((link) => (
            <li className="text-gray-700 font-semibold">
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
