import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiceById } from "../../../../api/AdminControllerFunction.jsx";
import HeaderComponent from "../DashBoardComponents/HeaderComponent.jsx";

const ServiceDetails = () => {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  useEffect(() => {
    getServiceById(id)
      .then((res) => {
        const Service = res.data;
        console.log(Service);
        setTitle(Service.title);
        setDesc(Service.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased ">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 h-full md:ml-64">
        <div className=" py-16">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="  space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
              <div className="md:7/12 grid lg:w-6/12">
                <h2 className="text-2xl font-bold text-black md:text-4xl">
                  {title}
                </h2>
                <p className="mt-6 text-black">{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
