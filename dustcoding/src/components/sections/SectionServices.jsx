import React from "react";
import CardsComponent from "../elements/CardsComponent";
import { IoTerminal, IoGlobeSharp, IoSettingsSharp } from "react-icons/io5";
import { AiOutlineCloudServer } from "react-icons/ai";
const services = [
  {
    id: 1,
    url: <IoTerminal />,
    title: "Software Development",
  },

  { id: 2, url: <IoSettingsSharp />, title: "DUST SERVICES" },
  { id: 3, url: <IoGlobeSharp />, title: "IoT service" },
  { id: 4, url: <AiOutlineCloudServer />, title: "Cloud" },
];

const SectionServices = () => {
  return (
    <div className="h-full w-full p-5 text-center">
      <h1 className="text-center text-3xl font-bold text-white">services</h1>
      <div className="mx-auto flex h-full w-3/4 flex-wrap place-items-center items-center justify-center space-y-5 p-5 text-center children:w-7/12 md:grid md:grid-cols-2 md:children:h-4/6">
        {services.map((service) => (
          <div key={service.id}>
            <CardsComponent Icons={service.url} Title={service.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionServices;
