import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { getLocalStorage } from "../../../../helpers/LocalStorage";

const Profile = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(getLocalStorage("user").data);
    console.log(getLocalStorage("user").data);
  }, []);
  return (
    <div className="ml-14 flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased ">
      <div className=" relative h-64 w-full overflow-hidden bg-blue-600">
        <img
          src="{user.image}"
          alt=""
          className="bg absolute z-0 h-full w-full object-cover object-center"
        />

        <div className="relative grid h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-semibold">{user.username}</h1>
          <h4 className="text-3xl font-semibold">{user.fullName}</h4>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-white ">
        <div className="col-span-12 flex w-full justify-center space-x-4 border-b border-solid px-3 py-6 md:col-span-2 md:flex-col md:justify-start md:space-x-0 md:space-y-4 "></div>

        <div className="col-span-12 h-full pb-12 md:col-span-10 md:border-l md:border-solid md:border-black md:border-opacity-25">
          <div className="px-4 pt-4">
            <div className="flex flex-col space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">Basic Information</h3>
              </div>

              <div className="form-item flex items-center gap-2">
                <p className="text-2xl font-semibold">Full Name :</p>
                <span className="text-xl ">{user.fullName}</span>
              </div>

              <div className="form-item flex items-center gap-2">
                <p className="text-2xl font-semibold">User Name :</p>
                <span className="text-xl ">{user.username}</span>
              </div>
              <div className="form-item flex items-center gap-2">
                <p className="text-2xl font-semibold"> E-Mail :</p>
                <label className="text-xl ">{user.email}</label>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Curnte project</h3>
              </div>

              <div className="form-item flex gap-4 font-semibold">
                <a
                  href="https://facebook.com/"
                  className="flex items-center gap-3 text-2xl "
                >
                  <span className="text-blue-800">
                    <FaFacebook />
                  </span>
                  <p>Facebook</p>
                </a>
                <a
                  href="https://twitter.com/"
                  className="flex items-center gap-3  text-2xl "
                >
                  <span className="text-blue-700">
                    <FaLinkedin />
                  </span>
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
