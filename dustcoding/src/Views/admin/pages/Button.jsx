import axios from "axios";
import React from "react";

const Button = () => {
    const UpdateEmp = () =>{
     axios.put("http://localhost:5000/Admin/Employers/update", {
       username: "user",
       email: "email",
       password: "password",
       passwordConfirm: "passwordConfirm",
       department: "department",
       fullName: "fullName",
     });
    }

  return (
    <div className="flex space-x-3">
      <div className="flex space-y-4 md:flex md:space-y-0 md:space-x-4 ">
        <button onClick={UpdateEmp}
          className="flex w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800   md:w-auto"
          type="button"
          data-modal-toggle="extralarge-modal"
        >
          Update Employer
        </button>
      </div>

      <div className="flex space-y-4 md:flex md:space-y-0 md:space-x-4">
        <button
          className="flex w-full rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 md:w-auto"
          type="button"
          data-modal-toggle="extralarge-modal"
        >
          Delete Employer
        </button>
      </div>
    </div>
  );
};

export default Button;
