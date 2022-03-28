import React from "react";

const BtnContact = ({ children }) => {
  return (
    <button
      type="submit"
      className="mx-auto w-full rounded-lg border-4 border-dustDark py-2 px-3 text-sm font-bold text-dustDark hover:bg-dustDark hover:text-white md:text-xl lg:py-3 lg:px-12"
    >
      {children}
    </button>
  );
};

export default BtnContact;
