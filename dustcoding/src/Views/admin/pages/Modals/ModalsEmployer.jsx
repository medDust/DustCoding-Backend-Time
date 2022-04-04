import React, { useState } from "react";
import { isEmpty, isEmail, equals } from "validator";
import { registerEmp } from "../../../../api/AuthFunction";
import { setAuthentication } from "../../../../helpers/auth";
import { Loading } from "../../../../helpers/LodingFunction";
import { ShowErrMsg } from "../../../../helpers/MessageFunctions";
const ModalsEmployer = () => {
  const [FormData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    department: "",
    fullName: "",
    Err: false,
    isLoading: false,
  });

  const {
    username,
    email,
    password,
    passwordConfirm,
    fullName,
    department,
    Err,
    isLoading,
  } = FormData;

  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,

      Err: "",
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      isEmpty(username) ||
      //   isEmpty(email) ||
      isEmpty(fullName) ||
      isEmpty(password) ||
      isEmpty(passwordConfirm) ||
      isEmpty(department)
    ) {
      setFromData({
        ...FormData,
        Err: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFromData({
        ...FormData,
        Err: "Invalid E-mail",
      });
    } else if (!equals(password, passwordConfirm)) {
      setFromData({
        ...FormData,
        Err: "Password do not match",
      });
    } else {
      const { username, fullName, email, password } = FormData;

      const data = { username, fullName, email, password, department };
      console.log(data);
      setFromData({ ...FormData, isLoading: true });
      registerEmp(data)
        .then((res) => {
          setFromData({
            username: "",
            fullName: "",
            email: "",
            password: "",
            passwordConfirm: "",
            department: "",
            isLoading: false,
          });
   
     
        })
        .catch((err) => {
          console.log("axios have error :", err);
          setFromData({ ...FormData, isLoading: false });
        });
    }
  };
  return (
    <>
      <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4">
        <button
          className="block w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:w-auto"
          type="button"
          data-modal-toggle="extralarge-modal"
        >
          Create New Employer
        </button>
      </div>
      <div
        id="extralarge-modal"
        tabindex="-1"
        className="fixed top-0 right-0 left-0 z-50 hidden h-modal w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-7xl p-4 md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between rounded-t border-b p-5 ">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Extra Large modal
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="extralarge-modal"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <!-- Modal body --> */}

            <form onSubmit={onSubmit} noValidate>
              <div className="my-2 text-center">
                {isLoading && Loading()}
                {Err && ShowErrMsg(Err)}
              </div>
              <div className="space-y-6 p-6">
                <div className="grid xl:grid-cols-2 xl:gap-6">
                  <div className="group relative z-0 mb-6 w-full">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                      placeholder=" "
                      value={username}
                      onChange={onChange}
                      required
                    />
                    <label
                      for="username"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      username:
                    </label>
                  </div>
                  <div className="group relative z-0 mb-6 w-full">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="E-mail"
                      required
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    />
                    <label
                      HTMLfor="email"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      E-mail
                    </label>
                  </div>
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
                    placeholder=" "
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <label
                    for="password"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 "
                  >
                    Password
                  </label>
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0  "
                    placeholder=" "
                    value={passwordConfirm}
                    onChange={onChange}
                    required
                  />
                  <label
                    for="password"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    Confirm password
                  </label>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                  <div className="group relative z-0 mb-6 w-full">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                      placeholder=" "
                      value={fullName}
                      onChange={onChange}
                      required
                    />
                    <label
                      for="fullName"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      fullName
                    </label>
                  </div>
                  <div className="group relative z-0 mb-6 w-full">
                    <input
                      type="text"
                      name="department"
                      id="department"
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
                      placeholder=" "
                      value={department}
                      onChange={onChange}
                      required
                    />
                    <label
                      for="department"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      department
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
                <button
                  onSubmit={onSubmit}
                  className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create Employer
                </button>

                <button
                  data-modal-toggle="extralarge-modal"
                  type="button"
                  className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalsEmployer;
