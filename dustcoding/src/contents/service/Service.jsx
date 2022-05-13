import React, { useEffect, useState } from "react";
import { getService } from "../../api/AdminControllerFunction";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getService()
      .then((res) => {
        const service = res.data;
        setServices(service);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="-top-20 h-1/2 space-y-8 bg-dustDark p-9 pt-32">
      <div className="items-center text-center ">
        <h5 className=" text-4xl font-extrabold text-white">Our Services</h5>
      </div>
      <div className="mx-auto flex grid-cols-9 flex-col justify-center p-2 text-black md:grid">
        {/* left */}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 my-4 ml-auto rounded-xl bg-white p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">Client</h3>
            <p className="text-justify leading-tight">What is Dustcoding ?</p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-dustLight"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-dustLight shadow"></div>
          </div>
        </div>
        {/* right */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-dustLight"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-dustLight shadow"></div>
          </div>
          <div className="col-start-6 col-end-10 my-4 mr-auto rounded-xl bg-dustLight p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">DUSTcoding</h3>
            <p className="text-justify leading-tight">
              A Tunisian SSII that creates high quality professional websites
              using the most advanced web solutions with the highest standards .
            </p>
          </div>
        </div>
        {/* left */}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 my-4 ml-auto rounded-xl bg-white p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">Client</h3>
            <p className="text-justify leading-tight">
              And what type of services and solutions are you offering ?
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-dustLight"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-dustLight shadow"></div>
          </div>
        </div>
        {/* right */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-dustLight"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-dustLight shadow"></div>
          </div>
          <div className="col-start-6 col-end-10 my-4 mr-auto rounded-xl bg-dustLight p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">DUSTcoding</h3>
            <p className="text-justify leading-tight">
              DUSTcoding is a startup specializing in computer development and
              integration and computer engineering services that specializes in
              state-of-the-art software solutions, design of websites and
              applications, development of information systems, development of
              solutions for the of things (IOT) and artificial intelligence (AI)
              big data and administration solutions..
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-dustLight"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-dustLight shadow"></div>
          </div>
          <div className="col-start-6 col-end-10 my-4 mr-auto rounded-xl bg-dustLight p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">DUSTcoding </h3>
            <p className="text-justify leading-tight">
              For more information about our services check above.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap ">
          {services.map((service, index) => (
            <div className=" w-full px-4 md:w-1/2 lg:w-1/3" key={index}>
              <div className=" start mb-8  rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 ">
                {/* logo */}
                <h4 className="mb-3 text-xl font-semibold text-dustDark">
                  {service.title}
                </h4>
                <p className="text-dustDark">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
