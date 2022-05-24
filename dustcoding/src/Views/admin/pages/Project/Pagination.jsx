import React, { useState } from "react";

const Pagination = ({ projectPerPage, totalProjects, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav aria-label="Table navigation">
      <ul className="inline-flex items-center">
        <li>
          <button
            className="focus:shadow-outline-purple rounded-md rounded-l-lg px-3 py-1 focus:outline-none"
            aria-label="Previous"
          >
            <svg
              aria-hidden="true"
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {pageNumber.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className="focus:shadow-outline-purple rounded-md px-3 py-1 hover:bg-blue-600 hover:text-white focus:outline-none active:bg-blue-600 active:text-white"
            >
              {number}
            </button>
          </li>
        ))}

        <li>
          <button
            className="focus:shadow-outline-purple rounded-md rounded-r-lg px-3 py-1 focus:outline-none"
            aria-label="Next"
          >
            <svg
              className="fill-current h-4 w-4"
              aria-hidden="true"
              viewBox="0 0 20 20"
            >
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
