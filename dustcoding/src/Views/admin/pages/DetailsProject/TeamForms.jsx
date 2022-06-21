import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

import { GetAllUsers } from "../../../../api/UserFunction.jsx";
import { CreateTeam } from "../../../../api/TeamFunctions.jsx";

import { IoMdAddCircleOutline } from "react-icons/io";
const TeamForms = () => {
  const { id } = useParams();
  const [User, setUser] = useState([]);

  useEffect(() => {
    GetAllUsers()
      .then((response) => {
        const User = response.data;
        setUser(User);
      })
      .catch((err) => console.log(err));
  }, []);
  const formik = useFormik({
    initialValues: {
      userId: "",
    },
    validationSchema: Yup.object({
      userId: Yup.string(""),
    }),

    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      console.log(data);
      CreateTeam(id, data)
        .then((res) => {
          window.location.reload(false);
        })
        .catch((err) => console.log(err.message));
    },
  });
  return (
    <div className="m-5 flex w-full">
      <div className="m-2 w-full">
        <form
          className="flex w-full flex-1 space-x-3"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label
              htmlFor="userId"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Select the team work
            </label>
          </div>
          <div>
            <select
              name="userId"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            >
              <option>select member team</option>
              {User.filter((user) => user.role !== 0).map((user) => (
                <option key={user._id} value={user._id}>
                  {user.fullName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              type="submit"
              // onSubmit={handleSubmit}
              className="rounded-full bg-blue-500 p-2 text-xl text-white shadow-lg hover:bg-blue-900"
            >
              <IoMdAddCircleOutline />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamForms;
