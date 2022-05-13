import React from "react";
import HeaderComponent from "./DashBoardComponents/HeaderComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createService } from "../../../api/AdminControllerFunction";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);

      createService(data)
        .then((response) => {
          navigate("/Admin/Service/");
          response.send(console.log("success"));
        })
        .catch((err) => {
          console.log("err :", err);
        });
    },
  });
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 h-full md:ml-64">
        <form onSubmit={formik.handleSubmit}>
          <div className="min-h-screen bg-indigo-50 pt-6 md:px-20">
            <div className=" mx-auto max-w-2xl rounded-md bg-white px-6 py-10">
              <h1 className="mb-10 text-center text-2xl font-bold text-gray-500">
                ADD Service
              </h1>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="text-lx font-serif">
                    Title:
                  </label>
                  <input
                    type="text"
                    placeholder="title"
                    id="title"
                    className="text-md ml-2 rounded-md border-2 py-1 px-2 outline-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block font-serif text-xl"
                  >
                    Description:
                  </label>
                  <textarea
                    id="description"
                    cols="30"
                    rows="10"
                    placeholder="whrite here.."
                    className="w-full rounded-md  bg-indigo-50 p-4 font-serif text-gray-600 outline-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  ></textarea>
                </div>

                <button className=" mx-auto block rounded-md bg-indigo-600 px-6 py-2 text-lg font-semibold text-indigo-100  ">
                  ADD Service
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServicePage;
