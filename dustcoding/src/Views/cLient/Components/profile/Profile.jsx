import React from "react";

import { isAuthenticated } from "../../../../helpers/auth";

import ClientProjectProfile from "../Projects/DetailsProject/ClientProjectProfile.jsx";

const Profile = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden rounded shadow-2xl">
      <div className=" relative h-64 w-full overflow-hidden bg-blue-600">
        <img
          src={`${isAuthenticated().data.image}`}
          alt=""
          className=" absolute z-0 h-full w-full object-cover object-center"
        />
        <div className="relative top-10 flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl font-semibold">
            {isAuthenticated().data.username}
          </h1>
        </div>
      </div>
      <div className="flex h-3/4 bg-white">
        <div className="col-span-12 h-full pb-12 md:col-span-10 md:border-l md:border-solid md:border-black md:border-opacity-25">
          <div className="grid px-4 pt-4">
            <form action="#" className="flex flex-col space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">Account Information</h3>
              </div>

              <div className="form-item">
                <label className="text-xl ">Full Name</label>
                <input
                  type="text"
                  value={isAuthenticated().data.fullName}
                  className="focus:shadow-outline text-md mr-2 w-full appearance-none rounded py-2 px-3 text-black shadow focus:border-dustLight focus:outline-none"
                />
              </div>

              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div className="form-item w-full">
                  <label className="text-xl ">Username</label>
                  <input
                    type="text"
                    value={isAuthenticated().data.username}
                    className="focus:shadow-outline s mr-2 w-full appearance-none rounded py-2 px-3 text-black focus:outline-none "
                  />
                </div>

                <div className="form-item w-full">
                  <label className="text-xl ">Email</label>
                  <input
                    type="text"
                    value={isAuthenticated().data.email}
                    className="focus:shadow-outline mr-2 w-full appearance-none rounded py-1 px-2 text-black focus:outline-none "
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className=" px-4 pt-4">
          <h3 className="text-2xl font-semibold">Curnte project</h3>
          <ClientProjectProfile />
        </div>
      </div>
    </div>
  );
};

export default Profile;
