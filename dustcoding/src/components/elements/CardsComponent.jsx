import React from "react";

const CardsComponent = ({ key, Title, Icons }) => {
  return (
    <div className="relative mx-auto  h-auto cursor-pointer rounded-md bg-white/20 p-4 text-white shadow-lg  backdrop-blur-lg transition-all hover:opacity-80 md:h-[200px]">
      <div
        className={`grid h-5/6 w-full items-center justify-center text-center text-5xl md:text-8xl`}
        key={key}
      >
        {Icons}
      </div>
      <h1 className="translate absolute left-2/4 w-full -translate-x-1/2 text-xs uppercase text-white md:text-lg">
        {Title}
      </h1>
    </div>
  );
};

export default CardsComponent;
