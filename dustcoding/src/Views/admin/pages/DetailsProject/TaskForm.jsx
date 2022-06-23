import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoMdAddCircleOutline } from "react-icons/io";

import { CreateTask } from "../../../../api/ProjectsFunction.jsx";
import { GetAllUsers } from "../../../../api/UserFunction.jsx";

const TaskForm = () => {
  const { id } = useParams();
  const [User, setUser] = useState([]);

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
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      usersId: Yup.string(""),
    }),

    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);

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
    <form
      className="col-span-3 m-5 flex justify-evenly gap-2"
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
          required
        />
        <label
          htmlFor="title"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 "
        >
          Task Name
        </label>
      </div>
      {formik.touched.title && formik.errors.title ? (
        <div className="text-red text-base">{formik.errors.title}</div>
      ) : null}
      <div className="group relative z-0 w-2/6 ">
        <select
          id="countries"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          name="usersId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        >
          <option>Choose responsible for a task</option>
          {User.filter((user) => user.role !== 0).map((user) => (
            <option key={user._id} value={user._id}>
              {user.fullName}
            </option>
          ))}
        </select>
      </div>
      {formik.touched.userId && formik.errors.userId ? (
        <div className="text-red text-base">{formik.errors.userId}</div>
      ) : null}

      <div className="mx-2 ">
        <button
          type="submit"
          onSubmit={formik.handleSubmit}
          className="flex rounded-full bg-blue-500 p-2 text-center text-xl text-white shadow-lg hover:bg-blue-900"
        >
          <IoMdAddCircleOutline />
        </button>
      </div>
      {formik.touched.name && formik.errors.name ? (
        <div className="text-red text-base">{formik.errors.name}</div>
      ) : null}
    </form>
  );
};

export default TaskForm;
