import React from "react";
import HeaderComponent from "./DashBoardComponents/HeaderComponent";

const PartnersPages = () => {
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 grid h-full md:ml-64 ">
        <div>
          <div>
            <h1 className="mx-8 mb-10  text-2xl font-bold text-gray-500">
              Add Partners
            </h1>
          </div>
          <div className="mx-5 my-8 flex h-14 flex-row items-center justify-center gap-2">
            <div>
              <label htmlFor="name" className="text-lx font-serif">
                Image:
              </label>
              <input
                type="file"
                id="name"
                className="text-md ml-2 rounded-md  py-1 px-2 outline-dustLight"
              />
            </div>
            <div className="flex space-x-4 ">
              <div>
                <label htmlFor="title" className="text-lx font-serif">
                  Partner Name :
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  id="title"
                  className="text-md ml-2 rounded-md border-2 py-1 px-2 outline-dustLight"
                />
              </div>
              <div className="">
                <button className="relative h-10 w-20 rounded-md border bg-dustDark px-4 py-2 text-xl text-white">
                  ADD
                </button>
              </div>
            </div>
          </div>
          <div className="mx-8 mb-10">
            <h1 className="text-2xl font-bold text-gray-500">Valuers</h1>
            <div className=" mx-4 flex w-1/2  space-x-6">
              <div>
                <label htmlFor="title" className="text-lx font-serif">
                  Add Title:
                </label>
                <input
                  type="text"
                  placeholder="title"
                  id="title"
                  className="text-md ml-2 grid rounded-md border-2 py-1 px-2 outline-dustLight"
                />
                <label
                  htmlFor="description"
                  className="mb-2 block font-serif text-lg"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  cols="20"
                  rows="5"
                  placeholder="write here.."
                  className="text-md ml-2 grid rounded-md border-2 py-2 px-5 outline-dustLight"
                ></textarea>
              </div>

              <div className=" mx-5 my-8 grid h-14 w-1/2 flex-row items-center justify-center gap-2 space-x-4 space-x-reverse">
                <button className="relative h-10 w-20 rounded-md border bg-dustDark px-4 py-2 text-xl text-white">
                  ADD
                </button>
                <button className="relative h-10 w-20 rounded-md border bg-dustDark px-4 py-2 text-xl text-white">
                  Delete
                </button>
                <button className="relative h-10 w-20 rounded-md border bg-dustDark px-4 py-2 text-xl text-white">
                  Show
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPages;
