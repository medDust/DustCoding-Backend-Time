import React from "react";
import FormBox from "../forms/FormBox";

const ContactSection = () => {
  return (
    <div className="w-full  bg-cover bg-center text-white min-h-screen p-8 uppercase">
      <div className="grid md:grid-cols-2 space-x-4 py-14 my-auto">
        <div className="py-14 px-2 space-y-5 my-auto md:text-left text-center">
          <h1 className="font-bold text-4xl mb-10"> Contact Us </h1>
          <h2 className="text-2xl font-bold">LET'S GET IN TOUCH</h2>
          <p className="text-base font-semibold mb-5">
            A Tunisian SSII that creates high quality professional websites
            using the most advanced web solutions with the highest standards.
          </p>
          <ul className="text-base font-semibold ">
            <li>
              <p>phone Number : +216 99 799 990</p>
              <p>E-mail : contact@dustcoding.com</p>
            </li>
          </ul>
        </div>
        <div className="my-auto w-full">
          <FormBox />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
