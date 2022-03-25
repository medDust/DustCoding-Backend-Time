import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { isEmpty, isEmail, equals } from "validator";
import { ShowErrMsg, ShowSuccess } from "../../../helpers/MessageFunctions";
import { Loading } from "../../../helpers/LodingFunction";
import dust from "../../../assets/images/dust.png";
import contact from "../../../assets/images/contact.png";
import { register } from "../../../api/AuthFunction";

const SignUp = () => {
  const [FormData, setFromData] = useState({
    username: "test",
    email: "testiya5ra@gmail.com",
    password: "123456",
    passwordConfirm: "123456",
    fullName: "testi 5edma",
    Err: false,
    isLoading: false,
    isSuccess: false,
  });
  const navigate = useNavigate();
  const {
    username,
    email,
    password,
    passwordConfirm,
    fullName,
    Err,
    isLoading,
    isSuccess,
  } = FormData;

  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      isSuccess: "",
      Err: "",
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      isEmpty(username) ||
      isEmpty(fullName) ||
      isEmpty(password) ||
      isEmpty(passwordConfirm)
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

      const data = { username, fullName, email, password };

      setFromData({ ...FormData, isLoading: true });
      register(data)
        .then((res) => {
          console.log(res);
          setFromData({
            username: "",
            fullName: "",
            email: "",
            password: "",
            passwordConfirm: "",
            isLoading: false,
            isSuccess: res.data.SuccessMsg,
          });
          navigate("/");
        })
        .catch((err) => {
          console.log("axios have error :", err);
          setFromData({ ...FormData, isLoading: false });
        });
      // setFromData({
      //   ...FormData,
      //   isSuccess: "register success",
      // });
      // Axios.post("/auth/signUp", FormData)
      //   .then((res) => console.log("response is success"))
      //   .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-dustLight to-dustDark">
      <div className="container mx-auto">
        <div className="my-12 flex justify-center px-6 ">
          <div className="flex h-2/3 w-3/4 lg:w-11/12 xl:w-3/4">
            <div className="flex shadow-lg">
              <div className=" rounded-b-2xl rounded-l-2xl rounded-r-none border bg-white  px-20 py-20 text-left ">
                <div className="flex w-80 justify-center ">
                  <img src={dust} alt="fireSpot" />
                </div>
                <h3 className="text-center text-2xl font-bold">
                  Register and join us Now
                </h3>
                <div className="my-2 text-center">
                  {isLoading && Loading()}
                  {Err && ShowErrMsg(Err)}
                  {isSuccess && ShowSuccess(isSuccess)}
                </div>
                <form onSubmit={onSubmit} noValidate>
                  <div className="mt-4">
                    <div className="flex space-x-4">
                      <div>
                        <label className="block">Username</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={username}
                          placeholder="Username"
                          onChange={onChange}
                          required
                          className="mt-2 w-full rounded-md border px-4  py-2 focus:outline-none focus:ring-1 focus:ring-dustM"
                        />
                      </div>

                      <div>
                        <label className="block">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={onChange}
                          placeholder="E-mail"
                          required
                          className="mt-2 w-full rounded-md border px-4  py-2 focus:outline-none focus:ring-1 focus:ring-dustM"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <div className="mt-4">
                        <label className="block">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={onChange}
                          placeholder="Password"
                          required
                          className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-dustM"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="block">Confirm Password</label>
                        <input
                          type="password"
                          name="passwordConfirm"
                          value={passwordConfirm}
                          onChange={onChange}
                          required
                          id="passwordConfirm"
                          placeholder="Confirm Password"
                          className="mt-2 w-full rounded-md border px-4  py-2 focus:outline-none focus:ring-1 focus:ring-dustM"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block">full Name :</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={onChange}
                        placeholder="full Name"
                        className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-dustM"
                      />
                    </div>

                    <div className="m-5 flex items-center justify-center space-x-4">
                      <Link
                        to="/home"
                        className="mt-4 flex h-11 w-28 items-center justify-center space-x-2 rounded-2xl bg-dustDark p-2 text-center   text-white hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark"
                      >
                        <AiOutlineLeft />
                        <p>Return</p>
                      </Link>
                      <button
                        className="mt-4 flex h-11 w-28 items-center justify-center space-x-2 rounded-2xl bg-dustDark p-2 text-center  text-white hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark"
                        onSubmit={onSubmit}
                        type="submit"
                      >
                        <FaCheck />
                        <p>Sign Up</p>
                      </button>
                    </div>
                    <div className="justify-center text-center">
                      <Link
                        to="/LogIn"
                        className="text-dustDark hover:underline"
                      >
                        You already have an account !
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className="px-19 py-19 text-left shadow-lg">
                <img
                  src={contact}
                  alt="fireSpot"
                  className="h-full rounded-b-none rounded-l-none  rounded-r-2xl object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
