import React from "react";
import { GrIntegration } from "react-icons/gr";
import { AiOutlineRightCircle } from "react-icons/ai";
import { FaHandHoldingHeart, FaFileContract, FaCalendar } from "react-icons/fa";
import CardsServicesComponents from "../elements/CardsServicesComponents";
const values = [
  {
    id: 1,
    icon: <FaHandHoldingHeart />,
    title: "SATISFICTION CLIENT",
    value: "Répondre aux attentes de nos clients  Fidélisation  Confiance ",
    next: <AiOutlineRightCircle />,
  },
  {
    id: 2,
    icon: <GrIntegration />,
    title: "INTEGRITE",
    value: "Responsabilité Sérieux Confidentialité",
    next: <AiOutlineRightCircle />,
  },
  {
    id: 3,
    icon: <FaCalendar />,
    title: "ENGAGEMENT DURABLE",
    value:
      "Accompagnement du client dans la durée Préservation des ressources Affirmation de notre politique RSE",
    next: <AiOutlineRightCircle />,
  },
  {
    id: 4,
    icon: <FaFileContract />,
    title: "EXCELLENCE",
    value: "Performance Efficacité Adaptabilité",
    next: <AiOutlineRightCircle />,
  },
];
const ValuesComponent = () => {
  return (
    <div className=" h-full w-full items-center justify-center space-y-2  py-20 text-center text-xl md:grid">
      <div className="m-auto grid  w-full justify-center p-5 text-white md:h-full lg:h-1/2">
        <h1 className="my-4 text-xl font-extrabold md:text-4xl">Our Values</h1>
        <div className="md:children:h-54 mx-auto flex h-full w-full flex-wrap place-items-center items-center justify-center p-5  text-center children:w-9/12 md:grid md:grid-cols-4">
          {values.map((value) => (
            <CardsServicesComponents
              key={value.id}
              Icons={value.icon}
              Title={value.title}
              Text={value.value}
              ShowMore={value.next}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesComponent;
