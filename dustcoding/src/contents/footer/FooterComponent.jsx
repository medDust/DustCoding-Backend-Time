import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import dust from "../../assets/images/dust.png";

import BtnContact from "../../components/elements/BtnContact.jsx";

const FooterComponent = () => {
  return (
    <footer className="mx-auto flex h-1/4 flex-wrap items-center justify-between bg-white">
      <div className="min-h-1/6 w-full uppercase text-dustDark">
        <div className="mx-auto flex flex-col flex-wrap items-center justify-between space-y-4 p-10">
          <div>
            <img className="w-[240px]" src={dust} alt="logo" />
          </div>
          <div>
            <Link to="/Contact" className="hover:text-dustLight">
              <BtnContact children="Contact Us" />
            </Link>
          </div>
          <div>
            <ul className="mx-auto flex text-center text-base text-dustDark md:text-xl">
              <li className="cursor-pointer p-2 hover:underline">
                <Link to="/service" className="hover:text-dustLight">
                  Terms & Conditions
                </Link>
              </li>
              <li className="cursor-pointer p-2 hover:underline">
                <Link to="/article" className="hover:text-dustLight">
                  Privacy
                </Link>
              </li>
              <li className="cursor-pointer p-2 hover:underline">
                <Link to="/service" className="hover:text-dustLight">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mx-auto flex text-center text-xl text-dustDark">
              <li className="cursor-pointer p-2">
                <a
                  href="https://www.facebook.com/DTcoding"
                  className="hover:text-dustLight"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="cursor-pointer p-2">
                <a
                  href="https://www.linkedin.com/company/dtcoding/?viewAsMember=true"
                  className="hover:text-dustLight"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="cursor-pointer p-2">
                <a
                  href="https://twitter.com/DTcoding"
                  className="hover:text-dustLight"
                >
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto flex text-center text-xs text-dustDark">
            Copyright DUSTcoding © 2021
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
