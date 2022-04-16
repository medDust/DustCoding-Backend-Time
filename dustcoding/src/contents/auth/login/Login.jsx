import React from "react";
import { useState, useEffect } from "react";
import dust from "../../../assets/images/dust.png";
import contact from "../../../assets/images/contact.png";
import { Link, useNavigate } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { isEmpty, isEmail } from "validator";
import { ShowErrMsg } from "../../../helpers/MessageFunctions";
import { LogIn } from "../../../api/AuthFunction";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Loading } from "../../../helpers/LodingFunction";
import { isAuthenticated, setAuthentication } from "../../../helpers/auth";

const Login = () => {
  const [FormData, setFromData] = useState({
    email: "",
    password: "",
    Err: false,
    isLoading: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      if (isAuthenticated().data.role === 2) {
        navigate("/Admin/Dashboard");
      } else if (isAuthenticated().data.role === 1) {
        navigate("/Employer");
      } else if (isAuthenticated().data.role === 0) {
        navigate("/Client");
      }
    } else {
      console.log("auth problem");
    }
  }, [navigate]);

  const { email, password, Err, isLoading } = FormData;

  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      Err: "",
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      setFromData({
        ...FormData,
        Err: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFromData({
        ...FormData,
        Err: "Invalid E-mail",
      });
    } else {
      const { email, password } = FormData;

      const data = { email, password, Err };

      setFromData({ ...FormData, isLoading: true });
      LogIn(data)
        .then((res) => {
          const Token = res.data.token;
          const user = res.data;
          setAuthentication(Token, user);
          if (isAuthenticated()) {
            if (isAuthenticated().data.role === 2) {
              navigate("/Admin");
            } else if (isAuthenticated().data.role === 1) {
              navigate("/Employer");
            } else if (isAuthenticated().data.role === 0) {
              navigate("/Client");
            }
          } else {
            console.log("login problem");
          }
        })
        .catch((err) => {
          console.log("axios have error :", err);
          setFromData({ ...FormData, isLoading: false });
        });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-dustLight to-dustDark">
      <div className="container mx-auto">
        <div className="my-12 flex justify-center  px-6 ">
          <div className="flex w-full lg:w-11/12 xl:w-3/4 ">
            <div className="flex shadow-lg">
              <div className=" rounded-b-2xl rounded-l-2xl rounded-r-none bg-white  px-20 py-20 text-left ">
                <div className="flex w-80 justify-center ">
                  <img src={dust} alt="fireSpot" />
                </div>
                <h3 className="text-center text-2xl font-bold">
                  Login to your account
                </h3>
                <div className="my-2 text-center">
                  {Err && ShowErrMsg(Err)}
                  {isLoading && Loading()}
                </div>
                <form onSubmit={onSubmit} method="POST">
                  <div className="mt-4">
                    <div>
                      <label className="block">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Email"
                        className="10 1 mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block">Password</label>
                      <input
                        className="mt-d2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                      />
                    </div>
                    <div className="m-5 grid items-center justify-center space-y-2 text-center">
                      <button
                        className="mt-4 flex h-11 w-28 items-center justify-center space-x-5 rounded-2xl bg-dustDark p-2 text-center  text-white hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark"
                        onSubmit={onSubmit}
                      >
                        <FaKey />
                        <p>Login</p>
                      </button>
                      <div>
                        <Link
                          to="/register"
                          className="text-dustDark hover:underline"
                        >
                          Forgot password ?
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        to="/home"
                        className="mt-4 flex h-11 w-28 items-center justify-center space-x-5 rounded-2xl bg-dustDark p-2 text-center  text-white hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark"
                      >
                        <AiOutlineLeft />
                        <p>return</p>
                      </Link>
                      <Link
                        to="/SignUp"
                        className="mt-4 flex h-11 w-28 items-center justify-center space-x-5 rounded-2xl bg-dustDark p-2 text-center  text-white hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark"
                      >
                        <p>Sign Up</p>
                        <AiOutlineRight />
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

export default Login;
