import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUser } from "../../../../api/UserFunction";

import HeaderComponent from "../DashBoardComponents/HeaderComponent";

const UserForms = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
      ConfirmPassword: "",
      image: "",
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      fullname: Yup.string(),
      email: Yup.string(),
      password: Yup.string(),
      image: Yup.string(),
    }),

    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      console.log(data);
      UpdateUser(id, data)
        .then((response) => {
          console.log(data);
          navigate("/Admin/Employers/");
          response.send(console.log("success"));
        })
        .catch((err) => {
          console.log("err :", err);
        });
    },
  });

  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <HeaderComponent />
      <div className="mx-auto max-w-2xl bg-white p-16">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-6 grid gap-6 lg:grid-cols-2">
            <div>
              <label
                htmlFor="user_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                username
              </label>
              <input
                type="text"
                id="user_name"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="Full_Name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                FullName
              </label>
              <input
                type="text"
                id="full_name"
                name="fullname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder=""
              />
            </div>

            <div className="group relative z-0 mb-6 w-full">
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="image"
              >
                Upload file
              </label>
              <input
                className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-transparent focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                name="image"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type="file"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="passwordConfirm"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=" "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="ConfirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="•••••••••"
            />
          </div>

          <button
            type="submit"
            onSubmit={formik.handleSubmit}
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForms;
