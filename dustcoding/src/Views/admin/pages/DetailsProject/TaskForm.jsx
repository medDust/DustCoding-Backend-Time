import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoMdAddCircleOutline } from "react-icons/io";

import { useParams } from "react-router-dom";
import { CreateTask } from "../../../../api/ProjectsFunction.jsx";

const TaskForm = () => {
  const { id } = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      console.log(data);
      CreateTask(id, data)
        .then((response) => {
          window.location.reload(false);
          response.send(console.log("success"));
        })
        .catch((err) => {
          console.log("err :", err);
        });
    },
  });
  return (
    <form className=" m-5 flex w-full space-x-2" onSubmit={formik.handleSubmit}>
      <div className="group relative z-0 w-4/6">
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
          placeholder=" "
          required
        />
        <label
          htmlFor="name"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 "
        >
          Task Name
        </label>
      </div>
      {formik.touched.name && formik.errors.name ? (
        <div className="text-red text-base">{formik.errors.name}</div>
      ) : null}

      <div className="mx-2 ">
        <button
          type="submit"
          onSubmit={formik.handleSubmit}
          className="rounded-full bg-blue-500 p-2 text-xl text-white shadow-lg hover:bg-blue-900"
        >
          <IoMdAddCircleOutline />
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
