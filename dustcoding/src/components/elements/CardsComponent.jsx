import React from "react";

const CardsComponent = ({ key, Title, Icons }) => {
  return (
    <div className="relative mx-auto h-auto md:h-[200px] hover:opacity-80 shadow-lg rounded-md text-white transition-all  bg-white/20 cursor-pointer p-4 backdrop-blur-lg">
      <div
        className={`grid w-full h-5/6 md:text-8xl items-center justify-center text-5xl`}
        key={key}
      >
        {Icons}
      </div>
      <h1 className="absolute w-full left-2/4 translate uppercase -translate-x-1/2 text-white md:text-xl text-xs">
        {Title}
      </h1>
    </div>
  );
};

export default CardsComponent;
