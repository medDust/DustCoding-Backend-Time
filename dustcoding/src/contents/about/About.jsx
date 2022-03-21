import React from "react";
import logo from "../../assets/images/logowhite.png";
import { FooterComponent, HeaderComponent } from "../index.js";
const About = () => {
  return (
    <div className="md:w-full gap-9 grid bg-dustDark">
      <HeaderComponent />
      <div className="bg-blue-image bg-cover bg-center w-full h-full p-9 text-xl -top-20 text-white grid ">
        <div className="items-center justify-center md:flex  ">
          <div className="grid items-center py-10 p-5 text-justify md:w-1/2 text-white">
            <h5 className=" text-4xl font-extrabold text-white">
              What is DUSTcoding
            </h5>
            <p>
              DUSTcoding is a startup specializing in computer development and
              integration and computer engineering services that specializes in
              state-of-the-art software solutions, design of websites and
              applications, development of information systems, development of
              solutions for the of things (IOT) and artificial intelligence (AI)
              big data and administration solutions.
            </p>
          </div>
          <div className="flex h-auto md:w-1/2 items-center justify-center lg:items-center xl:mx-auto xl:flex-col ">
            <img src={logo} className="w-3/5 lg:w-96" alt="logo" />
          </div>
        </div>
        <div className="items-center text-center flex my-5">
          <h5 className=" text-4xl font-extrabold text-white mx-auto">
            Our Obejctif
          </h5>
        </div>

        <div className=" flex-wrap grid-cols-3 gap-3 items-center justify-center mx-auto md:space-x-2 flex md:grid-cols-3 lg:grid-cols-3">
          <article className=" bg-dustM  h-64 w-80  shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
            <div className=" flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
              <h3 className="text-center">
                Deliver quality solutions that meet the needs and expectations
                of our customers to achieve overall customer satisfaction.
              </h3>
            </div>
          </article>
          <article className=" bg-dustM  h-64 w-80 rounded-lg shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
            <div className=" flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
              <h3 className="text-center">
                Improve business performance as a strategic partner..
              </h3>
            </div>
          </article>
          <article className=" bg-dustM  h-64 w-80  rounded-lg shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
            <div className=" flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
              <h3 className="text-center">
                The development of innovative, connected and intelligent
                products and solutions, targeting the needs of different
                sectors.
              </h3>
            </div>
          </article>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default About;
