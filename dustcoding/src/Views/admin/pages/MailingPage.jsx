import React from "react";
import HeaderComponent from "./DashBoardComponents/HeaderComponent";

const MailingPage = () => {
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 grid h-full md:ml-64 ">
        <div>MailingPage</div>
      </div>
    </div>
  );
};

export default MailingPage;
