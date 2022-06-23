import React, { useState } from "react";

const ClientRequestsPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description };
    console.log(data);
  };
  return (
    <div className="top-16 mx-auto flex h-screen w-full flex-col items-center justify-center space-y-4">
      <form
        onSubmit={onSubmit}
        id="form-data"
        className="flex w-full  justify-center"
      >
        <div className="min-h-screen bg-indigo-50 pt-6 md:px-20">
          <div className=" top-13 mx-auto max-w-2xl rounded-md bg-white px-6 py-10">
            <h1 className="mb-8 text-center text-2xl font-bold text-gray-500">
              Send Request project
            </h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-lx font-serif">
                  Title :
                </label>
                <input
                  type="text"
                  className="text-md ml-2 rounded-md border-2 py-1 px-2 outline-none"
                  name="Title"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block font-serif text-lg"
                >
                  Description:
                </label>
                <textarea
                  type="text"
                  name="description"
                  cols="30"
                  rows="10"
                  placeholder="whrite here.."
                  className="w-full rounded-md  bg-indigo-50 p-4 font-serif text-gray-600 outline-none"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                ></textarea>
              </div>

              <button
                className=" mx-auto block rounded-md bg-indigo-600 px-6 py-2 text-lg font-semibold text-indigo-100  "
                type="submit"
              >
                Request projects
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClientRequestsPage;
