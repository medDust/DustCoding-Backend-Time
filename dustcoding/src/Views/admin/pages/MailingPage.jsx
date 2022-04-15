import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GetMails } from "../../../api/ContentsFunctions";
import HeaderComponent from "./DashBoardComponents/HeaderComponent";

const MailingPage = () => {
  const [Mails, setMails] = useState([]);

  useEffect(() => {
    GetMails()
      .then((response) => {
        const mails = response.data;
        setMails(mails);
      })
      .catch((err) => console.log(err));
  }, []);
  const MailsList = Mails.map((mail) => (
    <tr className="text-gray-700 " key={mail.id}>
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          {/* <!-- Avatar with inset shadow --> */}

          <div>
            <p className="font-semibold">{mail.name}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm">
        <p className="text-xs text-gray-600 ">{mail.email}</p>
      </td>
      <td className="px-4 py-3 text-xs">{mail.phone}</td>
      <td className="px-4 py-3 text-sm">
        {/* { <ShowMailModal />} */}
        {mail.description}
      </td>
    </tr>
  ));
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 grid h-full md:ml-64 ">
        <div className="my-5 flex items-center justify-end p-2 ">
          <span className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            List Mailing
          </span>
        </div>

        <div className="shadow-xs w-full overflow-hidden rounded-lg px-5">
          <div className="w-full overflow-x-auto">
            <table className="whitespace-no-wrap w-full">
              <thead>
                {/* <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 ">
                  <th className="px-4 py-3">name</th>
                  <th className="px-4 py-3">E-mail</th>
                </tr> */}
                <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  <th className="px-4 py-3">Client</th>

                  <th className="px-4 py-3">E-Mail</th>

                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y bg-white ">{MailsList}</tbody>
            </table>
          </div>
          <div className="mx-auto grid place-content-center justify-center border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:grid-cols-9">
            {/* <!-- Pagination --> */}
            <span className="col-span-4 mx-auto mt-2 flex items-center justify-center">
              <nav aria-label="Table navigation ">
                <ul className="inline-flex items-center text-sm">
                  <li>
                    <button
                      className="focus:shadow-outline-purple rounded-md  rounded-l-lg px-3 py-1 transition-colors duration-150  hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none"
                      aria-label="Previous"
                    >
                      <FiChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline-purple  rounded-md px-3 py-1 transition-colors duration-150  hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline-purple rounded-md px-3 py-1  transition-colors duration-150 hover:border-purple-600 hover:bg-purple-600 hover:text-white  focus:outline-none">
                      2
                    </button>
                  </li>

                  <li>
                    <button
                      className="focus:shadow-outline-purple  rounded-md rounded-r-lg px-3 py-1 transition-colors  duration-150 hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none"
                      aria-label="Next"
                    >
                      <FiChevronRight />
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailingPage;
