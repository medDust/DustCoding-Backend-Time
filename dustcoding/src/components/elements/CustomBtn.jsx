import React from "react";

const CustomBtn = ({ children }) => {
  return (
    <button
      type="submit"
      className="mx-auto w-full rounded-lg border-4 border-white py-2 px-3 text-sm font-bold text-white hover:bg-white hover:text-black md:text-xl lg:py-3 lg:px-12"
    >
      {children}
    </button>
  );
};

export default CustomBtn;
