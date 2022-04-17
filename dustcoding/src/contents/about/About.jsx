import React from "react";
import logo from "../../assets/images/logowhite.png";
import { FooterComponent, HeaderComponent } from "../index.js";
const About = () => {
  return (
    <>
      <HeaderComponent />
      <div className="grid gap-9 md:w-full ">
        <div className="-top-20 grid h-full w-full bg-blue-image bg-cover bg-center p-9 text-xl text-white ">
          <div className="items-center justify-center md:flex  ">
            <div className="grid items-center p-5 py-10 text-justify text-white md:w-1/2">
              <h5 className=" text-4xl font-extrabold text-white">
                What is DUSTcoding
              </h5>
              <p>
                DUSTcoding is a startup specializing in computer development and
                integration and computer engineering services that specializes
                in state-of-the-art software solutions, design of websites and
                applications, development of information systems, development of
                solutions for the internet of things (IOT) and artificial
                intelligence (AI) big data and administration solutions.
              </p>
            </div>
            <div className="flex h-auto items-center justify-center md:w-1/2 lg:items-center xl:mx-auto xl:flex-col ">
              <img src={logo} className="w-3/5 lg:w-96" alt="logo" />
            </div>
          </div>
          <div className="my-5 flex items-center text-center">
            <h5 className=" mx-auto text-4xl font-extrabold text-white">
              Our Obejctif
            </h5>
          </div>

          <div className=" mx-auto flex grid-cols-3 flex-wrap items-center justify-center gap-3 md:grid-cols-3 md:space-x-2 lg:grid-cols-3">
            <article className=" h-64  w-80 bg-dustM  shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
              <div className=" flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
                <h3 className="text-center">
                  Deliver quality solutions that meet the needs and expectations
                  of our customers to achieve overall customer satisfaction.
                </h3>
              </div>
            </article>
            <article className=" h-64  w-80 rounded-lg bg-dustM shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
              <div className=" flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
                <h3 className="text-center">
                  Improve business performance as a strategic partner..
                </h3>
              </div>
            </article>
            <article className=" h-64  w-80 rounded-lg  bg-dustM shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
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
      </div>
      <FooterComponent />
    </>
  );
};

export default About;
