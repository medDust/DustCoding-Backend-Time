import React from "react";
import { useState, useContext, useRef } from "react";
import dust from "../../../assets/images/dust.png";
import contact from "../../../assets/images/contact.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../../Context/AuthProvider.jsx";
const Login = () => {
  const [FormData, setFromData] = useState({
    email: "",
    password: "",
  });
  const { setAuth } = useContext(AuthContext);
  const { email, password } = FormData;
  const navigate = useNavigate();
  const errRef = useRef("");
  const [err, setErr] = useState("");

  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "/api/clients/logIn",
        JSON.stringify({
          email: email,
          password: password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data.accessToken;
        const roles = response?.data?.roles;
        setAuth({ email, password, roles, accessToken });
        navigate("/Client/profile");
      })
      .catch((err) => {
        if (!err?.response) {
          setErr("NO SERVER RESPONSE");
          console.log(err);
          alert(err);
        } else if (err.response?.status === 400) {
          setErr("MISSING E-MAIL OR PASSWORD");
        } else if (err.response?.status === 401) {
          setErr("UNAUTHORIZED");
        } else {
          setErr("LOGIN FAILED");
        }

        errRef.current.focus();
      });
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
                        className="10 1 focus:ring-blue-600 mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                        className="focus:ring-blue-600 mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1"
                      />
                    </div>
                    <div className="m-5 grid items-center justify-center space-y-2 text-center">
                      <button
                        className="mt-4 flex h-11 w-28 items-center justify-center space-x-5 rounded-2xl bg-dustDark p-2 text-center  text-white hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark"
                        onSubmit={onSubmit}
                      >
                        <i className="fa fa-key h-auto text-base"></i>
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
                        <i className="fas fa-angle-left"></i>
                        <p>return</p>
                      </Link>
                      <Link
                        to="/SignUp"
                        className="mt-4 flex h-11 w-28 items-center justify-center space-x-5 rounded-2xl bg-dustDark p-2 text-center  text-white hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark"
                      >
                        <p>Sign Up</p>
                        <i className="fas fa-angle-right"></i>
                      </Link>
                    </div>
                    {console.log(err)}
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
