import React from "react";

const PartnersPages = () => {
  return (
    <div>
      <div>
        <h1 className="mx-8 mb-10  text-2xl font-bold text-gray-500">
          Add Partners
        </h1>
      </div>
      <div className="mx-5 my-8 flex h-14 flex-row items-center justify-center gap-2">
        <div>
          <label for="name" className="text-lx font-serif">
            Image:
          </label>
          <input
            type="file"
            id="name"
            className="text-md outline-dustLight ml-2  rounded-md py-1 px-2"
          />
        </div>
        <div className="flex space-x-4 ">
          <div>
            <label for="title" className="text-lx font-serif">
              Partner Name :
            </label>
            <input
              type="text"
              placeholder="Name"
              id="title"
              className="text-md outline-dustLight ml-2 rounded-md border-2 py-1 px-2"
            />
          </div>
          <div className="">
            <button className="bg-dustDark relative h-10 w-20 rounded-md border px-4 py-2 text-xl text-white">
              ADD
            </button>
          </div>
        </div>
      </div>
      <div className="mx-8 mb-10">
        <h1 className="text-2xl font-bold text-gray-500">Valuers</h1>
        <div className=" mx-4 flex w-1/2  space-x-6">
          <div>
            <label for="title" className="text-lx font-serif">
              Add Title:
            </label>
            <input
              type="text"
              placeholder="title"
              id="title"
              className="text-md outline-dustLight ml-2 grid rounded-md border-2 py-1 px-2"
            />
            <label for="description" className="mb-2 block font-serif text-lg">
              Description:
            </label>
            <textarea
              id="description"
              cols="20"
              rows="5"
              placeholder="write here.."
              className="text-md outline-dustLight ml-2 grid rounded-md border-2 py-2 px-5"
            ></textarea>
          </div>

          <div className=" mx-5 my-8 grid h-14 w-1/2 flex-row items-center justify-center gap-2 space-x-4 space-x-reverse">
            <button className="bg-dustDark relative h-10 w-20 rounded-md border px-4 py-2 text-xl text-white">
              ADD
            </button>
            <button className="bg-dustDark relative h-10 w-20 rounded-md border px-4 py-2 text-xl text-white">
              Delete
            </button>
            <button className="bg-dustDark relative h-10 w-20 rounded-md border px-4 py-2 text-xl text-white">
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPages;
