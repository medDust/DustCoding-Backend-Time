import React from "react";

const CardsServicesComponents = ({ key, Title, Icons, Text, ShowMore }) => {
  return (
    <div className="relative mx-auto grid h-auto cursor-pointer rounded-md bg-white p-4 text-black shadow-lg  backdrop-blur-lg transition-all hover:opacity-80 md:h-[300px]">
      <div
        className={`grid h-1/6 w-full justify-center text-center text-xl md:text-5xl`}
        key={key}
      >
        {Icons}
      </div>
      <div className="mx-auto grid w-full justify-center text-center">
        <div className="block w-full">
          <h1 className="text-sm font-semibold">{Title}</h1>
        </div>
        <div className="block w-full">
          <p className="text-sm">{Text}</p>
        </div>
        <div className="grid w-full justify-center ">
          <span className="block text-black">{ShowMore}</span>
        </div>
      </div>
    </div>
  );
};

export default CardsServicesComponents;
