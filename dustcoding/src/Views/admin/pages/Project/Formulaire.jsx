import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GetAllUsers } from "../../../../api/UserFunction";
import { CreateProject } from "../../../../api/ProjectsFunction";

const Formulaire = (props) => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    GetAllUsers()
      .then((response) => {
        const User = response.data;
        setUsers(User);
      })
      .catch((err) => console.log(err));
  }, []);
  const formik = useFormik({
    initialValues: {
      title: "",
      userId: "",
      dateBeguin: "",
      dateEnd: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      userId: Yup.string(""),
      dateBeguin: Yup.date(),
      dateEnd: Yup.date(),
    }),

    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      CreateProject(data)
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
          Project Name
        </label>
      </div>
      {formik.touched.title && formik.errors.title ? (
        <div className="text-red text-base">{formik.errors.title}</div>
      ) : null}
      <div className="group relative z-0 w-1/6 ">
        <select
          id="countries"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          name="userId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        >
          <option>select your CLient</option>
          {Users.filter((user) => user.role === 0).map((user) => (
            <option key={user._id} value={user._id}>
              {user.fullName}
            </option>
          ))}
        </select>
      </div>

      <div date-rangepicker className="flex  items-center">
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
  );
};

export default Formulaire;
