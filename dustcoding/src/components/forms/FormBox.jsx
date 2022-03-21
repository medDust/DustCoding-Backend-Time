import React from "react";
import CustomBtn from "../elements/CustomBtn";
import InputBox from "../elements/InputBox";

const FormBox = () => {
  return (
    <div className="flex items-start py-14">
      <div className="flex flex-col gap-4 px-2 w-full md:w-2/4">
        <InputBox value="FullName" placeValue="Your full name" type="text" />
        <InputBox value="E-mail" placeValue="mail@mail.com" type="mail" />
        <InputBox value="Message" placeValue="message Here !!" type="text" />
        <div>
          <CustomBtn children="send Message" />
        </div>
      </div>
    </div>
  );
};

export default FormBox;
