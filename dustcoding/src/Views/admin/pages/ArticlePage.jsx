import React from "react";
import HeaderComponent from "./DashBoardComponents/HeaderComponent";
/*import { AiOutlineFileImage } from "react-icons/ai";*/

const ArticlePage = () => {
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 h-full md:ml-64">
        <form className="w-9/12 ">
          <div className="min-h-screen bg-white pt-6 md:px-20">
            <div className=" mx-auto max-w-2xl rounded-md bg-white px-6 py-10">
              <h1 className="mb-10 text-center text-2xl font-bold text-gray-500">
                ADD NEW ARTICLE
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
                    className="text-md ml-2 rounded-md border-2 py-1 px-2 outline-dustLight"
                  />
                </div>
                <div>
                  <label for="name" className="text-lx font-serif">
                    Image:
                  </label>
                  <input
                    type="file"
                    id="name"
                    className="text-md ml-2 rounded-md  py-1 px-2 outline-dustLight"
                  />
                </div>

                <div>
                  <label
                    for="description"
                    className="mb-2 block font-serif text-lg"
                  >
                    Description:
                  </label>
                  <textarea
                    id="description"
                    cols="10"
                    rows="5"
                    placeholder="whrite here.."
                    className="w-full rounded-md  border-2  p-4 font-serif text-black outline-dustLight"
                  ></textarea>
                </div>

                <button
                  className="
                    w-full
                    rounded-2xl
                    border
                   border-dustLight bg-dustCool p-3 font-bold text-white  shadow-md shadow-dustLight
                    transition hover:bg-dustM
                    hover:bg-opacity-90
                    hover:text-black
                    hover:shadow-dustDark
                    "
                >
                  ADD ARTICLE
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticlePage;
