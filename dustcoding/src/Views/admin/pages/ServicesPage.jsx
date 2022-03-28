import React from "react";

const ServicesPage = () => {
  return (
    <form className="w-9/12 ">
      <div className="min-h-screen bg-white pt-6 md:px-20">
        <div className=" mx-auto max-w-2xl rounded-md bg-white px-6 py-10">
          <h1 className="mb-10 text-center text-2xl font-bold text-gray-500">
            ADD NEW Service
          </h1>
          <div className="space-y-4">
            <div>
              <label for="title" className="text-lx font-serif">
                Title:
              </label>
              <input
                type="text"
                placeholder="title"
                id="title"
                className="text-md outline-dustLight ml-2 rounded-md border-2 py-1 px-2"
              />
            </div>
            <div>
              <label for="name" className="text-lx font-serif">
                Image:
              </label>
              <input
                type="image"
                id="name"
                className="text-md outline-dustLight ml-2  rounded-md py-1 px-2"
                alt=""
              />
            </div>

            <div>
              <label
                for="description"
                className="mb-2 block font-serif text-xl"
              >
                Description:
              </label>
              <textarea
                id="description"
                cols="10"
                rows="5"
                placeholder="whrite here.."
                className="outline-dustLight w-full  rounded-md  border-2 p-4 font-serif text-black"
              ></textarea>
            </div>

            <button
              className="
                    bg-dustCool
                    border-dustLight
                    hover:bg-dustM
                   shadow-dustLight hover:shadow-dustDark w-full rounded-2xl border  p-3 font-bold
                    text-white shadow-md
                    transition
                    hover:bg-opacity-90
                    hover:text-black
                    "
            >
              ADD Service
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ServicesPage;
