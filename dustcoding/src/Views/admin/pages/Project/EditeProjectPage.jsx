import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { UpdateProjectbyId } from "../../../../api/ProjectsFunction";
import { GetAllUsers } from "../../../../api/UserFunction";
import { IoMdAddCircleOutline } from "react-icons/io";

const EditeProjectPage = () => {
  const { id } = useParams();
  const [User, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    GetAllUsers()
      .then((response) => {
        const Users = response.data;
        setUser(Users);
      })
      .catch((err) => console.log(err));
  }, []);
  const formik = useFormik({
    initialValues: {
      title: "",
      usersId: "",
      state: "",
    },
    validationSchema: Yup.object({
      title: Yup.string(),
      usersId: Yup.string(""),
      state: Yup.string(""),
    }),

    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      console.log(data);
      UpdateProjectbyId({ projectId: id }, data)
        .then((response) => {
          navigate("/Admin/Projects");
        })
        .catch((err) => {
          console.log("err :", err);
        });
    },
  });

  return (
    <div className="relative top-20 mx-auto flex items-center justify-center break-words rounded bg-gray-50 p-5 shadow-lg ">
      <form
        className="m-5  grid justify-evenly gap-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="group relative z-0 ">
          <input
            type="text"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
            placeholder=" "
          />
          <label
            htmlFor="title"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 "
          >
            Project Name
          </label>
        </div>
        {formik.touched.title && formik.errors.title ? (
          <div className="text-red text-base">{formik.errors.title}</div>
        ) : null}
        <div className="group relative z-0  ">
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            name="userId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          >
            <option>select your CLient</option>
            {User.filter((user) => user.role === 0).map((user) => (
              <option key={user._id} value={user._id}>
                {user.fullName}
              </option>
            ))}
          </select>
        </div>
        <div date-rangepicker="true" className="flex  items-center">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="dateBeguin"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm  "
              placeholder="Select date start"
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="dateEnd"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm "
              placeholder="Select date end"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="mr-4 flex items-center">
            <input
              type="radio"
              value="0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="state"
              // checked={position === 0}
              className="h-4 w-4 border-gray-300 bg-gray-100 text-purple-600 focus:ring-2 focus:ring-purple-500 "
            />
            <label
              htmlFor="purple-radio"
              className="ml-2 text-sm font-medium uppercase text-gray-900 "
            >
              To do
            </label>
          </div>
          <div className="mr-4 flex items-center">
            <input
              type="radio"
              value="1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="state"
              //  checked={position === 1}
              className="h-4 w-4 border-gray-300 bg-gray-100 text-teal-600 focus:ring-2 focus:ring-teal-500 "
            />
            <label
              htmlFor="teal-radio"
              className="ml-2 text-sm font-medium uppercase text-gray-900 "
            >
              In progress
            </label>
          </div>
          <div className="mr-4 flex items-center">
            <input
              type="radio"
              value="2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="state"
              //   checked={position === "2"}
              className="h-4 w-4 border-gray-300 bg-gray-100 text-yellow-400 focus:ring-2 focus:ring-yellow-500"
            />
            <label
              htmlFor="yellow-radio"
              className="ml-2 text-sm font-medium uppercase text-gray-900 "
            >
              Testing
            </label>
          </div>
          <div className="mr-4 flex items-center">
            <input
              type="radio"
              value="3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="state"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-green-600 focus:ring-2 focus:ring-green-500 "
            />
            <label
              htmlFor="green-radio"
              className="ml-2 text-sm font-medium uppercase text-gray-900 "
            >
              Done
            </label>
          </div>
        </div>
        <div className="mx-2 ">
          <button
            type="submit"
            onSubmit={formik.handleSubmit}
            className="rounded-full bg-blue-500 p-2 text-xl text-white shadow-lg hover:bg-blue-900"
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red text-base">{formik.errors.name}</div>
        ) : null}
      </form>
    </div>
  );
};

export default EditeProjectPage;
