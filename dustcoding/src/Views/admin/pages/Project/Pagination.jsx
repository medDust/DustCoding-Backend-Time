import React from "react";

const Pagination = ({ projectPerPage, totalProjects, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav aria-label="Table navigation">
      <ul className="inline-flex items-center">
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
      </ul>
    </nav>
  );
};

export default Pagination;
