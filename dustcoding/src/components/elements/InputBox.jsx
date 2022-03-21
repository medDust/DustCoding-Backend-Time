import React from "react";

const InputBox = ({ type, value, placeValue }) => {
  return (
    <div>
      <label>{value}</label>
      <input
        type={type}
        className="text-white outline-none rounded-md p-4 w-full border-2 bg-transparent"
        placeholder={placeValue}
      />
    </div>
  );
};

export default InputBox;
