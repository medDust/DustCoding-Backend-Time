import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import profil from "../../../../assets/images/mohamed_dida.png";
import { logout } from "../../../../helpers/auth";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    logout(() => {
      navigate("/home");
    });
  };
  return (
    <div className="fixed z-10 flex h-14 w-full items-center justify-between text-white">
      <div className="flex h-14 w-full items-center justify-start border-none bg-dustDark pl-3  md:w-64 md:justify-center">
        <img
          className="mr-2 h-7 w-7 overflow-hidden rounded-md md:h-10 md:w-10"
          src={profil}
          alt="logo"
          p
        />
        <div>
          <p className="hidden sm:hidden md:block">mohamed Dida</p>
          <p className="hidden text-sm sm:hidden md:block">admin</p>
        </div>
      </div>
      <div className="header-right flex h-14 items-center justify-end bg-dustDark">
        <ul className="flex items-center">
          <li>
            <button
              onClick={handleLogout}
              className="mr-4 flex items-center hover:text-blue-100"
            >
              <span className="mr-1 inline-flex text-2xl">
                <IoLogOutOutline />
              </span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
