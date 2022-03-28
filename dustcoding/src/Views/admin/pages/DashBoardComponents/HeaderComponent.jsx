import React from "react";

const HeaderComponent = () => {
  return (
    <div className="fixed z-10 flex h-14 w-full items-center justify-between text-white">
      <div className="flex h-14 w-14 items-center justify-start border-none bg-blue-800 pl-3 dark:bg-gray-800 md:w-64 md:justify-center">
        <img
          className="mr-2 h-7 w-7 overflow-hidden rounded-md md:h-10 md:w-10"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          alt="logo"
        />
        <span className="hidden md:block">ADMIN</span>
      </div>
      <div className="header-right flex h-14 items-center justify-between bg-blue-800 dark:bg-gray-800">
        <div className="mr-4 flex w-full max-w-xl items-center rounded border border-gray-200 bg-white p-2 shadow-sm">
          <button className="outline-none focus:outline-none">
            <svg
              className="h-5 w-5 cursor-pointer text-gray-600"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="w-full bg-transparent pl-3 text-sm text-black outline-none focus:outline-none"
          />
        </div>
        <ul className="flex items-center">
          <li>
            <button
              aria-hidden="true"
              className="group rounded-full bg-blue-200 p-2 text-gray-900 shadow-md transition-colors duration-200 hover:bg-blue-200 focus:outline-none dark:bg-gray-50 dark:hover:bg-gray-200"
            >
              <svg
                x-show="isDark"
                width="24"
                height="24"
                className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                x-show="!isDark"
                width="24"
                height="24"
                className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          </li>
          <li>
            <div className="mx-3 block h-6 w-px bg-gray-400 dark:bg-gray-700"></div>
          </li>
          <li>
            <a href="#" className="mr-4 flex items-center hover:text-blue-100">
              <span className="mr-1 inline-flex">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </span>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
