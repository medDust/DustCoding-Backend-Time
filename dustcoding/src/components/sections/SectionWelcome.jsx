import React from "react";
import CustomBtn from "../elements/CustomBtn";
import logo from "../../assets/images/logowhite.png";
import { Link } from "react-router-dom";
const SectionWelcome = () => {
  return (
    <div className="mt-10 flex h-screen items-center justify-center">
      <div className=" mx-auto grid w-[500px] items-center gap-3 p-10 text-center lg:justify-center lg:text-center">
        <img className="mx-auto w-[196px]" src={logo} alt="logo" />
        <h2 className="text-xs font-extrabold text-white md:text-sm lg:text-4xl">
          DUSTcoding is Software Company
        </h2>
        <Link to="/LogIn">
          <CustomBtn children="Join Us" />
        </Link>
      </div>
    </div>
  );
};

export default SectionWelcome;
